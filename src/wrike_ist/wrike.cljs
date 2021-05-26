(ns wrike-ist.wrike
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defn- wrike-token
  []
  (.-WRIKE_TOKEN (.-env js/process)))

(def link-badge
  "<span style=\"background-color: #966AF0\">Pull request:</span> ")

(defn link-pr
  [{:keys [task-id pr-url permalink]}]
  (go
   (let [response (<! (http/get "https://wrike.com/api/v4/tasks"
                                {:query-params {:permalink permalink}
                                 :headers {:Authorization
                                           (str "bearer " (wrike-token))}}))]
     (js/console.log (:body response)))))
   ; (str "tasks/" task-id "/comments")))
   ; {:params {:text (str link-badge pr-url)}}))
