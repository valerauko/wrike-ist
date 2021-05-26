(ns wrike-ist.wrike
  (:require [httpurr.client.node :as http]))

(defn- wrike-token
  []
  (some-> js/process .-env .-WRIKE_TOKEN .trim))

(def link-badge
  (str "<span class=\"layout_badgeNode\" "
       "style=\"background-color: rgb(255,204,128); color: rgb(25,25,25);\" "
       "contenteditable=\"false\">"
       "Pull request:"
       "</span> "))

(defn- headers
  []
  {:Authorization (str "bearer " (wrike-token))
   :Content-Type "application/json"})

(defn task-id
  [permalink]
  (let [uri (str "https://www.wrike.com/api/v4/tasks?permalink="
                 (js/encodeURIComponent permalink))
        prom (http/get uri {:headers (headers)})]
    (.then prom (fn [response]
                  (let [body (js->clj (js/JSON.parse (:body response)))]
                    (if-let [id (get-in body ["data" 0 "id"])]
                      (js/Promise.resolve id)
                      (js/Promise.reject (js/Error. "Task not found"))))))))

(defn link-pr
  [{:keys [pr-url permalink]}]
  (.then
   (task-id permalink)
   (fn [id]
     (let [uri (str "https://www.wrike.com/api/v4/tasks/" id "/comments")
           params (clj->js {:text (str link-badge pr-url)})]
       (http/post uri {:headers (headers)
                       :body (js/JSON.stringify params)})))))
