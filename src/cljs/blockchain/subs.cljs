(ns blockchain.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::blocks
 (fn [db]
   (:blocks db)))

(re-frame/reg-sub
 ::route
 (fn [db]
   (:route db)))

(re-frame/reg-sub
 ::block
 (fn [db]
   (:block db)))
