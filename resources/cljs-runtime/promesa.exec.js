/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 598:
/***/ ((module) => {

/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
goog.provide('promesa.exec');
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_scheduler !== 'undefined')){
} else {
promesa.exec.default_scheduler = (new cljs.core.Delay((function (){
return (promesa.exec.__GT_ScheduledExecutor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.__GT_ScheduledExecutor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.__GT_ScheduledExecutor.call(null));
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_executor !== 'undefined')){
} else {
promesa.exec.default_executor = (new cljs.core.Delay((function (){
return (promesa.exec.__GT_MicrotaskExecutor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.__GT_MicrotaskExecutor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.__GT_MicrotaskExecutor.call(null));
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.current_thread_executor !== 'undefined')){
} else {
promesa.exec.current_thread_executor = (new cljs.core.Delay((function (){
return (promesa.exec.__GT_CurrentThreadExecutor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.__GT_CurrentThreadExecutor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.__GT_CurrentThreadExecutor.call(null));
}),null));
}
promesa.exec.resolve_executor = (function promesa$exec$resolve_executor(var_args){
var G__7255 = arguments.length;
switch (G__7255) {
case 0:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0 = (function (){
if(cljs.core.delay_QMARK_(promesa.exec.default_executor)){
return cljs.core.deref(promesa.exec.default_executor);
} else {
return promesa.exec.default_executor;
}
}));

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1 = (function (executor){
if(cljs.core.delay_QMARK_(executor)){
return cljs.core.deref(executor);
} else {
return executor;
}
}));

(promesa.exec.resolve_executor.cljs$lang$maxFixedArity = 1);

promesa.exec.resolve_scheduler = (function promesa$exec$resolve_scheduler(var_args){
var G__7260 = arguments.length;
switch (G__7260) {
case 0:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0 = (function (){
if(cljs.core.delay_QMARK_(promesa.exec.default_scheduler)){
return cljs.core.deref(promesa.exec.default_scheduler);
} else {
return promesa.exec.default_scheduler;
}
}));

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1 = (function (scheduler){
if(cljs.core.delay_QMARK_(scheduler)){
return cljs.core.deref(scheduler);
} else {
return scheduler;
}
}));

(promesa.exec.resolve_scheduler.cljs$lang$maxFixedArity = 1);

/**
 * Run the task in the provided executor.
 */
promesa.exec.run_BANG_ = (function promesa$exec$run_BANG_(var_args){
var G__7266 = arguments.length;
switch (G__7266) {
case 1:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (task){
return promesa.protocols._run_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0(),task);
}));

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,task){
return promesa.protocols._run_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),task);
}));

(promesa.exec.run_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Submit a task to be executed in a provided executor
 *   and return a promise that will be completed with
 *   the return value of a task.
 * 
 *   A task is a plain clojure function.
 */
promesa.exec.submit_BANG_ = (function promesa$exec$submit_BANG_(var_args){
var G__7272 = arguments.length;
switch (G__7272) {
case 1:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (task){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0(),task);
}));

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,task){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),task);
}));

(promesa.exec.submit_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 */
promesa.exec.schedule_BANG_ = (function promesa$exec$schedule_BANG_(var_args){
var G__7275 = arguments.length;
switch (G__7275) {
case 2:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ms,task){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0(),ms,task);
}));

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (scheduler,ms,task){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1(scheduler),ms,task);
}));

(promesa.exec.schedule_BANG_.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
*/
promesa.exec.MicrotaskExecutor = (function (){
});
(promesa.exec.MicrotaskExecutor.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.MicrotaskExecutor.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._mapErr(promesa.protocols._map(promesa.protocols._promise(null),(function (_){
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return null;
})),(function (e){
setTimeout((function (){
throw e;
}));

return null;
}));
}));

(promesa.exec.MicrotaskExecutor.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._mapErr(promesa.protocols._map(promesa.protocols._promise(null),(function (_){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})),(function (e){
setTimeout((function (){
throw e;
}));

return null;
}));
}));

(promesa.exec.MicrotaskExecutor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.MicrotaskExecutor.cljs$lang$type = true);

