(ns wrike-ist.wrike
  (:require [httpurr.client.node :as http]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defn- wrike-token
  []
  (.-WRIKE_TOKEN (.-env js/process)))

(def link-badge
  "<span style=\"background-color: #966AF0\">Pull request:</span> ")

(defn link-pr
  [{:keys [task-id pr-url permalink]}]
  (go
   (try
     (let [headers {:Authorization (str "bearer " (wrike-token))}
           uri (str "https://wrike.com/api/v4/tasks?permalink="
                    (js/encodeURIComponent permalink))
           response (<p! (http/get uri {:headers headers}))]
       (js/console.log (:body response)))
     (catch js/Error err
       (js/console.error err)))))
   ; (str "tasks/" task-id "/comments")))
   ; {:params {:text (str link-badge pr-url)}}))
