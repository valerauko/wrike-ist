/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 373:
/***/ ((module) => {

/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
goog.provide("goog.html.TrustedResourceUrl");
goog.require("goog.asserts");
goog.require("goog.fs.blob");
goog.require("goog.fs.url");
goog.require("goog.html.SafeScript");
goog.require("goog.html.trustedtypes");
goog.require("goog.i18n.bidi.Dir");
goog.require("goog.i18n.bidi.DirectionalString");
goog.require("goog.string.Const");
goog.require("goog.string.TypedString");
goog.html.TrustedResourceUrl = class {
  constructor(value, token) {
    this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = token === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? value : "";
  }
};
goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
  return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
};
goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
goog.html.TrustedResourceUrl.prototype.getDirection = function() {
  return goog.i18n.bidi.Dir.LTR;
};
goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(searchParams, opt_hashParams) {
  var url = goog.html.TrustedResourceUrl.unwrap(this);
  var parts = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(url);
  var urlBase = parts[1];
  var urlSearch = parts[2] || "";
  var urlHash = parts[3] || "";
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(urlBase + goog.html.TrustedResourceUrl.stringifyParams_("?", urlSearch, searchParams) + goog.html.TrustedResourceUrl.stringifyParams_("#", urlHash, opt_hashParams));
};
if (goog.DEBUG) {
  goog.html.TrustedResourceUrl.prototype.toString = function() {
    return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
  };
}
goog.html.TrustedResourceUrl.unwrap = function(trustedResourceUrl) {
  return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(trustedResourceUrl).toString();
};
goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(trustedResourceUrl) {
  if (trustedResourceUrl instanceof goog.html.TrustedResourceUrl && trustedResourceUrl.constructor === goog.html.TrustedResourceUrl) {
    return trustedResourceUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
  } else {
    goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + trustedResourceUrl + "' of type " + goog.typeOf(trustedResourceUrl));
    return "type_error:TrustedResourceUrl";
  }
};
goog.html.TrustedResourceUrl.format = function(format, args) {
  var formatStr = goog.string.Const.unwrap(format);
  if (!goog.html.TrustedResourceUrl.BASE_URL_.test(formatStr)) {
    throw new Error("Invalid TrustedResourceUrl format: " + formatStr);
  }
  var result = formatStr.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(match, id) {
    if (!Object.prototype.hasOwnProperty.call(args, id)) {
      throw new Error('Found marker, "' + id + '", in format string, "' + formatStr + '", but no valid label mapping found ' + "in args: " + JSON.stringify(args));
    }
    var arg = args[id];
    if (arg instanceof goog.string.Const) {
      return goog.string.Const.unwrap(arg);
    } else {
      return encodeURIComponent(String(arg));
    }
  });
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(result);
};
goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
goog.html.TrustedResourceUrl.BASE_URL_ = new RegExp("^((https:)?//[0-9a-z.:[\\]-]+/" + "|/[^/\\\\]" + "|[^:/\\\\%]+/" + "|[^:/\\\\%]*[?#]" + "|about:blank#" + ")", "i");
goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
goog.html.TrustedResourceUrl.formatWithParams = function(format, args, searchParams, opt_hashParams) {
  var url = goog.html.TrustedResourceUrl.format(format, args);
  return url.cloneWithParams(searchParams, opt_hashParams);
};
goog.html.TrustedResourceUrl.fromConstant = function(url) {
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(url));
};
goog.html.TrustedResourceUrl.fromConstants = function(parts) {
  var unwrapped = "";
  for (var i = 0; i < parts.length; i++) {
    unwrapped += goog.string.Const.unwrap(parts[i]);
  }
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(unwrapped);
};
goog.html.TrustedResourceUrl.fromSafeScript = function(safeScript) {
  var blob = goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(safeScript)], "text/javascript");
  var url = goog.fs.url.createObjectUrl(blob);
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(url) {
  const policy = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
  var value = policy ? policy.createScriptURL(url) : url;
  return new goog.html.TrustedResourceUrl(value, goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_);
};
goog.html.TrustedResourceUrl.stringifyParams_ = function(prefix, currentString, params) {
  if (params == null) {
    return currentString;
  }
  if (typeof params === "string") {
    return params ? prefix + encodeURIComponent(params) : "";
  }
  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      var value = params[key];
      var outputValues = Array.isArray(value) ? value : [value];
      for (var i = 0; i < outputValues.length; i++) {
        var outputValue = outputValues[i];
        if (outputValue != null) {
          if (!currentString) {
            currentString = prefix;
          }
          currentString += (currentString.length > prefix.length ? "\x26" : "") + encodeURIComponent(key) + "\x3d" + encodeURIComponent(String(outputValue));
        }
      }
    }
  }
  return currentString;
};

//# sourceMappingURL=goog.html.trustedresourceurl.js.map

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
/******/ 	var __webpack_exports__ = __nccwpck_require__(373);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;