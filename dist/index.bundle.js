/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: #331E38;\n    --foreground-color: #706993;\n    --secondary-foreground-color: #E0D8DE;\n    --gap: 16px;\n}\n*{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody{\n    margin: 0;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100vh;\n}\n\n.tabView{\n    display:flex;\n    flex-direction: column;\n    overflow: clip;\n    background-color: var(--background-color);\n}\n\n.tabButton{\n    all: unset;\n    color: var(--secondary-foreground-color);\n    min-height:4rem;\n    padding-left: 1rem;\n    text-align:left;\n}\n\n.tabButton:hover{\n    cursor: pointer;\n}\n\n.grid{\n    display: grid;\n    height: min-content;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: var(--gap);\n    margin: var(--gap);\n}\n\n.grid .addButton {\n    display:flex;\n    background-color: lightgray;\n    color: slategray;\n    justify-content: center;\n    align-items: center;\n}\n\n.titleBar{\n    display:flex;\n    align-items: center;\n    justify-content: space-between;\n    background: red;\n}\n\n.titleBar > *{\n    all: unset;\n    \n}\n\n.gridItem{\n    height: 200px;\n    display:grid;\n    grid-template-rows: 1fr 3fr 0.8fr;\n    background-color: aqua;\n}\n\n.gridItem .bottom {\n    display: flex;\n    justify-content: space-around;\n}\n\n.selected{\n    background-color: brown;\n}\n\n.bottom > * {\n    all: unset;\n    width: 100%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\np{\n    padding: 1rem;\n    margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,2BAA2B;IAC3B,qCAAqC;IACrC,WAAW;AACf;AACA;IACI,mJAAmJ;AACvJ;;AAEA;IACI,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,cAAc;IACd,yCAAyC;AAC7C;;AAEA;IACI,UAAU;IACV,wCAAwC;IACxC,eAAe;IACf,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,4DAA4D;IAC5D,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,UAAU;;AAEd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB","sourcesContent":[":root {\n    --background-color: #331E38;\n    --foreground-color: #706993;\n    --secondary-foreground-color: #E0D8DE;\n    --gap: 16px;\n}\n*{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody{\n    margin: 0;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100vh;\n}\n\n.tabView{\n    display:flex;\n    flex-direction: column;\n    overflow: clip;\n    background-color: var(--background-color);\n}\n\n.tabButton{\n    all: unset;\n    color: var(--secondary-foreground-color);\n    min-height:4rem;\n    padding-left: 1rem;\n    text-align:left;\n}\n\n.tabButton:hover{\n    cursor: pointer;\n}\n\n.grid{\n    display: grid;\n    height: min-content;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: var(--gap);\n    margin: var(--gap);\n}\n\n.grid .addButton {\n    display:flex;\n    background-color: lightgray;\n    color: slategray;\n    justify-content: center;\n    align-items: center;\n}\n\n.titleBar{\n    display:flex;\n    align-items: center;\n    justify-content: space-between;\n    background: red;\n}\n\n.titleBar > *{\n    all: unset;\n    \n}\n\n.gridItem{\n    height: 200px;\n    display:grid;\n    grid-template-rows: 1fr 3fr 0.8fr;\n    background-color: aqua;\n}\n\n.gridItem .bottom {\n    display: flex;\n    justify-content: space-around;\n}\n\n.selected{\n    background-color: brown;\n}\n\n.bottom > * {\n    all: unset;\n    width: 100%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\np{\n    padding: 1rem;\n    margin-bottom: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _javascript_visual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/visual.js */ "./src/javascript/visual.js");
/* harmony import */ var _javascript_add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/add.js */ "./src/javascript/add.js");
/* harmony import */ var _javascript_remove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/remove */ "./src/javascript/remove.js");




