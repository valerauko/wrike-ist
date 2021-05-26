(ns wrike-ist.core
  (:require ["@actions/core" :as core]
            ["@actions/github" :as github]))

(defn extract-details
  [pr-obj]
  (let [body (.-body pr-obj)
        url (.-html_url pr-obj)]
    (when-let [[_ id] (re-find #"open\.htm\?id=(\d+)" body)]
      {:task-id id
       :pr-url url})))

(defn main
  []
  (try
    (let [payload (.-payload (.-context github))]
      (if-let [pr (.-pull_request payload)]
        (if-let [{:keys [task-id pr-url]} (extract-details pr)]
          (js/console.log (str "Wrike Task to touch: " task-id))
          (js/console.log "Not task link in PR text"))
        (js/console.log "No pull_request in payload")))
    (catch js/Error ex
      (core/setFailed (.-message ex)))))

(main)
