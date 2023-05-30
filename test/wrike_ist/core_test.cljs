(ns wrike-ist.core-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest passing-test
  (is (= 1 1)))

(deftest failing-test
  (is (= 1 2)))
