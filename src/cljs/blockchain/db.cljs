(ns blockchain.db)

(def default-db
  {:blocks [{:prev 0 :block 0 :data "data all the way down" :nonce 0 :hash 0}]})
