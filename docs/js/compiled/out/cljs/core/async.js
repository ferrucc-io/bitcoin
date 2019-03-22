// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27485 = arguments.length;
switch (G__27485) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27486 = (function (f,blockable,meta27487){
this.f = f;
this.blockable = blockable;
this.meta27487 = meta27487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27488,meta27487__$1){
var self__ = this;
var _27488__$1 = this;
return (new cljs.core.async.t_cljs$core$async27486(self__.f,self__.blockable,meta27487__$1));
});

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27488){
var self__ = this;
var _27488__$1 = this;
return self__.meta27487;
});

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27487","meta27487",2058251734,null)], null);
});

cljs.core.async.t_cljs$core$async27486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27486";

cljs.core.async.t_cljs$core$async27486.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27486");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27486.
 */
cljs.core.async.__GT_t_cljs$core$async27486 = (function cljs$core$async$__GT_t_cljs$core$async27486(f__$1,blockable__$1,meta27487){
return (new cljs.core.async.t_cljs$core$async27486(f__$1,blockable__$1,meta27487));
});

}

return (new cljs.core.async.t_cljs$core$async27486(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27492 = arguments.length;
switch (G__27492) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27495 = arguments.length;
switch (G__27495) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27498 = arguments.length;
switch (G__27498) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27500 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27500);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27500,ret){
return (function (){
return fn1.call(null,val_27500);
});})(val_27500,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27502 = arguments.length;
switch (G__27502) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___27504 = n;
var x_27505 = (0);
while(true){
if((x_27505 < n__4607__auto___27504)){
(a[x_27505] = (0));

var G__27506 = (x_27505 + (1));
x_27505 = G__27506;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27507 = (i + (1));
i = G__27507;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27508 = (function (flag,meta27509){
this.flag = flag;
this.meta27509 = meta27509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27510,meta27509__$1){
var self__ = this;
var _27510__$1 = this;
return (new cljs.core.async.t_cljs$core$async27508(self__.flag,meta27509__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27510){
var self__ = this;
var _27510__$1 = this;
return self__.meta27509;
});})(flag))
;

cljs.core.async.t_cljs$core$async27508.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27508.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27509","meta27509",1428065479,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27508.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27508";

cljs.core.async.t_cljs$core$async27508.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27508");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27508.
 */
cljs.core.async.__GT_t_cljs$core$async27508 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27508(flag__$1,meta27509){
return (new cljs.core.async.t_cljs$core$async27508(flag__$1,meta27509));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27508(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27511 = (function (flag,cb,meta27512){
this.flag = flag;
this.cb = cb;
this.meta27512 = meta27512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27513,meta27512__$1){
var self__ = this;
var _27513__$1 = this;
return (new cljs.core.async.t_cljs$core$async27511(self__.flag,self__.cb,meta27512__$1));
});

cljs.core.async.t_cljs$core$async27511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27513){
var self__ = this;
var _27513__$1 = this;
return self__.meta27512;
});

cljs.core.async.t_cljs$core$async27511.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27512","meta27512",-895946516,null)], null);
});

cljs.core.async.t_cljs$core$async27511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27511";

cljs.core.async.t_cljs$core$async27511.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27511");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27511.
 */
cljs.core.async.__GT_t_cljs$core$async27511 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27511(flag__$1,cb__$1,meta27512){
return (new cljs.core.async.t_cljs$core$async27511(flag__$1,cb__$1,meta27512));
});

}