const toDoItem = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes};
}
let projects = [
    ["Today", [toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e")]],
    ["This Week", [toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e")]],
    ["Friday", [toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e")]],
    ["AAAAA", []],
    ["a", []]
]
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

(0,_javascript_add_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projects, "Ratio");
(0,_javascript_add_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projects, "Ratio 2", toDoItem("asdkl;asdj", "asdasdasd", "asdasdasd", "asdasddasd", "asdasdasd"));
(0,_javascript_add_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projects, "Today", toDoItem("asdkl;asdj", "asdasdasd", "asdasdasd", "asdasddasd", "asdasdasd"));
(0,_javascript_add_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projects, "This Week", toDoItem("asdkl;asdj", "asdasdasd", "asdasdasd", "asdasddasd", "asdasdasd"));

console.log(projects);
(0,_javascript_visual_js__WEBPACK_IMPORTED_MODULE_1__.tabView)(projects);
if(_javascript_visual_js__WEBPACK_IMPORTED_MODULE_1__.displayItems !== []){
    (0,_javascript_visual_js__WEBPACK_IMPORTED_MODULE_1__.displayItems)(projects[0]);
} else{
    //empty project logic
}







/***/ }),

/***/ "./src/javascript/add.js":
/*!*******************************!*\
  !*** ./src/javascript/add.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _keyInArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyInArray.js */ "./src/javascript/keyInArray.js");
/* harmony import */ var _visual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visual.js */ "./src/javascript/visual.js");



function add(projects, project, toDoItem){
    if((0,_keyInArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(project, projects) === -1){
        projects.push([project, []]);
    } 
    if(toDoItem !== undefined){
       projects.forEach(element => {
            if(element[0] === project){ // if project key matches add todoitem
                element[1].push(toDoItem);
            }
       });
    }
}



/***/ }),

/***/ "./src/javascript/keyInArray.js":
/*!**************************************!*\
  !*** ./src/javascript/keyInArray.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ keyInArray)
/* harmony export */ });
function keyInArray(key, array) { //function that returns key location (-1 if not found)
    let pos = -1;
    array.forEach((element, index) => {
        if(element[0] === key){
            pos = index;
        }
    });
    console.log(pos);
    return pos;
}


/***/ }),

/***/ "./src/javascript/remove.js":
/*!**********************************!*\
  !*** ./src/javascript/remove.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _keyInArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyInArray.js */ "./src/javascript/keyInArray.js");


function remove(projects, project, index){
    if(index === undefined){
        if((0,_keyInArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(project, projects) === -1){
            alert("Error: Project does not exist");
        }
        else{
            projects.splice((0,_keyInArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(project, projects), 1);
        }
    }
    else{
        projects[(0,_keyInArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(project, projects)][1].splice(index, 1);
    }
}


/***/ }),

/***/ "./src/javascript/visual.js":
/*!**********************************!*\
  !*** ./src/javascript/visual.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayItems": () => (/* binding */ displayItems),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "tabView": () => (/* binding */ tabView)
/* harmony export */ });
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ "./src/javascript/add.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove.js */ "./src/javascript/remove.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _keyInArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyInArray.js */ "./src/javascript/keyInArray.js");





const toDoItem = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes};
}
const body = document.querySelector('body');

