// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31240){if((e31240 instanceof Error)){
var e = e31240;
return "Error: Unable to stringify";
} else {
throw e31240;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31243 = arguments.length;
switch (G__31243) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31241_SHARP_){
if(typeof p1__31241_SHARP_ === 'string'){
return p1__31241_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31241_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31246 = arguments.length;
var i__4731__auto___31247 = (0);
while(true){
if((i__4731__auto___31247 < len__4730__auto___31246)){
args__4736__auto__.push((arguments[i__4731__auto___31247]));

var G__31248 = (i__4731__auto___31247 + (1));
i__4731__auto___31247 = G__31248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31245){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31245));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31250 = arguments.length;
var i__4731__auto___31251 = (0);
while(true){
if((i__4731__auto___31251 < len__4730__auto___31250)){
args__4736__auto__.push((arguments[i__4731__auto___31251]));

var G__31252 = (i__4731__auto___31251 + (1));
i__4731__auto___31251 = G__31252;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31249){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31249));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31253){
var map__31254 = p__31253;
var map__31254__$1 = (((((!((map__31254 == null))))?(((((map__31254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31254):map__31254);
var message = cljs.core.get.call(null,map__31254__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31254__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27425__auto___31333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___31333,ch){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___31333,ch){
return (function (state_31305){
var state_val_31306 = (state_31305[(1)]);
if((state_val_31306 === (7))){
var inst_31301 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31307_31334 = state_31305__$1;
(statearr_31307_31334[(2)] = inst_31301);

(statearr_31307_31334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (1))){
var state_31305__$1 = state_31305;
var statearr_31308_31335 = state_31305__$1;
(statearr_31308_31335[(2)] = null);

(statearr_31308_31335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (4))){
var inst_31258 = (state_31305[(7)]);
var inst_31258__$1 = (state_31305[(2)]);
var state_31305__$1 = (function (){var statearr_31309 = state_31305;
(statearr_31309[(7)] = inst_31258__$1);

return statearr_31309;
})();
if(cljs.core.truth_(inst_31258__$1)){
var statearr_31310_31336 = state_31305__$1;
(statearr_31310_31336[(1)] = (5));

} else {
var statearr_31311_31337 = state_31305__$1;
(statearr_31311_31337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (15))){
var inst_31265 = (state_31305[(8)]);
var inst_31280 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31265);
var inst_31281 = cljs.core.first.call(null,inst_31280);
var inst_31282 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31281);
var inst_31283 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31282)].join('');
var inst_31284 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31283);
var state_31305__$1 = state_31305;
var statearr_31312_31338 = state_31305__$1;
(statearr_31312_31338[(2)] = inst_31284);

(statearr_31312_31338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (13))){
var inst_31289 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31313_31339 = state_31305__$1;
(statearr_31313_31339[(2)] = inst_31289);

(statearr_31313_31339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (6))){
var state_31305__$1 = state_31305;
var statearr_31314_31340 = state_31305__$1;
(statearr_31314_31340[(2)] = null);

(statearr_31314_31340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (17))){
var inst_31287 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31315_31341 = state_31305__$1;
(statearr_31315_31341[(2)] = inst_31287);

(statearr_31315_31341[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (3))){
var inst_31303 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31305__$1,inst_31303);
} else {
if((state_val_31306 === (12))){
var inst_31264 = (state_31305[(9)]);
var inst_31278 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31264,opts);
var state_31305__$1 = state_31305;
if(inst_31278){
var statearr_31316_31342 = state_31305__$1;
(statearr_31316_31342[(1)] = (15));

} else {
var statearr_31317_31343 = state_31305__$1;
(statearr_31317_31343[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (2))){
var state_31305__$1 = state_31305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31305__$1,(4),ch);
} else {
if((state_val_31306 === (11))){
var inst_31265 = (state_31305[(8)]);
var inst_31270 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31271 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31265);
var inst_31272 = cljs.core.async.timeout.call(null,(1000));
var inst_31273 = [inst_31271,inst_31272];
var inst_31274 = (new cljs.core.PersistentVector(null,2,(5),inst_31270,inst_31273,null));
var state_31305__$1 = state_31305;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31305__$1,(14),inst_31274);
} else {
if((state_val_31306 === (9))){
var inst_31265 = (state_31305[(8)]);
var inst_31291 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31292 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31265);
var inst_31293 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31292);
var inst_31294 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31293)].join('');
var inst_31295 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31294);
var state_31305__$1 = (function (){var statearr_31318 = state_31305;
(statearr_31318[(10)] = inst_31291);

return statearr_31318;
})();
var statearr_31319_31344 = state_31305__$1;
(statearr_31319_31344[(2)] = inst_31295);

(statearr_31319_31344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (5))){
var inst_31258 = (state_31305[(7)]);
var inst_31260 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31261 = (new cljs.core.PersistentArrayMap(null,2,inst_31260,null));
var inst_31262 = (new cljs.core.PersistentHashSet(null,inst_31261,null));
var inst_31263 = figwheel.client.focus_msgs.call(null,inst_31262,inst_31258);
var inst_31264 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31263);
var inst_31265 = cljs.core.first.call(null,inst_31263);
var inst_31266 = figwheel.client.autoload_QMARK_.call(null);
var state_31305__$1 = (function (){var statearr_31320 = state_31305;
(statearr_31320[(8)] = inst_31265);

(statearr_31320[(9)] = inst_31264);

return statearr_31320;
})();
if(cljs.core.truth_(inst_31266)){
var statearr_31321_31345 = state_31305__$1;
(statearr_31321_31345[(1)] = (8));

} else {
var statearr_31322_31346 = state_31305__$1;
(statearr_31322_31346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (14))){
var inst_31276 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31323_31347 = state_31305__$1;
(statearr_31323_31347[(2)] = inst_31276);

(statearr_31323_31347[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (16))){
var state_31305__$1 = state_31305;
var statearr_31324_31348 = state_31305__$1;
(statearr_31324_31348[(2)] = null);

(statearr_31324_31348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (10))){
var inst_31297 = (state_31305[(2)]);
var state_31305__$1 = (function (){var statearr_31325 = state_31305;
(statearr_31325[(11)] = inst_31297);

return statearr_31325;
})();
var statearr_31326_31349 = state_31305__$1;
(statearr_31326_31349[(2)] = null);

(statearr_31326_31349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (8))){
var inst_31264 = (state_31305[(9)]);
var inst_31268 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31264,opts);
var state_31305__$1 = state_31305;
if(cljs.core.truth_(inst_31268)){
var statearr_31327_31350 = state_31305__$1;
(statearr_31327_31350[(1)] = (11));

} else {
var statearr_31328_31351 = state_31305__$1;
(statearr_31328_31351[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27425__auto___31333,ch))
;
return ((function (switch__27330__auto__,c__27425__auto___31333,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27331__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27331__auto____0 = (function (){
var statearr_31329 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31329[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27331__auto__);

(statearr_31329[(1)] = (1));

return statearr_31329;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27331__auto____1 = (function (state_31305){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_31305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e31330){if((e31330 instanceof Object)){
var ex__27334__auto__ = e31330;
var statearr_31331_31352 = state_31305;
(statearr_31331_31352[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31353 = state_31305;
state_31305 = G__31353;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27331__auto__ = function(state_31305){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27331__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27331__auto____1.call(this,state_31305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27331__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27331__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___31333,ch))
})();
var state__27427__auto__ = (function (){var statearr_31332 = f__27426__auto__.call(null);
(statearr_31332[(6)] = c__27425__auto___31333);

return statearr_31332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___31333,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31354_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31354_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31360 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31360){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31356 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31357 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31358 = true;
var _STAR_print_fn_STAR__temp_val__31359 = ((function (_STAR_print_newline_STAR__orig_val__31356,_STAR_print_fn_STAR__orig_val__31357,_STAR_print_newline_STAR__temp_val__31358,sb,base_path_31360){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__31356,_STAR_print_fn_STAR__orig_val__31357,_STAR_print_newline_STAR__temp_val__31358,sb,base_path_31360))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31358;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31359;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31357;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31356;
}}catch (e31355){if((e31355 instanceof Error)){
var e = e31355;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31360], null));
} else {
var e = e31355;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31360))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31361){
var map__31362 = p__31361;
var map__31362__$1 = (((((!((map__31362 == null))))?(((((map__31362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31362):map__31362);
var opts = map__31362__$1;
var build_id = cljs.core.get.call(null,map__31362__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31362,map__31362__$1,opts,build_id){
return (function (p__31364){
var vec__31365 = p__31364;
var seq__31366 = cljs.core.seq.call(null,vec__31365);
var first__31367 = cljs.core.first.call(null,seq__31366);
var seq__31366__$1 = cljs.core.next.call(null,seq__31366);
var map__31368 = first__31367;
var map__31368__$1 = (((((!((map__31368 == null))))?(((((map__31368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31368):map__31368);
var msg = map__31368__$1;
var msg_name = cljs.core.get.call(null,map__31368__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31366__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31365,seq__31366,first__31367,seq__31366__$1,map__31368,map__31368__$1,msg,msg_name,_,map__31362,map__31362__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31365,seq__31366,first__31367,seq__31366__$1,map__31368,map__31368__$1,msg,msg_name,_,map__31362,map__31362__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31362,map__31362__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31370){
var vec__31371 = p__31370;
var seq__31372 = cljs.core.seq.call(null,vec__31371);
var first__31373 = cljs.core.first.call(null,seq__31372);
var seq__31372__$1 = cljs.core.next.call(null,seq__31372);
var map__31374 = first__31373;
var map__31374__$1 = (((((!((map__31374 == null))))?(((((map__31374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31374):map__31374);
var msg = map__31374__$1;
var msg_name = cljs.core.get.call(null,map__31374__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31372__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31376){
var map__31377 = p__31376;
var map__31377__$1 = (((((!((map__31377 == null))))?(((((map__31377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31377):map__31377);
var on_compile_warning = cljs.core.get.call(null,map__31377__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31377__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31377,map__31377__$1,on_compile_warning,on_compile_fail){
return (function (p__31379){
var vec__31380 = p__31379;
var seq__31381 = cljs.core.seq.call(null,vec__31380);
var first__31382 = cljs.core.first.call(null,seq__31381);
var seq__31381__$1 = cljs.core.next.call(null,seq__31381);
var map__31383 = first__31382;
var map__31383__$1 = (((((!((map__31383 == null))))?(((((map__31383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31383):map__31383);
var msg = map__31383__$1;
var msg_name = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31381__$1;
var pred__31385 = cljs.core._EQ_;
var expr__31386 = msg_name;
if(cljs.core.truth_(pred__31385.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31386))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31385.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31386))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31377,map__31377__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto__,msg_hist,msg_names,msg){
return (function (state_31475){
var state_val_31476 = (state_31475[(1)]);
if((state_val_31476 === (7))){
var inst_31395 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
if(cljs.core.truth_(inst_31395)){
var statearr_31477_31524 = state_31475__$1;
(statearr_31477_31524[(1)] = (8));

} else {
var statearr_31478_31525 = state_31475__$1;
(statearr_31478_31525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (20))){
var inst_31469 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31479_31526 = state_31475__$1;
(statearr_31479_31526[(2)] = inst_31469);

(statearr_31479_31526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (27))){
var inst_31465 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31480_31527 = state_31475__$1;
(statearr_31480_31527[(2)] = inst_31465);

(statearr_31480_31527[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (1))){
var inst_31388 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31475__$1 = state_31475;
if(cljs.core.truth_(inst_31388)){
var statearr_31481_31528 = state_31475__$1;
(statearr_31481_31528[(1)] = (2));

} else {
var statearr_31482_31529 = state_31475__$1;
(statearr_31482_31529[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (24))){
var inst_31467 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31483_31530 = state_31475__$1;
(statearr_31483_31530[(2)] = inst_31467);

(statearr_31483_31530[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (4))){
var inst_31473 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31475__$1,inst_31473);
} else {
if((state_val_31476 === (15))){
var inst_31471 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31484_31531 = state_31475__$1;
(statearr_31484_31531[(2)] = inst_31471);

(statearr_31484_31531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (21))){
var inst_31424 = (state_31475[(2)]);
var inst_31425 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31426 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31425);
var state_31475__$1 = (function (){var statearr_31485 = state_31475;
(statearr_31485[(7)] = inst_31424);

return statearr_31485;
})();
var statearr_31486_31532 = state_31475__$1;
(statearr_31486_31532[(2)] = inst_31426);

(statearr_31486_31532[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (31))){
var inst_31454 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31475__$1 = state_31475;
if(inst_31454){
var statearr_31487_31533 = state_31475__$1;
(statearr_31487_31533[(1)] = (34));

} else {
var statearr_31488_31534 = state_31475__$1;
(statearr_31488_31534[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (32))){
var inst_31463 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31489_31535 = state_31475__$1;
(statearr_31489_31535[(2)] = inst_31463);

(statearr_31489_31535[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (33))){
var inst_31450 = (state_31475[(2)]);
var inst_31451 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31452 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31451);
var state_31475__$1 = (function (){var statearr_31490 = state_31475;
(statearr_31490[(8)] = inst_31450);

return statearr_31490;
})();
var statearr_31491_31536 = state_31475__$1;
(statearr_31491_31536[(2)] = inst_31452);

(statearr_31491_31536[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (13))){
var inst_31409 = figwheel.client.heads_up.clear.call(null);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31475__$1,(16),inst_31409);
} else {
if((state_val_31476 === (22))){
var inst_31430 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31431 = figwheel.client.heads_up.append_warning_message.call(null,inst_31430);
var state_31475__$1 = state_31475;
var statearr_31492_31537 = state_31475__$1;
(statearr_31492_31537[(2)] = inst_31431);

(statearr_31492_31537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (36))){
var inst_31461 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31493_31538 = state_31475__$1;
(statearr_31493_31538[(2)] = inst_31461);

(statearr_31493_31538[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (29))){
var inst_31441 = (state_31475[(2)]);
var inst_31442 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31443 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31442);
var state_31475__$1 = (function (){var statearr_31494 = state_31475;
(statearr_31494[(9)] = inst_31441);

return statearr_31494;
})();
var statearr_31495_31539 = state_31475__$1;
(statearr_31495_31539[(2)] = inst_31443);

(statearr_31495_31539[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (6))){
var inst_31390 = (state_31475[(10)]);
var state_31475__$1 = state_31475;
var statearr_31496_31540 = state_31475__$1;
(statearr_31496_31540[(2)] = inst_31390);

(statearr_31496_31540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (28))){
var inst_31437 = (state_31475[(2)]);
var inst_31438 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31439 = figwheel.client.heads_up.display_warning.call(null,inst_31438);
var state_31475__$1 = (function (){var statearr_31497 = state_31475;
(statearr_31497[(11)] = inst_31437);

return statearr_31497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31475__$1,(29),inst_31439);
} else {
if((state_val_31476 === (25))){
var inst_31435 = figwheel.client.heads_up.clear.call(null);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31475__$1,(28),inst_31435);
} else {
if((state_val_31476 === (34))){
var inst_31456 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31475__$1,(37),inst_31456);
} else {
if((state_val_31476 === (17))){
var inst_31415 = (state_31475[(2)]);
var inst_31416 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31417 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31416);
var state_31475__$1 = (function (){var statearr_31498 = state_31475;
(statearr_31498[(12)] = inst_31415);

return statearr_31498;
})();
var statearr_31499_31541 = state_31475__$1;
(statearr_31499_31541[(2)] = inst_31417);

(statearr_31499_31541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (3))){
var inst_31407 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31475__$1 = state_31475;
if(inst_31407){
var statearr_31500_31542 = state_31475__$1;
(statearr_31500_31542[(1)] = (13));

} else {
var statearr_31501_31543 = state_31475__$1;
(statearr_31501_31543[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (12))){
var inst_31403 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31502_31544 = state_31475__$1;
(statearr_31502_31544[(2)] = inst_31403);

(statearr_31502_31544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (2))){
var inst_31390 = (state_31475[(10)]);
var inst_31390__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31475__$1 = (function (){var statearr_31503 = state_31475;
(statearr_31503[(10)] = inst_31390__$1);

return statearr_31503;
})();
if(cljs.core.truth_(inst_31390__$1)){
var statearr_31504_31545 = state_31475__$1;
(statearr_31504_31545[(1)] = (5));

} else {
var statearr_31505_31546 = state_31475__$1;
(statearr_31505_31546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (23))){
var inst_31433 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31475__$1 = state_31475;
if(inst_31433){
var statearr_31506_31547 = state_31475__$1;
(statearr_31506_31547[(1)] = (25));

} else {
var statearr_31507_31548 = state_31475__$1;
(statearr_31507_31548[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (35))){
var state_31475__$1 = state_31475;
var statearr_31508_31549 = state_31475__$1;
(statearr_31508_31549[(2)] = null);

(statearr_31508_31549[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (19))){
var inst_31428 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31475__$1 = state_31475;
if(inst_31428){
var statearr_31509_31550 = state_31475__$1;
(statearr_31509_31550[(1)] = (22));

} else {
var statearr_31510_31551 = state_31475__$1;
(statearr_31510_31551[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (11))){
var inst_31399 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31511_31552 = state_31475__$1;
(statearr_31511_31552[(2)] = inst_31399);

(statearr_31511_31552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (9))){
var inst_31401 = figwheel.client.heads_up.clear.call(null);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31475__$1,(12),inst_31401);
} else {
if((state_val_31476 === (5))){
var inst_31392 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31475__$1 = state_31475;
var statearr_31512_31553 = state_31475__$1;
(statearr_31512_31553[(2)] = inst_31392);

(statearr_31512_31553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (14))){
var inst_31419 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31475__$1 = state_31475;
if(inst_31419){
var statearr_31513_31554 = state_31475__$1;
(statearr_31513_31554[(1)] = (18));

} else {
var statearr_31514_31555 = state_31475__$1;
(statearr_31514_31555[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (26))){
var inst_31445 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31475__$1 = state_31475;
if(inst_31445){
var statearr_31515_31556 = state_31475__$1;
(statearr_31515_31556[(1)] = (30));

} else {
var statearr_31516_31557 = state_31475__$1;
(statearr_31516_31557[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (16))){
var inst_31411 = (state_31475[(2)]);
var inst_31412 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31413 = figwheel.client.heads_up.display_exception.call(null,inst_31412);
var state_31475__$1 = (function (){var statearr_31517 = state_31475;
(statearr_31517[(13)] = inst_31411);

return statearr_31517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31475__$1,(17),inst_31413);
} else {
if((state_val_31476 === (30))){
var inst_31447 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31448 = figwheel.client.heads_up.display_warning.call(null,inst_31447);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31475__$1,(33),inst_31448);
} else {
if((state_val_31476 === (10))){
var inst_31405 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31518_31558 = state_31475__$1;
(statearr_31518_31558[(2)] = inst_31405);

(statearr_31518_31558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (18))){
var inst_31421 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31422 = figwheel.client.heads_up.display_exception.call(null,inst_31421);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31475__$1,(21),inst_31422);
} else {
if((state_val_31476 === (37))){
var inst_31458 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31519_31559 = state_31475__$1;
(statearr_31519_31559[(2)] = inst_31458);

(statearr_31519_31559[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (8))){
var inst_31397 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31475__$1,(11),inst_31397);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27425__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27330__auto__,c__27425__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto____0 = (function (){
var statearr_31520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31520[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto__);

(statearr_31520[(1)] = (1));

return statearr_31520;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto____1 = (function (state_31475){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_31475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e31521){if((e31521 instanceof Object)){
var ex__27334__auto__ = e31521;
var statearr_31522_31560 = state_31475;
(statearr_31522_31560[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31561 = state_31475;
state_31475 = G__31561;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto__ = function(state_31475){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto____1.call(this,state_31475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto__,msg_hist,msg_names,msg))
})();
var state__27427__auto__ = (function (){var statearr_31523 = f__27426__auto__.call(null);
(statearr_31523[(6)] = c__27425__auto__);

return statearr_31523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto__,msg_hist,msg_names,msg))
);

return c__27425__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27425__auto___31590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___31590,ch){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___31590,ch){
return (function (state_31576){
var state_val_31577 = (state_31576[(1)]);
if((state_val_31577 === (1))){
var state_31576__$1 = state_31576;
var statearr_31578_31591 = state_31576__$1;
(statearr_31578_31591[(2)] = null);

(statearr_31578_31591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (2))){
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31576__$1,(4),ch);
} else {
if((state_val_31577 === (3))){
var inst_31574 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31576__$1,inst_31574);
} else {
if((state_val_31577 === (4))){
var inst_31564 = (state_31576[(7)]);
var inst_31564__$1 = (state_31576[(2)]);
var state_31576__$1 = (function (){var statearr_31579 = state_31576;
(statearr_31579[(7)] = inst_31564__$1);

return statearr_31579;
})();
if(cljs.core.truth_(inst_31564__$1)){
var statearr_31580_31592 = state_31576__$1;
(statearr_31580_31592[(1)] = (5));

} else {
var statearr_31581_31593 = state_31576__$1;
(statearr_31581_31593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (5))){
var inst_31564 = (state_31576[(7)]);
var inst_31566 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31564);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31576__$1,(8),inst_31566);
} else {
if((state_val_31577 === (6))){
var state_31576__$1 = state_31576;
var statearr_31582_31594 = state_31576__$1;
(statearr_31582_31594[(2)] = null);

(statearr_31582_31594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (7))){
var inst_31572 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31583_31595 = state_31576__$1;
(statearr_31583_31595[(2)] = inst_31572);

(statearr_31583_31595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (8))){
var inst_31568 = (state_31576[(2)]);
var state_31576__$1 = (function (){var statearr_31584 = state_31576;
(statearr_31584[(8)] = inst_31568);

return statearr_31584;
})();
var statearr_31585_31596 = state_31576__$1;
(statearr_31585_31596[(2)] = null);

(statearr_31585_31596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27425__auto___31590,ch))
;
return ((function (switch__27330__auto__,c__27425__auto___31590,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27331__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27331__auto____0 = (function (){
var statearr_31586 = [null,null,null,null,null,null,null,null,null];
(statearr_31586[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27331__auto__);

(statearr_31586[(1)] = (1));

return statearr_31586;
});
var figwheel$client$heads_up_plugin_$_state_machine__27331__auto____1 = (function (state_31576){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_31576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e31587){if((e31587 instanceof Object)){
var ex__27334__auto__ = e31587;
var statearr_31588_31597 = state_31576;
(statearr_31588_31597[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31598 = state_31576;
state_31576 = G__31598;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27331__auto__ = function(state_31576){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27331__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27331__auto____1.call(this,state_31576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27331__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27331__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___31590,ch))
})();
var state__27427__auto__ = (function (){var statearr_31589 = f__27426__auto__.call(null);
(statearr_31589[(6)] = c__27425__auto___31590);

return statearr_31589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___31590,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto__){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto__){
return (function (state_31604){
var state_val_31605 = (state_31604[(1)]);
if((state_val_31605 === (1))){
var inst_31599 = cljs.core.async.timeout.call(null,(3000));
var state_31604__$1 = state_31604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31604__$1,(2),inst_31599);
} else {
if((state_val_31605 === (2))){
var inst_31601 = (state_31604[(2)]);
var inst_31602 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31604__$1 = (function (){var statearr_31606 = state_31604;
(statearr_31606[(7)] = inst_31601);

return statearr_31606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31604__$1,inst_31602);
} else {
return null;
}
}
});})(c__27425__auto__))
;
return ((function (switch__27330__auto__,c__27425__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27331__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27331__auto____0 = (function (){
var statearr_31607 = [null,null,null,null,null,null,null,null];
(statearr_31607[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27331__auto__);

(statearr_31607[(1)] = (1));

return statearr_31607;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27331__auto____1 = (function (state_31604){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_31604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e31608){if((e31608 instanceof Object)){
var ex__27334__auto__ = e31608;
var statearr_31609_31611 = state_31604;
(statearr_31609_31611[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31612 = state_31604;
state_31604 = G__31612;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27331__auto__ = function(state_31604){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27331__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27331__auto____1.call(this,state_31604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27331__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27331__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto__))
})();
var state__27427__auto__ = (function (){var statearr_31610 = f__27426__auto__.call(null);
(statearr_31610[(6)] = c__27425__auto__);

return statearr_31610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto__))
);

return c__27425__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31619){
var state_val_31620 = (state_31619[(1)]);
if((state_val_31620 === (1))){
var inst_31613 = cljs.core.async.timeout.call(null,(2000));
var state_31619__$1 = state_31619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31619__$1,(2),inst_31613);
} else {
if((state_val_31620 === (2))){
var inst_31615 = (state_31619[(2)]);
var inst_31616 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31617 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31616);
var state_31619__$1 = (function (){var statearr_31621 = state_31619;
(statearr_31621[(7)] = inst_31615);

return statearr_31621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31619__$1,inst_31617);
} else {
return null;
}
}
});})(c__27425__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27330__auto__,c__27425__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto____0 = (function (){
var statearr_31622 = [null,null,null,null,null,null,null,null];
(statearr_31622[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto__);

(statearr_31622[(1)] = (1));

return statearr_31622;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto____1 = (function (state_31619){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_31619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e31623){if((e31623 instanceof Object)){
var ex__27334__auto__ = e31623;
var statearr_31624_31626 = state_31619;
(statearr_31624_31626[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31627 = state_31619;
state_31619 = G__31627;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto__ = function(state_31619){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto____1.call(this,state_31619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27427__auto__ = (function (){var statearr_31625 = f__27426__auto__.call(null);
(statearr_31625[(6)] = c__27425__auto__);

return statearr_31625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto__,figwheel_version,temp__5457__auto__))
);

return c__27425__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31628){
var map__31629 = p__31628;
var map__31629__$1 = (((((!((map__31629 == null))))?(((((map__31629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31629):map__31629);
var file = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31631 = "";
var G__31631__$1 = (cljs.core.truth_(file)?[G__31631,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31631);
var G__31631__$2 = (cljs.core.truth_(line)?[G__31631__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31631__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__31631__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31631__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31632){
var map__31633 = p__31632;
var map__31633__$1 = (((((!((map__31633 == null))))?(((((map__31633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31633):map__31633);
var ed = map__31633__$1;
var exception_data = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31636 = (function (){var G__31635 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31635)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31635;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31636);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31637){
var map__31638 = p__31637;
var map__31638__$1 = (((((!((map__31638 == null))))?(((((map__31638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31638):map__31638);
var w = map__31638__$1;
var message = cljs.core.get.call(null,map__31638__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31640 = cljs.core.seq.call(null,plugins);
var chunk__31641 = null;
var count__31642 = (0);
var i__31643 = (0);
while(true){
if((i__31643 < count__31642)){
var vec__31650 = cljs.core._nth.call(null,chunk__31641,i__31643);
var k = cljs.core.nth.call(null,vec__31650,(0),null);
var plugin = cljs.core.nth.call(null,vec__31650,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31656 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31640,chunk__31641,count__31642,i__31643,pl_31656,vec__31650,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31656.call(null,msg_hist);
});})(seq__31640,chunk__31641,count__31642,i__31643,pl_31656,vec__31650,k,plugin))
);
} else {
}


var G__31657 = seq__31640;
var G__31658 = chunk__31641;
var G__31659 = count__31642;
var G__31660 = (i__31643 + (1));
seq__31640 = G__31657;
chunk__31641 = G__31658;
count__31642 = G__31659;
i__31643 = G__31660;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31640);
if(temp__5457__auto__){
var seq__31640__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31640__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31640__$1);
var G__31661 = cljs.core.chunk_rest.call(null,seq__31640__$1);
var G__31662 = c__4550__auto__;
var G__31663 = cljs.core.count.call(null,c__4550__auto__);
var G__31664 = (0);
seq__31640 = G__31661;
chunk__31641 = G__31662;
count__31642 = G__31663;
i__31643 = G__31664;
continue;
} else {
var vec__31653 = cljs.core.first.call(null,seq__31640__$1);
var k = cljs.core.nth.call(null,vec__31653,(0),null);
var plugin = cljs.core.nth.call(null,vec__31653,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31665 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31640,chunk__31641,count__31642,i__31643,pl_31665,vec__31653,k,plugin,seq__31640__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31665.call(null,msg_hist);
});})(seq__31640,chunk__31641,count__31642,i__31643,pl_31665,vec__31653,k,plugin,seq__31640__$1,temp__5457__auto__))
);
} else {
}


var G__31666 = cljs.core.next.call(null,seq__31640__$1);
var G__31667 = null;
var G__31668 = (0);
var G__31669 = (0);
seq__31640 = G__31666;
chunk__31641 = G__31667;
count__31642 = G__31668;
i__31643 = G__31669;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31671 = arguments.length;
switch (G__31671) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31672_31677 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31673_31678 = null;
var count__31674_31679 = (0);
var i__31675_31680 = (0);
while(true){
if((i__31675_31680 < count__31674_31679)){
var msg_31681 = cljs.core._nth.call(null,chunk__31673_31678,i__31675_31680);
figwheel.client.socket.handle_incoming_message.call(null,msg_31681);


var G__31682 = seq__31672_31677;
var G__31683 = chunk__31673_31678;
var G__31684 = count__31674_31679;
var G__31685 = (i__31675_31680 + (1));
seq__31672_31677 = G__31682;
chunk__31673_31678 = G__31683;
count__31674_31679 = G__31684;
i__31675_31680 = G__31685;
continue;
} else {
var temp__5457__auto___31686 = cljs.core.seq.call(null,seq__31672_31677);
if(temp__5457__auto___31686){
var seq__31672_31687__$1 = temp__5457__auto___31686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31672_31687__$1)){
var c__4550__auto___31688 = cljs.core.chunk_first.call(null,seq__31672_31687__$1);
var G__31689 = cljs.core.chunk_rest.call(null,seq__31672_31687__$1);
var G__31690 = c__4550__auto___31688;
var G__31691 = cljs.core.count.call(null,c__4550__auto___31688);
var G__31692 = (0);
seq__31672_31677 = G__31689;
chunk__31673_31678 = G__31690;
count__31674_31679 = G__31691;
i__31675_31680 = G__31692;
continue;
} else {
var msg_31693 = cljs.core.first.call(null,seq__31672_31687__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31693);


var G__31694 = cljs.core.next.call(null,seq__31672_31687__$1);
var G__31695 = null;
var G__31696 = (0);
var G__31697 = (0);
seq__31672_31677 = G__31694;
chunk__31673_31678 = G__31695;
count__31674_31679 = G__31696;
i__31675_31680 = G__31697;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31702 = arguments.length;
var i__4731__auto___31703 = (0);
while(true){
if((i__4731__auto___31703 < len__4730__auto___31702)){
args__4736__auto__.push((arguments[i__4731__auto___31703]));

var G__31704 = (i__4731__auto___31703 + (1));
i__4731__auto___31703 = G__31704;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31699){
var map__31700 = p__31699;
var map__31700__$1 = (((((!((map__31700 == null))))?(((((map__31700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31700):map__31700);
var opts = map__31700__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31698){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31698));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31705){if((e31705 instanceof Error)){
var e = e31705;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31705;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31706){
var map__31707 = p__31706;
var map__31707__$1 = (((((!((map__31707 == null))))?(((((map__31707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31707):map__31707);
var msg_name = cljs.core.get.call(null,map__31707__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1553263599707
