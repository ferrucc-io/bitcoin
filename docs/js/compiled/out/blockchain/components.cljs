(ns blockchain.components
  (:require 
   [re-frame.core :as re-frame]))

(defn topic [img title subtitle r]
   [:div {:class "topic"
          :on-click #(re-frame/dispatch [:change-route r])}
     [:img {:src img :class "topic-img"}]
     [:p {:class "topic-title"} title]
     [:p {:class "topic-subtitle"} subtitle]])
