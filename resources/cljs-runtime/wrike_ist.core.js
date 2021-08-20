/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
goog.provide('wrike_ist.core');
wrike_ist.core.extract_details = (function wrike_ist$core$extract_details(pr_obj){
var temp__5753__auto__ = pr_obj.body;
if(cljs.core.truth_(temp__5753__auto__)){
var body = temp__5753__auto__;
var temp__5753__auto____$1 = cljs.core.re_find(/https:\/\/www.wrike.com\/open\.htm\?id=(\d+)/,body);
if(cljs.core.truth_(temp__5753__auto____$1)){
var vec__6561 = temp__5753__auto____$1;
var perm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6561,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),((pr_obj.merged)?new cljs.core.Keyword(null,"merged","merged",1648712643):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pr_obj.state,"closed"))?new cljs.core.Keyword(null,"closed","closed",-919675359):new cljs.core.Keyword(null,"open","open",-1763596448)
)),new cljs.core.Keyword(null,"permalink","permalink",1009167849),perm,new cljs.core.Keyword(null,"pr-url","pr-url",-1474282676),pr_obj.html_url], null);
} else {
return null;
}
} else {
return null;
}
});
wrike_ist.core.main = (function wrike_ist$core$main(){
var payload = shadow.js.shim.module$$actions$github.context.payload;
var temp__5751__auto__ = payload.pull_request;
if(cljs.core.truth_(temp__5751__auto__)){
var pr = temp__5751__auto__;
var temp__5751__auto____$1 = wrike_ist.core.extract_details(pr);
if(cljs.core.truth_(temp__5751__auto____$1)){
var map__6565 = temp__5751__auto____$1;
var map__6565__$1 = cljs.core.__destructure_map(map__6565);
var details = map__6565__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6565__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return (function (){var G__6568 = state;
var G__6568__$1 = (((G__6568 instanceof cljs.core.Keyword))?G__6568.fqn:null);
switch (G__6568__$1) {
case "open":
return wrike_ist.wrike.link_pr(details);

break;
case "merged":
return wrike_ist.wrike.close_task(details);

break;
default:
return Promise.resolve();

}
})().catch((function (error){
console.trace(error);

return shadow.js.shim.module$$actions$core.setFailed(error.message);
}));
} else {
return console.log("Not task link in PR text");
}
} else {
return console.log("No pull_request in payload");
}
});

//# sourceMappingURL=wrike_ist.core.js.map

module.exports = __webpack_exports__;
/******/ })()
;