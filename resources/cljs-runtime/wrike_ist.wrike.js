/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
goog.provide('wrike_ist.wrike');
wrike_ist.wrike.wrike_token = (function wrike_ist$wrike$wrike_token(){
return "eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjQ2NzUyMzcsXCJpXCI6Nzg5MDIxNCxcImNcIjo0NjI2NTA5LFwidVwiOjEwNjkyNjcyLFwiclwiOlwiVVNcIixcInNcIjpbXCJXXCIsXCJGXCIsXCJJXCIsXCJVXCIsXCJLXCIsXCJDXCIsXCJEXCIsXCJNXCIsXCJBXCIsXCJMXCIsXCJQXCJdLFwielwiOltdLFwidFwiOjB9IiwiaWF0IjoxNjI5NDM5Mjg0fQ.m724W0Opawx80mItg3f5_T0yWykk68FVlgEW0-_zjl4";
});
wrike_ist.wrike.headers = (function wrike_ist$wrike$headers(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),["bearer ",wrike_ist.wrike.wrike_token()].join(''),new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null);
});
wrike_ist.wrike.link_badge = ["<span ","style=\"background-color: rgb(255,204,128); color: rgb(25,25,25);\" ","contenteditable=\"false\">","Pull request:","</span> "].join('');
wrike_ist.wrike.find_task = (function wrike_ist$wrike$find_task(permalink){
var uri = ["https://www.wrike.com/api/v4/tasks?permalink=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(permalink))].join('');
httpurr.client.node.get("https://example.com").then((function (p1__6551_SHARP_){
return console.log(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__6551_SHARP_));
}));

return httpurr.client.node.get(uri,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),wrike_ist.wrike.headers()], null)).then((function (response){
var body = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)));
var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data",(0)], null));
if(cljs.core.truth_(temp__5751__auto__)){
var task = temp__5751__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([task], 0));

return Promise.resolve(task);
} else {
return Promise.reject((new Error("Task not found")));
}
}));
});
wrike_ist.wrike.link_pr = (function wrike_ist$wrike$link_pr(p__6553){
var map__6554 = p__6553;
var map__6554__$1 = cljs.core.__destructure_map(map__6554);
var pr_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6554__$1,new cljs.core.Keyword(null,"pr-url","pr-url",-1474282676));
var permalink = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6554__$1,new cljs.core.Keyword(null,"permalink","permalink",1009167849));
return wrike_ist.wrike.find_task(permalink).then((function (p__6555){
var map__6556 = p__6555;
var map__6556__$1 = cljs.core.__destructure_map(map__6556);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6556__$1,"id");
var uri = ["https://www.wrike.com/api/v4/tasks/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/comments"].join('');
return httpurr.client.node.get(uri,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),wrike_ist.wrike.headers()], null)).then((function (response){
var body = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ok,comment){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(comment,"text").includes(pr_url))){
return cljs.core.reduced(Promise.reject(new cljs.core.Keyword(null,"present","present",-1224645465)));
} else {
return ok;
}
}),Promise.resolve(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(body,"data"));
})).then((function() { 
var G__6564__delegate = function (_){
var params = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),[wrike_ist.wrike.link_badge,cljs.core.str.cljs$core$IFn$_invoke$arity$1(pr_url)].join(''),new cljs.core.Keyword(null,"plainText","plainText",-2031250504),false], null));
return httpurr.client.node.post(uri,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),wrike_ist.wrike.headers(),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(params)], null));
};
var G__6564 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6565__i = 0, G__6565__a = new Array(arguments.length -  0);
while (G__6565__i < G__6565__a.length) {G__6565__a[G__6565__i] = arguments[G__6565__i + 0]; ++G__6565__i;}
  _ = new cljs.core.IndexedSeq(G__6565__a,0,null);
} 
return G__6564__delegate.call(this,_);};
G__6564.cljs$lang$maxFixedArity = 0;
G__6564.cljs$lang$applyTo = (function (arglist__6566){
var _ = cljs.core.seq(arglist__6566);
return G__6564__delegate(_);
});
G__6564.cljs$core$IFn$_invoke$arity$variadic = G__6564__delegate;
return G__6564;
})()
).then((function (){
return console.log("PR link sent to task");
})).catch((function (p1__6552_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__6552_SHARP_,new cljs.core.Keyword(null,"present","present",-1224645465))){
return console.log("PR link already in comments");
} else {
return Promise.reject(p1__6552_SHARP_);
}
}));
}));
});
wrike_ist.wrike.close_task = (function wrike_ist$wrike$close_task(p__6557){
var map__6558 = p__6557;
var map__6558__$1 = cljs.core.__destructure_map(map__6558);
var permalink = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6558__$1,new cljs.core.Keyword(null,"permalink","permalink",1009167849));
return wrike_ist.wrike.find_task(permalink).then((function (p__6559){
var map__6560 = p__6559;
var map__6560__$1 = cljs.core.__destructure_map(map__6560);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,"id");
var uri = ["https://www.wrike.com/api/v4/tasks/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var params = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"completed","completed",-486056503)], null));
return httpurr.client.node.put(uri,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),wrike_ist.wrike.headers(),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(params)], null));
}));
});

//# sourceMappingURL=wrike_ist.wrike.js.map

module.exports = __webpack_exports__;
/******/ })()
;