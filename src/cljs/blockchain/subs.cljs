(ns blockchain.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::blocks
 (fn [db]
   (:blocks db)))
