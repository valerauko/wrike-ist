/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
goog.provide('httpurr.protocols');

/**
 * @interface
 */
httpurr.protocols.Client = function(){};

var httpurr$protocols$Client$_send$dyn_7219 = (function (_,request,options){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (httpurr.protocols._send[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,request,options) : m__4522__auto__.call(null,_,request,options));
} else {
var m__4519__auto__ = (httpurr.protocols._send["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,request,options) : m__4519__auto__.call(null,_,request,options));
} else {
throw cljs.core.missing_protocol("Client.-send",_);
}
}
});
/**
 * Given a request and options, perform the request and return a value
 * that implements the `Request` protocol.
 */
httpurr.protocols._send = (function httpurr$protocols$_send(_,request,options){
if((((!((_ == null)))) && ((!((_.httpurr$protocols$Client$_send$arity$3 == null)))))){
return _.httpurr$protocols$Client$_send$arity$3(_,request,options);
} else {
return httpurr$protocols$Client$_send$dyn_7219(_,request,options);
}
});


/**
 * @interface
 */
httpurr.protocols.Request = function(){};

var httpurr$protocols$Request$_listen$dyn_7221 = (function (_,cb){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (httpurr.protocols._listen[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,cb) : m__4522__auto__.call(null,_,cb));
} else {
var m__4519__auto__ = (httpurr.protocols._listen["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,cb) : m__4519__auto__.call(null,_,cb));
} else {
throw cljs.core.missing_protocol("Request.-listen",_);
}
}
});
/**
 * Call the given `cb` function with a type that implements `Response`
 *  when the request completes
 */
httpurr.protocols._listen = (function httpurr$protocols$_listen(_,cb){
if((((!((_ == null)))) && ((!((_.httpurr$protocols$Request$_listen$arity$2 == null)))))){
return _.httpurr$protocols$Request$_listen$arity$2(_,cb);
} else {
return httpurr$protocols$Request$_listen$dyn_7221(_,cb);
}
});


/**
 * @interface
 */
httpurr.protocols.Response = function(){};

var httpurr$protocols$Response$_success_QMARK_$dyn_7225 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (httpurr.protocols._success_QMARK_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (httpurr.protocols._success_QMARK_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Response.-success?",_);
}
}
});
/**
 * Return `true` if a response was returned from the server.
 */
httpurr.protocols._success_QMARK_ = (function httpurr$protocols$_success_QMARK_(_){
if((((!((_ == null)))) && ((!((_.httpurr$protocols$Response$_success_QMARK_$arity$1 == null)))))){
return _.httpurr$protocols$Response$_success_QMARK_$arity$1(_);
} else {
return httpurr$protocols$Response$_success_QMARK_$dyn_7225(_);
}
});

var httpurr$protocols$Response$_response$dyn_7226 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (httpurr.protocols._response[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (httpurr.protocols._response["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Response.-response",_);
}
}
});
/**
 * Given a response that has completed successfully, return the response
 *   map.
 */
httpurr.protocols._response = (function httpurr$protocols$_response(_){
if((((!((_ == null)))) && ((!((_.httpurr$protocols$Response$_response$arity$1 == null)))))){
return _.httpurr$protocols$Response$_response$arity$1(_);
} else {
return httpurr$protocols$Response$_response$dyn_7226(_);
}
});

var httpurr$protocols$Response$_error$dyn_7229 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (httpurr.protocols._error[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (httpurr.protocols._error["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Response.-error",_);
}
}
});
/**
 * Given a request that has completed with an error, return the keyword
 *   corresponding to its error.
 */
httpurr.protocols._error = (function httpurr$protocols$_error(_){
if((((!((_ == null)))) && ((!((_.httpurr$protocols$Response$_error$arity$1 == null)))))){
return _.httpurr$protocols$Response$_error$arity$1(_);
} else {
return httpurr$protocols$Response$_error$dyn_7229(_);
}
});


//# sourceMappingURL=httpurr.protocols.js.map

module.exports = __webpack_exports__;
/******/ })()
;