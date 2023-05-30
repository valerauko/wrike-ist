(ns wrike-ist.core-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [wrike-ist.core :refer [extract-details]]))

(deftest extract-details-test
  (testing "No .body in payload"
    (let [payload (clj->js {})]
      (is (= nil (extract-details payload)))))
  (testing "No link in payload"
    (let [payload (clj->js {:body ""})]
      (is (= nil (extract-details payload)))))
  (testing "Extract link from payload"
    (let [url "https://www.wrike.com/open.htm?id=1"
          payload (clj->js {:body (str "a\n" url "\nb")})]
      (is (= url (:permalink (extract-details payload))))))
  (testing "Extract pull request URL from payload"
    (let [url "https://github.com/valerauko/wrike-ist/pull/9001"
          payload (clj->js {:body "https://www.wrike.com/open.htm?id=1"
                            :html_url url})]
      (is (= url (:pr-url (extract-details payload)))))))
