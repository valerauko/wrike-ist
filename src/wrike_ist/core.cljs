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
    (some->> (.-context github)
             (.-payload)
             (.-pull_request)
             (extract-details)
             (js/console.log))
    (catch js/Error ex
      (core/setFailed (.-message ex)))))

(main)
