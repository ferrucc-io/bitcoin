(ns blockchain.views
  (:require
   [re-frame.core :as re-frame]
   [blockchain.subs :as subs]
   [blockchain.utils :refer [hash]]
   [blockchain.components :refer [topic]]))


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

(defn block-component []
  (let [block (re-frame/subscribe [::subs/block])]
    [:div
      [:div {:class "input-container"}
       [:label {:class "input-label"} "Content"]
       [:div {:class "input-field-container"}
        [:input {:class "input-field disabled" 
              :type "text" 
              :value (get-in @block [:data]) 
              :on-change #(re-frame/dispatch 
                           [:single-b-change 
                            (-> % .-target .-value)])}]]]
     [:div {:class "input-container"}
      [:label {:class "input-label label-disabled"} "Hash"]
      [:div {:class "input-field-container disabled"}
       [:input {:class "input-field disabled" 
                :type "text" 
                :value (get-in @block [:hash])}]]]]))

(defn blockchain []
  [:div
     [:div {:class "container"}
      [:h2 {:class ""} "So what's a blockchain?"]
      [:p "With this interactive site I'll guide you step by step towards a good undertanding of what a Blockchain is."]]
     [:div {:class ""} 
      (blockchain-component)]])

(defn block-page []
  [:div {:class "container"}
   [:h2 "A hashing function"]
   [:p {:class "p-explanation"} "Here's a block:"]
   [block-component]
   [:p {:class "p-explanation"} "Try typing something inside of the Text field and see what happens"]
   [:h2 "What's going on?"]
   [:p {:class "p-explanation"} "A hashing function is a mathematical formula that transforms any text you give it, into a unique sequence of characters."]
   [:p {:class "p-explanation"} "One particular property of these functions is that the unique sequences of characters are unpredictable. There's no regular pattern that matches the text we inout  with its corresponding output!"]])

(defn home []
  [:div {:class "container"}
   [:h2 "An Interactive Course on Bitcoin"]
   [:h3 "Bitcoin is hard to understand, but this site is here to help you figure it out!"]
   [:div {:class "topics"}
    (topic "img/block.png" "A Block" "The first step" :block)
    (topic "img/blockchain.png" "Blockchain" "The core idea" :blockchain)]])

(defmulti panels identity)
(defmethod panels :home [] [home])
(defmethod panels :block [] [block-page])
(defmethod panels :blockchain [] [blockchain])

(defn main-panel []
  (let [route (re-frame/subscribe [::subs/route])]
    [:div      
     [:h1 {:class "title" 
           :on-click #(re-frame/dispatch [:change-route :home])}
      "Bitcoin"]
     (panels @route)]))
