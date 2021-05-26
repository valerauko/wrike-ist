(ns wrike-ist.wrike
  (:require [wrike-ist.http :as http]))

(def link-badge
  "<span style=\"background-color: #966AF0\">Pull request:</span> ")

(defn link-pr
  [task-id pr-url]
  (http/post
   (str "https://www.wrike.com/api/v4/tasks/" task-id "/comments")
   {:params {:text (str link-badge pr-url)}}))
