(ns wrike-ist.core
  (:require ["@actions/core" :as core]
            ["@actions/github" :as github]
            [wrike-ist.wrike :as wrike]))

(defn extract-details
  [pr-obj]
  (let [body (.-body pr-obj)]
    (when-let [[perm id] (re-find #"https://www.wrike.com/open\.htm\?id=(\d+)" body)]
      {:state (cond
                (.-merged pr-obj) :merged
                (= (.-state pr-obj) "closed") :closed
                ;; (= (.-mergeable_state pr-obj) "draft") :draft
                :else :open)
       :permalink perm
       :pr-url (.-html_url pr-obj)})))

(defn main
  []
  (let [payload (.-payload (.-context github))]
    (if-let [pr (.-pull_request payload)]
      (if-let [{:keys [state] :as details} (extract-details pr)]
        (-> (case state
              :open (wrike/link-pr details)
              :merged (wrike/close-task details)
              (js/Promise.resolve))
            (.catch #(core/setFailed (.-message %))))
        (js/console.log "Not task link in PR text"))
      (js/console.log "No pull_request in payload"))))
