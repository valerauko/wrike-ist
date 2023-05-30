(ns wrike-ist.wrike-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [wrike-ist.wrike :refer [link-html]]))

(deftest link-html-test
  (testing "No title"
    (let [url "https://github.com/valerauko/wrike-ist/pull/9001"
          data {:pr-url url}]
      (is (= url (re-find (re-pattern url) (link-html data))))))
  (testing "With title"
    (let [url "https://github.com/valerauko/wrike-ist/pull/9001"
          title "hoge"
          data {:pr-url url :title title}]
      (is (= url (re-find (re-pattern url) (link-html data))))
      (is (= title (re-find (re-pattern title) (link-html data)))))))
