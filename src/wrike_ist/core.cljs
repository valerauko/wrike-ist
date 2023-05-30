(ns wrike-ist.core
  (:require ["@actions/core" :as core]
            ["@actions/github" :as github]
            [wrike-ist.wrike :as wrike]))

(defn find-links
  [text]
  (not-empty (re-seq #"\bhttps://www\.wrike\.com/open\.htm\?id=\d+\b" text)))

(defn extract-details
  [pr-obj]
  (when-let [body (.-body pr-obj)]
    (when-let [[perm] (re-find #"https://www.wrike.com/open\.htm\?id=(\d+)" body)]
      {:state (cond
                ^boolean (.-merged pr-obj) :merged
                (= (.-state pr-obj) "closed") :closed
                ;; (= (.-mergeable_state pr-obj) "draft") :draft
                :else :open)
       :permalink perm
       :pr-url ^String (.-html_url pr-obj)
       :title ^String (.-title pr-obj)})))

(defn main
  []
  (let [payload (.-payload (.-context github))]
    (if-let [pr (.-pull_request payload)]
      (if-let [{:keys [state] :as details} (extract-details pr)]
        (-> (case state
              :open (wrike/link-pr details)
              :merged (wrike/complete-task details (core/getInput "merged"))
              :closed (wrike/cancel-task details (core/getInput "closed"))
              (js/Promise.resolve))
            (.catch #(core/setFailed (.-message %))))
        (js/console.log "Not task link in PR text"))
      (js/console.log "No pull_request in payload"))))
