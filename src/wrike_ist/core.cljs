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
    (when-let [links (find-links body)]
      (js/console.log (js/JSON.stringify pr-obj))
      (let [state (cond
                    ^boolean (.-merged pr-obj) :merged
                    (= (.-state pr-obj) "closed") :closed
                    ^boolean (.-draft pr-obj) :draft
                    :else :open)
            url ^String (.-html_url pr-obj)
            title ^String (.-title pr-obj)]
        (map
         (fn [permalink]
           {:state state
            :permalink permalink
            :pr-url url
            :title title})
         links)))))

(defn main
  []
  (let [payload (.-payload (.-context github))]
    (if-let [pr (.-pull_request payload)]
      (loop [links (extract-details pr)]
        (when-let [{:keys [state] :as details} (first links)]
          (-> (case state
                :open
                (js/Promise.all
                 [(wrike/link-pr details)
                  (wrike/progress-task details (core/getInput "opened"))])

                :merged
                (wrike/complete-task details (core/getInput "merged"))

                :closed
                (wrike/cancel-task details (core/getInput "closed"))

                ;; else ignore :draft
                (js/Promise.resolve))
              (.catch #(core/setFailed (.-message %))))
          (recur (rest links))))
      (js/console.log "No pull_request in payload"))))
