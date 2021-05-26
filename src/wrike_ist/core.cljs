(ns wrike-ist.core
  (:require ["@actions/core" :as core]
            ["@actions/github" :as github]
            [wrike-ist.wrike :as wrike]))

(defn extract-details
  [pr-obj]
  (let [body (.-body pr-obj)
        url (.-html_url pr-obj)]
    (when-let [[perm id] (re-find #"https://www.wrike.com/open\.htm\?id=(\d+)" body)]
      {:task-id id
       :permalink perm
       :pr-url url})))

(defn main
  []
  (try
    (let [payload (.-payload (.-context github))]
      (if-let [pr (.-pull_request payload)]
        (if-let [details (extract-details pr)]
          (-> (wrike/link-pr details)
              (.then #(js/console.log "Successfully linked PR"))
              (.catch #(core/setFailed (.-message %))))
          (js/console.log "Not task link in PR text"))
        (js/console.log "No pull_request in payload")))
    (catch js/Error ex
      (core/setFailed (.-message ex)))))

(main)
