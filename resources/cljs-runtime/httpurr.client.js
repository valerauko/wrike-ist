/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 403:
/***/ ((module) => {

/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
goog.provide('httpurr.client');
httpurr.client.keyword__GT_method = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"head","head",-771383919),"HEAD",new cljs.core.Keyword(null,"options","options",99638489),"OPTIONS",new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"patch","patch",380775109),"PATCH",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE",new cljs.core.Keyword(null,"trace","trace",-1082747415),"TRACE"], null);
httpurr.client.perform_BANG_ = (function httpurr$client$perform_BANG_(client,request,options){
var map__8605 = request;
var map__8605__$1 = cljs.core.__destructure_map(map__8605);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8605__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8605__$1,new cljs.core.Keyword(null,"url","url",276297046));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8605__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8605__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var query_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8605__$1,new cljs.core.Keyword(null,"query-string","query-string",-1018845061));
return httpurr.protocols._send(client,request,options);
});
/**
 * Given a object that implements `httpurr.protocols.Request`,
 *   return a promise that will be resolved if there is a
 *   response and rejected on timeout, exceptions, HTTP errors
 *   or abortions.
 */
httpurr.client.request__GT_promise = (function httpurr$client$request__GT_promise(request){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
return httpurr.protocols._listen(request,(function (resp){
if(cljs.core.truth_(httpurr.protocols._success_QMARK_(resp))){
var G__8613 = httpurr.protocols._response(resp);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__8613) : resolve.call(null,G__8613));
} else {
var G__8614 = httpurr.protocols._error(resp);
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__8614) : reject.call(null,G__8614));
}
}));
}));
});
/**
 * Given a request map and maybe an options map, perform
 *   the request and return a promise that will be resolved
 *   when receiving the response.
 * 
 *   If the request timeouts, throws an exception or is aborted
 *   the promise will be rejected.
 * 
 *   The available options are:
 *   - `:timeout`: a timeout for the request in miliseconds
 *   
 */
httpurr.client.send_BANG_ = (function httpurr$client$send_BANG_(var_args){
var G__8619 = arguments.length;
switch (G__8619) {
case 2:
return httpurr.client.send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return httpurr.client.send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(httpurr.client.send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (client,request){
return httpurr.client.send_BANG_.cljs$core$IFn$_invoke$arity$3(client,request,cljs.core.PersistentArrayMap.EMPTY);
}));

(httpurr.client.send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (client,request,options){
var request__$1 = httpurr.client.perform_BANG_(client,request,options);
return httpurr.client.request__GT_promise(request__$1);
}));

(httpurr.client.send_BANG_.cljs$lang$maxFixedArity = 3);

httpurr.client.method = (function httpurr$client$method(m){
return (function() {
var G__8634 = null;
var G__8634__2 = (function (client,url){
return httpurr.client.send_BANG_.cljs$core$IFn$_invoke$arity$2(client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),m,new cljs.core.Keyword(null,"url","url",276297046),url], null));
});
var G__8634__3 = (function (client,url,req){
return httpurr.client.send_BANG_.cljs$core$IFn$_invoke$arity$2(client,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),m,new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
});
var G__8634__4 = (function (client,url,req,opts){
return httpurr.client.send_BANG_.cljs$core$IFn$_invoke$arity$3(client,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),m,new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)),opts);
});
G__8634 = function(client,url,req,opts){
switch(arguments.length){
case 2:
return G__8634__2.call(this,client,url);
case 3:
return G__8634__3.call(this,client,url,req);
case 4:
return G__8634__4.call(this,client,url,req,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8634.cljs$core$IFn$_invoke$arity$2 = G__8634__2;
G__8634.cljs$core$IFn$_invoke$arity$3 = G__8634__3;
G__8634.cljs$core$IFn$_invoke$arity$4 = G__8634__4;
return G__8634;
})()
});
httpurr.client.head = httpurr.client.method(new cljs.core.Keyword(null,"head","head",-771383919));
httpurr.client.options = httpurr.client.method(new cljs.core.Keyword(null,"options","options",99638489));
httpurr.client.get = httpurr.client.method(new cljs.core.Keyword(null,"get","get",1683182755));
httpurr.client.post = httpurr.client.method(new cljs.core.Keyword(null,"post","post",269697687));
httpurr.client.put = httpurr.client.method(new cljs.core.Keyword(null,"put","put",1299772570));
httpurr.client.patch = httpurr.client.method(new cljs.core.Keyword(null,"patch","patch",380775109));
httpurr.client.delete$ = httpurr.client.method(new cljs.core.Keyword(null,"delete","delete",-1768633620));
httpurr.client.trace = httpurr.client.method(new cljs.core.Keyword(null,"trace","trace",-1082747415));

//# sourceMappingURL=httpurr.client.js.map

module.exports = __webpack_exports__;
/******/ })()
;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(403);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;