// Compiled by ClojureScript 1.10.520 {}
goog.provide('blockchain.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('blockchain.events');
goog.require('blockchain.views');
goog.require('blockchain.config');
blockchain.core.dev_setup = (function blockchain$core$dev_setup(){
if(blockchain.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
blockchain.core.mount_root = (function blockchain$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blockchain.views.main_panel], null),document.getElementById("app"));
});
blockchain.core.init = (function blockchain$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain.events","initialize-db","blockchain.events/initialize-db",1419719497)], null));

blockchain.core.dev_setup.call(null);

return blockchain.core.mount_root.call(null);
});
goog.exportSymbol('blockchain.core.init', blockchain.core.init);

//# sourceMappingURL=core.js.map?rel=1553289395447
