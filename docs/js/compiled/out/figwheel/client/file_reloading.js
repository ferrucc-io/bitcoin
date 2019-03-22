// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29369_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29369_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29370 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29371 = null;
var count__29372 = (0);
var i__29373 = (0);
while(true){
if((i__29373 < count__29372)){
var n = cljs.core._nth.call(null,chunk__29371,i__29373);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29374 = seq__29370;
var G__29375 = chunk__29371;
var G__29376 = count__29372;
var G__29377 = (i__29373 + (1));
seq__29370 = G__29374;
chunk__29371 = G__29375;
count__29372 = G__29376;
i__29373 = G__29377;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29370);
if(temp__5457__auto__){
var seq__29370__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29370__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29370__$1);
var G__29378 = cljs.core.chunk_rest.call(null,seq__29370__$1);
var G__29379 = c__4550__auto__;
var G__29380 = cljs.core.count.call(null,c__4550__auto__);
var G__29381 = (0);
seq__29370 = G__29378;
chunk__29371 = G__29379;
count__29372 = G__29380;
i__29373 = G__29381;
continue;
} else {
var n = cljs.core.first.call(null,seq__29370__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29382 = cljs.core.next.call(null,seq__29370__$1);
var G__29383 = null;
var G__29384 = (0);
var G__29385 = (0);
seq__29370 = G__29382;
chunk__29371 = G__29383;
count__29372 = G__29384;
i__29373 = G__29385;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29386){
var vec__29387 = p__29386;
var _ = cljs.core.nth.call(null,vec__29387,(0),null);
var v = cljs.core.nth.call(null,vec__29387,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__29390){
var vec__29391 = p__29390;
var k = cljs.core.nth.call(null,vec__29391,(0),null);
var v = cljs.core.nth.call(null,vec__29391,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29403_29411 = cljs.core.seq.call(null,deps);
var chunk__29404_29412 = null;
var count__29405_29413 = (0);
var i__29406_29414 = (0);
while(true){
if((i__29406_29414 < count__29405_29413)){
var dep_29415 = cljs.core._nth.call(null,chunk__29404_29412,i__29406_29414);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_29415;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29415));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29415,(depth + (1)),state);
} else {
}


var G__29416 = seq__29403_29411;
var G__29417 = chunk__29404_29412;
var G__29418 = count__29405_29413;
var G__29419 = (i__29406_29414 + (1));
seq__29403_29411 = G__29416;
chunk__29404_29412 = G__29417;
count__29405_29413 = G__29418;
i__29406_29414 = G__29419;
continue;
} else {
var temp__5457__auto___29420 = cljs.core.seq.call(null,seq__29403_29411);
if(temp__5457__auto___29420){
var seq__29403_29421__$1 = temp__5457__auto___29420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29403_29421__$1)){
var c__4550__auto___29422 = cljs.core.chunk_first.call(null,seq__29403_29421__$1);
var G__29423 = cljs.core.chunk_rest.call(null,seq__29403_29421__$1);
var G__29424 = c__4550__auto___29422;
var G__29425 = cljs.core.count.call(null,c__4550__auto___29422);
var G__29426 = (0);
seq__29403_29411 = G__29423;
chunk__29404_29412 = G__29424;
count__29405_29413 = G__29425;
i__29406_29414 = G__29426;
continue;
} else {
var dep_29427 = cljs.core.first.call(null,seq__29403_29421__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_29427;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29427));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29427,(depth + (1)),state);
} else {
}


var G__29428 = cljs.core.next.call(null,seq__29403_29421__$1);
var G__29429 = null;
var G__29430 = (0);
var G__29431 = (0);
seq__29403_29411 = G__29428;
chunk__29404_29412 = G__29429;
count__29405_29413 = G__29430;
i__29406_29414 = G__29431;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29407){
var vec__29408 = p__29407;
var seq__29409 = cljs.core.seq.call(null,vec__29408);
var first__29410 = cljs.core.first.call(null,seq__29409);
var seq__29409__$1 = cljs.core.next.call(null,seq__29409);
var x = first__29410;
var xs = seq__29409__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29408,seq__29409,first__29410,seq__29409__$1,x,xs,get_deps__$1){
return (function (p1__29394_SHARP_){
return clojure.set.difference.call(null,p1__29394_SHARP_,x);
});})(vec__29408,seq__29409,first__29410,seq__29409__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29432 = cljs.core.seq.call(null,provides);
var chunk__29433 = null;
var count__29434 = (0);
var i__29435 = (0);
while(true){
if((i__29435 < count__29434)){
var prov = cljs.core._nth.call(null,chunk__29433,i__29435);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29444_29452 = cljs.core.seq.call(null,requires);
var chunk__29445_29453 = null;
var count__29446_29454 = (0);
var i__29447_29455 = (0);
while(true){
if((i__29447_29455 < count__29446_29454)){
var req_29456 = cljs.core._nth.call(null,chunk__29445_29453,i__29447_29455);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29456,prov);


var G__29457 = seq__29444_29452;
var G__29458 = chunk__29445_29453;
var G__29459 = count__29446_29454;
var G__29460 = (i__29447_29455 + (1));
seq__29444_29452 = G__29457;
chunk__29445_29453 = G__29458;
count__29446_29454 = G__29459;
i__29447_29455 = G__29460;
continue;
} else {
var temp__5457__auto___29461 = cljs.core.seq.call(null,seq__29444_29452);
if(temp__5457__auto___29461){
var seq__29444_29462__$1 = temp__5457__auto___29461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29444_29462__$1)){
var c__4550__auto___29463 = cljs.core.chunk_first.call(null,seq__29444_29462__$1);
var G__29464 = cljs.core.chunk_rest.call(null,seq__29444_29462__$1);
var G__29465 = c__4550__auto___29463;
var G__29466 = cljs.core.count.call(null,c__4550__auto___29463);
var G__29467 = (0);
seq__29444_29452 = G__29464;
chunk__29445_29453 = G__29465;
count__29446_29454 = G__29466;
i__29447_29455 = G__29467;
continue;
} else {
var req_29468 = cljs.core.first.call(null,seq__29444_29462__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29468,prov);


var G__29469 = cljs.core.next.call(null,seq__29444_29462__$1);
var G__29470 = null;
var G__29471 = (0);
var G__29472 = (0);
seq__29444_29452 = G__29469;
chunk__29445_29453 = G__29470;
count__29446_29454 = G__29471;
i__29447_29455 = G__29472;
continue;
}
} else {
}
}
break;
}


