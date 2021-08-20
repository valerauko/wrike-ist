/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 324:
/***/ ((module) => {

/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
goog.provide("goog.fs.blob");
goog.require("goog.array");
goog.fs.blob.getBlob = function(var_args) {
  var BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (BlobBuilder !== undefined) {
    var bb = new BlobBuilder;
    for (var i = 0; i < arguments.length; i++) {
      bb.append(arguments[i]);
    }
    return bb.getBlob();
  } else {
    return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments));
  }
};
goog.fs.blob.getBlobWithProperties = function(parts, opt_type, opt_endings) {
  var BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (BlobBuilder !== undefined) {
    var bb = new BlobBuilder;
    for (var i = 0; i < parts.length; i++) {
      bb.append(parts[i], opt_endings);
    }
    return bb.getBlob(opt_type);
  } else {
    if (goog.global.Blob !== undefined) {
      var properties = {};
      if (opt_type) {
        properties["type"] = opt_type;
      }
      if (opt_endings) {
        properties["endings"] = opt_endings;
      }
      return new Blob(parts, properties);
    } else {
      throw new Error("This browser doesn't seem to support creating Blobs");
    }
  }
};

//# sourceMappingURL=goog.fs.blob.js.map

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
/******/ 	var __webpack_exports__ = __nccwpck_require__(324);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;