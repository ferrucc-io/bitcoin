(ns blockchain.views
  (:require
   [re-frame.core :as re-frame]
   [blockchain.subs :as subs]
   [blockchain.utils :refer [hash]]))


(defn minable? [s b]
  (if (= s "0") [:button 
                 {:class "btn-primary"
                  :on-click #(re-frame/dispatch [:add-block b])} 
                 "Mine"]
              [:div]))

(defn valid? [b]
  (if (or (= (get-in b [:hash]) (hash (str (get-in b [:prev]) (get-in b [:data]) (get-in b [:nonce])))) (= (get-in b [:hash]) "0"))
    ""
    " invalid"))

(defn block [b]
  [:div {:class (str "block"  (valid? b))}
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

(defn blockchain-component []
  (let [blocks (re-frame/subscribe [::subs/blocks])]
    [:div
     [:div {}
       [:p (map block @blocks)]
      ]
    ]))

(defn blockchain []
  [:div
     [:div {:class "container"}
      [:h2 {:class ""} "So what's a blockchain?"]
      [:p "With this interactive site I'll guide you step by step towards a good undertanding of what a Blockchain is."]]
     [:div {:class ""} 
      (blockchain-component)]])

(defn home []
  [:div {:class "container"}
   [:h2 "Welcome to an interactive Bitcoin lesson"]
   [:h3 "Click on the topic you don't understand and you'll find an answer to your question"]
   [:div {:class "grid"}
    [:div {:class "topic"}
     [:img {:src "img/block.png"}]
     [:p "Blocks"]]]])

(defmulti panels identity)

(defmethod panels :home [] [home])
(defmethod panels :blockchain [] [blockchain])

(defn main-panel []
  (let [route (re-frame/subscribe [::subs/route])]
    [:div      
     [:h1 {:class "title"}
      "Bitcoin"]
     (panels @route)]))
