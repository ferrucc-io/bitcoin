(ns blockchain.views
  (:require
   [re-frame.core :as re-frame]
   [blockchain.subs :as subs]))


(defn minable? [s b]
  (if (= s "0") [:button 
                 {:class "btn-primary"
                  :on-click #(re-frame/dispatch [:add-block b])} 
                 "Mine"]
              [:div]))

(defn block [b]
  [:div {:class "block"}
   [:div {:class "b-header"}
    [:p 
     [:span {:class "b-header-span"} (get-in b [:block])]
     " Block Number"]
    ]
    [:div {:class "input-container"}
     [:label {:class "input-label label-disabled"} "Previous Block"]
     [:div {:class "input-field-container disabled"}
      [:input {:class "input-field disabled" 
               :type "text" 
               :value (get-in b [:prev])}]]]
   [:div {:class "input-container"}
    [:label {:class "input-label"} "Content"]
    [:div {:class "input-field-container"}
     [:input {:class "input-field disabled" 
              :type "text" 
              :value (get-in b [:data]) 
              :on-change #(re-frame/dispatch 
                           [:b-content-change 
                            (-> % .-target .-value) 
                            (get-in b [:block])])}]]]
    [:div {:class "input-container"}
     [:label {:class "input-label label-disabled"} "Nonce"]
     [:div {:class "input-field-container disabled"}
      [:input {:class "input-field disabled" 
               :type "text" 
               :value (get-in b [:nonce])}]]]
    [:div {:class "input-container"}
     [:label {:class "input-label label-disabled"} "Hash"]
     [:div {:class "input-field-container disabled"}
      [:input {:class "input-field disabled" 
               :type "text" 
               :value (get-in b [:hash])}]]]
   (minable? (str (get-in b [:hash])) b)]
  )

(defn blockchain []
  (let [blocks (re-frame/subscribe [::subs/blocks])]
    [:div
     [:div {}
       [:p (map block @blocks)]
      ]
    ]))

(defn main-panel []
  [:div
     [:h1 {:class "title"}
      "Blockchain"]
     [:div {:class ""} 
       (blockchain)]
  ])


