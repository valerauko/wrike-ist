(ns wrike-ist.http
  (:require ["https" :as https]
            ["url" :as url]))

(defn- wrike-token
  []
  (.-WRIKE_TOKEN (.-env js/process)))

(defn request
  [method str-url data]
  (let [url (url/parse str-url)
        opts {:hostname (.-hostname url)
              :path (.-path url)
              :method method
              :port 443
              :headers {:Content-Type "application/json"
                        :Authorization (str "bearer " (wrike-token))}}
        request (.request https (clj->js opts) js/console.log)]
    (doto request
          (.on "error" js/console.error)
          (.write (js/JSON.stringify (clj->js data)))
          (.end))))

(defn post
  [str-url data]
  (request "POST" str-url data))

(defn put
  [str-url data]
  (request "PUT" str-url data))