function displayItems(project, viewingMultiple){
    const toDoGrid = document.createElement('div');
    toDoGrid.classList.add("grid");

    project[1].forEach((toDoItem, index) => { //project[1] = Project items
        let toDoItemDiv = document.createElement('div');
        toDoItemDiv.classList.add("gridItem");

        let titleBar = document.createElement('div');
        let title = document.createElement('h2');
        let removeElement = document.createElement('button');
        title.innerHTML = toDoItem.title;
        removeElement.innerHTML = "X";
        removeElement.addEventListener('click', () => {
            (0,_remove_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], project[0], index);
            reset((0,_keyInArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(project[0], _index_js__WEBPACK_IMPORTED_MODULE_2__["default"]));
        })
        titleBar.classList.add('titleBar');
        titleBar.append(title);
        titleBar.append(removeElement);

        let description = document.createElement('p');
        description.innerHTML = toDoItem.description;

        let bottomBar = document.createElement('div');
        bottomBar.classList.add("bottom"); // Add any new elements under this div

            let priority = document.createElement('div');
            priority.innerHTML = toDoItem.priority;

            let dueDate = document.createElement('div');
            dueDate.innerHTML = toDoItem.dueDate;

            let notes = document.createElement('div');
            notes.innerHTML = "notes";
            notes.addEventListener('click', () => {
                alert(toDoItem.notes);
            })

            bottomBar.appendChild(priority);
            bottomBar.appendChild(dueDate);
            bottomBar.appendChild(notes);
        
        toDoItemDiv.appendChild(titleBar);
        toDoItemDiv.appendChild(description);
        toDoItemDiv.appendChild(bottomBar);

        toDoGrid.appendChild(toDoItemDiv);
    });

    let addButton = document.createElement('span');
    addButton.classList.add('gridItem', 'addButton');
    addButton.innerHTML = "add"
    addButton.addEventListener('click', () => {
        ;(0,_add_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], project[0], toDoItem("a", "a", "a", "a", "a", "a"));
        reset((0,_keyInArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(project[0], _index_js__WEBPACK_IMPORTED_MODULE_2__["default"]));
    })
    toDoGrid.appendChild(addButton);

    if(document.querySelector('.container') !== null){
        if(viewingMultiple === true){
            document.querySelector('.container').appendChild(toDoGrid);
        }
        else{
            body.removeChild(document.querySelector('.container')); // Clears the grid if there is one already available
            const container = document.createElement('div');
            container.classList.add('container');
            container.appendChild(toDoGrid);
            body.appendChild(container);
        }
    }
    else{
        const container = document.createElement('div');
        container.classList.add('container');
        container.appendChild(toDoGrid);
        body.appendChild(container);
    }
    
    document.querySelectorAll('.tabButton').forEach(button => { // Gives button selection class if it is picked
        button.classList.remove('selected');
        if(button.innerHTML === project[0]){ //project[0] = name of project
            button.classList.add('selected');
        }
    });

}

function displayAllItems(projects){
    const container = document.querySelector('.container');
    container.innerHTML = "";
    projects.forEach(project => {
        const header = document.createElement('h2');
        header.innerHTML = project[0];
        container.appendChild(header);
        displayItems(project, true);
    });
}

