// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30899){
var map__30900 = p__30899;
var map__30900__$1 = (((((!((map__30900 == null))))?(((((map__30900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30900):map__30900);
var m = map__30900__$1;
var n = cljs.core.get.call(null,map__30900__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30900__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30902_30934 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30903_30935 = null;
var count__30904_30936 = (0);
var i__30905_30937 = (0);
while(true){
if((i__30905_30937 < count__30904_30936)){
var f_30938 = cljs.core._nth.call(null,chunk__30903_30935,i__30905_30937);
cljs.core.println.call(null,"  ",f_30938);


var G__30939 = seq__30902_30934;
var G__30940 = chunk__30903_30935;
var G__30941 = count__30904_30936;
var G__30942 = (i__30905_30937 + (1));
seq__30902_30934 = G__30939;
chunk__30903_30935 = G__30940;
count__30904_30936 = G__30941;
i__30905_30937 = G__30942;
continue;
} else {
var temp__5457__auto___30943 = cljs.core.seq.call(null,seq__30902_30934);
if(temp__5457__auto___30943){
var seq__30902_30944__$1 = temp__5457__auto___30943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30902_30944__$1)){
var c__4550__auto___30945 = cljs.core.chunk_first.call(null,seq__30902_30944__$1);
var G__30946 = cljs.core.chunk_rest.call(null,seq__30902_30944__$1);
var G__30947 = c__4550__auto___30945;
var G__30948 = cljs.core.count.call(null,c__4550__auto___30945);
var G__30949 = (0);
seq__30902_30934 = G__30946;
chunk__30903_30935 = G__30947;
count__30904_30936 = G__30948;
i__30905_30937 = G__30949;
continue;
} else {
var f_30950 = cljs.core.first.call(null,seq__30902_30944__$1);
cljs.core.println.call(null,"  ",f_30950);


var G__30951 = cljs.core.next.call(null,seq__30902_30944__$1);
var G__30952 = null;
var G__30953 = (0);
var G__30954 = (0);
seq__30902_30934 = G__30951;
chunk__30903_30935 = G__30952;
count__30904_30936 = G__30953;
i__30905_30937 = G__30954;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30955 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30955);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30955)))?cljs.core.second.call(null,arglists_30955):arglists_30955));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30906_30956 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30907_30957 = null;
var count__30908_30958 = (0);
var i__30909_30959 = (0);
while(true){
if((i__30909_30959 < count__30908_30958)){
var vec__30920_30960 = cljs.core._nth.call(null,chunk__30907_30957,i__30909_30959);
var name_30961 = cljs.core.nth.call(null,vec__30920_30960,(0),null);
var map__30923_30962 = cljs.core.nth.call(null,vec__30920_30960,(1),null);
var map__30923_30963__$1 = (((((!((map__30923_30962 == null))))?(((((map__30923_30962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30923_30962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30923_30962):map__30923_30962);
var doc_30964 = cljs.core.get.call(null,map__30923_30963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30965 = cljs.core.get.call(null,map__30923_30963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30961);

cljs.core.println.call(null," ",arglists_30965);

if(cljs.core.truth_(doc_30964)){
cljs.core.println.call(null," ",doc_30964);
} else {
}


var G__30966 = seq__30906_30956;
var G__30967 = chunk__30907_30957;
var G__30968 = count__30908_30958;
var G__30969 = (i__30909_30959 + (1));
seq__30906_30956 = G__30966;
chunk__30907_30957 = G__30967;
count__30908_30958 = G__30968;
i__30909_30959 = G__30969;
continue;
} else {
var temp__5457__auto___30970 = cljs.core.seq.call(null,seq__30906_30956);
if(temp__5457__auto___30970){
var seq__30906_30971__$1 = temp__5457__auto___30970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30906_30971__$1)){
var c__4550__auto___30972 = cljs.core.chunk_first.call(null,seq__30906_30971__$1);
var G__30973 = cljs.core.chunk_rest.call(null,seq__30906_30971__$1);
var G__30974 = c__4550__auto___30972;
var G__30975 = cljs.core.count.call(null,c__4550__auto___30972);
var G__30976 = (0);
seq__30906_30956 = G__30973;
chunk__30907_30957 = G__30974;
count__30908_30958 = G__30975;
i__30909_30959 = G__30976;
continue;
} else {
var vec__30925_30977 = cljs.core.first.call(null,seq__30906_30971__$1);
var name_30978 = cljs.core.nth.call(null,vec__30925_30977,(0),null);
var map__30928_30979 = cljs.core.nth.call(null,vec__30925_30977,(1),null);
var map__30928_30980__$1 = (((((!((map__30928_30979 == null))))?(((((map__30928_30979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30928_30979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30928_30979):map__30928_30979);
var doc_30981 = cljs.core.get.call(null,map__30928_30980__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30982 = cljs.core.get.call(null,map__30928_30980__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30978);

cljs.core.println.call(null," ",arglists_30982);

if(cljs.core.truth_(doc_30981)){
cljs.core.println.call(null," ",doc_30981);
} else {
}


var G__30983 = cljs.core.next.call(null,seq__30906_30971__$1);
var G__30984 = null;
var G__30985 = (0);
var G__30986 = (0);
seq__30906_30956 = G__30983;
chunk__30907_30957 = G__30984;
count__30908_30958 = G__30985;
i__30909_30959 = G__30986;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30930 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30931 = null;
var count__30932 = (0);
var i__30933 = (0);
while(true){
if((i__30933 < count__30932)){
var role = cljs.core._nth.call(null,chunk__30931,i__30933);
var temp__5457__auto___30987__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30987__$1)){
var spec_30988 = temp__5457__auto___30987__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30988));
} else {
}


var G__30989 = seq__30930;
var G__30990 = chunk__30931;
var G__30991 = count__30932;
var G__30992 = (i__30933 + (1));
seq__30930 = G__30989;
chunk__30931 = G__30990;
count__30932 = G__30991;
i__30933 = G__30992;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30930);
if(temp__5457__auto____$1){
var seq__30930__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30930__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30930__$1);
var G__30993 = cljs.core.chunk_rest.call(null,seq__30930__$1);
var G__30994 = c__4550__auto__;
var G__30995 = cljs.core.count.call(null,c__4550__auto__);
var G__30996 = (0);
seq__30930 = G__30993;
chunk__30931 = G__30994;
count__30932 = G__30995;
i__30933 = G__30996;
continue;
} else {
var role = cljs.core.first.call(null,seq__30930__$1);
var temp__5457__auto___30997__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30997__$2)){
var spec_30998 = temp__5457__auto___30997__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30998));
} else {
}


var G__30999 = cljs.core.next.call(null,seq__30930__$1);
var G__31000 = null;
var G__31001 = (0);
var G__31002 = (0);
seq__30930 = G__30999;
chunk__30931 = G__31000;
count__30932 = G__31001;
i__30933 = G__31002;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31003 = cljs.core.conj.call(null,via,t);
var G__31004 = cljs.core.ex_cause.call(null,t);
via = G__31003;
t = G__31004;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31007 = datafied_throwable;
var map__31007__$1 = (((((!((map__31007 == null))))?(((((map__31007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31007):map__31007);
var via = cljs.core.get.call(null,map__31007__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31007__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31007__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31008 = cljs.core.last.call(null,via);
var map__31008__$1 = (((((!((map__31008 == null))))?(((((map__31008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31008):map__31008);
var type = cljs.core.get.call(null,map__31008__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31008__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31008__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31009 = data;
var map__31009__$1 = (((((!((map__31009 == null))))?(((((map__31009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31009):map__31009);
var problems = cljs.core.get.call(null,map__31009__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31009__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31009__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31010 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31010__$1 = (((((!((map__31010 == null))))?(((((map__31010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31010):map__31010);
var top_data = map__31010__$1;
var source = cljs.core.get.call(null,map__31010__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31015 = phase;
var G__31015__$1 = (((G__31015 instanceof cljs.core.Keyword))?G__31015.fqn:null);
switch (G__31015__$1) {
case "read-source":
var map__31016 = data;
var map__31016__$1 = (((((!((map__31016 == null))))?(((((map__31016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31016):map__31016);
var line = cljs.core.get.call(null,map__31016__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31016__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31018 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31018__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31018,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31018);
var G__31018__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31018__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31018__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31018__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31018__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31019 = top_data;
var G__31019__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31019,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31019);
var G__31019__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31019__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31019__$1);
var G__31019__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31019__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31019__$2);
var G__31019__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31019__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31019__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31019__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31019__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31020 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31020,(0),null);
var method = cljs.core.nth.call(null,vec__31020,(1),null);
var file = cljs.core.nth.call(null,vec__31020,(2),null);
var line = cljs.core.nth.call(null,vec__31020,(3),null);
var G__31023 = top_data;
var G__31023__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31023,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31023);
var G__31023__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31023__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31023__$1);
var G__31023__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__31023__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31023__$2);
var G__31023__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31023__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31023__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31023__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31023__$4;
}

break;
case "execution":
var vec__31024 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31024,(0),null);
var method = cljs.core.nth.call(null,vec__31024,(1),null);
var file = cljs.core.nth.call(null,vec__31024,(2),null);
var line = cljs.core.nth.call(null,vec__31024,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__31024,source__$1,method,file,line,G__31015,G__31015__$1,map__31007,map__31007__$1,via,trace,phase,map__31008,map__31008__$1,type,message,data,map__31009,map__31009__$1,problems,fn,caller,map__31010,map__31010__$1,top_data,source){
return (function (p1__31006_SHARP_){
var or__4131__auto__ = (p1__31006_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31006_SHARP_);
}
});})(vec__31024,source__$1,method,file,line,G__31015,G__31015__$1,map__31007,map__31007__$1,via,trace,phase,map__31008,map__31008__$1,type,message,data,map__31009,map__31009__$1,problems,fn,caller,map__31010,map__31010__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31027 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31027__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31027,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31027);
var G__31027__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31027__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31027__$1);
var G__31027__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31027__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31027__$2);
var G__31027__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31027__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31027__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31027__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31027__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31015__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31031){
var map__31032 = p__31031;
var map__31032__$1 = (((((!((map__31032 == null))))?(((((map__31032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31032):map__31032);
var triage_data = map__31032__$1;
var phase = cljs.core.get.call(null,map__31032__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31032__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31032__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31032__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31032__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31032__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31032__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31032__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31034 = phase;
var G__31034__$1 = (((G__31034 instanceof cljs.core.Keyword))?G__31034.fqn:null);
switch (G__31034__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31035_31044 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31036_31045 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31037_31046 = true;
var _STAR_print_fn_STAR__temp_val__31038_31047 = ((function (_STAR_print_newline_STAR__orig_val__31035_31044,_STAR_print_fn_STAR__orig_val__31036_31045,_STAR_print_newline_STAR__temp_val__31037_31046,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31035_31044,_STAR_print_fn_STAR__orig_val__31036_31045,_STAR_print_newline_STAR__temp_val__31037_31046,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31037_31046;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31038_31047;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31035_31044,_STAR_print_fn_STAR__orig_val__31036_31045,_STAR_print_newline_STAR__temp_val__31037_31046,_STAR_print_fn_STAR__temp_val__31038_31047,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__31035_31044,_STAR_print_fn_STAR__orig_val__31036_31045,_STAR_print_newline_STAR__temp_val__31037_31046,_STAR_print_fn_STAR__temp_val__31038_31047,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31029_SHARP_){
return cljs.core.dissoc.call(null,p1__31029_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31035_31044,_STAR_print_fn_STAR__orig_val__31036_31045,_STAR_print_newline_STAR__temp_val__31037_31046,_STAR_print_fn_STAR__temp_val__31038_31047,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31035_31044,_STAR_print_fn_STAR__orig_val__31036_31045,_STAR_print_newline_STAR__temp_val__31037_31046,_STAR_print_fn_STAR__temp_val__31038_31047,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31036_31045;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31035_31044;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31039_31048 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31040_31049 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31041_31050 = true;
var _STAR_print_fn_STAR__temp_val__31042_31051 = ((function (_STAR_print_newline_STAR__orig_val__31039_31048,_STAR_print_fn_STAR__orig_val__31040_31049,_STAR_print_newline_STAR__temp_val__31041_31050,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31039_31048,_STAR_print_fn_STAR__orig_val__31040_31049,_STAR_print_newline_STAR__temp_val__31041_31050,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31041_31050;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31042_31051;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31039_31048,_STAR_print_fn_STAR__orig_val__31040_31049,_STAR_print_newline_STAR__temp_val__31041_31050,_STAR_print_fn_STAR__temp_val__31042_31051,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__31039_31048,_STAR_print_fn_STAR__orig_val__31040_31049,_STAR_print_newline_STAR__temp_val__31041_31050,_STAR_print_fn_STAR__temp_val__31042_31051,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31030_SHARP_){
return cljs.core.dissoc.call(null,p1__31030_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31039_31048,_STAR_print_fn_STAR__orig_val__31040_31049,_STAR_print_newline_STAR__temp_val__31041_31050,_STAR_print_fn_STAR__temp_val__31042_31051,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31039_31048,_STAR_print_fn_STAR__orig_val__31040_31049,_STAR_print_newline_STAR__temp_val__31041_31050,_STAR_print_fn_STAR__temp_val__31042_31051,sb__4661__auto__,G__31034,G__31034__$1,loc,class_name,simple_class,cause_type,format,map__31032,map__31032__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31040_31049;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31039_31048;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31034__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1553263599052
