(ns wrike-ist.wrike
  (:require [httpurr.client.node :as http]))

(defn- wrike-token
  []
  (some-> js/process .-env .-WRIKE_TOKEN .trim))

(defn- headers
  []
  {:Authorization (str "bearer " (wrike-token))
   :Content-Type "application/json"})

(defn find-task
  [permalink]
  (let [uri (str "https://www.wrike.com/api/v4/tasks?permalink="
                 (js/encodeURIComponent permalink))]
    (.then
     (http/get uri {:headers (headers)})
     (fn [response]
       (js/console.log "find-task")
       (let [body (js->clj (js/JSON.parse (:body response)))]
         (if-let [task (get-in body ["data" 0])]
           (js/Promise.resolve task)
           (js/Promise.reject (js/Error. "Task not found"))))))))

(defn link-pr
  [{:keys [pr-url permalink]}]
  (.then
   (find-task permalink)
   (fn [{:strs [id]}]
     (js/console.log "link-pr")
     (let [uri (str "https://www.wrike.com/api/v4/tasks/" id "/comments")]
       ;     params (clj->js {:text (str "[Pull request]: " pr-url)})]
       ; (http/post uri {:headers (headers)
       ;                 :body (js/JSON.stringify params)})))))
       (.then
        (http/get uri {:headers (headers)})
        (fn [response]
          (doseq [comment (get (js->clj (js/JSON.parse (:body response))) "data")]
            (js/console.log comment))))))))
