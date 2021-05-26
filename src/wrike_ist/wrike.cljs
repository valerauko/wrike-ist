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

(defn find-task
  [permalink]
  (let [uri (str "https://www.wrike.com/api/v4/tasks?permalink="
                 (js/encodeURIComponent permalink))]
    (.then
     (http/get uri {:headers (headers)})
     (fn [response]
       (let [body (js->clj (js/JSON.parse (:body response)))]
         (if-let [task (get-in body ["data" 0])]
           (js/Promise.resolve task)
           (js/Promise.reject (js/Error. "Task not found"))))))))

(defn link-pr
  [{:keys [pr-url permalink]}]
  (.then
   (find-task permalink)
   (fn [{:strs [id]}]
     (let [uri (str "https://www.wrike.com/api/v4/tasks/" id "/comments")]
       (-> (http/get uri {:headers (headers)})
           (.then (fn [response]
                    (let [body (js->clj (js/JSON.parse (:body response)))]
                      (reduce
                       (fn [ok comment]
                         (if (.includes (get comment "text") pr-url)
                           (reduced (js/Promise.reject ::already-present))
                           ok))
                       (js/Promise.resolve)
                       (get body "data")))))
           (.then (fn [& _]
                    (let [params (clj->js {:text (str link-badge pr-url)
                                           :plainText false})]
                      (http/post uri {:headers (headers)
                                      :body (js/JSON.stringify params)})))))))))
