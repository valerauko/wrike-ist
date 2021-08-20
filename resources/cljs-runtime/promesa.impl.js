/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 27:
/***/ ((module) => {

/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
goog.provide('promesa.impl');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x7316 = obj;
(x7316.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x7316.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x7316.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x7316;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__7319_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__7319_SHARP_) : f.call(null,p1__7319_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__7320_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__7320_SHARP_) : f.call(null,p1__7320_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__7321_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__7321_SHARP_) : f.call(null,p1__7321_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__7322_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__7322_SHARP_) : f.call(null,p1__7322_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__7323_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__7323_SHARP_) : f.call(null,p1__7323_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__7324_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__7324_SHARP_) : f.call(null,p1__7324_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__7325_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__7325_SHARP_) : f.call(null,p1__7325_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__7326_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__7326_SHARP_) : f.call(null,p1__7326_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__7327_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__7327_SHARP_) : f.call(null,p1__7327_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__7328_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__7328_SHARP_) : f.call(null,p1__7328_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__7329_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__7329_SHARP_,null) : f.call(null,p1__7329_SHARP_,null));
}),(function (p1__7330_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__7330_SHARP_) : f.call(null,null,p1__7330_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__7331_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__7331_SHARP_,null) : f.call(null,p1__7331_SHARP_,null));
}),(function (p1__7332_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__7332_SHARP_) : f.call(null,null,p1__7332_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__7333_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__7333_SHARP_,null) : f.call(null,p1__7333_SHARP_,null));
}),(function (p1__7334_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__7334_SHARP_) : f.call(null,null,p1__7334_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__7335_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__7335_SHARP_,null) : f.call(null,p1__7335_SHARP_,null));
}),(function (p1__7336_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__7336_SHARP_) : f.call(null,null,p1__7336_SHARP_));
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_(Promise);
goog.object.set(promesa.protocols.IPromise,"_",true);

goog.object.set(promesa.protocols._map,"_",(function() {
var G__7428 = null;
var G__7428__2 = (function (it,f){
return promesa.protocols._map(promesa.protocols._promise(it),f);
});
var G__7428__3 = (function (it,f,e){
return promesa.protocols._map(promesa.protocols._promise(it),f,e);
});
G__7428 = function(it,f,e){
switch(arguments.length){
case 2:
return G__7428__2.call(this,it,f);
case 3:
return G__7428__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7428.cljs$core$IFn$_invoke$arity$2 = G__7428__2;
G__7428.cljs$core$IFn$_invoke$arity$3 = G__7428__3;
return G__7428;
})()
);

goog.object.set(promesa.protocols._bind,"_",(function() {
var G__7435 = null;
var G__7435__2 = (function (it,f){
return promesa.protocols._bind(promesa.protocols._promise(it),f);
});
var G__7435__3 = (function (it,f,e){
return promesa.protocols._bind(promesa.protocols._promise(it),f,e);
});
G__7435 = function(it,f,e){
switch(arguments.length){
case 2:
return G__7435__2.call(this,it,f);
case 3:
return G__7435__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7435.cljs$core$IFn$_invoke$arity$2 = G__7435__2;
G__7435.cljs$core$IFn$_invoke$arity$3 = G__7435__3;
return G__7435;
})()
);

goog.object.set(promesa.protocols._mapErr,"_",(function() {
var G__7446 = null;
var G__7446__2 = (function (it,f){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f);
});
var G__7446__3 = (function (it,f,e){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f,e);
});
G__7446 = function(it,f,e){
switch(arguments.length){
case 2:
return G__7446__2.call(this,it,f);
case 3:
return G__7446__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7446.cljs$core$IFn$_invoke$arity$2 = G__7446__2;
G__7446.cljs$core$IFn$_invoke$arity$3 = G__7446__3;
return G__7446;
})()
);

goog.object.set(promesa.protocols._thenErr,"_",(function() {
var G__7451 = null;
var G__7451__2 = (function (it,f){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f);
});
var G__7451__3 = (function (it,f,e){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f,e);
});
G__7451 = function(it,f,e){
switch(arguments.length){
case 2:
return G__7451__2.call(this,it,f);
case 3:
return G__7451__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7451.cljs$core$IFn$_invoke$arity$2 = G__7451__2;
G__7451.cljs$core$IFn$_invoke$arity$3 = G__7451__3;
return G__7451;
})()
);

goog.object.set(promesa.protocols._handle,"_",(function() {
var G__7459 = null;
var G__7459__2 = (function (it,f){
return promesa.protocols._handle(promesa.protocols._promise(it),f);
});
var G__7459__3 = (function (it,f,e){
return promesa.protocols._handle(promesa.protocols._promise(it),f,e);
});
G__7459 = function(it,f,e){
switch(arguments.length){
case 2:
return G__7459__2.call(this,it,f);
case 3:
return G__7459__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7459.cljs$core$IFn$_invoke$arity$2 = G__7459__2;
G__7459.cljs$core$IFn$_invoke$arity$3 = G__7459__3;
return G__7459;
})()
);

goog.object.set(promesa.protocols._finally,"_",(function() {
var G__7460 = null;
var G__7460__2 = (function (it,f){
return promesa.protocols._finally(promesa.protocols._promise(it),f);
});
var G__7460__3 = (function (it,f,e){
return promesa.protocols._finally(promesa.protocols._promise(it),f,e);
});
G__7460 = function(it,f,e){
switch(arguments.length){
case 2:
return G__7460__2.call(this,it,f);
case 3:
return G__7460__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7460.cljs$core$IFn$_invoke$arity$2 = G__7460__2;
G__7460.cljs$core$IFn$_invoke$arity$3 = G__7460__3;
return G__7460;
})()
);
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
}));

goog.object.set(promesa.protocols.IPromiseFactory,"_",true);

goog.object.set(promesa.protocols._promise,"_",(function (v){
return promesa.impl.resolved(v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
}));

//# sourceMappingURL=promesa.impl.js.map

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
/******/ 	var __webpack_exports__ = __nccwpck_require__(27);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;