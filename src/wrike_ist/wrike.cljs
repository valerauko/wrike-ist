(ns wrike-ist.wrike
  (:require [httpurr.client.node :as http]))

(defn- wrike-token
  []
  (some-> js/process .-env .-WRIKE_TOKEN .trim))

(defn- headers
  []
  {:Authorization (str "bearer " (wrike-token))
   :Content-Type "application/json"})

(def link-badge
  (str "<span "
       "style=\"background-color: rgb(255,204,128); color: rgb(25,25,25);\" "
       "contenteditable=\"false\">"
       "Pull request:"
       "</span> "))

(defn link-html
  [{:keys [id pr-url title]}]
  (if (empty? title)
    (str link-badge pr-url)
    (str link-badge "<a href=\"" pr-url "\">" title "(#" id ")""</a>")))

(defn parse-body
  [response]
  (js->clj (js/JSON.parse (:body response))))

(defn find-task
  [permalink]
  (let [uri (str "https://www.wrike.com/api/v4/tasks?fields=[parentIds]"
                 "&permalink=" (js/encodeURIComponent permalink))]
    (.then
     (http/get uri {:headers (headers)})
     (fn [response]
       (if-let [task (get-in (parse-body response) ["data" 0])]
         (js/Promise.resolve task)
         (js/Promise.reject (js/Error. "Task not found")))))))

(defn link-pr
  [{:keys [pr-url permalink] :as details}]
  (.then
   (find-task permalink)
   (fn [{:strs [id]}]
     (let [uri (str "https://www.wrike.com/api/v4/tasks/" id "/comments")]
       (-> (http/get uri {:headers (headers)})
           (.then (fn find-existing-link [response]
                    (reduce
                     (fn [ok comment]
                       (if (.includes (get comment "text") pr-url)
                         (reduced (js/Promise.reject :present))
                         ok))
                     (js/Promise.resolve)
                     (get (parse-body response) "data"))))
           (.then (fn add-link-comment [& _]
                    (let [comment-text (link-html details)
                          params (clj->js {:text comment-text
                                           :plainText false})]
                      (http/post uri {:headers (headers)
                                      :body (js/JSON.stringify params)}))))
           (.then #(js/console.log "PR link sent to task"))
           (.catch #(if (= % :present)
                      (js/console.log "PR link already in comments")
                      (js/Promise.reject %))))))))

(defn folder-statuses
  [folder-id]
  (let [uri (str "https://www.wrike.com/api/v4/folders/" folder-id)]
    (-> (http/get uri {:headers (headers)})
        (.then parse-body)
        (.then (fn find-workflow
                 [{[{id "workflowId"}] "data"}]
                 (let [uri "https://www.wrike.com/api/v4/workflows"]
                   (-> (http/get uri {:headers (headers)})
                       (.then parse-body)
                       (.then (fn [{workflows "data"}]
                                (->> workflows
                                     (filter #(= (get % "id") id))
                                     first)))))))
        (.then (fn [{statuses "customStatuses"}]
                 (filter #(= (get % "hidden") false) statuses))))))

(defn find-status
  [statuses {:keys [wanted-status wanted-group]}]
  (reduce
   (fn [{current-group "group" :as candidate} {:strs [name group] :as status}]
     (if (= name wanted-status)
       ;; if an exact name match is found, that's it
       (reduced status)
       ;; if wanted-group isn't set then only exact name matches are acceptable
       (when wanted-group
         (cond
           ;; if the current candidate is already in the right group use it
           (= current-group wanted-group)
           candidate

           ;; else if the new status is in the right group use that
           (= group wanted-group)
           status))))
   nil
   statuses))

(defn next-status
  ;; {:keys [wanted-status wanted-group] :as opts}
  [folder-id opts]
  (.then
   (folder-statuses folder-id)
   (fn [statuses]
     (if-let [match (find-status statuses opts)]
       match
       (js/Promise.reject (str "No appropriate status found" opts))))))

(defn update-task-status
  [{task-id "id" [folder-id] "parentIds"} wanted]
  (.then
   (next-status folder-id wanted)
   (fn [{:strs [id]}]
     (let [uri (str "https://www.wrike.com/api/v4/tasks/" task-id)
           params (clj->js {:customStatus id})]
       (http/put uri {:headers (headers)
                      :body (js/JSON.stringify params)})))))

(defn progress-task
  [{:keys [permalink]} wanted-status]
  (when (not-empty wanted-status)
    (.then
     (find-task permalink)
     #(update-task-status % {:wanted-status wanted-status}))))

(defn complete-task
  [{:keys [permalink]} wanted-status]
  (if-not (= "-" wanted-status)
    (.then
     (find-task permalink)
     #(update-task-status % {:wanted-status wanted-status
                             :wanted-group "Completed"}))
    (js/console.log "Skipping `merged` transition because it's set to \"-\"")))

(defn cancel-task
  [{:keys [permalink]} wanted-status]
  (if-not (= "-" wanted-status)
    (.then
     (find-task permalink)
     #(update-task-status % {:wanted-status wanted-status
                             :wanted-group "Cancelled"}))
    (js/console.log "Skipping `closed` transition because it's set to \"-\"")))