function tabView(projects){
    const tabView = document.createElement('div');
    tabView.classList.add('tabView');
    for (const [name, items] of projects){ // for each project name list items when clicked
        const projectButton = document.createElement('button');
        projectButton.classList.add('tabButton');
        projectButton.innerHTML = name;
        projectButton.addEventListener('click', () => {
            displayItems([name, items]);
        })
        tabView.appendChild(projectButton);
    };
    const viewAllButton = document.createElement('button');
    viewAllButton.classList.add('tabButton');
    viewAllButton.innerHTML = "View All Projects";
    viewAllButton.addEventListener('click', () => {
        displayAllItems(projects);
    })
    const addRemoveButton = document.createElement('button');
    addRemoveButton.classList.add('tabButton', 'divided');
    const addButton = document.createElement('button');
    addButton.classList.add('add');
    addButton.innerHTML = 'add';
    addButton.addEventListener('click', () => {
        const project = prompt("Type project name");
        if(project !== null){
            (0,_add_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projects, project);
            reset((0,_keyInArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(project, projects));  
        }
    })
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.innerHTML = 'remove';
    removeButton.addEventListener('click', () => {
        const project = prompt('Type project to remove');
        if(project !== null){
            (0,_remove_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projects, project);
            reset(0);
        }
    })
    addRemoveButton.appendChild(addButton);
    addRemoveButton.appendChild(removeButton);
    tabView.appendChild(viewAllButton);
    tabView.appendChild(addRemoveButton);
    body.appendChild(tabView);
}

function reset(index) {
    body.innerHTML = "";
    tabView(_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    displayItems(_index_js__WEBPACK_IMPORTED_MODULE_2__["default"][index]);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxpREFBUTtBQUNwQixpQkFBaUIsaURBQVE7QUFDekI7Ozs7Ozs7O1VDL0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvamF2YXNjcmlwdC9hZGQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2phdmFzY3JpcHQva2V5SW5BcnJheS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvamF2YXNjcmlwdC9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2phdmFzY3JpcHQvdmlzdWFsLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMxRTM4O1xcbiAgICAtLWZvcmVncm91bmQtY29sb3I6ICM3MDY5OTM7XFxuICAgIC0tc2Vjb25kYXJ5LWZvcmVncm91bmQtY29sb3I6ICNFMEQ4REU7XFxuICAgIC0tZ2FwOiAxNnB4O1xcbn1cXG4qe1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udGFiVmlld3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogY2xpcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi50YWJCdXR0b257XFxuICAgIGFsbDogdW5zZXQ7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9yZWdyb3VuZC1jb2xvcik7XFxuICAgIG1pbi1oZWlnaHQ6NHJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XFxufVxcblxcbi50YWJCdXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICBtYXJnaW46IHZhcigtLWdhcCk7XFxufVxcblxcbi5ncmlkIC5hZGRCdXR0b24ge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6IHNsYXRlZ3JheTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZUJhcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLnRpdGxlQmFyID4gKntcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgXFxufVxcblxcbi5ncmlkSXRlbXtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMC44ZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5ncmlkSXRlbSAuYm90dG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbi5ib3R0b20gPiAqIHtcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLHFDQUFxQztJQUNyQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1KQUFtSjtBQUN2Sjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDREQUE0RDtJQUM1RCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVOztBQUVkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMxRTM4O1xcbiAgICAtLWZvcmVncm91bmQtY29sb3I6ICM3MDY5OTM7XFxuICAgIC0tc2Vjb25kYXJ5LWZvcmVncm91bmQtY29sb3I6ICNFMEQ4REU7XFxuICAgIC0tZ2FwOiAxNnB4O1xcbn1cXG4qe1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udGFiVmlld3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogY2xpcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi50YWJCdXR0b257XFxuICAgIGFsbDogdW5zZXQ7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9yZWdyb3VuZC1jb2xvcik7XFxuICAgIG1pbi1oZWlnaHQ6NHJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XFxufVxcblxcbi50YWJCdXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICBtYXJnaW46IHZhcigtLWdhcCk7XFxufVxcblxcbi5ncmlkIC5hZGRCdXR0b24ge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6IHNsYXRlZ3JheTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZUJhcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLnRpdGxlQmFyID4gKntcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgXFxufVxcblxcbi5ncmlkSXRlbXtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMC44ZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5ncmlkSXRlbSAuYm90dG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbi5ib3R0b20gPiAqIHtcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBkaXNwbGF5SXRlbXMsIHRhYlZpZXcgfSBmcm9tICcuL2phdmFzY3JpcHQvdmlzdWFsLmpzJztcbmltcG9ydCBhZGQgZnJvbSAnLi9qYXZhc2NyaXB0L2FkZC5qcydcbmltcG9ydCByZW1vdmUgZnJvbSAnLi9qYXZhc2NyaXB0L3JlbW92ZSc7XG5jb25zdCB0b0RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXN9O1xufVxubGV0IHByb2plY3RzID0gW1xuICAgIFtcIlRvZGF5XCIsIFt0b0RvSXRlbShcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpLCB0b0RvSXRlbShcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpLCB0b0RvSXRlbShcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpXV0sXG4gICAgW1wiVGhpcyBXZWVrXCIsIFt0b0RvSXRlbShcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpLCB0b0RvSXRlbShcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpXV0sXG4gICAgW1wiRnJpZGF5XCIsIFt0b0RvSXRlbShcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpLCB0b0RvSXRlbShcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpLCB0b0RvSXRlbShcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpLCB0b0RvSXRlbShcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpXV0sXG4gICAgW1wiQUFBQUFcIiwgW11dLFxuICAgIFtcImFcIiwgW11dXG5dXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcblxuYWRkKHByb2plY3RzLCBcIlJhdGlvXCIpO1xuYWRkKHByb2plY3RzLCBcIlJhdGlvIDJcIiwgdG9Eb0l0ZW0oXCJhc2RrbDthc2RqXCIsIFwiYXNkYXNkYXNkXCIsIFwiYXNkYXNkYXNkXCIsIFwiYXNkYXNkZGFzZFwiLCBcImFzZGFzZGFzZFwiKSk7XG5hZGQocHJvamVjdHMsIFwiVG9kYXlcIiwgdG9Eb0l0ZW0oXCJhc2RrbDthc2RqXCIsIFwiYXNkYXNkYXNkXCIsIFwiYXNkYXNkYXNkXCIsIFwiYXNkYXNkZGFzZFwiLCBcImFzZGFzZGFzZFwiKSk7XG5hZGQocHJvamVjdHMsIFwiVGhpcyBXZWVrXCIsIHRvRG9JdGVtKFwiYXNka2w7YXNkalwiLCBcImFzZGFzZGFzZFwiLCBcImFzZGFzZGFzZFwiLCBcImFzZGFzZGRhc2RcIiwgXCJhc2Rhc2Rhc2RcIikpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0cyk7XG50YWJWaWV3KHByb2plY3RzKTtcbmlmKGRpc3BsYXlJdGVtcyAhPT0gW10pe1xuICAgIGRpc3BsYXlJdGVtcyhwcm9qZWN0c1swXSk7XG59IGVsc2V7XG4gICAgLy9lbXB0eSBwcm9qZWN0IGxvZ2ljXG59XG5cblxuXG5cblxuIiwiaW1wb3J0IGtleUluQXJyYXkgZnJvbSBcIi4va2V5SW5BcnJheS5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheUl0ZW1zIH0gZnJvbSBcIi4vdmlzdWFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZChwcm9qZWN0cywgcHJvamVjdCwgdG9Eb0l0ZW0pe1xuICAgIGlmKGtleUluQXJyYXkocHJvamVjdCwgcHJvamVjdHMpID09PSAtMSl7XG4gICAgICAgIHByb2plY3RzLnB1c2goW3Byb2plY3QsIFtdXSk7XG4gICAgfSBcbiAgICBpZih0b0RvSXRlbSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudFswXSA9PT0gcHJvamVjdCl7IC8vIGlmIHByb2plY3Qga2V5IG1hdGNoZXMgYWRkIHRvZG9pdGVtXG4gICAgICAgICAgICAgICAgZWxlbWVudFsxXS5wdXNoKHRvRG9JdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICB9KTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtleUluQXJyYXkoa2V5LCBhcnJheSkgeyAvL2Z1bmN0aW9uIHRoYXQgcmV0dXJucyBrZXkgbG9jYXRpb24gKC0xIGlmIG5vdCBmb3VuZClcbiAgICBsZXQgcG9zID0gLTE7XG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYoZWxlbWVudFswXSA9PT0ga2V5KXtcbiAgICAgICAgICAgIHBvcyA9IGluZGV4O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocG9zKTtcbiAgICByZXR1cm4gcG9zO1xufVxuIiwiaW1wb3J0IGtleUluQXJyYXkgZnJvbSBcIi4va2V5SW5BcnJheS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmUocHJvamVjdHMsIHByb2plY3QsIGluZGV4KXtcbiAgICBpZihpbmRleCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgaWYoa2V5SW5BcnJheShwcm9qZWN0LCBwcm9qZWN0cykgPT09IC0xKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3I6IFByb2plY3QgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShrZXlJbkFycmF5KHByb2plY3QsIHByb2plY3RzKSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcHJvamVjdHNba2V5SW5BcnJheShwcm9qZWN0LCBwcm9qZWN0cyldWzFdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGFkZCBmcm9tIFwiLi9hZGQuanNcIjtcbmltcG9ydCByZW1vdmUgZnJvbSBcIi4vcmVtb3ZlLmpzXCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IGtleUluQXJyYXkgZnJvbSBcIi4va2V5SW5BcnJheS5qc1wiO1xuXG5jb25zdCB0b0RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXN9O1xufVxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuZnVuY3Rpb24gZGlzcGxheUl0ZW1zKHByb2plY3QsIHZpZXdpbmdNdWx0aXBsZSl7XG4gICAgY29uc3QgdG9Eb0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b0RvR3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcblxuICAgIHByb2plY3RbMV0uZm9yRWFjaCgodG9Eb0l0ZW0sIGluZGV4KSA9PiB7IC8vcHJvamVjdFsxXSA9IFByb2plY3QgaXRlbXNcbiAgICAgICAgbGV0IHRvRG9JdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvRG9JdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJncmlkSXRlbVwiKTtcblxuICAgICAgICBsZXQgdGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbGV0IHJlbW92ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdG9Eb0l0ZW0udGl0bGU7XG4gICAgICAgIHJlbW92ZUVsZW1lbnQuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgICAgIHJlbW92ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmUocHJvamVjdHMsIHByb2plY3RbMF0sIGluZGV4KTtcbiAgICAgICAgICAgIHJlc2V0KGtleUluQXJyYXkocHJvamVjdFswXSwgcHJvamVjdHMpKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGl0bGVCYXIuY2xhc3NMaXN0LmFkZCgndGl0bGVCYXInKTtcbiAgICAgICAgdGl0bGVCYXIuYXBwZW5kKHRpdGxlKTtcbiAgICAgICAgdGl0bGVCYXIuYXBwZW5kKHJlbW92ZUVsZW1lbnQpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdG9Eb0l0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgbGV0IGJvdHRvbUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib3R0b21CYXIuY2xhc3NMaXN0LmFkZChcImJvdHRvbVwiKTsgLy8gQWRkIGFueSBuZXcgZWxlbWVudHMgdW5kZXIgdGhpcyBkaXZcblxuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmlvcml0eS5pbm5lckhUTUwgPSB0b0RvSXRlbS5wcmlvcml0eTtcblxuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gdG9Eb0l0ZW0uZHVlRGF0ZTtcblxuICAgICAgICAgICAgbGV0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3Rlcy5pbm5lckhUTUwgPSBcIm5vdGVzXCI7XG4gICAgICAgICAgICBub3Rlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCh0b0RvSXRlbS5ub3Rlcyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBib3R0b21CYXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgYm90dG9tQmFyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICAgICAgYm90dG9tQmFyLmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICAgICAgXG4gICAgICAgIHRvRG9JdGVtRGl2LmFwcGVuZENoaWxkKHRpdGxlQmFyKTtcbiAgICAgICAgdG9Eb0l0ZW1EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICB0b0RvSXRlbURpdi5hcHBlbmRDaGlsZChib3R0b21CYXIpO1xuXG4gICAgICAgIHRvRG9HcmlkLmFwcGVuZENoaWxkKHRvRG9JdGVtRGl2KTtcbiAgICB9KTtcblxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyaWRJdGVtJywgJ2FkZEJ1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi5pbm5lckhUTUwgPSBcImFkZFwiXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGQocHJvamVjdHMsIHByb2plY3RbMF0sIHRvRG9JdGVtKFwiYVwiLCBcImFcIiwgXCJhXCIsIFwiYVwiLCBcImFcIiwgXCJhXCIpKTtcbiAgICAgICAgcmVzZXQoa2V5SW5BcnJheShwcm9qZWN0WzBdLCBwcm9qZWN0cykpO1xuICAgIH0pXG4gICAgdG9Eb0dyaWQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSAhPT0gbnVsbCl7XG4gICAgICAgIGlmKHZpZXdpbmdNdWx0aXBsZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQodG9Eb0dyaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSk7IC8vIENsZWFycyB0aGUgZ3JpZCBpZiB0aGVyZSBpcyBvbmUgYWxyZWFkeSBhdmFpbGFibGVcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9HcmlkKTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0dyaWQpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJCdXR0b24nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7IC8vIEdpdmVzIGJ1dHRvbiBzZWxlY3Rpb24gY2xhc3MgaWYgaXQgaXMgcGlja2VkXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBpZihidXR0b24uaW5uZXJIVE1MID09PSBwcm9qZWN0WzBdKXsgLy9wcm9qZWN0WzBdID0gbmFtZSBvZiBwcm9qZWN0XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGxJdGVtcyhwcm9qZWN0cyl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBwcm9qZWN0WzBdO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgZGlzcGxheUl0ZW1zKHByb2plY3QsIHRydWUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0YWJWaWV3KHByb2plY3RzKXtcbiAgICBjb25zdCB0YWJWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFiVmlldy5jbGFzc0xpc3QuYWRkKCd0YWJWaWV3Jyk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgaXRlbXNdIG9mIHByb2plY3RzKXsgLy8gZm9yIGVhY2ggcHJvamVjdCBuYW1lIGxpc3QgaXRlbXMgd2hlbiBjbGlja2VkXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWJCdXR0b24nKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBuYW1lO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheUl0ZW1zKFtuYW1lLCBpdGVtc10pO1xuICAgICAgICB9KVxuICAgICAgICB0YWJWaWV3LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xuICAgIH07XG4gICAgY29uc3Qgdmlld0FsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHZpZXdBbGxCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFiQnV0dG9uJyk7XG4gICAgdmlld0FsbEJ1dHRvbi5pbm5lckhUTUwgPSBcIlZpZXcgQWxsIFByb2plY3RzXCI7XG4gICAgdmlld0FsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlzcGxheUFsbEl0ZW1zKHByb2plY3RzKTtcbiAgICB9KVxuICAgIGNvbnN0IGFkZFJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWJCdXR0b24nLCAnZGl2aWRlZCcpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQnKTtcbiAgICBhZGRCdXR0b24uaW5uZXJIVE1MID0gJ2FkZCc7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvbXB0KFwiVHlwZSBwcm9qZWN0IG5hbWVcIik7XG4gICAgICAgIGlmKHByb2plY3QgIT09IG51bGwpe1xuICAgICAgICAgICAgYWRkKHByb2plY3RzLCBwcm9qZWN0KTtcbiAgICAgICAgICAgIHJlc2V0KGtleUluQXJyYXkocHJvamVjdCwgcHJvamVjdHMpKTsgIFxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gICAgcmVtb3ZlQnV0dG9uLmlubmVySFRNTCA9ICdyZW1vdmUnO1xuICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb21wdCgnVHlwZSBwcm9qZWN0IHRvIHJlbW92ZScpO1xuICAgICAgICBpZihwcm9qZWN0ICE9PSBudWxsKXtcbiAgICAgICAgICAgIHJlbW92ZShwcm9qZWN0cywgcHJvamVjdCk7XG4gICAgICAgICAgICByZXNldCgwKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgYWRkUmVtb3ZlQnV0dG9uLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYWRkUmVtb3ZlQnV0dG9uLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gICAgdGFiVmlldy5hcHBlbmRDaGlsZCh2aWV3QWxsQnV0dG9uKTtcbiAgICB0YWJWaWV3LmFwcGVuZENoaWxkKGFkZFJlbW92ZUJ1dHRvbik7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh0YWJWaWV3KTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoaW5kZXgpIHtcbiAgICBib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGFiVmlldyhwcm9qZWN0cyk7XG4gICAgZGlzcGxheUl0ZW1zKHByb2plY3RzW2luZGV4XSk7XG59XG5cbmV4cG9ydCB7ZGlzcGxheUl0ZW1zLCB0YWJWaWV3LCByZXNldH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=