var G__29473 = seq__29432;
var G__29474 = chunk__29433;
var G__29475 = count__29434;
var G__29476 = (i__29435 + (1));
seq__29432 = G__29473;
chunk__29433 = G__29474;
count__29434 = G__29475;
i__29435 = G__29476;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29432);
if(temp__5457__auto__){
var seq__29432__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29432__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29432__$1);
var G__29477 = cljs.core.chunk_rest.call(null,seq__29432__$1);
var G__29478 = c__4550__auto__;
var G__29479 = cljs.core.count.call(null,c__4550__auto__);
var G__29480 = (0);
seq__29432 = G__29477;
chunk__29433 = G__29478;
count__29434 = G__29479;
i__29435 = G__29480;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29432__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29448_29481 = cljs.core.seq.call(null,requires);
var chunk__29449_29482 = null;
var count__29450_29483 = (0);
var i__29451_29484 = (0);
while(true){
if((i__29451_29484 < count__29450_29483)){
var req_29485 = cljs.core._nth.call(null,chunk__29449_29482,i__29451_29484);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29485,prov);


var G__29486 = seq__29448_29481;
var G__29487 = chunk__29449_29482;
var G__29488 = count__29450_29483;
var G__29489 = (i__29451_29484 + (1));
seq__29448_29481 = G__29486;
chunk__29449_29482 = G__29487;
count__29450_29483 = G__29488;
i__29451_29484 = G__29489;
continue;
} else {
var temp__5457__auto___29490__$1 = cljs.core.seq.call(null,seq__29448_29481);
if(temp__5457__auto___29490__$1){
var seq__29448_29491__$1 = temp__5457__auto___29490__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29448_29491__$1)){
var c__4550__auto___29492 = cljs.core.chunk_first.call(null,seq__29448_29491__$1);
var G__29493 = cljs.core.chunk_rest.call(null,seq__29448_29491__$1);
var G__29494 = c__4550__auto___29492;
var G__29495 = cljs.core.count.call(null,c__4550__auto___29492);
var G__29496 = (0);
seq__29448_29481 = G__29493;
chunk__29449_29482 = G__29494;
count__29450_29483 = G__29495;
i__29451_29484 = G__29496;
continue;
} else {
var req_29497 = cljs.core.first.call(null,seq__29448_29491__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29497,prov);


var G__29498 = cljs.core.next.call(null,seq__29448_29491__$1);
var G__29499 = null;
var G__29500 = (0);
var G__29501 = (0);
seq__29448_29481 = G__29498;
chunk__29449_29482 = G__29499;
count__29450_29483 = G__29500;
i__29451_29484 = G__29501;
continue;
}
} else {
}
}
break;
}


