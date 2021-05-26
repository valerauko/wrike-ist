(ns wrike-ist.wrike
  (:require [ajax.core :as http]))

(defn- wrike-token
  []
  (.-WRIKE_TOKEN (.-env (js/process))))

(def link-badge
  "<span style=\"background-color: #966AF0\">Pull request:</span> ")

(defn link-pr
  [task-id pr-url]
  (http/POST
   (str "https://www.wrike.com/api/v4/tasks/" task-id "/comments")
   {:params {:text (str link-badge pr-url)}}))
