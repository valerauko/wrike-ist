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
           (.then (fn [response]
                    (reduce
                     (fn [ok comment]
                       (if (.includes (get comment "text") pr-url)
                         (reduced (js/Promise.reject :present))
                         ok))
                     (js/Promise.resolve)
                     (get (parse-body response) "data"))))
           (.then (fn [& _]
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
                 (js/console.log (clj->js statuses))
                 (filter #(= (get % "hidden") false) statuses))))))

(defn next-status
  [folder-id]
  (.then
   (folder-statuses folder-id)
   (fn [statuses]
     (reduce
      (fn [_candidate {:strs [group] :as status}]
        ;; use the first Completed status, or the last one
        (if (= group "Completed")
          (reduced status)
          status))
      statuses))))

(defn close-task
  [{:keys [permalink]}]
  (.then
   (find-task permalink)
   (fn [{:strs [id] [folder-id] "parentIds"}]
     (let [uri (str "https://www.wrike.com/api/v4/tasks/" id)
           params (clj->js {:status :completed})]
       (http/put uri {:headers (headers)
                      :body (js/JSON.stringify params)})))))
