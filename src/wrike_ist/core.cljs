(ns wrike-ist.core
  (:require ["@actions/core" :as core]
            ["@actions/github" :as github]
            [wrike-ist.wrike :as wrike]))

(defn extract-details
  [pr-obj]
  (let [body (.-body pr-obj)]
    (when-let [[perm id] (re-find #"https://www.wrike.com/open\.htm\?id=(\d+)" body)]
      {:merged? (.-merged pr-obj)
       :permalink perm
       :pr-url (.-html_url pr-obj)})))

(defn main
  []
  (let [payload (.-payload (.-context github))]
    (js/console.log payload)
    (if-let [pr (.-pull_request payload)]
      (if-let [{:keys [merged?] :as details} (extract-details pr)]
        (-> (wrike/link-pr details)
            (.catch #(core/setFailed (.-message %))))
        (js/console.log "Not task link in PR text"))
      (js/console.log "No pull_request in payload"))))
