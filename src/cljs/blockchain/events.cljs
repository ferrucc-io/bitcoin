(ns blockchain.events
  (:require
   [re-frame.core :as re-frame]
   [blockchain.db :as db]
   [blockchain.subs :as subs]
   [clojure.string]
   [reagent.crypt :as crypt]))

(defn mine-it [d]
    (loop [nonce 0
           hash (crypt/bytes->hex (crypt/hash (str d nonce) :sha256))]
      (if (clojure.string/starts-with? hash "00")
        (- nonce 1) 
        (do
          (recur (inc nonce) (crypt/bytes->hex (crypt/hash (str d nonce) :sha256)))))))

(defn add-block [db b-container]
  (let [blocks (re-frame/subscribe [::subs/blocks])
        b (second b-container)
        latest-block (last @blocks)
        nonce (mine-it (str (get-in latest-block [:prev]) (get-in latest-block [:data])))
        prev-block (assoc latest-block :hash (crypt/bytes->hex (crypt/hash (str (get-in latest-block [:prev]) (get-in latest-block [:data]) nonce) :sha256)) :nonce nonce)
        new-block {:nonce (str (get-in b [:nonce]))
                   :block (str (+  (int (get-in b [:block])) 1))
                   :prev (str (get-in prev-block [:hash]))
                   :data ""
                   :hash "0"}]
    (assoc db :blocks (conj (pop @blocks) prev-block new-block))))


(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 :add-block
  add-block)

(re-frame/reg-event-db
 :b-content-change
 (fn [db [_ new-content-value block-number]]
    (let [blocks (db :blocks)
          u-blocks  (into [] (map #(if (= (get-in % [:block]) block-number)
                                  (assoc % :data new-content-value)
                                  %) blocks))]
    (assoc db :blocks u-blocks))))
