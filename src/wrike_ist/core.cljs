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
  (try
    (let [payload (.-payload (.-context github))]
      (if-let [pr (.-pull_request payload)]
        (if-let [details (extract-details pr)]
          (-> (wrike/link-pr details)
              (.then #(js/console.log "Successfully linked PR"))
              (.catch (fn [error]
                        (when-not (= error ::wrike/already-present)
                          (core/setFailed (.-message %))))))
          (js/console.log "Not task link in PR text"))
        (js/console.log "No pull_request in payload")))
    (catch js/Error ex
      (core/setFailed (.-message ex)))))
