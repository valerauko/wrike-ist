(ns wrike-ist.wrike-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [wrike-ist.wrike :refer [cancel-task
                                     complete-task
                                     find-status
                                     link-html]]))

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

(deftest find-status-test
  (let [haystack [{"name" "bar"
                   "group" "fuga"}
                  {"name" "foo"
                   "group" "fuga"}
                  {"name" "baz"
                   "group" "hoge"}]]
    (testing "If there's an exact name match"
      (is (= {"name" "foo" "group" "fuga"}
             (find-status haystack {:wanted-status "foo" :wanted-group "hoge"}))
          "The name match is prioritized over group match"))
    (testing "If there's no name match and :wanted-group isn't specified"
      (is (= nil (find-status haystack {:wanted-status "asd"}))))
    (testing "If there's no name match but :wanted-group matches"
      (is (= {"name" "baz" "group" "hoge"}
             (find-status haystack {:wanted-status "asd" :wanted-group "hoge"}))))
    (testing "If there's no match at all"
      (is (= nil (find-status haystack {:wanted-status "asd" :wanted-group "fgh"}))))))

(deftest cancel-task-test
  (testing "Does nothing if `merged` is configured explicitly as \"-\""
    (is (= nil (cancel-task {} "-")))))

(deftest complete-task-test
  (testing "Does nothing if `merged` is configured explicitly as \"-\""
    (is (= nil (complete-task {} "-")))))