return (new cljs.core.async.t_cljs$core$async27511(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27514_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27514_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27515_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27515_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27516 = (i + (1));
i = G__27516;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27522 = arguments.length;
var i__4731__auto___27523 = (0);
while(true){
if((i__4731__auto___27523 < len__4730__auto___27522)){
args__4736__auto__.push((arguments[i__4731__auto___27523]));

var G__27524 = (i__4731__auto___27523 + (1));
i__4731__auto___27523 = G__27524;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27519){
var map__27520 = p__27519;
var map__27520__$1 = (((((!((map__27520 == null))))?(((((map__27520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27520):map__27520);
var opts = map__27520__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27517){
var G__27518 = cljs.core.first.call(null,seq27517);
var seq27517__$1 = cljs.core.next.call(null,seq27517);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27518,seq27517__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27526 = arguments.length;
switch (G__27526) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27425__auto___27572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___27572){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___27572){
return (function (state_27550){
var state_val_27551 = (state_27550[(1)]);
if((state_val_27551 === (7))){
var inst_27546 = (state_27550[(2)]);
var state_27550__$1 = state_27550;
var statearr_27552_27573 = state_27550__$1;
(statearr_27552_27573[(2)] = inst_27546);

(statearr_27552_27573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (1))){
var state_27550__$1 = state_27550;
var statearr_27553_27574 = state_27550__$1;
(statearr_27553_27574[(2)] = null);

(statearr_27553_27574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (4))){
var inst_27529 = (state_27550[(7)]);
var inst_27529__$1 = (state_27550[(2)]);
var inst_27530 = (inst_27529__$1 == null);
var state_27550__$1 = (function (){var statearr_27554 = state_27550;
(statearr_27554[(7)] = inst_27529__$1);

return statearr_27554;
})();
if(cljs.core.truth_(inst_27530)){
var statearr_27555_27575 = state_27550__$1;
(statearr_27555_27575[(1)] = (5));

} else {
var statearr_27556_27576 = state_27550__$1;
(statearr_27556_27576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (13))){
var state_27550__$1 = state_27550;
var statearr_27557_27577 = state_27550__$1;
(statearr_27557_27577[(2)] = null);

(statearr_27557_27577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (6))){
var inst_27529 = (state_27550[(7)]);
var state_27550__$1 = state_27550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27550__$1,(11),to,inst_27529);
} else {
if((state_val_27551 === (3))){
var inst_27548 = (state_27550[(2)]);
var state_27550__$1 = state_27550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27550__$1,inst_27548);
} else {
if((state_val_27551 === (12))){
var state_27550__$1 = state_27550;
var statearr_27558_27578 = state_27550__$1;
(statearr_27558_27578[(2)] = null);

(statearr_27558_27578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (2))){
var state_27550__$1 = state_27550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27550__$1,(4),from);
} else {
if((state_val_27551 === (11))){
var inst_27539 = (state_27550[(2)]);
var state_27550__$1 = state_27550;
if(cljs.core.truth_(inst_27539)){
var statearr_27559_27579 = state_27550__$1;
(statearr_27559_27579[(1)] = (12));

} else {
var statearr_27560_27580 = state_27550__$1;
(statearr_27560_27580[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (9))){
var state_27550__$1 = state_27550;
var statearr_27561_27581 = state_27550__$1;
(statearr_27561_27581[(2)] = null);

(statearr_27561_27581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (5))){
var state_27550__$1 = state_27550;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27562_27582 = state_27550__$1;
(statearr_27562_27582[(1)] = (8));

} else {
var statearr_27563_27583 = state_27550__$1;
(statearr_27563_27583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (14))){
var inst_27544 = (state_27550[(2)]);
var state_27550__$1 = state_27550;
var statearr_27564_27584 = state_27550__$1;
(statearr_27564_27584[(2)] = inst_27544);

(statearr_27564_27584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (10))){
var inst_27536 = (state_27550[(2)]);
var state_27550__$1 = state_27550;
var statearr_27565_27585 = state_27550__$1;
(statearr_27565_27585[(2)] = inst_27536);

(statearr_27565_27585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (8))){
var inst_27533 = cljs.core.async.close_BANG_.call(null,to);
var state_27550__$1 = state_27550;
var statearr_27566_27586 = state_27550__$1;
(statearr_27566_27586[(2)] = inst_27533);

(statearr_27566_27586[(1)] = (10));


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
});})(c__27425__auto___27572))
;
return ((function (switch__27330__auto__,c__27425__auto___27572){
return (function() {
var cljs$core$async$state_machine__27331__auto__ = null;
var cljs$core$async$state_machine__27331__auto____0 = (function (){
var statearr_27567 = [null,null,null,null,null,null,null,null];
(statearr_27567[(0)] = cljs$core$async$state_machine__27331__auto__);

(statearr_27567[(1)] = (1));

return statearr_27567;
});
var cljs$core$async$state_machine__27331__auto____1 = (function (state_27550){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_27550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e27568){if((e27568 instanceof Object)){
var ex__27334__auto__ = e27568;
var statearr_27569_27587 = state_27550;
(statearr_27569_27587[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27588 = state_27550;
state_27550 = G__27588;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$state_machine__27331__auto__ = function(state_27550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27331__auto____1.call(this,state_27550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27331__auto____0;
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27331__auto____1;
return cljs$core$async$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___27572))
})();
var state__27427__auto__ = (function (){var statearr_27570 = f__27426__auto__.call(null);
(statearr_27570[(6)] = c__27425__auto___27572);

return statearr_27570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___27572))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27589){
var vec__27590 = p__27589;
var v = cljs.core.nth.call(null,vec__27590,(0),null);
var p = cljs.core.nth.call(null,vec__27590,(1),null);
var job = vec__27590;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27425__auto___27761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___27761,res,vec__27590,v,p,job,jobs,results){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___27761,res,vec__27590,v,p,job,jobs,results){
return (function (state_27597){
var state_val_27598 = (state_27597[(1)]);
if((state_val_27598 === (1))){
var state_27597__$1 = state_27597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27597__$1,(2),res,v);
} else {
if((state_val_27598 === (2))){
var inst_27594 = (state_27597[(2)]);
var inst_27595 = cljs.core.async.close_BANG_.call(null,res);
var state_27597__$1 = (function (){var statearr_27599 = state_27597;
(statearr_27599[(7)] = inst_27594);

return statearr_27599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27597__$1,inst_27595);
} else {
return null;
}
}
});})(c__27425__auto___27761,res,vec__27590,v,p,job,jobs,results))
;
return ((function (switch__27330__auto__,c__27425__auto___27761,res,vec__27590,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0 = (function (){
var statearr_27600 = [null,null,null,null,null,null,null,null];
(statearr_27600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__);

(statearr_27600[(1)] = (1));

return statearr_27600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1 = (function (state_27597){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_27597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e27601){if((e27601 instanceof Object)){
var ex__27334__auto__ = e27601;
var statearr_27602_27762 = state_27597;
(statearr_27602_27762[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27763 = state_27597;
state_27597 = G__27763;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__ = function(state_27597){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1.call(this,state_27597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___27761,res,vec__27590,v,p,job,jobs,results))
})();
var state__27427__auto__ = (function (){var statearr_27603 = f__27426__auto__.call(null);
(statearr_27603[(6)] = c__27425__auto___27761);

return statearr_27603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___27761,res,vec__27590,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27604){
var vec__27605 = p__27604;
var v = cljs.core.nth.call(null,vec__27605,(0),null);
var p = cljs.core.nth.call(null,vec__27605,(1),null);
var job = vec__27605;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___27764 = n;
var __27765 = (0);
while(true){
if((__27765 < n__4607__auto___27764)){
var G__27608_27766 = type;
var G__27608_27767__$1 = (((G__27608_27766 instanceof cljs.core.Keyword))?G__27608_27766.fqn:null);
switch (G__27608_27767__$1) {
case "compute":
var c__27425__auto___27769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27765,c__27425__auto___27769,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (__27765,c__27425__auto___27769,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async){
return (function (state_27621){
var state_val_27622 = (state_27621[(1)]);
if((state_val_27622 === (1))){
var state_27621__$1 = state_27621;
var statearr_27623_27770 = state_27621__$1;
(statearr_27623_27770[(2)] = null);

(statearr_27623_27770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (2))){
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27621__$1,(4),jobs);
} else {
if((state_val_27622 === (3))){
var inst_27619 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27621__$1,inst_27619);
} else {
if((state_val_27622 === (4))){
var inst_27611 = (state_27621[(2)]);
var inst_27612 = process.call(null,inst_27611);
var state_27621__$1 = state_27621;
if(cljs.core.truth_(inst_27612)){
var statearr_27624_27771 = state_27621__$1;
(statearr_27624_27771[(1)] = (5));

} else {
var statearr_27625_27772 = state_27621__$1;
(statearr_27625_27772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (5))){
var state_27621__$1 = state_27621;
var statearr_27626_27773 = state_27621__$1;
(statearr_27626_27773[(2)] = null);

(statearr_27626_27773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (6))){
var state_27621__$1 = state_27621;
var statearr_27627_27774 = state_27621__$1;
(statearr_27627_27774[(2)] = null);

(statearr_27627_27774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (7))){
var inst_27617 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27628_27775 = state_27621__$1;
(statearr_27628_27775[(2)] = inst_27617);

(statearr_27628_27775[(1)] = (3));


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
});})(__27765,c__27425__auto___27769,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async))
;
return ((function (__27765,switch__27330__auto__,c__27425__auto___27769,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0 = (function (){
var statearr_27629 = [null,null,null,null,null,null,null];
(statearr_27629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__);

(statearr_27629[(1)] = (1));

return statearr_27629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1 = (function (state_27621){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_27621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e27630){if((e27630 instanceof Object)){
var ex__27334__auto__ = e27630;
var statearr_27631_27776 = state_27621;
(statearr_27631_27776[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27777 = state_27621;
state_27621 = G__27777;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__ = function(state_27621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1.call(this,state_27621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__;
})()
;})(__27765,switch__27330__auto__,c__27425__auto___27769,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async))
})();
var state__27427__auto__ = (function (){var statearr_27632 = f__27426__auto__.call(null);
(statearr_27632[(6)] = c__27425__auto___27769);

return statearr_27632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(__27765,c__27425__auto___27769,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async))
);


break;
case "async":
var c__27425__auto___27778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27765,c__27425__auto___27778,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (__27765,c__27425__auto___27778,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async){
return (function (state_27645){
var state_val_27646 = (state_27645[(1)]);
if((state_val_27646 === (1))){
var state_27645__$1 = state_27645;
var statearr_27647_27779 = state_27645__$1;
(statearr_27647_27779[(2)] = null);

(statearr_27647_27779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (2))){
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27645__$1,(4),jobs);
} else {
if((state_val_27646 === (3))){
var inst_27643 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27645__$1,inst_27643);
} else {
if((state_val_27646 === (4))){
var inst_27635 = (state_27645[(2)]);
var inst_27636 = async.call(null,inst_27635);
var state_27645__$1 = state_27645;
if(cljs.core.truth_(inst_27636)){
var statearr_27648_27780 = state_27645__$1;
(statearr_27648_27780[(1)] = (5));

} else {
var statearr_27649_27781 = state_27645__$1;
(statearr_27649_27781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (5))){
var state_27645__$1 = state_27645;
var statearr_27650_27782 = state_27645__$1;
(statearr_27650_27782[(2)] = null);

(statearr_27650_27782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (6))){
var state_27645__$1 = state_27645;
var statearr_27651_27783 = state_27645__$1;
(statearr_27651_27783[(2)] = null);

(statearr_27651_27783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (7))){
var inst_27641 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27652_27784 = state_27645__$1;
(statearr_27652_27784[(2)] = inst_27641);

(statearr_27652_27784[(1)] = (3));


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
});})(__27765,c__27425__auto___27778,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async))
;
return ((function (__27765,switch__27330__auto__,c__27425__auto___27778,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0 = (function (){
var statearr_27653 = [null,null,null,null,null,null,null];
(statearr_27653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__);

(statearr_27653[(1)] = (1));

return statearr_27653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1 = (function (state_27645){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_27645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e27654){if((e27654 instanceof Object)){
var ex__27334__auto__ = e27654;
var statearr_27655_27785 = state_27645;
(statearr_27655_27785[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27786 = state_27645;
state_27645 = G__27786;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__ = function(state_27645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1.call(this,state_27645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__;
})()
;})(__27765,switch__27330__auto__,c__27425__auto___27778,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async))
})();
var state__27427__auto__ = (function (){var statearr_27656 = f__27426__auto__.call(null);
(statearr_27656[(6)] = c__27425__auto___27778);

return statearr_27656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(__27765,c__27425__auto___27778,G__27608_27766,G__27608_27767__$1,n__4607__auto___27764,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27608_27767__$1)].join('')));

}

var G__27787 = (__27765 + (1));
__27765 = G__27787;
continue;
} else {
}
break;
}

var c__27425__auto___27788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___27788,jobs,results,process,async){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___27788,jobs,results,process,async){
return (function (state_27678){
var state_val_27679 = (state_27678[(1)]);
if((state_val_27679 === (1))){
var state_27678__$1 = state_27678;
var statearr_27680_27789 = state_27678__$1;
(statearr_27680_27789[(2)] = null);

(statearr_27680_27789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (2))){
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27678__$1,(4),from);
} else {
if((state_val_27679 === (3))){
var inst_27676 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27678__$1,inst_27676);
} else {
if((state_val_27679 === (4))){
var inst_27659 = (state_27678[(7)]);
var inst_27659__$1 = (state_27678[(2)]);
var inst_27660 = (inst_27659__$1 == null);
var state_27678__$1 = (function (){var statearr_27681 = state_27678;
(statearr_27681[(7)] = inst_27659__$1);

return statearr_27681;
})();
if(cljs.core.truth_(inst_27660)){
var statearr_27682_27790 = state_27678__$1;
(statearr_27682_27790[(1)] = (5));

} else {
var statearr_27683_27791 = state_27678__$1;
(statearr_27683_27791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (5))){
var inst_27662 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27678__$1 = state_27678;
var statearr_27684_27792 = state_27678__$1;
(statearr_27684_27792[(2)] = inst_27662);

(statearr_27684_27792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (6))){
var inst_27664 = (state_27678[(8)]);
var inst_27659 = (state_27678[(7)]);
var inst_27664__$1 = cljs.core.async.chan.call(null,(1));
var inst_27665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27666 = [inst_27659,inst_27664__$1];
var inst_27667 = (new cljs.core.PersistentVector(null,2,(5),inst_27665,inst_27666,null));
var state_27678__$1 = (function (){var statearr_27685 = state_27678;
(statearr_27685[(8)] = inst_27664__$1);

return statearr_27685;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27678__$1,(8),jobs,inst_27667);
} else {
if((state_val_27679 === (7))){
var inst_27674 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27686_27793 = state_27678__$1;
(statearr_27686_27793[(2)] = inst_27674);

(statearr_27686_27793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (8))){
var inst_27664 = (state_27678[(8)]);
var inst_27669 = (state_27678[(2)]);
var state_27678__$1 = (function (){var statearr_27687 = state_27678;
(statearr_27687[(9)] = inst_27669);

return statearr_27687;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27678__$1,(9),results,inst_27664);
} else {
if((state_val_27679 === (9))){
var inst_27671 = (state_27678[(2)]);
var state_27678__$1 = (function (){var statearr_27688 = state_27678;
(statearr_27688[(10)] = inst_27671);

return statearr_27688;
})();
var statearr_27689_27794 = state_27678__$1;
(statearr_27689_27794[(2)] = null);

(statearr_27689_27794[(1)] = (2));


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
});})(c__27425__auto___27788,jobs,results,process,async))
;
return ((function (switch__27330__auto__,c__27425__auto___27788,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0 = (function (){
var statearr_27690 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__);

(statearr_27690[(1)] = (1));

return statearr_27690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1 = (function (state_27678){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_27678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e27691){if((e27691 instanceof Object)){
var ex__27334__auto__ = e27691;
var statearr_27692_27795 = state_27678;
(statearr_27692_27795[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27796 = state_27678;
state_27678 = G__27796;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__ = function(state_27678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1.call(this,state_27678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___27788,jobs,results,process,async))
})();
var state__27427__auto__ = (function (){var statearr_27693 = f__27426__auto__.call(null);
(statearr_27693[(6)] = c__27425__auto___27788);

return statearr_27693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___27788,jobs,results,process,async))
);


var c__27425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto__,jobs,results,process,async){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto__,jobs,results,process,async){
return (function (state_27731){
var state_val_27732 = (state_27731[(1)]);
if((state_val_27732 === (7))){
var inst_27727 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
var statearr_27733_27797 = state_27731__$1;
(statearr_27733_27797[(2)] = inst_27727);

(statearr_27733_27797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (20))){
var state_27731__$1 = state_27731;
var statearr_27734_27798 = state_27731__$1;
(statearr_27734_27798[(2)] = null);

(statearr_27734_27798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (1))){
var state_27731__$1 = state_27731;
var statearr_27735_27799 = state_27731__$1;
(statearr_27735_27799[(2)] = null);

(statearr_27735_27799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (4))){
var inst_27696 = (state_27731[(7)]);
var inst_27696__$1 = (state_27731[(2)]);
var inst_27697 = (inst_27696__$1 == null);
var state_27731__$1 = (function (){var statearr_27736 = state_27731;
(statearr_27736[(7)] = inst_27696__$1);

return statearr_27736;
})();
if(cljs.core.truth_(inst_27697)){
var statearr_27737_27800 = state_27731__$1;
(statearr_27737_27800[(1)] = (5));

} else {
var statearr_27738_27801 = state_27731__$1;
(statearr_27738_27801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (15))){
var inst_27709 = (state_27731[(8)]);
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27731__$1,(18),to,inst_27709);
} else {
if((state_val_27732 === (21))){
var inst_27722 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
var statearr_27739_27802 = state_27731__$1;
(statearr_27739_27802[(2)] = inst_27722);

(statearr_27739_27802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (13))){
var inst_27724 = (state_27731[(2)]);
var state_27731__$1 = (function (){var statearr_27740 = state_27731;
(statearr_27740[(9)] = inst_27724);

return statearr_27740;
})();
var statearr_27741_27803 = state_27731__$1;
(statearr_27741_27803[(2)] = null);

(statearr_27741_27803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (6))){
var inst_27696 = (state_27731[(7)]);
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27731__$1,(11),inst_27696);
} else {
if((state_val_27732 === (17))){
var inst_27717 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
if(cljs.core.truth_(inst_27717)){
var statearr_27742_27804 = state_27731__$1;
(statearr_27742_27804[(1)] = (19));

} else {
var statearr_27743_27805 = state_27731__$1;
(statearr_27743_27805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (3))){
var inst_27729 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27731__$1,inst_27729);
} else {
if((state_val_27732 === (12))){
var inst_27706 = (state_27731[(10)]);
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27731__$1,(14),inst_27706);
} else {
if((state_val_27732 === (2))){
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27731__$1,(4),results);
} else {
if((state_val_27732 === (19))){
var state_27731__$1 = state_27731;
var statearr_27744_27806 = state_27731__$1;
(statearr_27744_27806[(2)] = null);

(statearr_27744_27806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (11))){
var inst_27706 = (state_27731[(2)]);
var state_27731__$1 = (function (){var statearr_27745 = state_27731;
(statearr_27745[(10)] = inst_27706);

return statearr_27745;
})();
var statearr_27746_27807 = state_27731__$1;
(statearr_27746_27807[(2)] = null);

(statearr_27746_27807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (9))){
var state_27731__$1 = state_27731;
var statearr_27747_27808 = state_27731__$1;
(statearr_27747_27808[(2)] = null);

(statearr_27747_27808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (5))){
var state_27731__$1 = state_27731;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27748_27809 = state_27731__$1;
(statearr_27748_27809[(1)] = (8));

} else {
var statearr_27749_27810 = state_27731__$1;
(statearr_27749_27810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (14))){
var inst_27711 = (state_27731[(11)]);
var inst_27709 = (state_27731[(8)]);
var inst_27709__$1 = (state_27731[(2)]);
var inst_27710 = (inst_27709__$1 == null);
var inst_27711__$1 = cljs.core.not.call(null,inst_27710);
var state_27731__$1 = (function (){var statearr_27750 = state_27731;
(statearr_27750[(11)] = inst_27711__$1);

(statearr_27750[(8)] = inst_27709__$1);

return statearr_27750;
})();
if(inst_27711__$1){
var statearr_27751_27811 = state_27731__$1;
(statearr_27751_27811[(1)] = (15));

} else {
var statearr_27752_27812 = state_27731__$1;
(statearr_27752_27812[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (16))){
var inst_27711 = (state_27731[(11)]);
var state_27731__$1 = state_27731;
var statearr_27753_27813 = state_27731__$1;
(statearr_27753_27813[(2)] = inst_27711);

(statearr_27753_27813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (10))){
var inst_27703 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
var statearr_27754_27814 = state_27731__$1;
(statearr_27754_27814[(2)] = inst_27703);

(statearr_27754_27814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (18))){
var inst_27714 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
var statearr_27755_27815 = state_27731__$1;
(statearr_27755_27815[(2)] = inst_27714);

(statearr_27755_27815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (8))){
var inst_27700 = cljs.core.async.close_BANG_.call(null,to);
var state_27731__$1 = state_27731;
var statearr_27756_27816 = state_27731__$1;
(statearr_27756_27816[(2)] = inst_27700);

(statearr_27756_27816[(1)] = (10));


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
});})(c__27425__auto__,jobs,results,process,async))
;
return ((function (switch__27330__auto__,c__27425__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0 = (function (){
var statearr_27757 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__);

(statearr_27757[(1)] = (1));

return statearr_27757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1 = (function (state_27731){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_27731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e27758){if((e27758 instanceof Object)){
var ex__27334__auto__ = e27758;
var statearr_27759_27817 = state_27731;
(statearr_27759_27817[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27818 = state_27731;
state_27731 = G__27818;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__ = function(state_27731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1.call(this,state_27731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto__,jobs,results,process,async))
})();
var state__27427__auto__ = (function (){var statearr_27760 = f__27426__auto__.call(null);
(statearr_27760[(6)] = c__27425__auto__);

return statearr_27760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto__,jobs,results,process,async))
);

return c__27425__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27820 = arguments.length;
switch (G__27820) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27823 = arguments.length;
switch (G__27823) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27826 = arguments.length;
switch (G__27826) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27425__auto___27875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___27875,tc,fc){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___27875,tc,fc){
return (function (state_27852){
var state_val_27853 = (state_27852[(1)]);
if((state_val_27853 === (7))){
var inst_27848 = (state_27852[(2)]);
var state_27852__$1 = state_27852;
var statearr_27854_27876 = state_27852__$1;
(statearr_27854_27876[(2)] = inst_27848);

(statearr_27854_27876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (1))){
var state_27852__$1 = state_27852;
var statearr_27855_27877 = state_27852__$1;
(statearr_27855_27877[(2)] = null);

(statearr_27855_27877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (4))){
var inst_27829 = (state_27852[(7)]);
var inst_27829__$1 = (state_27852[(2)]);
var inst_27830 = (inst_27829__$1 == null);
var state_27852__$1 = (function (){var statearr_27856 = state_27852;
(statearr_27856[(7)] = inst_27829__$1);

return statearr_27856;
})();
if(cljs.core.truth_(inst_27830)){
var statearr_27857_27878 = state_27852__$1;
(statearr_27857_27878[(1)] = (5));

} else {
var statearr_27858_27879 = state_27852__$1;
(statearr_27858_27879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (13))){
var state_27852__$1 = state_27852;
var statearr_27859_27880 = state_27852__$1;
(statearr_27859_27880[(2)] = null);

(statearr_27859_27880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (6))){
var inst_27829 = (state_27852[(7)]);
var inst_27835 = p.call(null,inst_27829);
var state_27852__$1 = state_27852;
if(cljs.core.truth_(inst_27835)){
var statearr_27860_27881 = state_27852__$1;
(statearr_27860_27881[(1)] = (9));

} else {
var statearr_27861_27882 = state_27852__$1;
(statearr_27861_27882[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (3))){
var inst_27850 = (state_27852[(2)]);
var state_27852__$1 = state_27852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27852__$1,inst_27850);
} else {
if((state_val_27853 === (12))){
var state_27852__$1 = state_27852;
var statearr_27862_27883 = state_27852__$1;
(statearr_27862_27883[(2)] = null);

(statearr_27862_27883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (2))){
var state_27852__$1 = state_27852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27852__$1,(4),ch);
} else {
if((state_val_27853 === (11))){
var inst_27829 = (state_27852[(7)]);
var inst_27839 = (state_27852[(2)]);
var state_27852__$1 = state_27852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27852__$1,(8),inst_27839,inst_27829);
} else {
if((state_val_27853 === (9))){
var state_27852__$1 = state_27852;
var statearr_27863_27884 = state_27852__$1;
(statearr_27863_27884[(2)] = tc);

(statearr_27863_27884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (5))){
var inst_27832 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27833 = cljs.core.async.close_BANG_.call(null,fc);
var state_27852__$1 = (function (){var statearr_27864 = state_27852;
(statearr_27864[(8)] = inst_27832);

return statearr_27864;
})();
var statearr_27865_27885 = state_27852__$1;
(statearr_27865_27885[(2)] = inst_27833);

(statearr_27865_27885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (14))){
var inst_27846 = (state_27852[(2)]);
var state_27852__$1 = state_27852;
var statearr_27866_27886 = state_27852__$1;
(statearr_27866_27886[(2)] = inst_27846);

(statearr_27866_27886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (10))){
var state_27852__$1 = state_27852;
var statearr_27867_27887 = state_27852__$1;
(statearr_27867_27887[(2)] = fc);

(statearr_27867_27887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27853 === (8))){
var inst_27841 = (state_27852[(2)]);
var state_27852__$1 = state_27852;
if(cljs.core.truth_(inst_27841)){
var statearr_27868_27888 = state_27852__$1;
(statearr_27868_27888[(1)] = (12));

} else {
var statearr_27869_27889 = state_27852__$1;
(statearr_27869_27889[(1)] = (13));

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
});})(c__27425__auto___27875,tc,fc))
;
return ((function (switch__27330__auto__,c__27425__auto___27875,tc,fc){
return (function() {
var cljs$core$async$state_machine__27331__auto__ = null;
var cljs$core$async$state_machine__27331__auto____0 = (function (){
var statearr_27870 = [null,null,null,null,null,null,null,null,null];
(statearr_27870[(0)] = cljs$core$async$state_machine__27331__auto__);

(statearr_27870[(1)] = (1));

return statearr_27870;
});
var cljs$core$async$state_machine__27331__auto____1 = (function (state_27852){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_27852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e27871){if((e27871 instanceof Object)){
var ex__27334__auto__ = e27871;
var statearr_27872_27890 = state_27852;
(statearr_27872_27890[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27891 = state_27852;
state_27852 = G__27891;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$state_machine__27331__auto__ = function(state_27852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27331__auto____1.call(this,state_27852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27331__auto____0;
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27331__auto____1;
return cljs$core$async$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___27875,tc,fc))
})();
var state__27427__auto__ = (function (){var statearr_27873 = f__27426__auto__.call(null);
(statearr_27873[(6)] = c__27425__auto___27875);

return statearr_27873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___27875,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto__){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto__){
return (function (state_27912){
var state_val_27913 = (state_27912[(1)]);
if((state_val_27913 === (7))){
var inst_27908 = (state_27912[(2)]);
var state_27912__$1 = state_27912;
var statearr_27914_27932 = state_27912__$1;
(statearr_27914_27932[(2)] = inst_27908);

(statearr_27914_27932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (1))){
var inst_27892 = init;
var state_27912__$1 = (function (){var statearr_27915 = state_27912;
(statearr_27915[(7)] = inst_27892);

return statearr_27915;
})();
var statearr_27916_27933 = state_27912__$1;
(statearr_27916_27933[(2)] = null);

(statearr_27916_27933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (4))){
var inst_27895 = (state_27912[(8)]);
var inst_27895__$1 = (state_27912[(2)]);
var inst_27896 = (inst_27895__$1 == null);
var state_27912__$1 = (function (){var statearr_27917 = state_27912;
(statearr_27917[(8)] = inst_27895__$1);

return statearr_27917;
})();
if(cljs.core.truth_(inst_27896)){
var statearr_27918_27934 = state_27912__$1;
(statearr_27918_27934[(1)] = (5));

} else {
var statearr_27919_27935 = state_27912__$1;
(statearr_27919_27935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (6))){
var inst_27895 = (state_27912[(8)]);
var inst_27892 = (state_27912[(7)]);
var inst_27899 = (state_27912[(9)]);
var inst_27899__$1 = f.call(null,inst_27892,inst_27895);
var inst_27900 = cljs.core.reduced_QMARK_.call(null,inst_27899__$1);
var state_27912__$1 = (function (){var statearr_27920 = state_27912;
(statearr_27920[(9)] = inst_27899__$1);

return statearr_27920;
})();
if(inst_27900){
var statearr_27921_27936 = state_27912__$1;
(statearr_27921_27936[(1)] = (8));

} else {
var statearr_27922_27937 = state_27912__$1;
(statearr_27922_27937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (3))){
var inst_27910 = (state_27912[(2)]);
var state_27912__$1 = state_27912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27912__$1,inst_27910);
} else {
if((state_val_27913 === (2))){
var state_27912__$1 = state_27912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27912__$1,(4),ch);
} else {
if((state_val_27913 === (9))){
var inst_27899 = (state_27912[(9)]);
var inst_27892 = inst_27899;
var state_27912__$1 = (function (){var statearr_27923 = state_27912;
(statearr_27923[(7)] = inst_27892);

return statearr_27923;
})();
var statearr_27924_27938 = state_27912__$1;
(statearr_27924_27938[(2)] = null);

(statearr_27924_27938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (5))){
var inst_27892 = (state_27912[(7)]);
var state_27912__$1 = state_27912;
var statearr_27925_27939 = state_27912__$1;
(statearr_27925_27939[(2)] = inst_27892);

(statearr_27925_27939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (10))){
var inst_27906 = (state_27912[(2)]);
var state_27912__$1 = state_27912;
var statearr_27926_27940 = state_27912__$1;
(statearr_27926_27940[(2)] = inst_27906);

(statearr_27926_27940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (8))){
var inst_27899 = (state_27912[(9)]);
var inst_27902 = cljs.core.deref.call(null,inst_27899);
var state_27912__$1 = state_27912;
var statearr_27927_27941 = state_27912__$1;
(statearr_27927_27941[(2)] = inst_27902);

(statearr_27927_27941[(1)] = (10));


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
});})(c__27425__auto__))
;
return ((function (switch__27330__auto__,c__27425__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27331__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27331__auto____0 = (function (){
var statearr_27928 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27928[(0)] = cljs$core$async$reduce_$_state_machine__27331__auto__);

(statearr_27928[(1)] = (1));

return statearr_27928;
});
var cljs$core$async$reduce_$_state_machine__27331__auto____1 = (function (state_27912){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_27912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e27929){if((e27929 instanceof Object)){
var ex__27334__auto__ = e27929;
var statearr_27930_27942 = state_27912;
(statearr_27930_27942[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27943 = state_27912;
state_27912 = G__27943;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27331__auto__ = function(state_27912){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27331__auto____1.call(this,state_27912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27331__auto____0;
cljs$core$async$reduce_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27331__auto____1;
return cljs$core$async$reduce_$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto__))
})();
var state__27427__auto__ = (function (){var statearr_27931 = f__27426__auto__.call(null);
(statearr_27931[(6)] = c__27425__auto__);

return statearr_27931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto__))
);

return c__27425__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto__,f__$1){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto__,f__$1){
return (function (state_27949){
var state_val_27950 = (state_27949[(1)]);
if((state_val_27950 === (1))){
var inst_27944 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27949__$1 = state_27949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27949__$1,(2),inst_27944);
} else {
if((state_val_27950 === (2))){
var inst_27946 = (state_27949[(2)]);
var inst_27947 = f__$1.call(null,inst_27946);
var state_27949__$1 = state_27949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27949__$1,inst_27947);
} else {
return null;
}
}
});})(c__27425__auto__,f__$1))
;
return ((function (switch__27330__auto__,c__27425__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27331__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27331__auto____0 = (function (){
var statearr_27951 = [null,null,null,null,null,null,null];
(statearr_27951[(0)] = cljs$core$async$transduce_$_state_machine__27331__auto__);

(statearr_27951[(1)] = (1));

return statearr_27951;
});
var cljs$core$async$transduce_$_state_machine__27331__auto____1 = (function (state_27949){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_27949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e27952){if((e27952 instanceof Object)){
var ex__27334__auto__ = e27952;
var statearr_27953_27955 = state_27949;
(statearr_27953_27955[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27956 = state_27949;
state_27949 = G__27956;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27331__auto__ = function(state_27949){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27331__auto____1.call(this,state_27949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27331__auto____0;
cljs$core$async$transduce_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27331__auto____1;
return cljs$core$async$transduce_$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto__,f__$1))
})();
var state__27427__auto__ = (function (){var statearr_27954 = f__27426__auto__.call(null);
(statearr_27954[(6)] = c__27425__auto__);

return statearr_27954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto__,f__$1))
);

return c__27425__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27958 = arguments.length;
switch (G__27958) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto__){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto__){
return (function (state_27983){
var state_val_27984 = (state_27983[(1)]);
if((state_val_27984 === (7))){
var inst_27965 = (state_27983[(2)]);
var state_27983__$1 = state_27983;
var statearr_27985_28006 = state_27983__$1;
(statearr_27985_28006[(2)] = inst_27965);

(statearr_27985_28006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (1))){
var inst_27959 = cljs.core.seq.call(null,coll);
var inst_27960 = inst_27959;
var state_27983__$1 = (function (){var statearr_27986 = state_27983;
(statearr_27986[(7)] = inst_27960);

return statearr_27986;
})();
var statearr_27987_28007 = state_27983__$1;
(statearr_27987_28007[(2)] = null);

(statearr_27987_28007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (4))){
var inst_27960 = (state_27983[(7)]);
var inst_27963 = cljs.core.first.call(null,inst_27960);
var state_27983__$1 = state_27983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27983__$1,(7),ch,inst_27963);
} else {
if((state_val_27984 === (13))){
var inst_27977 = (state_27983[(2)]);
var state_27983__$1 = state_27983;
var statearr_27988_28008 = state_27983__$1;
(statearr_27988_28008[(2)] = inst_27977);

(statearr_27988_28008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (6))){
var inst_27968 = (state_27983[(2)]);
var state_27983__$1 = state_27983;
if(cljs.core.truth_(inst_27968)){
var statearr_27989_28009 = state_27983__$1;
(statearr_27989_28009[(1)] = (8));

} else {
var statearr_27990_28010 = state_27983__$1;
(statearr_27990_28010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (3))){
var inst_27981 = (state_27983[(2)]);
var state_27983__$1 = state_27983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27983__$1,inst_27981);
} else {
if((state_val_27984 === (12))){
var state_27983__$1 = state_27983;
var statearr_27991_28011 = state_27983__$1;
(statearr_27991_28011[(2)] = null);

(statearr_27991_28011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (2))){
var inst_27960 = (state_27983[(7)]);
var state_27983__$1 = state_27983;
if(cljs.core.truth_(inst_27960)){
var statearr_27992_28012 = state_27983__$1;
(statearr_27992_28012[(1)] = (4));

} else {
var statearr_27993_28013 = state_27983__$1;
(statearr_27993_28013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (11))){
var inst_27974 = cljs.core.async.close_BANG_.call(null,ch);
var state_27983__$1 = state_27983;
var statearr_27994_28014 = state_27983__$1;
(statearr_27994_28014[(2)] = inst_27974);

(statearr_27994_28014[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (9))){
var state_27983__$1 = state_27983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27995_28015 = state_27983__$1;
(statearr_27995_28015[(1)] = (11));

} else {
var statearr_27996_28016 = state_27983__$1;
(statearr_27996_28016[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (5))){
var inst_27960 = (state_27983[(7)]);
var state_27983__$1 = state_27983;
var statearr_27997_28017 = state_27983__$1;
(statearr_27997_28017[(2)] = inst_27960);

(statearr_27997_28017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (10))){
var inst_27979 = (state_27983[(2)]);
var state_27983__$1 = state_27983;
var statearr_27998_28018 = state_27983__$1;
(statearr_27998_28018[(2)] = inst_27979);

(statearr_27998_28018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (8))){
var inst_27960 = (state_27983[(7)]);
var inst_27970 = cljs.core.next.call(null,inst_27960);
var inst_27960__$1 = inst_27970;
var state_27983__$1 = (function (){var statearr_27999 = state_27983;
(statearr_27999[(7)] = inst_27960__$1);

return statearr_27999;
})();
var statearr_28000_28019 = state_27983__$1;
(statearr_28000_28019[(2)] = null);

(statearr_28000_28019[(1)] = (2));


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
});})(c__27425__auto__))
;
return ((function (switch__27330__auto__,c__27425__auto__){
return (function() {
var cljs$core$async$state_machine__27331__auto__ = null;
var cljs$core$async$state_machine__27331__auto____0 = (function (){
var statearr_28001 = [null,null,null,null,null,null,null,null];
(statearr_28001[(0)] = cljs$core$async$state_machine__27331__auto__);

(statearr_28001[(1)] = (1));

return statearr_28001;
});
var cljs$core$async$state_machine__27331__auto____1 = (function (state_27983){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_27983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e28002){if((e28002 instanceof Object)){
var ex__27334__auto__ = e28002;
var statearr_28003_28020 = state_27983;
(statearr_28003_28020[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28021 = state_27983;
state_27983 = G__28021;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$state_machine__27331__auto__ = function(state_27983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27331__auto____1.call(this,state_27983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27331__auto____0;
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27331__auto____1;
return cljs$core$async$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto__))
})();
var state__27427__auto__ = (function (){var statearr_28004 = f__27426__auto__.call(null);
(statearr_28004[(6)] = c__27425__auto__);

return statearr_28004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto__))
);

return c__27425__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28022 = (function (ch,cs,meta28023){
this.ch = ch;
this.cs = cs;
this.meta28023 = meta28023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28024,meta28023__$1){
var self__ = this;
var _28024__$1 = this;
return (new cljs.core.async.t_cljs$core$async28022(self__.ch,self__.cs,meta28023__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28024){
var self__ = this;
var _28024__$1 = this;
return self__.meta28023;
});})(cs))
;

cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28022.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28023","meta28023",2045292929,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28022";

cljs.core.async.t_cljs$core$async28022.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28022");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28022.
 */
cljs.core.async.__GT_t_cljs$core$async28022 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28022(ch__$1,cs__$1,meta28023){
return (new cljs.core.async.t_cljs$core$async28022(ch__$1,cs__$1,meta28023));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28022(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27425__auto___28244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___28244,cs,m,dchan,dctr,done){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___28244,cs,m,dchan,dctr,done){
return (function (state_28159){
var state_val_28160 = (state_28159[(1)]);
if((state_val_28160 === (7))){
var inst_28155 = (state_28159[(2)]);
var state_28159__$1 = state_28159;
var statearr_28161_28245 = state_28159__$1;
(statearr_28161_28245[(2)] = inst_28155);

(statearr_28161_28245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (20))){
var inst_28058 = (state_28159[(7)]);
var inst_28070 = cljs.core.first.call(null,inst_28058);
var inst_28071 = cljs.core.nth.call(null,inst_28070,(0),null);
var inst_28072 = cljs.core.nth.call(null,inst_28070,(1),null);
var state_28159__$1 = (function (){var statearr_28162 = state_28159;
(statearr_28162[(8)] = inst_28071);

return statearr_28162;
})();
if(cljs.core.truth_(inst_28072)){
var statearr_28163_28246 = state_28159__$1;
(statearr_28163_28246[(1)] = (22));

} else {
var statearr_28164_28247 = state_28159__$1;
(statearr_28164_28247[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (27))){
var inst_28102 = (state_28159[(9)]);
var inst_28027 = (state_28159[(10)]);
var inst_28107 = (state_28159[(11)]);
var inst_28100 = (state_28159[(12)]);
var inst_28107__$1 = cljs.core._nth.call(null,inst_28100,inst_28102);
var inst_28108 = cljs.core.async.put_BANG_.call(null,inst_28107__$1,inst_28027,done);
var state_28159__$1 = (function (){var statearr_28165 = state_28159;
(statearr_28165[(11)] = inst_28107__$1);

return statearr_28165;
})();
if(cljs.core.truth_(inst_28108)){
var statearr_28166_28248 = state_28159__$1;
(statearr_28166_28248[(1)] = (30));

} else {
var statearr_28167_28249 = state_28159__$1;
(statearr_28167_28249[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (1))){
var state_28159__$1 = state_28159;
var statearr_28168_28250 = state_28159__$1;
(statearr_28168_28250[(2)] = null);

(statearr_28168_28250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (24))){
var inst_28058 = (state_28159[(7)]);
var inst_28077 = (state_28159[(2)]);
var inst_28078 = cljs.core.next.call(null,inst_28058);
var inst_28036 = inst_28078;
var inst_28037 = null;
var inst_28038 = (0);
var inst_28039 = (0);
var state_28159__$1 = (function (){var statearr_28169 = state_28159;
(statearr_28169[(13)] = inst_28038);

(statearr_28169[(14)] = inst_28037);

(statearr_28169[(15)] = inst_28036);

(statearr_28169[(16)] = inst_28039);

(statearr_28169[(17)] = inst_28077);

return statearr_28169;
})();
var statearr_28170_28251 = state_28159__$1;
(statearr_28170_28251[(2)] = null);

(statearr_28170_28251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (39))){
var state_28159__$1 = state_28159;
var statearr_28174_28252 = state_28159__$1;
(statearr_28174_28252[(2)] = null);

(statearr_28174_28252[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (4))){
var inst_28027 = (state_28159[(10)]);
var inst_28027__$1 = (state_28159[(2)]);
var inst_28028 = (inst_28027__$1 == null);
var state_28159__$1 = (function (){var statearr_28175 = state_28159;
(statearr_28175[(10)] = inst_28027__$1);

return statearr_28175;
})();
if(cljs.core.truth_(inst_28028)){
var statearr_28176_28253 = state_28159__$1;
(statearr_28176_28253[(1)] = (5));

} else {
var statearr_28177_28254 = state_28159__$1;
(statearr_28177_28254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (15))){
var inst_28038 = (state_28159[(13)]);
var inst_28037 = (state_28159[(14)]);
var inst_28036 = (state_28159[(15)]);
var inst_28039 = (state_28159[(16)]);
var inst_28054 = (state_28159[(2)]);
var inst_28055 = (inst_28039 + (1));
var tmp28171 = inst_28038;
var tmp28172 = inst_28037;
var tmp28173 = inst_28036;
var inst_28036__$1 = tmp28173;
var inst_28037__$1 = tmp28172;
var inst_28038__$1 = tmp28171;
var inst_28039__$1 = inst_28055;
var state_28159__$1 = (function (){var statearr_28178 = state_28159;
(statearr_28178[(18)] = inst_28054);

(statearr_28178[(13)] = inst_28038__$1);

(statearr_28178[(14)] = inst_28037__$1);

(statearr_28178[(15)] = inst_28036__$1);

(statearr_28178[(16)] = inst_28039__$1);

return statearr_28178;
})();
var statearr_28179_28255 = state_28159__$1;
(statearr_28179_28255[(2)] = null);

(statearr_28179_28255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (21))){
var inst_28081 = (state_28159[(2)]);
var state_28159__$1 = state_28159;
var statearr_28183_28256 = state_28159__$1;
(statearr_28183_28256[(2)] = inst_28081);

(statearr_28183_28256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (31))){
var inst_28107 = (state_28159[(11)]);
var inst_28111 = done.call(null,null);
var inst_28112 = cljs.core.async.untap_STAR_.call(null,m,inst_28107);
var state_28159__$1 = (function (){var statearr_28184 = state_28159;
(statearr_28184[(19)] = inst_28111);

return statearr_28184;
})();
var statearr_28185_28257 = state_28159__$1;
(statearr_28185_28257[(2)] = inst_28112);

(statearr_28185_28257[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (32))){
var inst_28102 = (state_28159[(9)]);
var inst_28099 = (state_28159[(20)]);
var inst_28101 = (state_28159[(21)]);
var inst_28100 = (state_28159[(12)]);
var inst_28114 = (state_28159[(2)]);
var inst_28115 = (inst_28102 + (1));
var tmp28180 = inst_28099;
var tmp28181 = inst_28101;
var tmp28182 = inst_28100;
var inst_28099__$1 = tmp28180;
var inst_28100__$1 = tmp28182;
var inst_28101__$1 = tmp28181;
var inst_28102__$1 = inst_28115;
var state_28159__$1 = (function (){var statearr_28186 = state_28159;
(statearr_28186[(9)] = inst_28102__$1);

(statearr_28186[(20)] = inst_28099__$1);

(statearr_28186[(21)] = inst_28101__$1);

(statearr_28186[(22)] = inst_28114);

(statearr_28186[(12)] = inst_28100__$1);

return statearr_28186;
})();
var statearr_28187_28258 = state_28159__$1;
(statearr_28187_28258[(2)] = null);

(statearr_28187_28258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (40))){
var inst_28127 = (state_28159[(23)]);
var inst_28131 = done.call(null,null);
var inst_28132 = cljs.core.async.untap_STAR_.call(null,m,inst_28127);
var state_28159__$1 = (function (){var statearr_28188 = state_28159;
(statearr_28188[(24)] = inst_28131);

return statearr_28188;
})();
var statearr_28189_28259 = state_28159__$1;
(statearr_28189_28259[(2)] = inst_28132);

(statearr_28189_28259[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (33))){
var inst_28118 = (state_28159[(25)]);
var inst_28120 = cljs.core.chunked_seq_QMARK_.call(null,inst_28118);
var state_28159__$1 = state_28159;
if(inst_28120){
var statearr_28190_28260 = state_28159__$1;
(statearr_28190_28260[(1)] = (36));

} else {
var statearr_28191_28261 = state_28159__$1;
(statearr_28191_28261[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (13))){
var inst_28048 = (state_28159[(26)]);
var inst_28051 = cljs.core.async.close_BANG_.call(null,inst_28048);
var state_28159__$1 = state_28159;
var statearr_28192_28262 = state_28159__$1;
(statearr_28192_28262[(2)] = inst_28051);

(statearr_28192_28262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (22))){
var inst_28071 = (state_28159[(8)]);
var inst_28074 = cljs.core.async.close_BANG_.call(null,inst_28071);
var state_28159__$1 = state_28159;
var statearr_28193_28263 = state_28159__$1;
(statearr_28193_28263[(2)] = inst_28074);

(statearr_28193_28263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (36))){
var inst_28118 = (state_28159[(25)]);
var inst_28122 = cljs.core.chunk_first.call(null,inst_28118);
var inst_28123 = cljs.core.chunk_rest.call(null,inst_28118);
var inst_28124 = cljs.core.count.call(null,inst_28122);
var inst_28099 = inst_28123;
var inst_28100 = inst_28122;
var inst_28101 = inst_28124;
var inst_28102 = (0);
var state_28159__$1 = (function (){var statearr_28194 = state_28159;
(statearr_28194[(9)] = inst_28102);

(statearr_28194[(20)] = inst_28099);

(statearr_28194[(21)] = inst_28101);

(statearr_28194[(12)] = inst_28100);

return statearr_28194;
})();
var statearr_28195_28264 = state_28159__$1;
(statearr_28195_28264[(2)] = null);

(statearr_28195_28264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (41))){
var inst_28118 = (state_28159[(25)]);
var inst_28134 = (state_28159[(2)]);
var inst_28135 = cljs.core.next.call(null,inst_28118);
var inst_28099 = inst_28135;
var inst_28100 = null;
var inst_28101 = (0);
var inst_28102 = (0);
var state_28159__$1 = (function (){var statearr_28196 = state_28159;
(statearr_28196[(9)] = inst_28102);

(statearr_28196[(20)] = inst_28099);

(statearr_28196[(27)] = inst_28134);

(statearr_28196[(21)] = inst_28101);

(statearr_28196[(12)] = inst_28100);

return statearr_28196;
})();
var statearr_28197_28265 = state_28159__$1;
(statearr_28197_28265[(2)] = null);

(statearr_28197_28265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (43))){
var state_28159__$1 = state_28159;
var statearr_28198_28266 = state_28159__$1;
(statearr_28198_28266[(2)] = null);

(statearr_28198_28266[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (29))){
var inst_28143 = (state_28159[(2)]);
var state_28159__$1 = state_28159;
var statearr_28199_28267 = state_28159__$1;
(statearr_28199_28267[(2)] = inst_28143);

(statearr_28199_28267[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (44))){
var inst_28152 = (state_28159[(2)]);
var state_28159__$1 = (function (){var statearr_28200 = state_28159;
(statearr_28200[(28)] = inst_28152);

return statearr_28200;
})();
var statearr_28201_28268 = state_28159__$1;
(statearr_28201_28268[(2)] = null);

(statearr_28201_28268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (6))){
var inst_28091 = (state_28159[(29)]);
var inst_28090 = cljs.core.deref.call(null,cs);
var inst_28091__$1 = cljs.core.keys.call(null,inst_28090);
var inst_28092 = cljs.core.count.call(null,inst_28091__$1);
var inst_28093 = cljs.core.reset_BANG_.call(null,dctr,inst_28092);
var inst_28098 = cljs.core.seq.call(null,inst_28091__$1);
var inst_28099 = inst_28098;
var inst_28100 = null;
var inst_28101 = (0);
var inst_28102 = (0);
var state_28159__$1 = (function (){var statearr_28202 = state_28159;
(statearr_28202[(9)] = inst_28102);

(statearr_28202[(20)] = inst_28099);

(statearr_28202[(21)] = inst_28101);

(statearr_28202[(30)] = inst_28093);

(statearr_28202[(29)] = inst_28091__$1);

(statearr_28202[(12)] = inst_28100);

return statearr_28202;
})();
var statearr_28203_28269 = state_28159__$1;
(statearr_28203_28269[(2)] = null);

(statearr_28203_28269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (28))){
var inst_28099 = (state_28159[(20)]);
var inst_28118 = (state_28159[(25)]);
var inst_28118__$1 = cljs.core.seq.call(null,inst_28099);
var state_28159__$1 = (function (){var statearr_28204 = state_28159;
(statearr_28204[(25)] = inst_28118__$1);

return statearr_28204;
})();
if(inst_28118__$1){
var statearr_28205_28270 = state_28159__$1;
(statearr_28205_28270[(1)] = (33));

} else {
var statearr_28206_28271 = state_28159__$1;
(statearr_28206_28271[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (25))){
var inst_28102 = (state_28159[(9)]);
var inst_28101 = (state_28159[(21)]);
var inst_28104 = (inst_28102 < inst_28101);
var inst_28105 = inst_28104;
var state_28159__$1 = state_28159;
if(cljs.core.truth_(inst_28105)){
var statearr_28207_28272 = state_28159__$1;
(statearr_28207_28272[(1)] = (27));

} else {
var statearr_28208_28273 = state_28159__$1;
(statearr_28208_28273[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (34))){
var state_28159__$1 = state_28159;
var statearr_28209_28274 = state_28159__$1;
(statearr_28209_28274[(2)] = null);

(statearr_28209_28274[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (17))){
var state_28159__$1 = state_28159;
var statearr_28210_28275 = state_28159__$1;
(statearr_28210_28275[(2)] = null);

(statearr_28210_28275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (3))){
var inst_28157 = (state_28159[(2)]);
var state_28159__$1 = state_28159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28159__$1,inst_28157);
} else {
if((state_val_28160 === (12))){
var inst_28086 = (state_28159[(2)]);
var state_28159__$1 = state_28159;
var statearr_28211_28276 = state_28159__$1;
(statearr_28211_28276[(2)] = inst_28086);

(statearr_28211_28276[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (2))){
var state_28159__$1 = state_28159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28159__$1,(4),ch);
} else {
if((state_val_28160 === (23))){
var state_28159__$1 = state_28159;
var statearr_28212_28277 = state_28159__$1;
(statearr_28212_28277[(2)] = null);

(statearr_28212_28277[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (35))){
var inst_28141 = (state_28159[(2)]);
var state_28159__$1 = state_28159;
var statearr_28213_28278 = state_28159__$1;
(statearr_28213_28278[(2)] = inst_28141);

(statearr_28213_28278[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (19))){
var inst_28058 = (state_28159[(7)]);
var inst_28062 = cljs.core.chunk_first.call(null,inst_28058);
var inst_28063 = cljs.core.chunk_rest.call(null,inst_28058);
var inst_28064 = cljs.core.count.call(null,inst_28062);
var inst_28036 = inst_28063;
var inst_28037 = inst_28062;
var inst_28038 = inst_28064;
var inst_28039 = (0);
var state_28159__$1 = (function (){var statearr_28214 = state_28159;
(statearr_28214[(13)] = inst_28038);

(statearr_28214[(14)] = inst_28037);

(statearr_28214[(15)] = inst_28036);

(statearr_28214[(16)] = inst_28039);

return statearr_28214;
})();
var statearr_28215_28279 = state_28159__$1;
(statearr_28215_28279[(2)] = null);

(statearr_28215_28279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (11))){
var inst_28036 = (state_28159[(15)]);
var inst_28058 = (state_28159[(7)]);
var inst_28058__$1 = cljs.core.seq.call(null,inst_28036);
var state_28159__$1 = (function (){var statearr_28216 = state_28159;
(statearr_28216[(7)] = inst_28058__$1);

return statearr_28216;
})();
if(inst_28058__$1){
var statearr_28217_28280 = state_28159__$1;
(statearr_28217_28280[(1)] = (16));

} else {
var statearr_28218_28281 = state_28159__$1;
(statearr_28218_28281[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (9))){
var inst_28088 = (state_28159[(2)]);
var state_28159__$1 = state_28159;
var statearr_28219_28282 = state_28159__$1;
(statearr_28219_28282[(2)] = inst_28088);

(statearr_28219_28282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (5))){
var inst_28034 = cljs.core.deref.call(null,cs);
var inst_28035 = cljs.core.seq.call(null,inst_28034);
var inst_28036 = inst_28035;
var inst_28037 = null;
var inst_28038 = (0);
var inst_28039 = (0);
var state_28159__$1 = (function (){var statearr_28220 = state_28159;
(statearr_28220[(13)] = inst_28038);

(statearr_28220[(14)] = inst_28037);

(statearr_28220[(15)] = inst_28036);

(statearr_28220[(16)] = inst_28039);

return statearr_28220;
})();
var statearr_28221_28283 = state_28159__$1;
(statearr_28221_28283[(2)] = null);

(statearr_28221_28283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (14))){
var state_28159__$1 = state_28159;
var statearr_28222_28284 = state_28159__$1;
(statearr_28222_28284[(2)] = null);

(statearr_28222_28284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (45))){
var inst_28149 = (state_28159[(2)]);
var state_28159__$1 = state_28159;
var statearr_28223_28285 = state_28159__$1;
(statearr_28223_28285[(2)] = inst_28149);

(statearr_28223_28285[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (26))){
var inst_28091 = (state_28159[(29)]);
var inst_28145 = (state_28159[(2)]);
var inst_28146 = cljs.core.seq.call(null,inst_28091);
var state_28159__$1 = (function (){var statearr_28224 = state_28159;
(statearr_28224[(31)] = inst_28145);

return statearr_28224;
})();
if(inst_28146){
var statearr_28225_28286 = state_28159__$1;
(statearr_28225_28286[(1)] = (42));

} else {
var statearr_28226_28287 = state_28159__$1;
(statearr_28226_28287[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (16))){
var inst_28058 = (state_28159[(7)]);
var inst_28060 = cljs.core.chunked_seq_QMARK_.call(null,inst_28058);
var state_28159__$1 = state_28159;
if(inst_28060){
var statearr_28227_28288 = state_28159__$1;
(statearr_28227_28288[(1)] = (19));

} else {
var statearr_28228_28289 = state_28159__$1;
(statearr_28228_28289[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (38))){
var inst_28138 = (state_28159[(2)]);
var state_28159__$1 = state_28159;
var statearr_28229_28290 = state_28159__$1;
(statearr_28229_28290[(2)] = inst_28138);

(statearr_28229_28290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (30))){
var state_28159__$1 = state_28159;
var statearr_28230_28291 = state_28159__$1;
(statearr_28230_28291[(2)] = null);

(statearr_28230_28291[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (10))){
var inst_28037 = (state_28159[(14)]);
var inst_28039 = (state_28159[(16)]);
var inst_28047 = cljs.core._nth.call(null,inst_28037,inst_28039);
var inst_28048 = cljs.core.nth.call(null,inst_28047,(0),null);
var inst_28049 = cljs.core.nth.call(null,inst_28047,(1),null);
var state_28159__$1 = (function (){var statearr_28231 = state_28159;
(statearr_28231[(26)] = inst_28048);

return statearr_28231;
})();
if(cljs.core.truth_(inst_28049)){
var statearr_28232_28292 = state_28159__$1;
(statearr_28232_28292[(1)] = (13));

} else {
var statearr_28233_28293 = state_28159__$1;
(statearr_28233_28293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (18))){
var inst_28084 = (state_28159[(2)]);
var state_28159__$1 = state_28159;
var statearr_28234_28294 = state_28159__$1;
(statearr_28234_28294[(2)] = inst_28084);

(statearr_28234_28294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (42))){
var state_28159__$1 = state_28159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28159__$1,(45),dchan);
} else {
if((state_val_28160 === (37))){
var inst_28118 = (state_28159[(25)]);
var inst_28027 = (state_28159[(10)]);
var inst_28127 = (state_28159[(23)]);
var inst_28127__$1 = cljs.core.first.call(null,inst_28118);
var inst_28128 = cljs.core.async.put_BANG_.call(null,inst_28127__$1,inst_28027,done);
var state_28159__$1 = (function (){var statearr_28235 = state_28159;
(statearr_28235[(23)] = inst_28127__$1);

return statearr_28235;
})();
if(cljs.core.truth_(inst_28128)){
var statearr_28236_28295 = state_28159__$1;
(statearr_28236_28295[(1)] = (39));

} else {
var statearr_28237_28296 = state_28159__$1;
(statearr_28237_28296[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28160 === (8))){
var inst_28038 = (state_28159[(13)]);
var inst_28039 = (state_28159[(16)]);
var inst_28041 = (inst_28039 < inst_28038);
var inst_28042 = inst_28041;
var state_28159__$1 = state_28159;
if(cljs.core.truth_(inst_28042)){
var statearr_28238_28297 = state_28159__$1;
(statearr_28238_28297[(1)] = (10));

} else {
var statearr_28239_28298 = state_28159__$1;
(statearr_28239_28298[(1)] = (11));

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
});})(c__27425__auto___28244,cs,m,dchan,dctr,done))
;
return ((function (switch__27330__auto__,c__27425__auto___28244,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27331__auto__ = null;
var cljs$core$async$mult_$_state_machine__27331__auto____0 = (function (){
var statearr_28240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28240[(0)] = cljs$core$async$mult_$_state_machine__27331__auto__);

(statearr_28240[(1)] = (1));

return statearr_28240;
});
var cljs$core$async$mult_$_state_machine__27331__auto____1 = (function (state_28159){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_28159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e28241){if((e28241 instanceof Object)){
var ex__27334__auto__ = e28241;
var statearr_28242_28299 = state_28159;
(statearr_28242_28299[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28300 = state_28159;
state_28159 = G__28300;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27331__auto__ = function(state_28159){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27331__auto____1.call(this,state_28159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27331__auto____0;
cljs$core$async$mult_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27331__auto____1;
return cljs$core$async$mult_$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___28244,cs,m,dchan,dctr,done))
})();
var state__27427__auto__ = (function (){var statearr_28243 = f__27426__auto__.call(null);
(statearr_28243[(6)] = c__27425__auto___28244);

return statearr_28243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___28244,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28302 = arguments.length;
switch (G__28302) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28314 = arguments.length;
var i__4731__auto___28315 = (0);
while(true){
if((i__4731__auto___28315 < len__4730__auto___28314)){
args__4736__auto__.push((arguments[i__4731__auto___28315]));

var G__28316 = (i__4731__auto___28315 + (1));
i__4731__auto___28315 = G__28316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28308){
var map__28309 = p__28308;
var map__28309__$1 = (((((!((map__28309 == null))))?(((((map__28309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28309):map__28309);
var opts = map__28309__$1;
var statearr_28311_28317 = state;
(statearr_28311_28317[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28309,map__28309__$1,opts){
return (function (val){
var statearr_28312_28318 = state;
(statearr_28312_28318[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28309,map__28309__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28313_28319 = state;
(statearr_28313_28319[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28304){
var G__28305 = cljs.core.first.call(null,seq28304);
var seq28304__$1 = cljs.core.next.call(null,seq28304);
var G__28306 = cljs.core.first.call(null,seq28304__$1);
var seq28304__$2 = cljs.core.next.call(null,seq28304__$1);
var G__28307 = cljs.core.first.call(null,seq28304__$2);
var seq28304__$3 = cljs.core.next.call(null,seq28304__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28305,G__28306,G__28307,seq28304__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28320 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28321){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28321 = meta28321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28322,meta28321__$1){
var self__ = this;
var _28322__$1 = this;
return (new cljs.core.async.t_cljs$core$async28320(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28321__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28322){
var self__ = this;
var _28322__$1 = this;
return self__.meta28321;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28320.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28321","meta28321",-1733743091,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28320";

cljs.core.async.t_cljs$core$async28320.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28320");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28320.
 */
cljs.core.async.__GT_t_cljs$core$async28320 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28320(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28321){
return (new cljs.core.async.t_cljs$core$async28320(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28321));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28320(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27425__auto___28484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___28484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___28484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28424){
var state_val_28425 = (state_28424[(1)]);
if((state_val_28425 === (7))){
var inst_28339 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28426_28485 = state_28424__$1;
(statearr_28426_28485[(2)] = inst_28339);

(statearr_28426_28485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (20))){
var inst_28351 = (state_28424[(7)]);
var state_28424__$1 = state_28424;
var statearr_28427_28486 = state_28424__$1;
(statearr_28427_28486[(2)] = inst_28351);

(statearr_28427_28486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (27))){
var state_28424__$1 = state_28424;
var statearr_28428_28487 = state_28424__$1;
(statearr_28428_28487[(2)] = null);

(statearr_28428_28487[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (1))){
var inst_28326 = (state_28424[(8)]);
var inst_28326__$1 = calc_state.call(null);
var inst_28328 = (inst_28326__$1 == null);
var inst_28329 = cljs.core.not.call(null,inst_28328);
var state_28424__$1 = (function (){var statearr_28429 = state_28424;
(statearr_28429[(8)] = inst_28326__$1);

return statearr_28429;
})();
if(inst_28329){
var statearr_28430_28488 = state_28424__$1;
(statearr_28430_28488[(1)] = (2));

} else {
var statearr_28431_28489 = state_28424__$1;
(statearr_28431_28489[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (24))){
var inst_28384 = (state_28424[(9)]);
var inst_28375 = (state_28424[(10)]);
var inst_28398 = (state_28424[(11)]);
var inst_28398__$1 = inst_28375.call(null,inst_28384);
var state_28424__$1 = (function (){var statearr_28432 = state_28424;
(statearr_28432[(11)] = inst_28398__$1);

return statearr_28432;
})();
if(cljs.core.truth_(inst_28398__$1)){
var statearr_28433_28490 = state_28424__$1;
(statearr_28433_28490[(1)] = (29));

} else {
var statearr_28434_28491 = state_28424__$1;
(statearr_28434_28491[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (4))){
var inst_28342 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28342)){
var statearr_28435_28492 = state_28424__$1;
(statearr_28435_28492[(1)] = (8));

} else {
var statearr_28436_28493 = state_28424__$1;
(statearr_28436_28493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (15))){
var inst_28369 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28369)){
var statearr_28437_28494 = state_28424__$1;
(statearr_28437_28494[(1)] = (19));

} else {
var statearr_28438_28495 = state_28424__$1;
(statearr_28438_28495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (21))){
var inst_28374 = (state_28424[(12)]);
var inst_28374__$1 = (state_28424[(2)]);
var inst_28375 = cljs.core.get.call(null,inst_28374__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28376 = cljs.core.get.call(null,inst_28374__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28377 = cljs.core.get.call(null,inst_28374__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28424__$1 = (function (){var statearr_28439 = state_28424;
(statearr_28439[(10)] = inst_28375);

(statearr_28439[(12)] = inst_28374__$1);

(statearr_28439[(13)] = inst_28376);

return statearr_28439;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28424__$1,(22),inst_28377);
} else {
if((state_val_28425 === (31))){
var inst_28406 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28406)){
var statearr_28440_28496 = state_28424__$1;
(statearr_28440_28496[(1)] = (32));

} else {
var statearr_28441_28497 = state_28424__$1;
(statearr_28441_28497[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (32))){
var inst_28383 = (state_28424[(14)]);
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28424__$1,(35),out,inst_28383);
} else {
if((state_val_28425 === (33))){
var inst_28374 = (state_28424[(12)]);
var inst_28351 = inst_28374;
var state_28424__$1 = (function (){var statearr_28442 = state_28424;
(statearr_28442[(7)] = inst_28351);

return statearr_28442;
})();
var statearr_28443_28498 = state_28424__$1;
(statearr_28443_28498[(2)] = null);

(statearr_28443_28498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (13))){
var inst_28351 = (state_28424[(7)]);
var inst_28358 = inst_28351.cljs$lang$protocol_mask$partition0$;
var inst_28359 = (inst_28358 & (64));
var inst_28360 = inst_28351.cljs$core$ISeq$;
var inst_28361 = (cljs.core.PROTOCOL_SENTINEL === inst_28360);
var inst_28362 = ((inst_28359) || (inst_28361));
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28362)){
var statearr_28444_28499 = state_28424__$1;
(statearr_28444_28499[(1)] = (16));

} else {
var statearr_28445_28500 = state_28424__$1;
(statearr_28445_28500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (22))){
var inst_28384 = (state_28424[(9)]);
var inst_28383 = (state_28424[(14)]);
var inst_28382 = (state_28424[(2)]);
var inst_28383__$1 = cljs.core.nth.call(null,inst_28382,(0),null);
var inst_28384__$1 = cljs.core.nth.call(null,inst_28382,(1),null);
var inst_28385 = (inst_28383__$1 == null);
var inst_28386 = cljs.core._EQ_.call(null,inst_28384__$1,change);
var inst_28387 = ((inst_28385) || (inst_28386));
var state_28424__$1 = (function (){var statearr_28446 = state_28424;
(statearr_28446[(9)] = inst_28384__$1);

(statearr_28446[(14)] = inst_28383__$1);

return statearr_28446;
})();
if(cljs.core.truth_(inst_28387)){
var statearr_28447_28501 = state_28424__$1;
(statearr_28447_28501[(1)] = (23));

} else {
var statearr_28448_28502 = state_28424__$1;
(statearr_28448_28502[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (36))){
var inst_28374 = (state_28424[(12)]);
var inst_28351 = inst_28374;
var state_28424__$1 = (function (){var statearr_28449 = state_28424;
(statearr_28449[(7)] = inst_28351);

return statearr_28449;
})();
var statearr_28450_28503 = state_28424__$1;
(statearr_28450_28503[(2)] = null);

(statearr_28450_28503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (29))){
var inst_28398 = (state_28424[(11)]);
var state_28424__$1 = state_28424;
var statearr_28451_28504 = state_28424__$1;
(statearr_28451_28504[(2)] = inst_28398);

(statearr_28451_28504[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (6))){
var state_28424__$1 = state_28424;
var statearr_28452_28505 = state_28424__$1;
(statearr_28452_28505[(2)] = false);

(statearr_28452_28505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (28))){
var inst_28394 = (state_28424[(2)]);
var inst_28395 = calc_state.call(null);
var inst_28351 = inst_28395;
var state_28424__$1 = (function (){var statearr_28453 = state_28424;
(statearr_28453[(7)] = inst_28351);

(statearr_28453[(15)] = inst_28394);

return statearr_28453;
})();
var statearr_28454_28506 = state_28424__$1;
(statearr_28454_28506[(2)] = null);

(statearr_28454_28506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (25))){
var inst_28420 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28455_28507 = state_28424__$1;
(statearr_28455_28507[(2)] = inst_28420);

(statearr_28455_28507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (34))){
var inst_28418 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28456_28508 = state_28424__$1;
(statearr_28456_28508[(2)] = inst_28418);

(statearr_28456_28508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (17))){
var state_28424__$1 = state_28424;
var statearr_28457_28509 = state_28424__$1;
(statearr_28457_28509[(2)] = false);

(statearr_28457_28509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (3))){
var state_28424__$1 = state_28424;
var statearr_28458_28510 = state_28424__$1;
(statearr_28458_28510[(2)] = false);

(statearr_28458_28510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (12))){
var inst_28422 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28424__$1,inst_28422);
} else {
if((state_val_28425 === (2))){
var inst_28326 = (state_28424[(8)]);
var inst_28331 = inst_28326.cljs$lang$protocol_mask$partition0$;
var inst_28332 = (inst_28331 & (64));
var inst_28333 = inst_28326.cljs$core$ISeq$;
var inst_28334 = (cljs.core.PROTOCOL_SENTINEL === inst_28333);
var inst_28335 = ((inst_28332) || (inst_28334));
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28335)){
var statearr_28459_28511 = state_28424__$1;
(statearr_28459_28511[(1)] = (5));

} else {
var statearr_28460_28512 = state_28424__$1;
(statearr_28460_28512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (23))){
var inst_28383 = (state_28424[(14)]);
var inst_28389 = (inst_28383 == null);
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28389)){
var statearr_28461_28513 = state_28424__$1;
(statearr_28461_28513[(1)] = (26));

} else {
var statearr_28462_28514 = state_28424__$1;
(statearr_28462_28514[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (35))){
var inst_28409 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28409)){
var statearr_28463_28515 = state_28424__$1;
(statearr_28463_28515[(1)] = (36));

} else {
var statearr_28464_28516 = state_28424__$1;
(statearr_28464_28516[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (19))){
var inst_28351 = (state_28424[(7)]);
var inst_28371 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28351);
var state_28424__$1 = state_28424;
var statearr_28465_28517 = state_28424__$1;
(statearr_28465_28517[(2)] = inst_28371);

(statearr_28465_28517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (11))){
var inst_28351 = (state_28424[(7)]);
var inst_28355 = (inst_28351 == null);
var inst_28356 = cljs.core.not.call(null,inst_28355);
var state_28424__$1 = state_28424;
if(inst_28356){
var statearr_28466_28518 = state_28424__$1;
(statearr_28466_28518[(1)] = (13));

} else {
var statearr_28467_28519 = state_28424__$1;
(statearr_28467_28519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (9))){
var inst_28326 = (state_28424[(8)]);
var state_28424__$1 = state_28424;
var statearr_28468_28520 = state_28424__$1;
(statearr_28468_28520[(2)] = inst_28326);

(statearr_28468_28520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (5))){
var state_28424__$1 = state_28424;
var statearr_28469_28521 = state_28424__$1;
(statearr_28469_28521[(2)] = true);

(statearr_28469_28521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (14))){
var state_28424__$1 = state_28424;
var statearr_28470_28522 = state_28424__$1;
(statearr_28470_28522[(2)] = false);

(statearr_28470_28522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (26))){
var inst_28384 = (state_28424[(9)]);
var inst_28391 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28384);
var state_28424__$1 = state_28424;
var statearr_28471_28523 = state_28424__$1;
(statearr_28471_28523[(2)] = inst_28391);

(statearr_28471_28523[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (16))){
var state_28424__$1 = state_28424;
var statearr_28472_28524 = state_28424__$1;
(statearr_28472_28524[(2)] = true);

(statearr_28472_28524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (38))){
var inst_28414 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28473_28525 = state_28424__$1;
(statearr_28473_28525[(2)] = inst_28414);

(statearr_28473_28525[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (30))){
var inst_28384 = (state_28424[(9)]);
var inst_28375 = (state_28424[(10)]);
var inst_28376 = (state_28424[(13)]);
var inst_28401 = cljs.core.empty_QMARK_.call(null,inst_28375);
var inst_28402 = inst_28376.call(null,inst_28384);
var inst_28403 = cljs.core.not.call(null,inst_28402);
var inst_28404 = ((inst_28401) && (inst_28403));
var state_28424__$1 = state_28424;
var statearr_28474_28526 = state_28424__$1;
(statearr_28474_28526[(2)] = inst_28404);

(statearr_28474_28526[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (10))){
var inst_28326 = (state_28424[(8)]);
var inst_28347 = (state_28424[(2)]);
var inst_28348 = cljs.core.get.call(null,inst_28347,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28349 = cljs.core.get.call(null,inst_28347,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28350 = cljs.core.get.call(null,inst_28347,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28351 = inst_28326;
var state_28424__$1 = (function (){var statearr_28475 = state_28424;
(statearr_28475[(16)] = inst_28350);

(statearr_28475[(7)] = inst_28351);

(statearr_28475[(17)] = inst_28348);

(statearr_28475[(18)] = inst_28349);

return statearr_28475;
})();
var statearr_28476_28527 = state_28424__$1;
(statearr_28476_28527[(2)] = null);

(statearr_28476_28527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (18))){
var inst_28366 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28477_28528 = state_28424__$1;
(statearr_28477_28528[(2)] = inst_28366);

(statearr_28477_28528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (37))){
var state_28424__$1 = state_28424;
var statearr_28478_28529 = state_28424__$1;
(statearr_28478_28529[(2)] = null);

(statearr_28478_28529[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (8))){
var inst_28326 = (state_28424[(8)]);
var inst_28344 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28326);
var state_28424__$1 = state_28424;
var statearr_28479_28530 = state_28424__$1;
(statearr_28479_28530[(2)] = inst_28344);

(statearr_28479_28530[(1)] = (10));


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
});})(c__27425__auto___28484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27330__auto__,c__27425__auto___28484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27331__auto__ = null;
var cljs$core$async$mix_$_state_machine__27331__auto____0 = (function (){
var statearr_28480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28480[(0)] = cljs$core$async$mix_$_state_machine__27331__auto__);

(statearr_28480[(1)] = (1));

return statearr_28480;
});
var cljs$core$async$mix_$_state_machine__27331__auto____1 = (function (state_28424){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_28424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e28481){if((e28481 instanceof Object)){
var ex__27334__auto__ = e28481;
var statearr_28482_28531 = state_28424;
(statearr_28482_28531[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28532 = state_28424;
state_28424 = G__28532;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27331__auto__ = function(state_28424){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27331__auto____1.call(this,state_28424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27331__auto____0;
cljs$core$async$mix_$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27331__auto____1;
return cljs$core$async$mix_$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___28484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27427__auto__ = (function (){var statearr_28483 = f__27426__auto__.call(null);
(statearr_28483[(6)] = c__27425__auto___28484);

return statearr_28483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___28484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28534 = arguments.length;
switch (G__28534) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28538 = arguments.length;
switch (G__28538) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__28536_SHARP_){
if(cljs.core.truth_(p1__28536_SHARP_.call(null,topic))){
return p1__28536_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28536_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28539 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28540){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28540 = meta28540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28541,meta28540__$1){
var self__ = this;
var _28541__$1 = this;
return (new cljs.core.async.t_cljs$core$async28539(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28540__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28541){
var self__ = this;
var _28541__$1 = this;
return self__.meta28540;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28539.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28540","meta28540",1473572997,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28539";

cljs.core.async.t_cljs$core$async28539.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28539");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28539.
 */
cljs.core.async.__GT_t_cljs$core$async28539 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28540){
return (new cljs.core.async.t_cljs$core$async28539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28540));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28539(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27425__auto___28659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___28659,mults,ensure_mult,p){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___28659,mults,ensure_mult,p){
return (function (state_28613){
var state_val_28614 = (state_28613[(1)]);
if((state_val_28614 === (7))){
var inst_28609 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28615_28660 = state_28613__$1;
(statearr_28615_28660[(2)] = inst_28609);

(statearr_28615_28660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (20))){
var state_28613__$1 = state_28613;
var statearr_28616_28661 = state_28613__$1;
(statearr_28616_28661[(2)] = null);

(statearr_28616_28661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (1))){
var state_28613__$1 = state_28613;
var statearr_28617_28662 = state_28613__$1;
(statearr_28617_28662[(2)] = null);

(statearr_28617_28662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (24))){
var inst_28592 = (state_28613[(7)]);
var inst_28601 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28592);
var state_28613__$1 = state_28613;
var statearr_28618_28663 = state_28613__$1;
(statearr_28618_28663[(2)] = inst_28601);

(statearr_28618_28663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (4))){
var inst_28544 = (state_28613[(8)]);
var inst_28544__$1 = (state_28613[(2)]);
var inst_28545 = (inst_28544__$1 == null);
var state_28613__$1 = (function (){var statearr_28619 = state_28613;
(statearr_28619[(8)] = inst_28544__$1);

return statearr_28619;
})();
if(cljs.core.truth_(inst_28545)){
var statearr_28620_28664 = state_28613__$1;
(statearr_28620_28664[(1)] = (5));

} else {
var statearr_28621_28665 = state_28613__$1;
(statearr_28621_28665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (15))){
var inst_28586 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28622_28666 = state_28613__$1;
(statearr_28622_28666[(2)] = inst_28586);

(statearr_28622_28666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (21))){
var inst_28606 = (state_28613[(2)]);
var state_28613__$1 = (function (){var statearr_28623 = state_28613;
(statearr_28623[(9)] = inst_28606);

return statearr_28623;
})();
var statearr_28624_28667 = state_28613__$1;
(statearr_28624_28667[(2)] = null);

(statearr_28624_28667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (13))){
var inst_28568 = (state_28613[(10)]);
var inst_28570 = cljs.core.chunked_seq_QMARK_.call(null,inst_28568);
var state_28613__$1 = state_28613;
if(inst_28570){
var statearr_28625_28668 = state_28613__$1;
(statearr_28625_28668[(1)] = (16));

} else {
var statearr_28626_28669 = state_28613__$1;
(statearr_28626_28669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (22))){
var inst_28598 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
if(cljs.core.truth_(inst_28598)){
var statearr_28627_28670 = state_28613__$1;
(statearr_28627_28670[(1)] = (23));

} else {
var statearr_28628_28671 = state_28613__$1;
(statearr_28628_28671[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (6))){
var inst_28592 = (state_28613[(7)]);
var inst_28544 = (state_28613[(8)]);
var inst_28594 = (state_28613[(11)]);
var inst_28592__$1 = topic_fn.call(null,inst_28544);
var inst_28593 = cljs.core.deref.call(null,mults);
var inst_28594__$1 = cljs.core.get.call(null,inst_28593,inst_28592__$1);
var state_28613__$1 = (function (){var statearr_28629 = state_28613;
(statearr_28629[(7)] = inst_28592__$1);

(statearr_28629[(11)] = inst_28594__$1);

return statearr_28629;
})();
if(cljs.core.truth_(inst_28594__$1)){
var statearr_28630_28672 = state_28613__$1;
(statearr_28630_28672[(1)] = (19));

} else {
var statearr_28631_28673 = state_28613__$1;
(statearr_28631_28673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (25))){
var inst_28603 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28632_28674 = state_28613__$1;
(statearr_28632_28674[(2)] = inst_28603);

(statearr_28632_28674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (17))){
var inst_28568 = (state_28613[(10)]);
var inst_28577 = cljs.core.first.call(null,inst_28568);
var inst_28578 = cljs.core.async.muxch_STAR_.call(null,inst_28577);
var inst_28579 = cljs.core.async.close_BANG_.call(null,inst_28578);
var inst_28580 = cljs.core.next.call(null,inst_28568);
var inst_28554 = inst_28580;
var inst_28555 = null;
var inst_28556 = (0);
var inst_28557 = (0);
var state_28613__$1 = (function (){var statearr_28633 = state_28613;
(statearr_28633[(12)] = inst_28554);

(statearr_28633[(13)] = inst_28555);

(statearr_28633[(14)] = inst_28579);

(statearr_28633[(15)] = inst_28557);

(statearr_28633[(16)] = inst_28556);

return statearr_28633;
})();
var statearr_28634_28675 = state_28613__$1;
(statearr_28634_28675[(2)] = null);

(statearr_28634_28675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (3))){
var inst_28611 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28613__$1,inst_28611);
} else {
if((state_val_28614 === (12))){
var inst_28588 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28635_28676 = state_28613__$1;
(statearr_28635_28676[(2)] = inst_28588);

(statearr_28635_28676[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (2))){
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28613__$1,(4),ch);
} else {
if((state_val_28614 === (23))){
var state_28613__$1 = state_28613;
var statearr_28636_28677 = state_28613__$1;
(statearr_28636_28677[(2)] = null);

(statearr_28636_28677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (19))){
var inst_28544 = (state_28613[(8)]);
var inst_28594 = (state_28613[(11)]);
var inst_28596 = cljs.core.async.muxch_STAR_.call(null,inst_28594);
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28613__$1,(22),inst_28596,inst_28544);
} else {
if((state_val_28614 === (11))){
var inst_28554 = (state_28613[(12)]);
var inst_28568 = (state_28613[(10)]);
var inst_28568__$1 = cljs.core.seq.call(null,inst_28554);
var state_28613__$1 = (function (){var statearr_28637 = state_28613;
(statearr_28637[(10)] = inst_28568__$1);

return statearr_28637;
})();
if(inst_28568__$1){
var statearr_28638_28678 = state_28613__$1;
(statearr_28638_28678[(1)] = (13));

} else {
var statearr_28639_28679 = state_28613__$1;
(statearr_28639_28679[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (9))){
var inst_28590 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28640_28680 = state_28613__$1;
(statearr_28640_28680[(2)] = inst_28590);

(statearr_28640_28680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (5))){
var inst_28551 = cljs.core.deref.call(null,mults);
var inst_28552 = cljs.core.vals.call(null,inst_28551);
var inst_28553 = cljs.core.seq.call(null,inst_28552);
var inst_28554 = inst_28553;
var inst_28555 = null;
var inst_28556 = (0);
var inst_28557 = (0);
var state_28613__$1 = (function (){var statearr_28641 = state_28613;
(statearr_28641[(12)] = inst_28554);

(statearr_28641[(13)] = inst_28555);

(statearr_28641[(15)] = inst_28557);

(statearr_28641[(16)] = inst_28556);

return statearr_28641;
})();
var statearr_28642_28681 = state_28613__$1;
(statearr_28642_28681[(2)] = null);

(statearr_28642_28681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (14))){
var state_28613__$1 = state_28613;
var statearr_28646_28682 = state_28613__$1;
(statearr_28646_28682[(2)] = null);

(statearr_28646_28682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (16))){
var inst_28568 = (state_28613[(10)]);
var inst_28572 = cljs.core.chunk_first.call(null,inst_28568);
var inst_28573 = cljs.core.chunk_rest.call(null,inst_28568);
var inst_28574 = cljs.core.count.call(null,inst_28572);
var inst_28554 = inst_28573;
var inst_28555 = inst_28572;
var inst_28556 = inst_28574;
var inst_28557 = (0);
var state_28613__$1 = (function (){var statearr_28647 = state_28613;
(statearr_28647[(12)] = inst_28554);

(statearr_28647[(13)] = inst_28555);

(statearr_28647[(15)] = inst_28557);

(statearr_28647[(16)] = inst_28556);

return statearr_28647;
})();
var statearr_28648_28683 = state_28613__$1;
(statearr_28648_28683[(2)] = null);

(statearr_28648_28683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (10))){
var inst_28554 = (state_28613[(12)]);
var inst_28555 = (state_28613[(13)]);
var inst_28557 = (state_28613[(15)]);
var inst_28556 = (state_28613[(16)]);
var inst_28562 = cljs.core._nth.call(null,inst_28555,inst_28557);
var inst_28563 = cljs.core.async.muxch_STAR_.call(null,inst_28562);
var inst_28564 = cljs.core.async.close_BANG_.call(null,inst_28563);
var inst_28565 = (inst_28557 + (1));
var tmp28643 = inst_28554;
var tmp28644 = inst_28555;
var tmp28645 = inst_28556;
var inst_28554__$1 = tmp28643;
var inst_28555__$1 = tmp28644;
var inst_28556__$1 = tmp28645;
var inst_28557__$1 = inst_28565;
var state_28613__$1 = (function (){var statearr_28649 = state_28613;
(statearr_28649[(12)] = inst_28554__$1);

(statearr_28649[(17)] = inst_28564);

(statearr_28649[(13)] = inst_28555__$1);

(statearr_28649[(15)] = inst_28557__$1);

(statearr_28649[(16)] = inst_28556__$1);

return statearr_28649;
})();
var statearr_28650_28684 = state_28613__$1;
(statearr_28650_28684[(2)] = null);

(statearr_28650_28684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (18))){
var inst_28583 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28651_28685 = state_28613__$1;
(statearr_28651_28685[(2)] = inst_28583);

(statearr_28651_28685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (8))){
var inst_28557 = (state_28613[(15)]);
var inst_28556 = (state_28613[(16)]);
var inst_28559 = (inst_28557 < inst_28556);
var inst_28560 = inst_28559;
var state_28613__$1 = state_28613;
if(cljs.core.truth_(inst_28560)){
var statearr_28652_28686 = state_28613__$1;
(statearr_28652_28686[(1)] = (10));

} else {
var statearr_28653_28687 = state_28613__$1;
(statearr_28653_28687[(1)] = (11));

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
});})(c__27425__auto___28659,mults,ensure_mult,p))
;
return ((function (switch__27330__auto__,c__27425__auto___28659,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27331__auto__ = null;
var cljs$core$async$state_machine__27331__auto____0 = (function (){
var statearr_28654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28654[(0)] = cljs$core$async$state_machine__27331__auto__);

(statearr_28654[(1)] = (1));

return statearr_28654;
});
var cljs$core$async$state_machine__27331__auto____1 = (function (state_28613){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_28613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e28655){if((e28655 instanceof Object)){
var ex__27334__auto__ = e28655;
var statearr_28656_28688 = state_28613;
(statearr_28656_28688[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28689 = state_28613;
state_28613 = G__28689;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$state_machine__27331__auto__ = function(state_28613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27331__auto____1.call(this,state_28613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27331__auto____0;
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27331__auto____1;
return cljs$core$async$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___28659,mults,ensure_mult,p))
})();
var state__27427__auto__ = (function (){var statearr_28657 = f__27426__auto__.call(null);
(statearr_28657[(6)] = c__27425__auto___28659);

return statearr_28657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___28659,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28691 = arguments.length;
switch (G__28691) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28694 = arguments.length;
switch (G__28694) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28697 = arguments.length;
switch (G__28697) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27425__auto___28764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___28764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___28764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28736){
var state_val_28737 = (state_28736[(1)]);
if((state_val_28737 === (7))){
var state_28736__$1 = state_28736;
var statearr_28738_28765 = state_28736__$1;
(statearr_28738_28765[(2)] = null);

(statearr_28738_28765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (1))){
var state_28736__$1 = state_28736;
var statearr_28739_28766 = state_28736__$1;
(statearr_28739_28766[(2)] = null);

(statearr_28739_28766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (4))){
var inst_28700 = (state_28736[(7)]);
var inst_28702 = (inst_28700 < cnt);
var state_28736__$1 = state_28736;
if(cljs.core.truth_(inst_28702)){
var statearr_28740_28767 = state_28736__$1;
(statearr_28740_28767[(1)] = (6));

} else {
var statearr_28741_28768 = state_28736__$1;
(statearr_28741_28768[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (15))){
var inst_28732 = (state_28736[(2)]);
var state_28736__$1 = state_28736;
var statearr_28742_28769 = state_28736__$1;
(statearr_28742_28769[(2)] = inst_28732);

(statearr_28742_28769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (13))){
var inst_28725 = cljs.core.async.close_BANG_.call(null,out);
var state_28736__$1 = state_28736;
var statearr_28743_28770 = state_28736__$1;
(statearr_28743_28770[(2)] = inst_28725);

(statearr_28743_28770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (6))){
var state_28736__$1 = state_28736;
var statearr_28744_28771 = state_28736__$1;
(statearr_28744_28771[(2)] = null);

(statearr_28744_28771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (3))){
var inst_28734 = (state_28736[(2)]);
var state_28736__$1 = state_28736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28736__$1,inst_28734);
} else {
if((state_val_28737 === (12))){
var inst_28722 = (state_28736[(8)]);
var inst_28722__$1 = (state_28736[(2)]);
var inst_28723 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28722__$1);
var state_28736__$1 = (function (){var statearr_28745 = state_28736;
(statearr_28745[(8)] = inst_28722__$1);

return statearr_28745;
})();
if(cljs.core.truth_(inst_28723)){
var statearr_28746_28772 = state_28736__$1;
(statearr_28746_28772[(1)] = (13));

} else {
var statearr_28747_28773 = state_28736__$1;
(statearr_28747_28773[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (2))){
var inst_28699 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28700 = (0);
var state_28736__$1 = (function (){var statearr_28748 = state_28736;
(statearr_28748[(9)] = inst_28699);

(statearr_28748[(7)] = inst_28700);

return statearr_28748;
})();
var statearr_28749_28774 = state_28736__$1;
(statearr_28749_28774[(2)] = null);

(statearr_28749_28774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (11))){
var inst_28700 = (state_28736[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28736,(10),Object,null,(9));
var inst_28709 = chs__$1.call(null,inst_28700);
var inst_28710 = done.call(null,inst_28700);
var inst_28711 = cljs.core.async.take_BANG_.call(null,inst_28709,inst_28710);
var state_28736__$1 = state_28736;
var statearr_28750_28775 = state_28736__$1;
(statearr_28750_28775[(2)] = inst_28711);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28736__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (9))){
var inst_28700 = (state_28736[(7)]);
var inst_28713 = (state_28736[(2)]);
var inst_28714 = (inst_28700 + (1));
var inst_28700__$1 = inst_28714;
var state_28736__$1 = (function (){var statearr_28751 = state_28736;
(statearr_28751[(7)] = inst_28700__$1);

(statearr_28751[(10)] = inst_28713);

return statearr_28751;
})();
var statearr_28752_28776 = state_28736__$1;
(statearr_28752_28776[(2)] = null);

(statearr_28752_28776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (5))){
var inst_28720 = (state_28736[(2)]);
var state_28736__$1 = (function (){var statearr_28753 = state_28736;
(statearr_28753[(11)] = inst_28720);

return statearr_28753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28736__$1,(12),dchan);
} else {
if((state_val_28737 === (14))){
var inst_28722 = (state_28736[(8)]);
var inst_28727 = cljs.core.apply.call(null,f,inst_28722);
var state_28736__$1 = state_28736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28736__$1,(16),out,inst_28727);
} else {
if((state_val_28737 === (16))){
var inst_28729 = (state_28736[(2)]);
var state_28736__$1 = (function (){var statearr_28754 = state_28736;
(statearr_28754[(12)] = inst_28729);

return statearr_28754;
})();
var statearr_28755_28777 = state_28736__$1;
(statearr_28755_28777[(2)] = null);

(statearr_28755_28777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (10))){
var inst_28704 = (state_28736[(2)]);
var inst_28705 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28736__$1 = (function (){var statearr_28756 = state_28736;
(statearr_28756[(13)] = inst_28704);

return statearr_28756;
})();
var statearr_28757_28778 = state_28736__$1;
(statearr_28757_28778[(2)] = inst_28705);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28736__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28737 === (8))){
var inst_28718 = (state_28736[(2)]);
var state_28736__$1 = state_28736;
var statearr_28758_28779 = state_28736__$1;
(statearr_28758_28779[(2)] = inst_28718);

(statearr_28758_28779[(1)] = (5));


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
});})(c__27425__auto___28764,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27330__auto__,c__27425__auto___28764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27331__auto__ = null;
var cljs$core$async$state_machine__27331__auto____0 = (function (){
var statearr_28759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28759[(0)] = cljs$core$async$state_machine__27331__auto__);

(statearr_28759[(1)] = (1));

return statearr_28759;
});
var cljs$core$async$state_machine__27331__auto____1 = (function (state_28736){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_28736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e28760){if((e28760 instanceof Object)){
var ex__27334__auto__ = e28760;
var statearr_28761_28780 = state_28736;
(statearr_28761_28780[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28781 = state_28736;
state_28736 = G__28781;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$state_machine__27331__auto__ = function(state_28736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27331__auto____1.call(this,state_28736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27331__auto____0;
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27331__auto____1;
return cljs$core$async$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___28764,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27427__auto__ = (function (){var statearr_28762 = f__27426__auto__.call(null);
(statearr_28762[(6)] = c__27425__auto___28764);

return statearr_28762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___28764,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28784 = arguments.length;
switch (G__28784) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27425__auto___28838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___28838,out){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___28838,out){
return (function (state_28816){
var state_val_28817 = (state_28816[(1)]);
if((state_val_28817 === (7))){
var inst_28796 = (state_28816[(7)]);
var inst_28795 = (state_28816[(8)]);
var inst_28795__$1 = (state_28816[(2)]);
var inst_28796__$1 = cljs.core.nth.call(null,inst_28795__$1,(0),null);
var inst_28797 = cljs.core.nth.call(null,inst_28795__$1,(1),null);
var inst_28798 = (inst_28796__$1 == null);
var state_28816__$1 = (function (){var statearr_28818 = state_28816;
(statearr_28818[(7)] = inst_28796__$1);

(statearr_28818[(8)] = inst_28795__$1);

(statearr_28818[(9)] = inst_28797);

return statearr_28818;
})();
if(cljs.core.truth_(inst_28798)){
var statearr_28819_28839 = state_28816__$1;
(statearr_28819_28839[(1)] = (8));

} else {
var statearr_28820_28840 = state_28816__$1;
(statearr_28820_28840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (1))){
var inst_28785 = cljs.core.vec.call(null,chs);
var inst_28786 = inst_28785;
var state_28816__$1 = (function (){var statearr_28821 = state_28816;
(statearr_28821[(10)] = inst_28786);

return statearr_28821;
})();
var statearr_28822_28841 = state_28816__$1;
(statearr_28822_28841[(2)] = null);

(statearr_28822_28841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (4))){
var inst_28786 = (state_28816[(10)]);
var state_28816__$1 = state_28816;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28816__$1,(7),inst_28786);
} else {
if((state_val_28817 === (6))){
var inst_28812 = (state_28816[(2)]);
var state_28816__$1 = state_28816;
var statearr_28823_28842 = state_28816__$1;
(statearr_28823_28842[(2)] = inst_28812);

(statearr_28823_28842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (3))){
var inst_28814 = (state_28816[(2)]);
var state_28816__$1 = state_28816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28816__$1,inst_28814);
} else {
if((state_val_28817 === (2))){
var inst_28786 = (state_28816[(10)]);
var inst_28788 = cljs.core.count.call(null,inst_28786);
var inst_28789 = (inst_28788 > (0));
var state_28816__$1 = state_28816;
if(cljs.core.truth_(inst_28789)){
var statearr_28825_28843 = state_28816__$1;
(statearr_28825_28843[(1)] = (4));

} else {
var statearr_28826_28844 = state_28816__$1;
(statearr_28826_28844[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (11))){
var inst_28786 = (state_28816[(10)]);
var inst_28805 = (state_28816[(2)]);
var tmp28824 = inst_28786;
var inst_28786__$1 = tmp28824;
var state_28816__$1 = (function (){var statearr_28827 = state_28816;
(statearr_28827[(10)] = inst_28786__$1);

(statearr_28827[(11)] = inst_28805);

return statearr_28827;
})();
var statearr_28828_28845 = state_28816__$1;
(statearr_28828_28845[(2)] = null);

(statearr_28828_28845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (9))){
var inst_28796 = (state_28816[(7)]);
var state_28816__$1 = state_28816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28816__$1,(11),out,inst_28796);
} else {
if((state_val_28817 === (5))){
var inst_28810 = cljs.core.async.close_BANG_.call(null,out);
var state_28816__$1 = state_28816;
var statearr_28829_28846 = state_28816__$1;
(statearr_28829_28846[(2)] = inst_28810);

(statearr_28829_28846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (10))){
var inst_28808 = (state_28816[(2)]);
var state_28816__$1 = state_28816;
var statearr_28830_28847 = state_28816__$1;
(statearr_28830_28847[(2)] = inst_28808);

(statearr_28830_28847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28817 === (8))){
var inst_28796 = (state_28816[(7)]);
var inst_28786 = (state_28816[(10)]);
var inst_28795 = (state_28816[(8)]);
var inst_28797 = (state_28816[(9)]);
var inst_28800 = (function (){var cs = inst_28786;
var vec__28791 = inst_28795;
var v = inst_28796;
var c = inst_28797;
return ((function (cs,vec__28791,v,c,inst_28796,inst_28786,inst_28795,inst_28797,state_val_28817,c__27425__auto___28838,out){
return (function (p1__28782_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28782_SHARP_);
});
;})(cs,vec__28791,v,c,inst_28796,inst_28786,inst_28795,inst_28797,state_val_28817,c__27425__auto___28838,out))
})();
var inst_28801 = cljs.core.filterv.call(null,inst_28800,inst_28786);
var inst_28786__$1 = inst_28801;
var state_28816__$1 = (function (){var statearr_28831 = state_28816;
(statearr_28831[(10)] = inst_28786__$1);

return statearr_28831;
})();
var statearr_28832_28848 = state_28816__$1;
(statearr_28832_28848[(2)] = null);

(statearr_28832_28848[(1)] = (2));


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
});})(c__27425__auto___28838,out))
;
return ((function (switch__27330__auto__,c__27425__auto___28838,out){
return (function() {
var cljs$core$async$state_machine__27331__auto__ = null;
var cljs$core$async$state_machine__27331__auto____0 = (function (){
var statearr_28833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28833[(0)] = cljs$core$async$state_machine__27331__auto__);

(statearr_28833[(1)] = (1));

return statearr_28833;
});
var cljs$core$async$state_machine__27331__auto____1 = (function (state_28816){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_28816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e28834){if((e28834 instanceof Object)){
var ex__27334__auto__ = e28834;
var statearr_28835_28849 = state_28816;
(statearr_28835_28849[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28850 = state_28816;
state_28816 = G__28850;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$state_machine__27331__auto__ = function(state_28816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27331__auto____1.call(this,state_28816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27331__auto____0;
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27331__auto____1;
return cljs$core$async$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___28838,out))
})();
var state__27427__auto__ = (function (){var statearr_28836 = f__27426__auto__.call(null);
(statearr_28836[(6)] = c__27425__auto___28838);

return statearr_28836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___28838,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28852 = arguments.length;
switch (G__28852) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27425__auto___28897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___28897,out){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___28897,out){
return (function (state_28876){
var state_val_28877 = (state_28876[(1)]);
if((state_val_28877 === (7))){
var inst_28858 = (state_28876[(7)]);
var inst_28858__$1 = (state_28876[(2)]);
var inst_28859 = (inst_28858__$1 == null);
var inst_28860 = cljs.core.not.call(null,inst_28859);
var state_28876__$1 = (function (){var statearr_28878 = state_28876;
(statearr_28878[(7)] = inst_28858__$1);

return statearr_28878;
})();
if(inst_28860){
var statearr_28879_28898 = state_28876__$1;
(statearr_28879_28898[(1)] = (8));

} else {
var statearr_28880_28899 = state_28876__$1;
(statearr_28880_28899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (1))){
var inst_28853 = (0);
var state_28876__$1 = (function (){var statearr_28881 = state_28876;
(statearr_28881[(8)] = inst_28853);

return statearr_28881;
})();
var statearr_28882_28900 = state_28876__$1;
(statearr_28882_28900[(2)] = null);

(statearr_28882_28900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (4))){
var state_28876__$1 = state_28876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28876__$1,(7),ch);
} else {
if((state_val_28877 === (6))){
var inst_28871 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
var statearr_28883_28901 = state_28876__$1;
(statearr_28883_28901[(2)] = inst_28871);

(statearr_28883_28901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (3))){
var inst_28873 = (state_28876[(2)]);
var inst_28874 = cljs.core.async.close_BANG_.call(null,out);
var state_28876__$1 = (function (){var statearr_28884 = state_28876;
(statearr_28884[(9)] = inst_28873);

return statearr_28884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28876__$1,inst_28874);
} else {
if((state_val_28877 === (2))){
var inst_28853 = (state_28876[(8)]);
var inst_28855 = (inst_28853 < n);
var state_28876__$1 = state_28876;
if(cljs.core.truth_(inst_28855)){
var statearr_28885_28902 = state_28876__$1;
(statearr_28885_28902[(1)] = (4));

} else {
var statearr_28886_28903 = state_28876__$1;
(statearr_28886_28903[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (11))){
var inst_28853 = (state_28876[(8)]);
var inst_28863 = (state_28876[(2)]);
var inst_28864 = (inst_28853 + (1));
var inst_28853__$1 = inst_28864;
var state_28876__$1 = (function (){var statearr_28887 = state_28876;
(statearr_28887[(10)] = inst_28863);

(statearr_28887[(8)] = inst_28853__$1);

return statearr_28887;
})();
var statearr_28888_28904 = state_28876__$1;
(statearr_28888_28904[(2)] = null);

(statearr_28888_28904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (9))){
var state_28876__$1 = state_28876;
var statearr_28889_28905 = state_28876__$1;
(statearr_28889_28905[(2)] = null);

(statearr_28889_28905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (5))){
var state_28876__$1 = state_28876;
var statearr_28890_28906 = state_28876__$1;
(statearr_28890_28906[(2)] = null);

(statearr_28890_28906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (10))){
var inst_28868 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
var statearr_28891_28907 = state_28876__$1;
(statearr_28891_28907[(2)] = inst_28868);

(statearr_28891_28907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (8))){
var inst_28858 = (state_28876[(7)]);
var state_28876__$1 = state_28876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28876__$1,(11),out,inst_28858);
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
});})(c__27425__auto___28897,out))
;
return ((function (switch__27330__auto__,c__27425__auto___28897,out){
return (function() {
var cljs$core$async$state_machine__27331__auto__ = null;
var cljs$core$async$state_machine__27331__auto____0 = (function (){
var statearr_28892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28892[(0)] = cljs$core$async$state_machine__27331__auto__);

(statearr_28892[(1)] = (1));

return statearr_28892;
});
var cljs$core$async$state_machine__27331__auto____1 = (function (state_28876){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_28876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e28893){if((e28893 instanceof Object)){
var ex__27334__auto__ = e28893;
var statearr_28894_28908 = state_28876;
(statearr_28894_28908[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28909 = state_28876;
state_28876 = G__28909;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$state_machine__27331__auto__ = function(state_28876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27331__auto____1.call(this,state_28876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27331__auto____0;
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27331__auto____1;
return cljs$core$async$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___28897,out))
})();
var state__27427__auto__ = (function (){var statearr_28895 = f__27426__auto__.call(null);
(statearr_28895[(6)] = c__27425__auto___28897);

return statearr_28895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___28897,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28911 = (function (f,ch,meta28912){
this.f = f;
this.ch = ch;
this.meta28912 = meta28912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28913,meta28912__$1){
var self__ = this;
var _28913__$1 = this;
return (new cljs.core.async.t_cljs$core$async28911(self__.f,self__.ch,meta28912__$1));
});

cljs.core.async.t_cljs$core$async28911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28913){
var self__ = this;
var _28913__$1 = this;
return self__.meta28912;
});

cljs.core.async.t_cljs$core$async28911.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28911.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28911.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28914 = (function (f,ch,meta28912,_,fn1,meta28915){
this.f = f;
this.ch = ch;
this.meta28912 = meta28912;
this._ = _;
this.fn1 = fn1;
this.meta28915 = meta28915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28916,meta28915__$1){
var self__ = this;
var _28916__$1 = this;
return (new cljs.core.async.t_cljs$core$async28914(self__.f,self__.ch,self__.meta28912,self__._,self__.fn1,meta28915__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28916){
var self__ = this;
var _28916__$1 = this;
return self__.meta28915;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28914.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28914.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28910_SHARP_){
return f1.call(null,(((p1__28910_SHARP_ == null))?null:self__.f.call(null,p1__28910_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28914.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28912","meta28912",2112712009,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28911","cljs.core.async/t_cljs$core$async28911",-2096240343,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28915","meta28915",394677972,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28914";

cljs.core.async.t_cljs$core$async28914.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28914");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28914.
 */
cljs.core.async.__GT_t_cljs$core$async28914 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28914(f__$1,ch__$1,meta28912__$1,___$2,fn1__$1,meta28915){
return (new cljs.core.async.t_cljs$core$async28914(f__$1,ch__$1,meta28912__$1,___$2,fn1__$1,meta28915));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28914(self__.f,self__.ch,self__.meta28912,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28911.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28912","meta28912",2112712009,null)], null);
});

cljs.core.async.t_cljs$core$async28911.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28911";

cljs.core.async.t_cljs$core$async28911.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28911");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28911.
 */
cljs.core.async.__GT_t_cljs$core$async28911 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28911(f__$1,ch__$1,meta28912){
return (new cljs.core.async.t_cljs$core$async28911(f__$1,ch__$1,meta28912));
});

}

return (new cljs.core.async.t_cljs$core$async28911(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28917 = (function (f,ch,meta28918){
this.f = f;
this.ch = ch;
this.meta28918 = meta28918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28919,meta28918__$1){
var self__ = this;
var _28919__$1 = this;
return (new cljs.core.async.t_cljs$core$async28917(self__.f,self__.ch,meta28918__$1));
});

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28919){
var self__ = this;
var _28919__$1 = this;
return self__.meta28918;
});

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28917.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28918","meta28918",-2114053168,null)], null);
});

cljs.core.async.t_cljs$core$async28917.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28917";

cljs.core.async.t_cljs$core$async28917.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28917");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28917.
 */
cljs.core.async.__GT_t_cljs$core$async28917 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28917(f__$1,ch__$1,meta28918){
return (new cljs.core.async.t_cljs$core$async28917(f__$1,ch__$1,meta28918));
});

}

return (new cljs.core.async.t_cljs$core$async28917(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28920 = (function (p,ch,meta28921){
this.p = p;
this.ch = ch;
this.meta28921 = meta28921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28922,meta28921__$1){
var self__ = this;
var _28922__$1 = this;
return (new cljs.core.async.t_cljs$core$async28920(self__.p,self__.ch,meta28921__$1));
});

cljs.core.async.t_cljs$core$async28920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28922){
var self__ = this;
var _28922__$1 = this;
return self__.meta28921;
});

cljs.core.async.t_cljs$core$async28920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28921","meta28921",-1494990004,null)], null);
});

cljs.core.async.t_cljs$core$async28920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28920";

cljs.core.async.t_cljs$core$async28920.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28920");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28920.
 */
cljs.core.async.__GT_t_cljs$core$async28920 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28920(p__$1,ch__$1,meta28921){
return (new cljs.core.async.t_cljs$core$async28920(p__$1,ch__$1,meta28921));
});

}

return (new cljs.core.async.t_cljs$core$async28920(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28924 = arguments.length;
switch (G__28924) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27425__auto___28964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___28964,out){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___28964,out){
return (function (state_28945){
var state_val_28946 = (state_28945[(1)]);
if((state_val_28946 === (7))){
var inst_28941 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28947_28965 = state_28945__$1;
(statearr_28947_28965[(2)] = inst_28941);

(statearr_28947_28965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (1))){
var state_28945__$1 = state_28945;
var statearr_28948_28966 = state_28945__$1;
(statearr_28948_28966[(2)] = null);

(statearr_28948_28966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (4))){
var inst_28927 = (state_28945[(7)]);
var inst_28927__$1 = (state_28945[(2)]);
var inst_28928 = (inst_28927__$1 == null);
var state_28945__$1 = (function (){var statearr_28949 = state_28945;
(statearr_28949[(7)] = inst_28927__$1);

return statearr_28949;
})();
if(cljs.core.truth_(inst_28928)){
var statearr_28950_28967 = state_28945__$1;
(statearr_28950_28967[(1)] = (5));

} else {
var statearr_28951_28968 = state_28945__$1;
(statearr_28951_28968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (6))){
var inst_28927 = (state_28945[(7)]);
var inst_28932 = p.call(null,inst_28927);
var state_28945__$1 = state_28945;
if(cljs.core.truth_(inst_28932)){
var statearr_28952_28969 = state_28945__$1;
(statearr_28952_28969[(1)] = (8));

} else {
var statearr_28953_28970 = state_28945__$1;
(statearr_28953_28970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (3))){
var inst_28943 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28945__$1,inst_28943);
} else {
if((state_val_28946 === (2))){
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28945__$1,(4),ch);
} else {
if((state_val_28946 === (11))){
var inst_28935 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28954_28971 = state_28945__$1;
(statearr_28954_28971[(2)] = inst_28935);

(statearr_28954_28971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (9))){
var state_28945__$1 = state_28945;
var statearr_28955_28972 = state_28945__$1;
(statearr_28955_28972[(2)] = null);

(statearr_28955_28972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (5))){
var inst_28930 = cljs.core.async.close_BANG_.call(null,out);
var state_28945__$1 = state_28945;
var statearr_28956_28973 = state_28945__$1;
(statearr_28956_28973[(2)] = inst_28930);

(statearr_28956_28973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (10))){
var inst_28938 = (state_28945[(2)]);
var state_28945__$1 = (function (){var statearr_28957 = state_28945;
(statearr_28957[(8)] = inst_28938);

return statearr_28957;
})();
var statearr_28958_28974 = state_28945__$1;
(statearr_28958_28974[(2)] = null);

(statearr_28958_28974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (8))){
var inst_28927 = (state_28945[(7)]);
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28945__$1,(11),out,inst_28927);
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
});})(c__27425__auto___28964,out))
;
return ((function (switch__27330__auto__,c__27425__auto___28964,out){
return (function() {
var cljs$core$async$state_machine__27331__auto__ = null;
var cljs$core$async$state_machine__27331__auto____0 = (function (){
var statearr_28959 = [null,null,null,null,null,null,null,null,null];
(statearr_28959[(0)] = cljs$core$async$state_machine__27331__auto__);

(statearr_28959[(1)] = (1));

return statearr_28959;
});
var cljs$core$async$state_machine__27331__auto____1 = (function (state_28945){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_28945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e28960){if((e28960 instanceof Object)){
var ex__27334__auto__ = e28960;
var statearr_28961_28975 = state_28945;
(statearr_28961_28975[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28976 = state_28945;
state_28945 = G__28976;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$state_machine__27331__auto__ = function(state_28945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27331__auto____1.call(this,state_28945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27331__auto____0;
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27331__auto____1;
return cljs$core$async$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___28964,out))
})();
var state__27427__auto__ = (function (){var statearr_28962 = f__27426__auto__.call(null);
(statearr_28962[(6)] = c__27425__auto___28964);

return statearr_28962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___28964,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28978 = arguments.length;
switch (G__28978) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto__){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto__){
return (function (state_29041){
var state_val_29042 = (state_29041[(1)]);
if((state_val_29042 === (7))){
var inst_29037 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29043_29081 = state_29041__$1;
(statearr_29043_29081[(2)] = inst_29037);

(statearr_29043_29081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (20))){
var inst_29007 = (state_29041[(7)]);
var inst_29018 = (state_29041[(2)]);
var inst_29019 = cljs.core.next.call(null,inst_29007);
var inst_28993 = inst_29019;
var inst_28994 = null;
var inst_28995 = (0);
var inst_28996 = (0);
var state_29041__$1 = (function (){var statearr_29044 = state_29041;
(statearr_29044[(8)] = inst_28996);

(statearr_29044[(9)] = inst_29018);

(statearr_29044[(10)] = inst_28994);

(statearr_29044[(11)] = inst_28995);

(statearr_29044[(12)] = inst_28993);

return statearr_29044;
})();
var statearr_29045_29082 = state_29041__$1;
(statearr_29045_29082[(2)] = null);

(statearr_29045_29082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (1))){
var state_29041__$1 = state_29041;
var statearr_29046_29083 = state_29041__$1;
(statearr_29046_29083[(2)] = null);

(statearr_29046_29083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (4))){
var inst_28982 = (state_29041[(13)]);
var inst_28982__$1 = (state_29041[(2)]);
var inst_28983 = (inst_28982__$1 == null);
var state_29041__$1 = (function (){var statearr_29047 = state_29041;
(statearr_29047[(13)] = inst_28982__$1);

return statearr_29047;
})();
if(cljs.core.truth_(inst_28983)){
var statearr_29048_29084 = state_29041__$1;
(statearr_29048_29084[(1)] = (5));

} else {
var statearr_29049_29085 = state_29041__$1;
(statearr_29049_29085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (15))){
var state_29041__$1 = state_29041;
var statearr_29053_29086 = state_29041__$1;
(statearr_29053_29086[(2)] = null);

(statearr_29053_29086[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (21))){
var state_29041__$1 = state_29041;
var statearr_29054_29087 = state_29041__$1;
(statearr_29054_29087[(2)] = null);

(statearr_29054_29087[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (13))){
var inst_28996 = (state_29041[(8)]);
var inst_28994 = (state_29041[(10)]);
var inst_28995 = (state_29041[(11)]);
var inst_28993 = (state_29041[(12)]);
var inst_29003 = (state_29041[(2)]);
var inst_29004 = (inst_28996 + (1));
var tmp29050 = inst_28994;
var tmp29051 = inst_28995;
var tmp29052 = inst_28993;
var inst_28993__$1 = tmp29052;
var inst_28994__$1 = tmp29050;
var inst_28995__$1 = tmp29051;
var inst_28996__$1 = inst_29004;
var state_29041__$1 = (function (){var statearr_29055 = state_29041;
(statearr_29055[(8)] = inst_28996__$1);

(statearr_29055[(10)] = inst_28994__$1);

(statearr_29055[(11)] = inst_28995__$1);

(statearr_29055[(12)] = inst_28993__$1);

(statearr_29055[(14)] = inst_29003);

return statearr_29055;
})();
var statearr_29056_29088 = state_29041__$1;
(statearr_29056_29088[(2)] = null);

(statearr_29056_29088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (22))){
var state_29041__$1 = state_29041;
var statearr_29057_29089 = state_29041__$1;
(statearr_29057_29089[(2)] = null);

(statearr_29057_29089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (6))){
var inst_28982 = (state_29041[(13)]);
var inst_28991 = f.call(null,inst_28982);
var inst_28992 = cljs.core.seq.call(null,inst_28991);
var inst_28993 = inst_28992;
var inst_28994 = null;
var inst_28995 = (0);
var inst_28996 = (0);
var state_29041__$1 = (function (){var statearr_29058 = state_29041;
(statearr_29058[(8)] = inst_28996);

(statearr_29058[(10)] = inst_28994);

(statearr_29058[(11)] = inst_28995);

(statearr_29058[(12)] = inst_28993);

return statearr_29058;
})();
var statearr_29059_29090 = state_29041__$1;
(statearr_29059_29090[(2)] = null);

(statearr_29059_29090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (17))){
var inst_29007 = (state_29041[(7)]);
var inst_29011 = cljs.core.chunk_first.call(null,inst_29007);
var inst_29012 = cljs.core.chunk_rest.call(null,inst_29007);
var inst_29013 = cljs.core.count.call(null,inst_29011);
var inst_28993 = inst_29012;
var inst_28994 = inst_29011;
var inst_28995 = inst_29013;
var inst_28996 = (0);
var state_29041__$1 = (function (){var statearr_29060 = state_29041;
(statearr_29060[(8)] = inst_28996);

(statearr_29060[(10)] = inst_28994);

(statearr_29060[(11)] = inst_28995);

(statearr_29060[(12)] = inst_28993);

return statearr_29060;
})();
var statearr_29061_29091 = state_29041__$1;
(statearr_29061_29091[(2)] = null);

(statearr_29061_29091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (3))){
var inst_29039 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29041__$1,inst_29039);
} else {
if((state_val_29042 === (12))){
var inst_29027 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29062_29092 = state_29041__$1;
(statearr_29062_29092[(2)] = inst_29027);

(statearr_29062_29092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (2))){
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29041__$1,(4),in$);
} else {
if((state_val_29042 === (23))){
var inst_29035 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29063_29093 = state_29041__$1;
(statearr_29063_29093[(2)] = inst_29035);

(statearr_29063_29093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (19))){
var inst_29022 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29064_29094 = state_29041__$1;
(statearr_29064_29094[(2)] = inst_29022);

(statearr_29064_29094[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (11))){
var inst_29007 = (state_29041[(7)]);
var inst_28993 = (state_29041[(12)]);
var inst_29007__$1 = cljs.core.seq.call(null,inst_28993);
var state_29041__$1 = (function (){var statearr_29065 = state_29041;
(statearr_29065[(7)] = inst_29007__$1);

return statearr_29065;
})();
if(inst_29007__$1){
var statearr_29066_29095 = state_29041__$1;
(statearr_29066_29095[(1)] = (14));

} else {
var statearr_29067_29096 = state_29041__$1;
(statearr_29067_29096[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (9))){
var inst_29029 = (state_29041[(2)]);
var inst_29030 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29041__$1 = (function (){var statearr_29068 = state_29041;
(statearr_29068[(15)] = inst_29029);

return statearr_29068;
})();
if(cljs.core.truth_(inst_29030)){
var statearr_29069_29097 = state_29041__$1;
(statearr_29069_29097[(1)] = (21));

} else {
var statearr_29070_29098 = state_29041__$1;
(statearr_29070_29098[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (5))){
var inst_28985 = cljs.core.async.close_BANG_.call(null,out);
var state_29041__$1 = state_29041;
var statearr_29071_29099 = state_29041__$1;
(statearr_29071_29099[(2)] = inst_28985);

(statearr_29071_29099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (14))){
var inst_29007 = (state_29041[(7)]);
var inst_29009 = cljs.core.chunked_seq_QMARK_.call(null,inst_29007);
var state_29041__$1 = state_29041;
if(inst_29009){
var statearr_29072_29100 = state_29041__$1;
(statearr_29072_29100[(1)] = (17));

} else {
var statearr_29073_29101 = state_29041__$1;
(statearr_29073_29101[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (16))){
var inst_29025 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29074_29102 = state_29041__$1;
(statearr_29074_29102[(2)] = inst_29025);

(statearr_29074_29102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (10))){
var inst_28996 = (state_29041[(8)]);
var inst_28994 = (state_29041[(10)]);
var inst_29001 = cljs.core._nth.call(null,inst_28994,inst_28996);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29041__$1,(13),out,inst_29001);
} else {
if((state_val_29042 === (18))){
var inst_29007 = (state_29041[(7)]);
var inst_29016 = cljs.core.first.call(null,inst_29007);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29041__$1,(20),out,inst_29016);
} else {
if((state_val_29042 === (8))){
var inst_28996 = (state_29041[(8)]);
var inst_28995 = (state_29041[(11)]);
var inst_28998 = (inst_28996 < inst_28995);
var inst_28999 = inst_28998;
var state_29041__$1 = state_29041;
if(cljs.core.truth_(inst_28999)){
var statearr_29075_29103 = state_29041__$1;
(statearr_29075_29103[(1)] = (10));

} else {
var statearr_29076_29104 = state_29041__$1;
(statearr_29076_29104[(1)] = (11));

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
});})(c__27425__auto__))
;
return ((function (switch__27330__auto__,c__27425__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27331__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27331__auto____0 = (function (){
var statearr_29077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29077[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27331__auto__);

(statearr_29077[(1)] = (1));

return statearr_29077;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27331__auto____1 = (function (state_29041){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_29041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e29078){if((e29078 instanceof Object)){
var ex__27334__auto__ = e29078;
var statearr_29079_29105 = state_29041;
(statearr_29079_29105[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29106 = state_29041;
state_29041 = G__29106;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27331__auto__ = function(state_29041){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27331__auto____1.call(this,state_29041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27331__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27331__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto__))
})();
var state__27427__auto__ = (function (){var statearr_29080 = f__27426__auto__.call(null);
(statearr_29080[(6)] = c__27425__auto__);

return statearr_29080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto__))
);

return c__27425__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29108 = arguments.length;
switch (G__29108) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29111 = arguments.length;
switch (G__29111) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29114 = arguments.length;
switch (G__29114) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27425__auto___29161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___29161,out){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___29161,out){
return (function (state_29138){
var state_val_29139 = (state_29138[(1)]);
if((state_val_29139 === (7))){
var inst_29133 = (state_29138[(2)]);
var state_29138__$1 = state_29138;
var statearr_29140_29162 = state_29138__$1;
(statearr_29140_29162[(2)] = inst_29133);

(statearr_29140_29162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (1))){
var inst_29115 = null;
var state_29138__$1 = (function (){var statearr_29141 = state_29138;
(statearr_29141[(7)] = inst_29115);

return statearr_29141;
})();
var statearr_29142_29163 = state_29138__$1;
(statearr_29142_29163[(2)] = null);

(statearr_29142_29163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (4))){
var inst_29118 = (state_29138[(8)]);
var inst_29118__$1 = (state_29138[(2)]);
var inst_29119 = (inst_29118__$1 == null);
var inst_29120 = cljs.core.not.call(null,inst_29119);
var state_29138__$1 = (function (){var statearr_29143 = state_29138;
(statearr_29143[(8)] = inst_29118__$1);

return statearr_29143;
})();
if(inst_29120){
var statearr_29144_29164 = state_29138__$1;
(statearr_29144_29164[(1)] = (5));

} else {
var statearr_29145_29165 = state_29138__$1;
(statearr_29145_29165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (6))){
var state_29138__$1 = state_29138;
var statearr_29146_29166 = state_29138__$1;
(statearr_29146_29166[(2)] = null);

(statearr_29146_29166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (3))){
var inst_29135 = (state_29138[(2)]);
var inst_29136 = cljs.core.async.close_BANG_.call(null,out);
var state_29138__$1 = (function (){var statearr_29147 = state_29138;
(statearr_29147[(9)] = inst_29135);

return statearr_29147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29138__$1,inst_29136);
} else {
if((state_val_29139 === (2))){
var state_29138__$1 = state_29138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29138__$1,(4),ch);
} else {
if((state_val_29139 === (11))){
var inst_29118 = (state_29138[(8)]);
var inst_29127 = (state_29138[(2)]);
var inst_29115 = inst_29118;
var state_29138__$1 = (function (){var statearr_29148 = state_29138;
(statearr_29148[(10)] = inst_29127);

(statearr_29148[(7)] = inst_29115);

return statearr_29148;
})();
var statearr_29149_29167 = state_29138__$1;
(statearr_29149_29167[(2)] = null);

(statearr_29149_29167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (9))){
var inst_29118 = (state_29138[(8)]);
var state_29138__$1 = state_29138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29138__$1,(11),out,inst_29118);
} else {
if((state_val_29139 === (5))){
var inst_29118 = (state_29138[(8)]);
var inst_29115 = (state_29138[(7)]);
var inst_29122 = cljs.core._EQ_.call(null,inst_29118,inst_29115);
var state_29138__$1 = state_29138;
if(inst_29122){
var statearr_29151_29168 = state_29138__$1;
(statearr_29151_29168[(1)] = (8));

} else {
var statearr_29152_29169 = state_29138__$1;
(statearr_29152_29169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (10))){
var inst_29130 = (state_29138[(2)]);
var state_29138__$1 = state_29138;
var statearr_29153_29170 = state_29138__$1;
(statearr_29153_29170[(2)] = inst_29130);

(statearr_29153_29170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (8))){
var inst_29115 = (state_29138[(7)]);
var tmp29150 = inst_29115;
var inst_29115__$1 = tmp29150;
var state_29138__$1 = (function (){var statearr_29154 = state_29138;
(statearr_29154[(7)] = inst_29115__$1);

return statearr_29154;
})();
var statearr_29155_29171 = state_29138__$1;
(statearr_29155_29171[(2)] = null);

(statearr_29155_29171[(1)] = (2));


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
});})(c__27425__auto___29161,out))
;
return ((function (switch__27330__auto__,c__27425__auto___29161,out){
return (function() {
var cljs$core$async$state_machine__27331__auto__ = null;
var cljs$core$async$state_machine__27331__auto____0 = (function (){
var statearr_29156 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29156[(0)] = cljs$core$async$state_machine__27331__auto__);

(statearr_29156[(1)] = (1));

return statearr_29156;
});
var cljs$core$async$state_machine__27331__auto____1 = (function (state_29138){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_29138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e29157){if((e29157 instanceof Object)){
var ex__27334__auto__ = e29157;
var statearr_29158_29172 = state_29138;
(statearr_29158_29172[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29173 = state_29138;
state_29138 = G__29173;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$state_machine__27331__auto__ = function(state_29138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27331__auto____1.call(this,state_29138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27331__auto____0;
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27331__auto____1;
return cljs$core$async$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___29161,out))
})();
var state__27427__auto__ = (function (){var statearr_29159 = f__27426__auto__.call(null);
(statearr_29159[(6)] = c__27425__auto___29161);

return statearr_29159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___29161,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29175 = arguments.length;
switch (G__29175) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27425__auto___29241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___29241,out){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___29241,out){
return (function (state_29213){
var state_val_29214 = (state_29213[(1)]);
if((state_val_29214 === (7))){
var inst_29209 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29215_29242 = state_29213__$1;
(statearr_29215_29242[(2)] = inst_29209);

(statearr_29215_29242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (1))){
var inst_29176 = (new Array(n));
var inst_29177 = inst_29176;
var inst_29178 = (0);
var state_29213__$1 = (function (){var statearr_29216 = state_29213;
(statearr_29216[(7)] = inst_29178);

(statearr_29216[(8)] = inst_29177);

return statearr_29216;
})();
var statearr_29217_29243 = state_29213__$1;
(statearr_29217_29243[(2)] = null);

(statearr_29217_29243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (4))){
var inst_29181 = (state_29213[(9)]);
var inst_29181__$1 = (state_29213[(2)]);
var inst_29182 = (inst_29181__$1 == null);
var inst_29183 = cljs.core.not.call(null,inst_29182);
var state_29213__$1 = (function (){var statearr_29218 = state_29213;
(statearr_29218[(9)] = inst_29181__$1);

return statearr_29218;
})();
if(inst_29183){
var statearr_29219_29244 = state_29213__$1;
(statearr_29219_29244[(1)] = (5));

} else {
var statearr_29220_29245 = state_29213__$1;
(statearr_29220_29245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (15))){
var inst_29203 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29221_29246 = state_29213__$1;
(statearr_29221_29246[(2)] = inst_29203);

(statearr_29221_29246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (13))){
var state_29213__$1 = state_29213;
var statearr_29222_29247 = state_29213__$1;
(statearr_29222_29247[(2)] = null);

(statearr_29222_29247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (6))){
var inst_29178 = (state_29213[(7)]);
var inst_29199 = (inst_29178 > (0));
var state_29213__$1 = state_29213;
if(cljs.core.truth_(inst_29199)){
var statearr_29223_29248 = state_29213__$1;
(statearr_29223_29248[(1)] = (12));

} else {
var statearr_29224_29249 = state_29213__$1;
(statearr_29224_29249[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (3))){
var inst_29211 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29213__$1,inst_29211);
} else {
if((state_val_29214 === (12))){
var inst_29177 = (state_29213[(8)]);
var inst_29201 = cljs.core.vec.call(null,inst_29177);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29213__$1,(15),out,inst_29201);
} else {
if((state_val_29214 === (2))){
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,(4),ch);
} else {
if((state_val_29214 === (11))){
var inst_29193 = (state_29213[(2)]);
var inst_29194 = (new Array(n));
var inst_29177 = inst_29194;
var inst_29178 = (0);
var state_29213__$1 = (function (){var statearr_29225 = state_29213;
(statearr_29225[(7)] = inst_29178);

(statearr_29225[(8)] = inst_29177);

(statearr_29225[(10)] = inst_29193);

return statearr_29225;
})();
var statearr_29226_29250 = state_29213__$1;
(statearr_29226_29250[(2)] = null);

(statearr_29226_29250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (9))){
var inst_29177 = (state_29213[(8)]);
var inst_29191 = cljs.core.vec.call(null,inst_29177);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29213__$1,(11),out,inst_29191);
} else {
if((state_val_29214 === (5))){
var inst_29181 = (state_29213[(9)]);
var inst_29178 = (state_29213[(7)]);
var inst_29177 = (state_29213[(8)]);
var inst_29186 = (state_29213[(11)]);
var inst_29185 = (inst_29177[inst_29178] = inst_29181);
var inst_29186__$1 = (inst_29178 + (1));
var inst_29187 = (inst_29186__$1 < n);
var state_29213__$1 = (function (){var statearr_29227 = state_29213;
(statearr_29227[(11)] = inst_29186__$1);

(statearr_29227[(12)] = inst_29185);

return statearr_29227;
})();
if(cljs.core.truth_(inst_29187)){
var statearr_29228_29251 = state_29213__$1;
(statearr_29228_29251[(1)] = (8));

} else {
var statearr_29229_29252 = state_29213__$1;
(statearr_29229_29252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (14))){
var inst_29206 = (state_29213[(2)]);
var inst_29207 = cljs.core.async.close_BANG_.call(null,out);
var state_29213__$1 = (function (){var statearr_29231 = state_29213;
(statearr_29231[(13)] = inst_29206);

return statearr_29231;
})();
var statearr_29232_29253 = state_29213__$1;
(statearr_29232_29253[(2)] = inst_29207);

(statearr_29232_29253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (10))){
var inst_29197 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29233_29254 = state_29213__$1;
(statearr_29233_29254[(2)] = inst_29197);

(statearr_29233_29254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (8))){
var inst_29177 = (state_29213[(8)]);
var inst_29186 = (state_29213[(11)]);
var tmp29230 = inst_29177;
var inst_29177__$1 = tmp29230;
var inst_29178 = inst_29186;
var state_29213__$1 = (function (){var statearr_29234 = state_29213;
(statearr_29234[(7)] = inst_29178);

(statearr_29234[(8)] = inst_29177__$1);

return statearr_29234;
})();
var statearr_29235_29255 = state_29213__$1;
(statearr_29235_29255[(2)] = null);

(statearr_29235_29255[(1)] = (2));


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
});})(c__27425__auto___29241,out))
;
return ((function (switch__27330__auto__,c__27425__auto___29241,out){
return (function() {
var cljs$core$async$state_machine__27331__auto__ = null;
var cljs$core$async$state_machine__27331__auto____0 = (function (){
var statearr_29236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29236[(0)] = cljs$core$async$state_machine__27331__auto__);

(statearr_29236[(1)] = (1));

return statearr_29236;
});
var cljs$core$async$state_machine__27331__auto____1 = (function (state_29213){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_29213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e29237){if((e29237 instanceof Object)){
var ex__27334__auto__ = e29237;
var statearr_29238_29256 = state_29213;
(statearr_29238_29256[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29257 = state_29213;
state_29213 = G__29257;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$state_machine__27331__auto__ = function(state_29213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27331__auto____1.call(this,state_29213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27331__auto____0;
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27331__auto____1;
return cljs$core$async$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___29241,out))
})();
var state__27427__auto__ = (function (){var statearr_29239 = f__27426__auto__.call(null);
(statearr_29239[(6)] = c__27425__auto___29241);

return statearr_29239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___29241,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29259 = arguments.length;
switch (G__29259) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27425__auto___29329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27425__auto___29329,out){
return (function (){
var f__27426__auto__ = (function (){var switch__27330__auto__ = ((function (c__27425__auto___29329,out){
return (function (state_29301){
var state_val_29302 = (state_29301[(1)]);
if((state_val_29302 === (7))){
var inst_29297 = (state_29301[(2)]);
var state_29301__$1 = state_29301;
var statearr_29303_29330 = state_29301__$1;
(statearr_29303_29330[(2)] = inst_29297);

(statearr_29303_29330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (1))){
var inst_29260 = [];
var inst_29261 = inst_29260;
var inst_29262 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29301__$1 = (function (){var statearr_29304 = state_29301;
(statearr_29304[(7)] = inst_29262);

(statearr_29304[(8)] = inst_29261);

return statearr_29304;
})();
var statearr_29305_29331 = state_29301__$1;
(statearr_29305_29331[(2)] = null);

(statearr_29305_29331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (4))){
var inst_29265 = (state_29301[(9)]);
var inst_29265__$1 = (state_29301[(2)]);
var inst_29266 = (inst_29265__$1 == null);
var inst_29267 = cljs.core.not.call(null,inst_29266);
var state_29301__$1 = (function (){var statearr_29306 = state_29301;
(statearr_29306[(9)] = inst_29265__$1);

return statearr_29306;
})();
if(inst_29267){
var statearr_29307_29332 = state_29301__$1;
(statearr_29307_29332[(1)] = (5));

} else {
var statearr_29308_29333 = state_29301__$1;
(statearr_29308_29333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (15))){
var inst_29291 = (state_29301[(2)]);
var state_29301__$1 = state_29301;
var statearr_29309_29334 = state_29301__$1;
(statearr_29309_29334[(2)] = inst_29291);

(statearr_29309_29334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (13))){
var state_29301__$1 = state_29301;
var statearr_29310_29335 = state_29301__$1;
(statearr_29310_29335[(2)] = null);

(statearr_29310_29335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (6))){
var inst_29261 = (state_29301[(8)]);
var inst_29286 = inst_29261.length;
var inst_29287 = (inst_29286 > (0));
var state_29301__$1 = state_29301;
if(cljs.core.truth_(inst_29287)){
var statearr_29311_29336 = state_29301__$1;
(statearr_29311_29336[(1)] = (12));

} else {
var statearr_29312_29337 = state_29301__$1;
(statearr_29312_29337[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (3))){
var inst_29299 = (state_29301[(2)]);
var state_29301__$1 = state_29301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29301__$1,inst_29299);
} else {
if((state_val_29302 === (12))){
var inst_29261 = (state_29301[(8)]);
var inst_29289 = cljs.core.vec.call(null,inst_29261);
var state_29301__$1 = state_29301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29301__$1,(15),out,inst_29289);
} else {
if((state_val_29302 === (2))){
var state_29301__$1 = state_29301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29301__$1,(4),ch);
} else {
if((state_val_29302 === (11))){
var inst_29265 = (state_29301[(9)]);
var inst_29269 = (state_29301[(10)]);
var inst_29279 = (state_29301[(2)]);
var inst_29280 = [];
var inst_29281 = inst_29280.push(inst_29265);
var inst_29261 = inst_29280;
var inst_29262 = inst_29269;
var state_29301__$1 = (function (){var statearr_29313 = state_29301;
(statearr_29313[(7)] = inst_29262);

(statearr_29313[(11)] = inst_29281);

(statearr_29313[(12)] = inst_29279);

(statearr_29313[(8)] = inst_29261);

return statearr_29313;
})();
var statearr_29314_29338 = state_29301__$1;
(statearr_29314_29338[(2)] = null);

(statearr_29314_29338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (9))){
var inst_29261 = (state_29301[(8)]);
var inst_29277 = cljs.core.vec.call(null,inst_29261);
var state_29301__$1 = state_29301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29301__$1,(11),out,inst_29277);
} else {
if((state_val_29302 === (5))){
var inst_29262 = (state_29301[(7)]);
var inst_29265 = (state_29301[(9)]);
var inst_29269 = (state_29301[(10)]);
var inst_29269__$1 = f.call(null,inst_29265);
var inst_29270 = cljs.core._EQ_.call(null,inst_29269__$1,inst_29262);
var inst_29271 = cljs.core.keyword_identical_QMARK_.call(null,inst_29262,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29272 = ((inst_29270) || (inst_29271));
var state_29301__$1 = (function (){var statearr_29315 = state_29301;
(statearr_29315[(10)] = inst_29269__$1);

return statearr_29315;
})();
if(cljs.core.truth_(inst_29272)){
var statearr_29316_29339 = state_29301__$1;
(statearr_29316_29339[(1)] = (8));

} else {
var statearr_29317_29340 = state_29301__$1;
(statearr_29317_29340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (14))){
var inst_29294 = (state_29301[(2)]);
var inst_29295 = cljs.core.async.close_BANG_.call(null,out);
var state_29301__$1 = (function (){var statearr_29319 = state_29301;
(statearr_29319[(13)] = inst_29294);

return statearr_29319;
})();
var statearr_29320_29341 = state_29301__$1;
(statearr_29320_29341[(2)] = inst_29295);

(statearr_29320_29341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (10))){
var inst_29284 = (state_29301[(2)]);
var state_29301__$1 = state_29301;
var statearr_29321_29342 = state_29301__$1;
(statearr_29321_29342[(2)] = inst_29284);

(statearr_29321_29342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (8))){
var inst_29265 = (state_29301[(9)]);
var inst_29269 = (state_29301[(10)]);
var inst_29261 = (state_29301[(8)]);
var inst_29274 = inst_29261.push(inst_29265);
var tmp29318 = inst_29261;
var inst_29261__$1 = tmp29318;
var inst_29262 = inst_29269;
var state_29301__$1 = (function (){var statearr_29322 = state_29301;
(statearr_29322[(14)] = inst_29274);

(statearr_29322[(7)] = inst_29262);

(statearr_29322[(8)] = inst_29261__$1);

return statearr_29322;
})();
var statearr_29323_29343 = state_29301__$1;
(statearr_29323_29343[(2)] = null);

(statearr_29323_29343[(1)] = (2));


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
});})(c__27425__auto___29329,out))
;
return ((function (switch__27330__auto__,c__27425__auto___29329,out){
return (function() {
var cljs$core$async$state_machine__27331__auto__ = null;
var cljs$core$async$state_machine__27331__auto____0 = (function (){
var statearr_29324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29324[(0)] = cljs$core$async$state_machine__27331__auto__);

(statearr_29324[(1)] = (1));

return statearr_29324;
});
var cljs$core$async$state_machine__27331__auto____1 = (function (state_29301){
while(true){
var ret_value__27332__auto__ = (function (){try{while(true){
var result__27333__auto__ = switch__27330__auto__.call(null,state_29301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27333__auto__;
}
break;
}
}catch (e29325){if((e29325 instanceof Object)){
var ex__27334__auto__ = e29325;
var statearr_29326_29344 = state_29301;
(statearr_29326_29344[(5)] = ex__27334__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29345 = state_29301;
state_29301 = G__29345;
continue;
} else {
return ret_value__27332__auto__;
}
break;
}
});
cljs$core$async$state_machine__27331__auto__ = function(state_29301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27331__auto____1.call(this,state_29301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27331__auto____0;
cljs$core$async$state_machine__27331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27331__auto____1;
return cljs$core$async$state_machine__27331__auto__;
})()
;})(switch__27330__auto__,c__27425__auto___29329,out))
})();
var state__27427__auto__ = (function (){var statearr_29327 = f__27426__auto__.call(null);
(statearr_29327[(6)] = c__27425__auto___29329);

return statearr_29327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27427__auto__);
});})(c__27425__auto___29329,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1553263596131
