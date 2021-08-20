/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 367:
/***/ ((module) => {

/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
goog.provide("goog.structs");
goog.require("goog.array");
goog.require("goog.object");
goog.structs.getCount = function(col) {
  if (col.getCount && typeof col.getCount == "function") {
    return col.getCount();
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return col.length;
  }
  return goog.object.getCount(col);
};
goog.structs.getValues = function(col) {
  if (col.getValues && typeof col.getValues == "function") {
    return col.getValues();
  }
  if (typeof col === "string") {
    return col.split("");
  }
  if (goog.isArrayLike(col)) {
    var rv = [];
    var l = col.length;
    for (var i = 0; i < l; i++) {
      rv.push(col[i]);
    }
    return rv;
  }
  return goog.object.getValues(col);
};
goog.structs.getKeys = function(col) {
  if (col.getKeys && typeof col.getKeys == "function") {
    return col.getKeys();
  }
  if (col.getValues && typeof col.getValues == "function") {
    return undefined;
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    var rv = [];
    var l = col.length;
    for (var i = 0; i < l; i++) {
      rv.push(i);
    }
    return rv;
  }
  return goog.object.getKeys(col);
};
goog.structs.contains = function(col, val) {
  if (col.contains && typeof col.contains == "function") {
    return col.contains(val);
  }
  if (col.containsValue && typeof col.containsValue == "function") {
    return col.containsValue(val);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return goog.array.contains(col, val);
  }
  return goog.object.containsValue(col, val);
};
goog.structs.isEmpty = function(col) {
  if (col.isEmpty && typeof col.isEmpty == "function") {
    return col.isEmpty();
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return goog.array.isEmpty(col);
  }
  return goog.object.isEmpty(col);
};
goog.structs.clear = function(col) {
  if (col.clear && typeof col.clear == "function") {
    col.clear();
  } else {
    if (goog.isArrayLike(col)) {
      goog.array.clear(col);
    } else {
      goog.object.clear(col);
    }
  }
};
goog.structs.forEach = function(col, f, opt_obj) {
  if (col.forEach && typeof col.forEach == "function") {
    col.forEach(f, opt_obj);
  } else {
    if (goog.isArrayLike(col) || typeof col === "string") {
      goog.array.forEach(col, f, opt_obj);
    } else {
      var keys = goog.structs.getKeys(col);
      var values = goog.structs.getValues(col);
      var l = values.length;
      for (var i = 0; i < l; i++) {
        f.call(opt_obj, values[i], keys && keys[i], col);
      }
    }
  }
};
goog.structs.filter = function(col, f, opt_obj) {
  if (typeof col.filter == "function") {
    return col.filter(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return goog.array.filter(col, f, opt_obj);
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if (keys) {
    rv = {};
    for (var i = 0; i < l; i++) {
      if (f.call(opt_obj, values[i], keys[i], col)) {
        rv[keys[i]] = values[i];
      }
    }
  } else {
    rv = [];
    for (var i = 0; i < l; i++) {
      if (f.call(opt_obj, values[i], undefined, col)) {
        rv.push(values[i]);
      }
    }
  }
  return rv;
};
goog.structs.map = function(col, f, opt_obj) {
  if (typeof col.map == "function") {
    return col.map(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return goog.array.map(col, f, opt_obj);
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if (keys) {
    rv = {};
    for (var i = 0; i < l; i++) {
      rv[keys[i]] = f.call(opt_obj, values[i], keys[i], col);
    }
  } else {
    rv = [];
    for (var i = 0; i < l; i++) {
      rv[i] = f.call(opt_obj, values[i], undefined, col);
    }
  }
  return rv;
};
goog.structs.some = function(col, f, opt_obj) {
  if (typeof col.some == "function") {
    return col.some(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return goog.array.some(col, f, opt_obj);
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    if (f.call(opt_obj, values[i], keys && keys[i], col)) {
      return true;
    }
  }
  return false;
};
goog.structs.every = function(col, f, opt_obj) {
  if (typeof col.every == "function") {
    return col.every(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return goog.array.every(col, f, opt_obj);
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    if (!f.call(opt_obj, values[i], keys && keys[i], col)) {
      return false;
    }
  }
  return true;
};

//# sourceMappingURL=goog.structs.structs.js.map

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
/******/ 	var __webpack_exports__ = __nccwpck_require__(367);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;