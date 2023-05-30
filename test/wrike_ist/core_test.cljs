(ns wrike-ist.core-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [wrike-ist.core :refer [extract-details]]))

(deftest extract-details-test
  (testing "No .body in payload"
    (let [payload (clj->js {})]
      (is (= nil (extract-details payload))))))