var G__29502 = cljs.core.next.call(null,seq__29432__$1);
var G__29503 = null;
var G__29504 = (0);
var G__29505 = (0);
seq__29432 = G__29502;
chunk__29433 = G__29503;
count__29434 = G__29504;
i__29435 = G__29505;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29506_29510 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29507_29511 = null;
var count__29508_29512 = (0);
var i__29509_29513 = (0);
while(true){
if((i__29509_29513 < count__29508_29512)){
var ns_29514 = cljs.core._nth.call(null,chunk__29507_29511,i__29509_29513);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29514);


var G__29515 = seq__29506_29510;
var G__29516 = chunk__29507_29511;
var G__29517 = count__29508_29512;
var G__29518 = (i__29509_29513 + (1));
seq__29506_29510 = G__29515;
chunk__29507_29511 = G__29516;
count__29508_29512 = G__29517;
i__29509_29513 = G__29518;
continue;
} else {
var temp__5457__auto___29519 = cljs.core.seq.call(null,seq__29506_29510);
if(temp__5457__auto___29519){
var seq__29506_29520__$1 = temp__5457__auto___29519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29506_29520__$1)){
var c__4550__auto___29521 = cljs.core.chunk_first.call(null,seq__29506_29520__$1);
var G__29522 = cljs.core.chunk_rest.call(null,seq__29506_29520__$1);
var G__29523 = c__4550__auto___29521;
var G__29524 = cljs.core.count.call(null,c__4550__auto___29521);
var G__29525 = (0);
seq__29506_29510 = G__29522;
chunk__29507_29511 = G__29523;
count__29508_29512 = G__29524;
i__29509_29513 = G__29525;
continue;
} else {
var ns_29526 = cljs.core.first.call(null,seq__29506_29520__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29526);


var G__29527 = cljs.core.next.call(null,seq__29506_29520__$1);
var G__29528 = null;
var G__29529 = (0);
var G__29530 = (0);
seq__29506_29510 = G__29527;
chunk__29507_29511 = G__29528;
count__29508_29512 = G__29529;
i__29509_29513 = G__29530;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29531__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29532__i = 0, G__29532__a = new Array(arguments.length -  0);
while (G__29532__i < G__29532__a.length) {G__29532__a[G__29532__i] = arguments[G__29532__i + 0]; ++G__29532__i;}
  args = new cljs.core.IndexedSeq(G__29532__a,0,null);
} 
return G__29531__delegate.call(this,args);};
G__29531.cljs$lang$maxFixedArity = 0;
G__29531.cljs$lang$applyTo = (function (arglist__29533){
var args = cljs.core.seq(arglist__29533);
return G__29531__delegate(args);
});
G__29531.cljs$core$IFn$_invoke$arity$variadic = G__29531__delegate;
return G__29531;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29534_SHARP_,p2__29535_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29534_SHARP_)),p2__29535_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29536_SHARP_,p2__29537_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29536_SHARP_),p2__29537_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29538 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29538.addCallback(((function (G__29538){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29538))
);

G__29538.addErrback(((function (G__29538){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29538))
);

return G__29538;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29539){if((e29539 instanceof Error)){
var e = e29539;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29539;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29540){if((e29540 instanceof Error)){
var e = e29540;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29540;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29541 = cljs.core._EQ_;
var expr__29542 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29541.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29542))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29541.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29542))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29541.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29542))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29541,expr__29542){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29541,expr__29542))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29544,callback){
var map__29545 = p__29544;
var map__29545__$1 = (((((!((map__29545 == null))))?(((((map__29545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29545):map__29545);
var file_msg = map__29545__$1;
var request_url = cljs.core.get.call(null,map__29545__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29545,map__29545__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29545,map__29545__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto__){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto__){
return (function (state_29583){
var state_val_29584 = (state_29583[(1)]);
if((state_val_29584 === (7))){
var inst_29579 = (state_29583[(2)]);
var state_29583__$1 = state_29583;
var statearr_29585_29611 = state_29583__$1;
(statearr_29585_29611[(2)] = inst_29579);

(statearr_29585_29611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (1))){
var state_29583__$1 = state_29583;
var statearr_29586_29612 = state_29583__$1;
(statearr_29586_29612[(2)] = null);

(statearr_29586_29612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (4))){
var inst_29549 = (state_29583[(7)]);
var inst_29549__$1 = (state_29583[(2)]);
var state_29583__$1 = (function (){var statearr_29587 = state_29583;
(statearr_29587[(7)] = inst_29549__$1);

return statearr_29587;
})();
if(cljs.core.truth_(inst_29549__$1)){
var statearr_29588_29613 = state_29583__$1;
(statearr_29588_29613[(1)] = (5));

} else {
var statearr_29589_29614 = state_29583__$1;
(statearr_29589_29614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (15))){
var inst_29564 = (state_29583[(8)]);
var inst_29562 = (state_29583[(9)]);
var inst_29566 = inst_29564.call(null,inst_29562);
var state_29583__$1 = state_29583;
var statearr_29590_29615 = state_29583__$1;
(statearr_29590_29615[(2)] = inst_29566);

(statearr_29590_29615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (13))){
var inst_29573 = (state_29583[(2)]);
var state_29583__$1 = state_29583;
var statearr_29591_29616 = state_29583__$1;
(statearr_29591_29616[(2)] = inst_29573);

(statearr_29591_29616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (6))){
var state_29583__$1 = state_29583;
var statearr_29592_29617 = state_29583__$1;
(statearr_29592_29617[(2)] = null);

(statearr_29592_29617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (17))){
var inst_29570 = (state_29583[(2)]);
var state_29583__$1 = state_29583;
var statearr_29593_29618 = state_29583__$1;
(statearr_29593_29618[(2)] = inst_29570);

(statearr_29593_29618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (3))){
var inst_29581 = (state_29583[(2)]);
var state_29583__$1 = state_29583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29583__$1,inst_29581);
} else {
if((state_val_29584 === (12))){
var state_29583__$1 = state_29583;
var statearr_29594_29619 = state_29583__$1;
(statearr_29594_29619[(2)] = null);

(statearr_29594_29619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (2))){
var state_29583__$1 = state_29583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29583__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29584 === (11))){
var inst_29554 = (state_29583[(10)]);
var inst_29560 = figwheel.client.file_reloading.blocking_load.call(null,inst_29554);
var state_29583__$1 = state_29583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29583__$1,(14),inst_29560);
} else {
if((state_val_29584 === (9))){
var inst_29554 = (state_29583[(10)]);
var state_29583__$1 = state_29583;
if(cljs.core.truth_(inst_29554)){
var statearr_29595_29620 = state_29583__$1;
(statearr_29595_29620[(1)] = (11));

} else {
var statearr_29596_29621 = state_29583__$1;
(statearr_29596_29621[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (5))){
var inst_29549 = (state_29583[(7)]);
var inst_29555 = (state_29583[(11)]);
var inst_29554 = cljs.core.nth.call(null,inst_29549,(0),null);
var inst_29555__$1 = cljs.core.nth.call(null,inst_29549,(1),null);
var state_29583__$1 = (function (){var statearr_29597 = state_29583;
(statearr_29597[(10)] = inst_29554);

(statearr_29597[(11)] = inst_29555__$1);

return statearr_29597;
})();
if(cljs.core.truth_(inst_29555__$1)){
var statearr_29598_29622 = state_29583__$1;
(statearr_29598_29622[(1)] = (8));

} else {
var statearr_29599_29623 = state_29583__$1;
(statearr_29599_29623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (14))){
var inst_29564 = (state_29583[(8)]);
var inst_29554 = (state_29583[(10)]);
var inst_29562 = (state_29583[(2)]);
var inst_29563 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29564__$1 = cljs.core.get.call(null,inst_29563,inst_29554);
var state_29583__$1 = (function (){var statearr_29600 = state_29583;
(statearr_29600[(8)] = inst_29564__$1);

(statearr_29600[(9)] = inst_29562);

return statearr_29600;
})();
if(cljs.core.truth_(inst_29564__$1)){
var statearr_29601_29624 = state_29583__$1;
(statearr_29601_29624[(1)] = (15));

} else {
var statearr_29602_29625 = state_29583__$1;
(statearr_29602_29625[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (16))){
var inst_29562 = (state_29583[(9)]);
var inst_29568 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29562);
var state_29583__$1 = state_29583;
var statearr_29603_29626 = state_29583__$1;
(statearr_29603_29626[(2)] = inst_29568);

(statearr_29603_29626[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (10))){
var inst_29575 = (state_29583[(2)]);
var state_29583__$1 = (function (){var statearr_29604 = state_29583;
(statearr_29604[(12)] = inst_29575);

return statearr_29604;
})();
var statearr_29605_29627 = state_29583__$1;
(statearr_29605_29627[(2)] = null);

(statearr_29605_29627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29584 === (8))){
var inst_29555 = (state_29583[(11)]);
var inst_29557 = eval(inst_29555);
var state_29583__$1 = state_29583;
var statearr_29606_29628 = state_29583__$1;
(statearr_29606_29628[(2)] = inst_29557);

(statearr_29606_29628[(1)] = (10));


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
});})(c__27425__auto__))
;
return ((function (switch__27330__auto__,c__27425__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27331__auto__ = null;
var figwheel$client$file_reloading$state_machine__27331__auto____0 = (function (){
var statearr_29607 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29607[(0)] = figwheel$client$file_reloading$state_machine__27331__auto__);

(statearr_29607[(1)] = (1));

return statearr_29607;
});
var figwheel$client$file_reloading$state_machine__27331__auto____1 = (function (state_29583){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_29583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e29608){if((e29608 instanceof Object)){
var ex__27334__auto__ = e29608;
var statearr_29609_29629 = state_29583;
(statearr_29609_29629[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29630 = state_29583;
state_29583 = G__29630;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27331__auto__ = function(state_29583){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27331__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27331__auto____1.call(this,state_29583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27331__auto____0;
figwheel$client$file_reloading$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27331__auto____1;
return figwheel$client$file_reloading$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto__))
})();
var state__27427__auto__ = (function (){var statearr_29610 = f__27426__auto__.call(null);
(statearr_29610[(6)] = c__27425__auto__);

return statearr_29610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto__))
);

return c__27425__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29632 = arguments.length;
switch (G__29632) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29634,callback){
var map__29635 = p__29634;
var map__29635__$1 = (((((!((map__29635 == null))))?(((((map__29635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29635):map__29635);
var file_msg = map__29635__$1;
var namespace = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29635,map__29635__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29635,map__29635__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29637){
var map__29638 = p__29637;
var map__29638__$1 = (((((!((map__29638 == null))))?(((((map__29638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29638):map__29638);
var file_msg = map__29638__$1;
var namespace = cljs.core.get.call(null,map__29638__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29640){
var map__29641 = p__29640;
var map__29641__$1 = (((((!((map__29641 == null))))?(((((map__29641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29641):map__29641);
var file_msg = map__29641__$1;
var namespace = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29643,callback){
var map__29644 = p__29643;
var map__29644__$1 = (((((!((map__29644 == null))))?(((((map__29644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29644):map__29644);
var file_msg = map__29644__$1;
var request_url = cljs.core.get.call(null,map__29644__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27425__auto___29694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___29694,out){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___29694,out){
return (function (state_29679){
var state_val_29680 = (state_29679[(1)]);
if((state_val_29680 === (1))){
var inst_29653 = cljs.core.seq.call(null,files);
var inst_29654 = cljs.core.first.call(null,inst_29653);
var inst_29655 = cljs.core.next.call(null,inst_29653);
var inst_29656 = files;
var state_29679__$1 = (function (){var statearr_29681 = state_29679;
(statearr_29681[(7)] = inst_29656);

(statearr_29681[(8)] = inst_29654);

(statearr_29681[(9)] = inst_29655);

return statearr_29681;
})();
var statearr_29682_29695 = state_29679__$1;
(statearr_29682_29695[(2)] = null);

(statearr_29682_29695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (2))){
var inst_29656 = (state_29679[(7)]);
var inst_29662 = (state_29679[(10)]);
var inst_29661 = cljs.core.seq.call(null,inst_29656);
var inst_29662__$1 = cljs.core.first.call(null,inst_29661);
var inst_29663 = cljs.core.next.call(null,inst_29661);
var inst_29664 = (inst_29662__$1 == null);
var inst_29665 = cljs.core.not.call(null,inst_29664);
var state_29679__$1 = (function (){var statearr_29683 = state_29679;
(statearr_29683[(11)] = inst_29663);

(statearr_29683[(10)] = inst_29662__$1);

return statearr_29683;
})();
if(inst_29665){
var statearr_29684_29696 = state_29679__$1;
(statearr_29684_29696[(1)] = (4));

} else {
var statearr_29685_29697 = state_29679__$1;
(statearr_29685_29697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (3))){
var inst_29677 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29679__$1,inst_29677);
} else {
if((state_val_29680 === (4))){
var inst_29662 = (state_29679[(10)]);
var inst_29667 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29662);
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29679__$1,(7),inst_29667);
} else {
if((state_val_29680 === (5))){
var inst_29673 = cljs.core.async.close_BANG_.call(null,out);
var state_29679__$1 = state_29679;
var statearr_29686_29698 = state_29679__$1;
(statearr_29686_29698[(2)] = inst_29673);

(statearr_29686_29698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (6))){
var inst_29675 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29687_29699 = state_29679__$1;
(statearr_29687_29699[(2)] = inst_29675);

(statearr_29687_29699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (7))){
var inst_29663 = (state_29679[(11)]);
var inst_29669 = (state_29679[(2)]);
var inst_29670 = cljs.core.async.put_BANG_.call(null,out,inst_29669);
var inst_29656 = inst_29663;
var state_29679__$1 = (function (){var statearr_29688 = state_29679;
(statearr_29688[(7)] = inst_29656);

(statearr_29688[(12)] = inst_29670);

return statearr_29688;
})();
var statearr_29689_29700 = state_29679__$1;
(statearr_29689_29700[(2)] = null);

(statearr_29689_29700[(1)] = (2));


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
});})(c__27425__auto___29694,out))
;
return ((function (switch__27330__auto__,c__27425__auto___29694,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto____0 = (function (){
var statearr_29690 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29690[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto__);

(statearr_29690[(1)] = (1));

return statearr_29690;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto____1 = (function (state_29679){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_29679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e29691){if((e29691 instanceof Object)){
var ex__27334__auto__ = e29691;
var statearr_29692_29701 = state_29679;
(statearr_29692_29701[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29702 = state_29679;
state_29679 = G__29702;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto__ = function(state_29679){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto____1.call(this,state_29679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___29694,out))
})();
var state__27427__auto__ = (function (){var statearr_29693 = f__27426__auto__.call(null);
(statearr_29693[(6)] = c__27425__auto___29694);

return statearr_29693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___29694,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29703,opts){
var map__29704 = p__29703;
var map__29704__$1 = (((((!((map__29704 == null))))?(((((map__29704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29704):map__29704);
var eval_body = cljs.core.get.call(null,map__29704__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29704__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29706){var e = e29706;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29707_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29707_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29708){
var vec__29709 = p__29708;
var k = cljs.core.nth.call(null,vec__29709,(0),null);
var v = cljs.core.nth.call(null,vec__29709,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29712){
var vec__29713 = p__29712;
var k = cljs.core.nth.call(null,vec__29713,(0),null);
var v = cljs.core.nth.call(null,vec__29713,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29719,p__29720){
var map__29721 = p__29719;
var map__29721__$1 = (((((!((map__29721 == null))))?(((((map__29721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29721):map__29721);
var opts = map__29721__$1;
var before_jsload = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29722 = p__29720;
var map__29722__$1 = (((((!((map__29722 == null))))?(((((map__29722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29722):map__29722);
var msg = map__29722__$1;
var files = cljs.core.get.call(null,map__29722__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29722__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29722__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29876){
var state_val_29877 = (state_29876[(1)]);
if((state_val_29877 === (7))){
var inst_29739 = (state_29876[(7)]);
var inst_29736 = (state_29876[(8)]);
var inst_29737 = (state_29876[(9)]);
var inst_29738 = (state_29876[(10)]);
var inst_29744 = cljs.core._nth.call(null,inst_29737,inst_29739);
var inst_29745 = figwheel.client.file_reloading.eval_body.call(null,inst_29744,opts);
var inst_29746 = (inst_29739 + (1));
var tmp29878 = inst_29736;
var tmp29879 = inst_29737;
var tmp29880 = inst_29738;
var inst_29736__$1 = tmp29878;
var inst_29737__$1 = tmp29879;
var inst_29738__$1 = tmp29880;
var inst_29739__$1 = inst_29746;
var state_29876__$1 = (function (){var statearr_29881 = state_29876;
(statearr_29881[(7)] = inst_29739__$1);

(statearr_29881[(8)] = inst_29736__$1);

(statearr_29881[(9)] = inst_29737__$1);

(statearr_29881[(10)] = inst_29738__$1);

(statearr_29881[(11)] = inst_29745);

return statearr_29881;
})();
var statearr_29882_29965 = state_29876__$1;
(statearr_29882_29965[(2)] = null);

(statearr_29882_29965[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (20))){
var inst_29779 = (state_29876[(12)]);
var inst_29787 = figwheel.client.file_reloading.sort_files.call(null,inst_29779);
var state_29876__$1 = state_29876;
var statearr_29883_29966 = state_29876__$1;
(statearr_29883_29966[(2)] = inst_29787);

(statearr_29883_29966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (27))){
var state_29876__$1 = state_29876;
var statearr_29884_29967 = state_29876__$1;
(statearr_29884_29967[(2)] = null);

(statearr_29884_29967[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (1))){
var inst_29728 = (state_29876[(13)]);
var inst_29725 = before_jsload.call(null,files);
var inst_29726 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29727 = (function (){return ((function (inst_29728,inst_29725,inst_29726,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29716_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29716_SHARP_);
});
;})(inst_29728,inst_29725,inst_29726,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29728__$1 = cljs.core.filter.call(null,inst_29727,files);
var inst_29729 = cljs.core.not_empty.call(null,inst_29728__$1);
var state_29876__$1 = (function (){var statearr_29885 = state_29876;
(statearr_29885[(14)] = inst_29726);

(statearr_29885[(15)] = inst_29725);

(statearr_29885[(13)] = inst_29728__$1);

return statearr_29885;
})();
if(cljs.core.truth_(inst_29729)){
var statearr_29886_29968 = state_29876__$1;
(statearr_29886_29968[(1)] = (2));

} else {
var statearr_29887_29969 = state_29876__$1;
(statearr_29887_29969[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (24))){
var state_29876__$1 = state_29876;
var statearr_29888_29970 = state_29876__$1;
(statearr_29888_29970[(2)] = null);

(statearr_29888_29970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (39))){
var inst_29829 = (state_29876[(16)]);
var state_29876__$1 = state_29876;
var statearr_29889_29971 = state_29876__$1;
(statearr_29889_29971[(2)] = inst_29829);

(statearr_29889_29971[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (46))){
var inst_29871 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29890_29972 = state_29876__$1;
(statearr_29890_29972[(2)] = inst_29871);

(statearr_29890_29972[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (4))){
var inst_29773 = (state_29876[(2)]);
var inst_29774 = cljs.core.List.EMPTY;
var inst_29775 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29774);
var inst_29776 = (function (){return ((function (inst_29773,inst_29774,inst_29775,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29717_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29717_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29717_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29717_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_29773,inst_29774,inst_29775,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29777 = cljs.core.filter.call(null,inst_29776,files);
var inst_29778 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29779 = cljs.core.concat.call(null,inst_29777,inst_29778);
var state_29876__$1 = (function (){var statearr_29891 = state_29876;
(statearr_29891[(12)] = inst_29779);

(statearr_29891[(17)] = inst_29775);

(statearr_29891[(18)] = inst_29773);

return statearr_29891;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29892_29973 = state_29876__$1;
(statearr_29892_29973[(1)] = (16));

} else {
var statearr_29893_29974 = state_29876__$1;
(statearr_29893_29974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (15))){
var inst_29763 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29894_29975 = state_29876__$1;
(statearr_29894_29975[(2)] = inst_29763);

(statearr_29894_29975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (21))){
var inst_29789 = (state_29876[(19)]);
var inst_29789__$1 = (state_29876[(2)]);
var inst_29790 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29789__$1);
var state_29876__$1 = (function (){var statearr_29895 = state_29876;
(statearr_29895[(19)] = inst_29789__$1);

return statearr_29895;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29876__$1,(22),inst_29790);
} else {
if((state_val_29877 === (31))){
var inst_29874 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29876__$1,inst_29874);
} else {
if((state_val_29877 === (32))){
var inst_29829 = (state_29876[(16)]);
var inst_29834 = inst_29829.cljs$lang$protocol_mask$partition0$;
var inst_29835 = (inst_29834 & (64));
var inst_29836 = inst_29829.cljs$core$ISeq$;
var inst_29837 = (cljs.core.PROTOCOL_SENTINEL === inst_29836);
var inst_29838 = ((inst_29835) || (inst_29837));
var state_29876__$1 = state_29876;
if(cljs.core.truth_(inst_29838)){
var statearr_29896_29976 = state_29876__$1;
(statearr_29896_29976[(1)] = (35));

} else {
var statearr_29897_29977 = state_29876__$1;
(statearr_29897_29977[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (40))){
var inst_29851 = (state_29876[(20)]);
var inst_29850 = (state_29876[(2)]);
var inst_29851__$1 = cljs.core.get.call(null,inst_29850,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29852 = cljs.core.get.call(null,inst_29850,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29853 = cljs.core.not_empty.call(null,inst_29851__$1);
var state_29876__$1 = (function (){var statearr_29898 = state_29876;
(statearr_29898[(20)] = inst_29851__$1);

(statearr_29898[(21)] = inst_29852);

return statearr_29898;
})();
if(cljs.core.truth_(inst_29853)){
var statearr_29899_29978 = state_29876__$1;
(statearr_29899_29978[(1)] = (41));

} else {
var statearr_29900_29979 = state_29876__$1;
(statearr_29900_29979[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (33))){
var state_29876__$1 = state_29876;
var statearr_29901_29980 = state_29876__$1;
(statearr_29901_29980[(2)] = false);

(statearr_29901_29980[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (13))){
var inst_29749 = (state_29876[(22)]);
var inst_29753 = cljs.core.chunk_first.call(null,inst_29749);
var inst_29754 = cljs.core.chunk_rest.call(null,inst_29749);
var inst_29755 = cljs.core.count.call(null,inst_29753);
var inst_29736 = inst_29754;
var inst_29737 = inst_29753;
var inst_29738 = inst_29755;
var inst_29739 = (0);
var state_29876__$1 = (function (){var statearr_29902 = state_29876;
(statearr_29902[(7)] = inst_29739);

(statearr_29902[(8)] = inst_29736);

(statearr_29902[(9)] = inst_29737);

(statearr_29902[(10)] = inst_29738);

return statearr_29902;
})();
var statearr_29903_29981 = state_29876__$1;
(statearr_29903_29981[(2)] = null);

(statearr_29903_29981[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (22))){
var inst_29797 = (state_29876[(23)]);
var inst_29789 = (state_29876[(19)]);
var inst_29792 = (state_29876[(24)]);
var inst_29793 = (state_29876[(25)]);
var inst_29792__$1 = (state_29876[(2)]);
var inst_29793__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29792__$1);
var inst_29794 = (function (){var all_files = inst_29789;
var res_SINGLEQUOTE_ = inst_29792__$1;
var res = inst_29793__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29797,inst_29789,inst_29792,inst_29793,inst_29792__$1,inst_29793__$1,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29718_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29718_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29797,inst_29789,inst_29792,inst_29793,inst_29792__$1,inst_29793__$1,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29795 = cljs.core.filter.call(null,inst_29794,inst_29792__$1);
var inst_29796 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29797__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29796);
var inst_29798 = cljs.core.not_empty.call(null,inst_29797__$1);
var state_29876__$1 = (function (){var statearr_29904 = state_29876;
(statearr_29904[(23)] = inst_29797__$1);

(statearr_29904[(26)] = inst_29795);

(statearr_29904[(24)] = inst_29792__$1);

(statearr_29904[(25)] = inst_29793__$1);

return statearr_29904;
})();
if(cljs.core.truth_(inst_29798)){
var statearr_29905_29982 = state_29876__$1;
(statearr_29905_29982[(1)] = (23));

} else {
var statearr_29906_29983 = state_29876__$1;
(statearr_29906_29983[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (36))){
var state_29876__$1 = state_29876;
var statearr_29907_29984 = state_29876__$1;
(statearr_29907_29984[(2)] = false);

(statearr_29907_29984[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (41))){
var inst_29851 = (state_29876[(20)]);
var inst_29855 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29856 = cljs.core.map.call(null,inst_29855,inst_29851);
var inst_29857 = cljs.core.pr_str.call(null,inst_29856);
var inst_29858 = ["figwheel-no-load meta-data: ",inst_29857].join('');
var inst_29859 = figwheel.client.utils.log.call(null,inst_29858);
var state_29876__$1 = state_29876;
var statearr_29908_29985 = state_29876__$1;
(statearr_29908_29985[(2)] = inst_29859);

(statearr_29908_29985[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (43))){
var inst_29852 = (state_29876[(21)]);
var inst_29862 = (state_29876[(2)]);
var inst_29863 = cljs.core.not_empty.call(null,inst_29852);
var state_29876__$1 = (function (){var statearr_29909 = state_29876;
(statearr_29909[(27)] = inst_29862);

return statearr_29909;
})();
if(cljs.core.truth_(inst_29863)){
var statearr_29910_29986 = state_29876__$1;
(statearr_29910_29986[(1)] = (44));

} else {
var statearr_29911_29987 = state_29876__$1;
(statearr_29911_29987[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (29))){
var inst_29797 = (state_29876[(23)]);
var inst_29789 = (state_29876[(19)]);
var inst_29795 = (state_29876[(26)]);
var inst_29829 = (state_29876[(16)]);
var inst_29792 = (state_29876[(24)]);
var inst_29793 = (state_29876[(25)]);
var inst_29825 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29828 = (function (){var all_files = inst_29789;
var res_SINGLEQUOTE_ = inst_29792;
var res = inst_29793;
var files_not_loaded = inst_29795;
var dependencies_that_loaded = inst_29797;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29797,inst_29789,inst_29795,inst_29829,inst_29792,inst_29793,inst_29825,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29827){
var map__29912 = p__29827;
var map__29912__$1 = (((((!((map__29912 == null))))?(((((map__29912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29912):map__29912);
var namespace = cljs.core.get.call(null,map__29912__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29797,inst_29789,inst_29795,inst_29829,inst_29792,inst_29793,inst_29825,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29829__$1 = cljs.core.group_by.call(null,inst_29828,inst_29795);
var inst_29831 = (inst_29829__$1 == null);
var inst_29832 = cljs.core.not.call(null,inst_29831);
var state_29876__$1 = (function (){var statearr_29914 = state_29876;
(statearr_29914[(16)] = inst_29829__$1);

(statearr_29914[(28)] = inst_29825);

return statearr_29914;
})();
if(inst_29832){
var statearr_29915_29988 = state_29876__$1;
(statearr_29915_29988[(1)] = (32));

} else {
var statearr_29916_29989 = state_29876__$1;
(statearr_29916_29989[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (44))){
var inst_29852 = (state_29876[(21)]);
var inst_29865 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29852);
var inst_29866 = cljs.core.pr_str.call(null,inst_29865);
var inst_29867 = ["not required: ",inst_29866].join('');
var inst_29868 = figwheel.client.utils.log.call(null,inst_29867);
var state_29876__$1 = state_29876;
var statearr_29917_29990 = state_29876__$1;
(statearr_29917_29990[(2)] = inst_29868);

(statearr_29917_29990[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (6))){
var inst_29770 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29918_29991 = state_29876__$1;
(statearr_29918_29991[(2)] = inst_29770);

(statearr_29918_29991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (28))){
var inst_29795 = (state_29876[(26)]);
var inst_29822 = (state_29876[(2)]);
var inst_29823 = cljs.core.not_empty.call(null,inst_29795);
var state_29876__$1 = (function (){var statearr_29919 = state_29876;
(statearr_29919[(29)] = inst_29822);

return statearr_29919;
})();
if(cljs.core.truth_(inst_29823)){
var statearr_29920_29992 = state_29876__$1;
(statearr_29920_29992[(1)] = (29));

} else {
var statearr_29921_29993 = state_29876__$1;
(statearr_29921_29993[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (25))){
var inst_29793 = (state_29876[(25)]);
var inst_29809 = (state_29876[(2)]);
var inst_29810 = cljs.core.not_empty.call(null,inst_29793);
var state_29876__$1 = (function (){var statearr_29922 = state_29876;
(statearr_29922[(30)] = inst_29809);

return statearr_29922;
})();
if(cljs.core.truth_(inst_29810)){
var statearr_29923_29994 = state_29876__$1;
(statearr_29923_29994[(1)] = (26));

} else {
var statearr_29924_29995 = state_29876__$1;
(statearr_29924_29995[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (34))){
var inst_29845 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
if(cljs.core.truth_(inst_29845)){
var statearr_29925_29996 = state_29876__$1;
(statearr_29925_29996[(1)] = (38));

} else {
var statearr_29926_29997 = state_29876__$1;
(statearr_29926_29997[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (17))){
var state_29876__$1 = state_29876;
var statearr_29927_29998 = state_29876__$1;
(statearr_29927_29998[(2)] = recompile_dependents);

(statearr_29927_29998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (3))){
var state_29876__$1 = state_29876;
var statearr_29928_29999 = state_29876__$1;
(statearr_29928_29999[(2)] = null);

(statearr_29928_29999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (12))){
var inst_29766 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29929_30000 = state_29876__$1;
(statearr_29929_30000[(2)] = inst_29766);

(statearr_29929_30000[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (2))){
var inst_29728 = (state_29876[(13)]);
var inst_29735 = cljs.core.seq.call(null,inst_29728);
var inst_29736 = inst_29735;
var inst_29737 = null;
var inst_29738 = (0);
var inst_29739 = (0);
var state_29876__$1 = (function (){var statearr_29930 = state_29876;
(statearr_29930[(7)] = inst_29739);

(statearr_29930[(8)] = inst_29736);

(statearr_29930[(9)] = inst_29737);

(statearr_29930[(10)] = inst_29738);

return statearr_29930;
})();
var statearr_29931_30001 = state_29876__$1;
(statearr_29931_30001[(2)] = null);

(statearr_29931_30001[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (23))){
var inst_29797 = (state_29876[(23)]);
var inst_29789 = (state_29876[(19)]);
var inst_29795 = (state_29876[(26)]);
var inst_29792 = (state_29876[(24)]);
var inst_29793 = (state_29876[(25)]);
var inst_29800 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29802 = (function (){var all_files = inst_29789;
var res_SINGLEQUOTE_ = inst_29792;
var res = inst_29793;
var files_not_loaded = inst_29795;
var dependencies_that_loaded = inst_29797;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29797,inst_29789,inst_29795,inst_29792,inst_29793,inst_29800,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29801){
var map__29932 = p__29801;
var map__29932__$1 = (((((!((map__29932 == null))))?(((((map__29932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29932):map__29932);
var request_url = cljs.core.get.call(null,map__29932__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29797,inst_29789,inst_29795,inst_29792,inst_29793,inst_29800,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29803 = cljs.core.reverse.call(null,inst_29797);
var inst_29804 = cljs.core.map.call(null,inst_29802,inst_29803);
var inst_29805 = cljs.core.pr_str.call(null,inst_29804);
var inst_29806 = figwheel.client.utils.log.call(null,inst_29805);
var state_29876__$1 = (function (){var statearr_29934 = state_29876;
(statearr_29934[(31)] = inst_29800);

return statearr_29934;
})();
var statearr_29935_30002 = state_29876__$1;
(statearr_29935_30002[(2)] = inst_29806);

(statearr_29935_30002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (35))){
var state_29876__$1 = state_29876;
var statearr_29936_30003 = state_29876__$1;
(statearr_29936_30003[(2)] = true);

(statearr_29936_30003[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (19))){
var inst_29779 = (state_29876[(12)]);
var inst_29785 = figwheel.client.file_reloading.expand_files.call(null,inst_29779);
var state_29876__$1 = state_29876;
var statearr_29937_30004 = state_29876__$1;
(statearr_29937_30004[(2)] = inst_29785);

(statearr_29937_30004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (11))){
var state_29876__$1 = state_29876;
var statearr_29938_30005 = state_29876__$1;
(statearr_29938_30005[(2)] = null);

(statearr_29938_30005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (9))){
var inst_29768 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29939_30006 = state_29876__$1;
(statearr_29939_30006[(2)] = inst_29768);

(statearr_29939_30006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (5))){
var inst_29739 = (state_29876[(7)]);
var inst_29738 = (state_29876[(10)]);
var inst_29741 = (inst_29739 < inst_29738);
var inst_29742 = inst_29741;
var state_29876__$1 = state_29876;
if(cljs.core.truth_(inst_29742)){
var statearr_29940_30007 = state_29876__$1;
(statearr_29940_30007[(1)] = (7));

} else {
var statearr_29941_30008 = state_29876__$1;
(statearr_29941_30008[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (14))){
var inst_29749 = (state_29876[(22)]);
var inst_29758 = cljs.core.first.call(null,inst_29749);
var inst_29759 = figwheel.client.file_reloading.eval_body.call(null,inst_29758,opts);
var inst_29760 = cljs.core.next.call(null,inst_29749);
var inst_29736 = inst_29760;
var inst_29737 = null;
var inst_29738 = (0);
var inst_29739 = (0);
var state_29876__$1 = (function (){var statearr_29942 = state_29876;
(statearr_29942[(7)] = inst_29739);

(statearr_29942[(8)] = inst_29736);

(statearr_29942[(9)] = inst_29737);

(statearr_29942[(32)] = inst_29759);

(statearr_29942[(10)] = inst_29738);

return statearr_29942;
})();
var statearr_29943_30009 = state_29876__$1;
(statearr_29943_30009[(2)] = null);

(statearr_29943_30009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (45))){
var state_29876__$1 = state_29876;
var statearr_29944_30010 = state_29876__$1;
(statearr_29944_30010[(2)] = null);

(statearr_29944_30010[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (26))){
var inst_29797 = (state_29876[(23)]);
var inst_29789 = (state_29876[(19)]);
var inst_29795 = (state_29876[(26)]);
var inst_29792 = (state_29876[(24)]);
var inst_29793 = (state_29876[(25)]);
var inst_29812 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29814 = (function (){var all_files = inst_29789;
var res_SINGLEQUOTE_ = inst_29792;
var res = inst_29793;
var files_not_loaded = inst_29795;
var dependencies_that_loaded = inst_29797;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29797,inst_29789,inst_29795,inst_29792,inst_29793,inst_29812,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29813){
var map__29945 = p__29813;
var map__29945__$1 = (((((!((map__29945 == null))))?(((((map__29945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29945):map__29945);
var namespace = cljs.core.get.call(null,map__29945__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29945__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29797,inst_29789,inst_29795,inst_29792,inst_29793,inst_29812,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29815 = cljs.core.map.call(null,inst_29814,inst_29793);
var inst_29816 = cljs.core.pr_str.call(null,inst_29815);
var inst_29817 = figwheel.client.utils.log.call(null,inst_29816);
var inst_29818 = (function (){var all_files = inst_29789;
var res_SINGLEQUOTE_ = inst_29792;
var res = inst_29793;
var files_not_loaded = inst_29795;
var dependencies_that_loaded = inst_29797;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29797,inst_29789,inst_29795,inst_29792,inst_29793,inst_29812,inst_29814,inst_29815,inst_29816,inst_29817,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29797,inst_29789,inst_29795,inst_29792,inst_29793,inst_29812,inst_29814,inst_29815,inst_29816,inst_29817,state_val_29877,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29819 = setTimeout(inst_29818,(10));
var state_29876__$1 = (function (){var statearr_29947 = state_29876;
(statearr_29947[(33)] = inst_29812);

(statearr_29947[(34)] = inst_29817);

return statearr_29947;
})();
var statearr_29948_30011 = state_29876__$1;
(statearr_29948_30011[(2)] = inst_29819);

(statearr_29948_30011[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (16))){
var state_29876__$1 = state_29876;
var statearr_29949_30012 = state_29876__$1;
(statearr_29949_30012[(2)] = reload_dependents);

(statearr_29949_30012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (38))){
var inst_29829 = (state_29876[(16)]);
var inst_29847 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29829);
var state_29876__$1 = state_29876;
var statearr_29950_30013 = state_29876__$1;
(statearr_29950_30013[(2)] = inst_29847);

(statearr_29950_30013[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (30))){
var state_29876__$1 = state_29876;
var statearr_29951_30014 = state_29876__$1;
(statearr_29951_30014[(2)] = null);

(statearr_29951_30014[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (10))){
var inst_29749 = (state_29876[(22)]);
var inst_29751 = cljs.core.chunked_seq_QMARK_.call(null,inst_29749);
var state_29876__$1 = state_29876;
if(inst_29751){
var statearr_29952_30015 = state_29876__$1;
(statearr_29952_30015[(1)] = (13));

} else {
var statearr_29953_30016 = state_29876__$1;
(statearr_29953_30016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (18))){
var inst_29783 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
if(cljs.core.truth_(inst_29783)){
var statearr_29954_30017 = state_29876__$1;
(statearr_29954_30017[(1)] = (19));

} else {
var statearr_29955_30018 = state_29876__$1;
(statearr_29955_30018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (42))){
var state_29876__$1 = state_29876;
var statearr_29956_30019 = state_29876__$1;
(statearr_29956_30019[(2)] = null);

(statearr_29956_30019[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (37))){
var inst_29842 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29957_30020 = state_29876__$1;
(statearr_29957_30020[(2)] = inst_29842);

(statearr_29957_30020[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (8))){
var inst_29736 = (state_29876[(8)]);
var inst_29749 = (state_29876[(22)]);
var inst_29749__$1 = cljs.core.seq.call(null,inst_29736);
var state_29876__$1 = (function (){var statearr_29958 = state_29876;
(statearr_29958[(22)] = inst_29749__$1);

return statearr_29958;
})();
if(inst_29749__$1){
var statearr_29959_30021 = state_29876__$1;
(statearr_29959_30021[(1)] = (10));

} else {
var statearr_29960_30022 = state_29876__$1;
(statearr_29960_30022[(1)] = (11));

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
});})(c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27330__auto__,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto____0 = (function (){
var statearr_29961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29961[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto__);

(statearr_29961[(1)] = (1));

return statearr_29961;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto____1 = (function (state_29876){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_29876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e29962){if((e29962 instanceof Object)){
var ex__27334__auto__ = e29962;
var statearr_29963_30023 = state_29876;
(statearr_29963_30023[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30024 = state_29876;
state_29876 = G__30024;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto__ = function(state_29876){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto____1.call(this,state_29876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27427__auto__ = (function (){var statearr_29964 = f__27426__auto__.call(null);
(statearr_29964[(6)] = c__27425__auto__);

return statearr_29964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto__,map__29721,map__29721__$1,opts,before_jsload,on_jsload,reload_dependents,map__29722,map__29722__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27425__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30027,link){
var map__30028 = p__30027;
var map__30028__$1 = (((((!((map__30028 == null))))?(((((map__30028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30028):map__30028);
var file = cljs.core.get.call(null,map__30028__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30028,map__30028__$1,file){
return (function (p1__30025_SHARP_,p2__30026_SHARP_){
if(cljs.core._EQ_.call(null,p1__30025_SHARP_,p2__30026_SHARP_)){
return p1__30025_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30028,map__30028__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30031){
var map__30032 = p__30031;
var map__30032__$1 = (((((!((map__30032 == null))))?(((((map__30032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30032):map__30032);
var match_length = cljs.core.get.call(null,map__30032__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30032__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30030_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30030_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30034_SHARP_,p2__30035_SHARP_){
return cljs.core.assoc.call(null,p1__30034_SHARP_,cljs.core.get.call(null,p2__30035_SHARP_,key),p2__30035_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30036 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30036);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30036);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30037,p__30038){
var map__30039 = p__30037;
var map__30039__$1 = (((((!((map__30039 == null))))?(((((map__30039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30039):map__30039);
var on_cssload = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30040 = p__30038;
var map__30040__$1 = (((((!((map__30040 == null))))?(((((map__30040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30040):map__30040);
var files_msg = map__30040__$1;
var files = cljs.core.get.call(null,map__30040__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1553263596968
