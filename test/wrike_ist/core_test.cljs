(ns wrike-ist.core-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [wrike-ist.core :refer [extract-details
                                    find-links]]))

(deftest links-test
  (testing "No link in text"
    (is (= nil (find-links ""))))
  (testing "One link in text"
    (let [url "https://www.wrike.com/open.htm?id=1"]
      (is (= (list url) (find-links (str "a\n" url "\nb"))))))
  (testing "Multiple links in text"
    (let [url-1 "https://www.wrike.com/open.htm?id=1"
          url-2 "https://www.wrike.com/open.htm?id=2"]
      (is (= (list url-1 url-2) (find-links (str url-1 "\nfoo: " url-2 "\n"))))))
  (testing "No separator around the link"
    ;; anything \b matches will do
    (let [url "https://www.wrike.com/open.htm?id=1"]
      (is (= nil (find-links (str "1" url))))
      (is (= nil (find-links (str url "b"))))
      (is (= nil (find-links (str "1" url "b")))))))

(deftest extract-details-test
  (testing "No .body in payload"
    (let [payload (clj->js {})]
      (is (= nil (extract-details payload)))))
  (testing "No link in payload"
    (let [payload (clj->js {:body ""})]
      (is (= nil (extract-details payload)))))
  (testing "Extract link from payload"
    (testing "One link"
      (let [url "https://www.wrike.com/open.htm?id=1"
            payload (clj->js {:body (str "a\n" url "\nb")})]
        (is (= url (:permalink (first (extract-details payload)))))))
    (testing "Multiple links"
      (let [url-1 "https://www.wrike.com/open.htm?id=1"
            url-2 "https://www.wrike.com/open.htm?id=2"
            payload (clj->js {:body (str "a\n" url-1 "\nb " url-2)})]
        (is (= url-1 (:permalink (first (extract-details payload)))))
        (is (= url-2 (:permalink (second (extract-details payload))))))))
  (testing "Extract pull request URL from payload"
    (let [url "https://github.com/valerauko/wrike-ist/pull/9001"
          payload (clj->js {:body "https://www.wrike.com/open.htm?id=1"
                            :html_url url})]
      (is (= url (:pr-url (first (extract-details payload)))))))
  (testing "Extract pull request title from payload"
    (let [title "hoge"
          payload (clj->js {:body "https://www.wrike.com/open.htm?id=1"
                            :title title})]
      (is (= title (:title (first (extract-details payload)))))))
  (testing "Translating pull request state"
    (let [payload (clj->js {:body "https://www.wrike.com/open.htm?id=1"
                            :merged true
                            :state "closed"})]
      (is (= :merged (:state (first (extract-details payload))))))
    (let [payload (clj->js {:body "https://www.wrike.com/open.htm?id=1"
                            :merged true})]
      (is (= :merged (:state (first (extract-details payload))))))
    (let [payload (clj->js {:body "https://www.wrike.com/open.htm?id=1"
                            :merged false
                            :state "closed"})]
      (is (= :closed (:state (first (extract-details payload))))))
    (let [payload (clj->js {:body "https://www.wrike.com/open.htm?id=1"
                            :state "closed"})]
      (is (= :closed (:state (first (extract-details payload))))))
    (let [payload (clj->js {:body "https://www.wrike.com/open.htm?id=1"
                            :merged false
                            :state "open"})]
      (is (= :open (:state (first (extract-details payload))))))
    (let [payload (clj->js {:body "https://www.wrike.com/open.htm?id=1"})]
      (is (= :open (:state (first (extract-details payload))))))))
