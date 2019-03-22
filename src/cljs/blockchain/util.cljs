(ns blockchain.utils
  (:require
   [re-frame.core :as re-frame]
   [clojure.string]
   [reagent.crypt :as crypt]))

(defn hash [s] 
  (crypt/bytes->hex (crypt/hash s :sha256)))