(promesa.exec.MicrotaskExecutor.cljs$lang$ctorStr = "promesa.exec/MicrotaskExecutor");

(promesa.exec.MicrotaskExecutor.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"promesa.exec/MicrotaskExecutor");
}));

/**
 * Positional factory function for promesa.exec/MicrotaskExecutor.
 */
promesa.exec.__GT_MicrotaskExecutor = (function promesa$exec$__GT_MicrotaskExecutor(){
return (new promesa.exec.MicrotaskExecutor());
});


/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
*/
promesa.exec.CurrentThreadExecutor = (function (){
});
(promesa.exec.CurrentThreadExecutor.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.CurrentThreadExecutor.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return promesa.protocols._promise(null);
}));

(promesa.exec.CurrentThreadExecutor.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._promise((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(promesa.exec.CurrentThreadExecutor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.CurrentThreadExecutor.cljs$lang$type = true);

(promesa.exec.CurrentThreadExecutor.cljs$lang$ctorStr = "promesa.exec/CurrentThreadExecutor");

(promesa.exec.CurrentThreadExecutor.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"promesa.exec/CurrentThreadExecutor");
}));

/**
 * Positional factory function for promesa.exec/CurrentThreadExecutor.
 */
promesa.exec.__GT_CurrentThreadExecutor = (function promesa$exec$__GT_CurrentThreadExecutor(){
return (new promesa.exec.CurrentThreadExecutor());
});


/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {promesa.protocols.ICancellable}
*/
promesa.exec.ScheduledTask = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 0;
});
(promesa.exec.ScheduledTask.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var done_iref = goog.object.get(self__.state,"done");
return cljs.core.deref(done_iref);
}));

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return goog.object.get(self__.state,"cancelled");
}));

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
if(cljs.core.truth_(self__$1.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(null))){
return null;
} else {
var cancel_fn = goog.object.get(self__.state,"cancel-fn");
goog.object.set(self__.state,"cancelled",true);

return (cancel_fn.cljs$core$IFn$_invoke$arity$0 ? cancel_fn.cljs$core$IFn$_invoke$arity$0() : cancel_fn.call(null));
}
}));

(promesa.exec.ScheduledTask.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(promesa.exec.ScheduledTask.cljs$lang$type = true);

(promesa.exec.ScheduledTask.cljs$lang$ctorStr = "promesa.exec/ScheduledTask");

(promesa.exec.ScheduledTask.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"promesa.exec/ScheduledTask");
}));

/**
 * Positional factory function for promesa.exec/ScheduledTask.
 */
promesa.exec.__GT_ScheduledTask = (function promesa$exec$__GT_ScheduledTask(state){
return (new promesa.exec.ScheduledTask(state));
});


/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
*/
promesa.exec.ScheduledExecutor = (function (){
});
(promesa.exec.ScheduledExecutor.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.ScheduledExecutor.prototype.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 = (function (_,ms,f){
var self__ = this;
var ___$1 = this;
var done = cljs.core.volatile_BANG_(false);
var task = (function (){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {cljs.core.vreset_BANG_(done,true);
}});
var tid = setTimeout(task,ms);
var cancel = (function (){
return clearTimeout(tid);
});
return promesa.exec.__GT_ScheduledTask(({"done": done, "cancelled": false, "cancel-fn": cancel}));
}));

(promesa.exec.ScheduledExecutor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.ScheduledExecutor.cljs$lang$type = true);

(promesa.exec.ScheduledExecutor.cljs$lang$ctorStr = "promesa.exec/ScheduledExecutor");

(promesa.exec.ScheduledExecutor.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"promesa.exec/ScheduledExecutor");
}));

/**
 * Positional factory function for promesa.exec/ScheduledExecutor.
 */
promesa.exec.__GT_ScheduledExecutor = (function promesa$exec$__GT_ScheduledExecutor(){
return (new promesa.exec.ScheduledExecutor());
});


//# sourceMappingURL=promesa.exec.js.map

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
/******/ 	var __webpack_exports__ = __nccwpck_require__(598);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;