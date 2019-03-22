// Compiled by ClojureScript 1.10.520 {}
goog.provide('blockchain.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('blockchain.db');
goog.require('blockchain.subs');
goog.require('clojure.string');
goog.require('blockchain.utils');
goog.require('reagent.crypt');
blockchain.events.mine_it = (function blockchain$events$mine_it(d){
var nonce = (0);
var hash = reagent.crypt.bytes__GT_hex.call(null,reagent.crypt.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(d),cljs.core.str.cljs$core$IFn$_invoke$arity$1(nonce)].join(''),new cljs.core.Keyword(null,"sha256","sha256",1890611800)));
while(true){
if(clojure.string.starts_with_QMARK_.call(null,hash,"00")){
return (nonce - (1));
} else {
var G__27781 = (nonce + (1));
var G__27782 = reagent.crypt.bytes__GT_hex.call(null,reagent.crypt.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(d),cljs.core.str.cljs$core$IFn$_invoke$arity$1(nonce)].join(''),new cljs.core.Keyword(null,"sha256","sha256",1890611800)));
nonce = G__27781;
hash = G__27782;
continue;
}
break;
}
});
blockchain.events.add_block = (function blockchain$events$add_block(db,b_container){
var blocks = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain.subs","blocks","blockchain.subs/blocks",-324166494)], null));
var b = cljs.core.second.call(null,b_container);
var latest_block = cljs.core.last.call(null,cljs.core.deref.call(null,blocks));
var nonce = blockchain.events.mine_it.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,latest_block,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev","prev",-1597069226)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,latest_block,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null)))].join(''));
var prev_block = cljs.core.assoc.call(null,latest_block,new cljs.core.Keyword(null,"hash","hash",-13781596),blockchain.utils.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,latest_block,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev","prev",-1597069226)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,latest_block,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(nonce)].join('')),new cljs.core.Keyword(null,"nonce","nonce",564330331),nonce);
var new_block = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"nonce","nonce",564330331),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,b,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nonce","nonce",564330331)], null))),new cljs.core.Keyword(null,"block","block",664686210),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.get_in.call(null,b,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210)], null)) | (0)) + (1))),new cljs.core.Keyword(null,"prev","prev",-1597069226),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,prev_block,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hash","hash",-13781596)], null))),new cljs.core.Keyword(null,"data","data",-232669377),"",new cljs.core.Keyword(null,"hash","hash",-13781596),"0"], null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.conj.call(null,cljs.core.pop.call(null,cljs.core.deref.call(null,blocks)),prev_block,new_block));
});
blockchain.events.route = (function blockchain$events$route(db,r){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"route","route",329891309),cljs.core.last.call(null,r));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("blockchain.events","initialize-db","blockchain.events/initialize-db",1419719497),(function (_,___$1){
return blockchain.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-route","change-route",1352817394),blockchain.events.route);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"single-b-change","single-b-change",-1043494057),(function (db,p__27783){
var vec__27784 = p__27783;
var _ = cljs.core.nth.call(null,vec__27784,(0),null);
var value = cljs.core.nth.call(null,vec__27784,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),value,new cljs.core.Keyword(null,"hash","hash",-13781596),blockchain.utils.hash.call(null,value)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-block","add-block",2045735900),blockchain.events.add_block);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"b-content-change","b-content-change",-2058904442),(function (db,p__27788){
var vec__27789 = p__27788;
var _ = cljs.core.nth.call(null,vec__27789,(0),null);
var new_content_value = cljs.core.nth.call(null,vec__27789,(1),null);
var block_number = cljs.core.nth.call(null,vec__27789,(2),null);
var blocks = db.call(null,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var u_blocks = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (blocks,vec__27789,_,new_content_value,block_number){
return (function (p1__27787_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,p1__27787_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210)], null)),block_number)){
return cljs.core.assoc.call(null,p1__27787_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),new_content_value);
} else {
return p1__27787_SHARP_;
}
});})(blocks,vec__27789,_,new_content_value,block_number))
,blocks));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"blocks","blocks",-610462153),u_blocks);
}));

//# sourceMappingURL=events.js.map?rel=1553286596293
