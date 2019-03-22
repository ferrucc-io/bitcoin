// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21899){
var map__21900 = p__21899;
var map__21900__$1 = (((((!((map__21900 == null))))?(((((map__21900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21900):map__21900);
var operation = cljs.core.get.call(null,map__21900__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__21900__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__21900__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__21900__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__21902_21922 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__21903_21923 = null;
var count__21904_21924 = (0);
var i__21905_21925 = (0);
while(true){
if((i__21905_21925 < count__21904_21924)){
var vec__21914_21926 = cljs.core._nth.call(null,chunk__21903_21923,i__21905_21925);
var k_21927 = cljs.core.nth.call(null,vec__21914_21926,(0),null);
var cb_21928 = cljs.core.nth.call(null,vec__21914_21926,(1),null);
try{cb_21928.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e21917){var e_21929 = e21917;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_21927,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_21929);
}

var G__21930 = seq__21902_21922;
var G__21931 = chunk__21903_21923;
var G__21932 = count__21904_21924;
var G__21933 = (i__21905_21925 + (1));
seq__21902_21922 = G__21930;
chunk__21903_21923 = G__21931;
count__21904_21924 = G__21932;
i__21905_21925 = G__21933;
continue;
} else {
var temp__5457__auto___21934 = cljs.core.seq.call(null,seq__21902_21922);
if(temp__5457__auto___21934){
var seq__21902_21935__$1 = temp__5457__auto___21934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21902_21935__$1)){
var c__4550__auto___21936 = cljs.core.chunk_first.call(null,seq__21902_21935__$1);
var G__21937 = cljs.core.chunk_rest.call(null,seq__21902_21935__$1);
var G__21938 = c__4550__auto___21936;
var G__21939 = cljs.core.count.call(null,c__4550__auto___21936);
var G__21940 = (0);
seq__21902_21922 = G__21937;
chunk__21903_21923 = G__21938;
count__21904_21924 = G__21939;
i__21905_21925 = G__21940;
continue;
} else {
var vec__21918_21941 = cljs.core.first.call(null,seq__21902_21935__$1);
var k_21942 = cljs.core.nth.call(null,vec__21918_21941,(0),null);
var cb_21943 = cljs.core.nth.call(null,vec__21918_21941,(1),null);
try{cb_21943.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e21921){var e_21944 = e21921;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_21942,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_21944);
}

var G__21945 = cljs.core.next.call(null,seq__21902_21935__$1);
var G__21946 = null;
var G__21947 = (0);
var G__21948 = (0);
seq__21902_21922 = G__21945;
chunk__21903_21923 = G__21946;
count__21904_21924 = G__21947;
i__21905_21925 = G__21948;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1553263585812
