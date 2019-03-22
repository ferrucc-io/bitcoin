// Compiled by ClojureScript 1.10.520 {}
goog.provide('blockchain.utils');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('reagent.crypt');
blockchain.utils.hash = (function blockchain$utils$hash(s){
return reagent.crypt.bytes__GT_hex.call(null,reagent.crypt.hash.call(null,s,new cljs.core.Keyword(null,"sha256","sha256",1890611800)));
});

//# sourceMappingURL=utils.js.map?rel=1553277499398
