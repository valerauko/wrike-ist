/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
goog.provide('cljs.nodejs');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_((function() { 
var G__7190__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__7190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7193__i = 0, G__7193__a = new Array(arguments.length -  0);
while (G__7193__i < G__7193__a.length) {G__7193__a[G__7193__i] = arguments[G__7193__i + 0]; ++G__7193__i;}
  args = new cljs.core.IndexedSeq(G__7193__a,0,null);
} 
return G__7190__delegate.call(this,args);};
G__7190.cljs$lang$maxFixedArity = 0;
G__7190.cljs$lang$applyTo = (function (arglist__7194){
var args = cljs.core.seq(arglist__7194);
return G__7190__delegate(args);
});
G__7190.cljs$core$IFn$_invoke$arity$variadic = G__7190__delegate;
return G__7190;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__7195__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__7195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7196__i = 0, G__7196__a = new Array(arguments.length -  0);
while (G__7196__i < G__7196__a.length) {G__7196__a[G__7196__i] = arguments[G__7196__i + 0]; ++G__7196__i;}
  args = new cljs.core.IndexedSeq(G__7196__a,0,null);
} 
return G__7195__delegate.call(this,args);};
G__7195.cljs$lang$maxFixedArity = 0;
G__7195.cljs$lang$applyTo = (function (arglist__7197){
var args = cljs.core.seq(arglist__7197);
return G__7195__delegate(args);
});
G__7195.cljs$core$IFn$_invoke$arity$variadic = G__7195__delegate;
return G__7195;
})()
);

return null;
});

//# sourceMappingURL=cljs.nodejs.js.map

module.exports = __webpack_exports__;
/******/ })()
;