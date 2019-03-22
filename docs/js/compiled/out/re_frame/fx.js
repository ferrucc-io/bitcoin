// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__22048 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22049 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22049;

try{try{var seq__22050 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22051 = null;
var count__22052 = (0);
var i__22053 = (0);
while(true){
if((i__22053 < count__22052)){
var vec__22060 = cljs.core._nth.call(null,chunk__22051,i__22053);
var effect_key = cljs.core.nth.call(null,vec__22060,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22060,(1),null);
var temp__5455__auto___22082 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___22082)){
var effect_fn_22083 = temp__5455__auto___22082;
effect_fn_22083.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22084 = seq__22050;
var G__22085 = chunk__22051;
var G__22086 = count__22052;
var G__22087 = (i__22053 + (1));
seq__22050 = G__22084;
chunk__22051 = G__22085;
count__22052 = G__22086;
i__22053 = G__22087;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22050);
if(temp__5457__auto__){
var seq__22050__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22050__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22050__$1);
var G__22088 = cljs.core.chunk_rest.call(null,seq__22050__$1);
var G__22089 = c__4550__auto__;
var G__22090 = cljs.core.count.call(null,c__4550__auto__);
var G__22091 = (0);
seq__22050 = G__22088;
chunk__22051 = G__22089;
count__22052 = G__22090;
i__22053 = G__22091;
continue;
} else {
var vec__22063 = cljs.core.first.call(null,seq__22050__$1);
var effect_key = cljs.core.nth.call(null,vec__22063,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22063,(1),null);
var temp__5455__auto___22092 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___22092)){
var effect_fn_22093 = temp__5455__auto___22092;
effect_fn_22093.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22094 = cljs.core.next.call(null,seq__22050__$1);
var G__22095 = null;
var G__22096 = (0);
var G__22097 = (0);
seq__22050 = G__22094;
chunk__22051 = G__22095;
count__22052 = G__22096;
i__22053 = G__22097;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__21877__auto___22098 = re_frame.interop.now.call(null);
var duration__21878__auto___22099 = (end__21877__auto___22098 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21878__auto___22099,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__21877__auto___22098);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22048;
}} else {
var seq__22066 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22067 = null;
var count__22068 = (0);
var i__22069 = (0);
while(true){
if((i__22069 < count__22068)){
var vec__22076 = cljs.core._nth.call(null,chunk__22067,i__22069);
var effect_key = cljs.core.nth.call(null,vec__22076,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22076,(1),null);
var temp__5455__auto___22100 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___22100)){
var effect_fn_22101 = temp__5455__auto___22100;
effect_fn_22101.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22102 = seq__22066;
var G__22103 = chunk__22067;
var G__22104 = count__22068;
var G__22105 = (i__22069 + (1));
seq__22066 = G__22102;
chunk__22067 = G__22103;
count__22068 = G__22104;
i__22069 = G__22105;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22066);
if(temp__5457__auto__){
var seq__22066__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22066__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22066__$1);
var G__22106 = cljs.core.chunk_rest.call(null,seq__22066__$1);
var G__22107 = c__4550__auto__;
var G__22108 = cljs.core.count.call(null,c__4550__auto__);
var G__22109 = (0);
seq__22066 = G__22106;
chunk__22067 = G__22107;
count__22068 = G__22108;
i__22069 = G__22109;
continue;
} else {
var vec__22079 = cljs.core.first.call(null,seq__22066__$1);
var effect_key = cljs.core.nth.call(null,vec__22079,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22079,(1),null);
var temp__5455__auto___22110 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___22110)){
var effect_fn_22111 = temp__5455__auto___22110;
effect_fn_22111.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22112 = cljs.core.next.call(null,seq__22066__$1);
var G__22113 = null;
var G__22114 = (0);
var G__22115 = (0);
seq__22066 = G__22112;
chunk__22067 = G__22113;
count__22068 = G__22114;
i__22069 = G__22115;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__22116 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22117 = null;
var count__22118 = (0);
var i__22119 = (0);
while(true){
if((i__22119 < count__22118)){
var map__22124 = cljs.core._nth.call(null,chunk__22117,i__22119);
var map__22124__$1 = (((((!((map__22124 == null))))?(((((map__22124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22124):map__22124);
var effect = map__22124__$1;
var ms = cljs.core.get.call(null,map__22124__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22124__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22116,chunk__22117,count__22118,i__22119,map__22124,map__22124__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22116,chunk__22117,count__22118,i__22119,map__22124,map__22124__$1,effect,ms,dispatch))
,ms);
}


var G__22128 = seq__22116;
var G__22129 = chunk__22117;
var G__22130 = count__22118;
var G__22131 = (i__22119 + (1));
seq__22116 = G__22128;
chunk__22117 = G__22129;
count__22118 = G__22130;
i__22119 = G__22131;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22116);
if(temp__5457__auto__){
var seq__22116__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22116__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22116__$1);
var G__22132 = cljs.core.chunk_rest.call(null,seq__22116__$1);
var G__22133 = c__4550__auto__;
var G__22134 = cljs.core.count.call(null,c__4550__auto__);
var G__22135 = (0);
seq__22116 = G__22132;
chunk__22117 = G__22133;
count__22118 = G__22134;
i__22119 = G__22135;
continue;
} else {
var map__22126 = cljs.core.first.call(null,seq__22116__$1);
var map__22126__$1 = (((((!((map__22126 == null))))?(((((map__22126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22126):map__22126);
var effect = map__22126__$1;
var ms = cljs.core.get.call(null,map__22126__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22126__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22116,chunk__22117,count__22118,i__22119,map__22126,map__22126__$1,effect,ms,dispatch,seq__22116__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22116,chunk__22117,count__22118,i__22119,map__22126,map__22126__$1,effect,ms,dispatch,seq__22116__$1,temp__5457__auto__))
,ms);
}


var G__22136 = cljs.core.next.call(null,seq__22116__$1);
var G__22137 = null;
var G__22138 = (0);
var G__22139 = (0);
seq__22116 = G__22136;
chunk__22117 = G__22137;
count__22118 = G__22138;
i__22119 = G__22139;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__22140 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22141 = null;
var count__22142 = (0);
var i__22143 = (0);
while(true){
if((i__22143 < count__22142)){
var event = cljs.core._nth.call(null,chunk__22141,i__22143);
re_frame.router.dispatch.call(null,event);


var G__22144 = seq__22140;
var G__22145 = chunk__22141;
var G__22146 = count__22142;
var G__22147 = (i__22143 + (1));
seq__22140 = G__22144;
chunk__22141 = G__22145;
count__22142 = G__22146;
i__22143 = G__22147;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22140);
if(temp__5457__auto__){
var seq__22140__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22140__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22140__$1);
var G__22148 = cljs.core.chunk_rest.call(null,seq__22140__$1);
var G__22149 = c__4550__auto__;
var G__22150 = cljs.core.count.call(null,c__4550__auto__);
var G__22151 = (0);
seq__22140 = G__22148;
chunk__22141 = G__22149;
count__22142 = G__22150;
i__22143 = G__22151;
continue;
} else {
var event = cljs.core.first.call(null,seq__22140__$1);
re_frame.router.dispatch.call(null,event);


var G__22152 = cljs.core.next.call(null,seq__22140__$1);
var G__22153 = null;
var G__22154 = (0);
var G__22155 = (0);
seq__22140 = G__22152;
chunk__22141 = G__22153;
count__22142 = G__22154;
i__22143 = G__22155;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__22156 = cljs.core.seq.call(null,value);
var chunk__22157 = null;
var count__22158 = (0);
var i__22159 = (0);
while(true){
if((i__22159 < count__22158)){
var event = cljs.core._nth.call(null,chunk__22157,i__22159);
clear_event.call(null,event);


var G__22160 = seq__22156;
var G__22161 = chunk__22157;
var G__22162 = count__22158;
var G__22163 = (i__22159 + (1));
seq__22156 = G__22160;
chunk__22157 = G__22161;
count__22158 = G__22162;
i__22159 = G__22163;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22156);
if(temp__5457__auto__){
var seq__22156__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22156__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22156__$1);
var G__22164 = cljs.core.chunk_rest.call(null,seq__22156__$1);
var G__22165 = c__4550__auto__;
var G__22166 = cljs.core.count.call(null,c__4550__auto__);
var G__22167 = (0);
seq__22156 = G__22164;
chunk__22157 = G__22165;
count__22158 = G__22166;
i__22159 = G__22167;
continue;
} else {
var event = cljs.core.first.call(null,seq__22156__$1);
clear_event.call(null,event);


var G__22168 = cljs.core.next.call(null,seq__22156__$1);
var G__22169 = null;
var G__22170 = (0);
var G__22171 = (0);
seq__22156 = G__22168;
chunk__22157 = G__22169;
count__22158 = G__22170;
i__22159 = G__22171;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1553263586272
