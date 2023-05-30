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
  [{:keys [pr-url permalink]}]
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
                    (let [params (clj->js {:text (str link-badge pr-url)
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

(defn next-status
  [folder-id {:keys [wanted-status wanted-group]}]
  (.then
   (folder-statuses folder-id)
   (fn [statuses]
     (reduce
      (fn [candidate {:strs [name] :as status}]
        ;; use the status with the desired name
        ;; or if not found use the first status in the desired group
        ;; or if not found use the last status found
        (if (= name wanted-status)
          (reduced status)
          (if (= (get candidate "group") wanted-group)
            candidate
            status)))
      ;; start with empty so that the very first status can be candidate too
      {}
      statuses))))

(defn update-task-status
  [{task-id "id" [folder-id] "parentIds"} wanted]
  (.then
   (next-status folder-id wanted)
   (fn [{:strs [id]}]
     (let [uri (str "https://www.wrike.com/api/v4/tasks/" task-id)
           params (clj->js {:customStatus id})]
       (http/put uri {:headers (headers)
                      :body (js/JSON.stringify params)})))))

(defn complete-task
  [{:keys [permalink]} wanted-status]
  (.then
   (find-task permalink)
   #(update-task-status % {:wanted-status wanted-status
                           :wanted-group "Completed"})))

(defn cancel-task
  [{:keys [permalink]} wanted-status]
  (.then
   (find-task permalink)
   #(update-task-status % {:wanted-status wanted-status
                           :wanted-group "Cancelled"})))
