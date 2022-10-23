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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: #331E38;\n    --foreground-color: #706993;\n    --secondary-foreground-color: #E0D8DE;\n    --gap: 16px;\n}\n*{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody{\n    margin: 0;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100vh;\n}\n\n.info{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n}\n\n.tabView{\n    display:flex;\n    flex-direction: column;\n    overflow: clip;\n    background-color: var(--background-color);\n}\n\n.tabButton{\n    all: unset;\n    color: var(--secondary-foreground-color);\n    min-height:4rem;\n    padding-left: 1rem;\n    text-align:left;\n}\n\n.tabButton:hover{\n    cursor: pointer;\n}\n\n.grid{\n    display: grid;\n    height: min-content;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: var(--gap);\n    margin: var(--gap);\n}\n\n.grid .addButton {\n    display:flex;\n    background-color: lightgray;\n    color: slategray;\n    justify-content: center;\n    align-items: center;\n    font-size: xxx-large;\n}\n\n.grid .addButton:hover{\n    cursor: pointer;\n}\n\n.titleBar{\n    display:flex;\n    align-items: center;\n    background-color: lightsalmon;\n    justify-content: space-between;\n    padding-left: var(--gap);\n}\n\n.titleBar > *{\n    all: unset;\n}\n\n.titleBar :last-child{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    aspect-ratio: 1/1;\n    background-color: red;\n    font-size: x-large;\n}\n\n.titleBar :last-child:hover{\n    cursor:pointer;\n}\n\n.gridItem{\n    height: 200px;\n    display:grid;\n    grid-template-rows: 1fr 3fr 0.8fr;\n    background-color: aqua;\n}\n\n.gridItem .bottom {\n    display: flex;\n    justify-content: space-around;\n}\n\n.selected{\n    background-color: brown;\n}\n\n.bottom > * {\n    all: unset;\n    width: 100%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\np{\n    padding: 1rem;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.divided{\n    margin-top: 4rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\n    padding: 0%;\n}\n\n.divided > * {\n    all:unset;\n    text-align: center;\n}\n\n.formBox{\n    display: flex;\n    flex-direction: column;\n}\n\nlabel{\n    font-weight: 600;\n    letter-spacing: 0.05rem;\n    font-size: smaller;\n    color: #474747;\n    padding-bottom: 0.4rem;\n    text-transform: uppercase;\n}\n\ninput, textarea{\n    border-radius: 5px;\n    border: solid 1px #b2b3b4;\n    padding: 5px;\n    font-size: 1rem;\n}\n\n.row{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--gap);\n    width: 100%;\n    box-sizing: border-box;\n}\n\n.notes textarea{\n    width: 100%;\n    resize: none;\n    box-sizing: border-box;\n}\n\n.form{\n    display:flex;\n    flex-direction: column;\n    gap: var(--gap);\n    padding: calc(var(--gap) * 2);\n    width: fit-content;\n    background-color: var(--secondary-foreground-color);\n    position: fixed;\n    border-radius: 10px;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    opacity: 100%;\n}\n\n.cancelCreate{\n    display: flex;\n    justify-content: flex-end;\n    gap: var(--gap);\n    margin-top: var(--gap);\n}\n.cancelCreate > *{\n    all: unset;\n    padding-left: var(--gap);\n    padding-right: var(--gap);\n    padding-top: 10px;\n    padding-bottom: 10px;\n    color: white;\n    border-radius: 10px;\n}\n\n.cancelCreate :first-child{\n    background-color: gray;\n}\n\n.cancelCreate :last-child{\n    background-color: #596D48;\n}\n\n.overlay{\n    background-color: rgba(0,0,0,0.5);\n    position: fixed;\n    width: 1000%;\n    height: 1000%;\n    top: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,2BAA2B;IAC3B,qCAAqC;IACrC,WAAW;AACf;AACA;IACI,mJAAmJ;AACvJ;;AAEA;IACI,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,cAAc;IACd,yCAAyC;AAC7C;;AAEA;IACI,UAAU;IACV,wCAAwC;IACxC,eAAe;IACf,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,4DAA4D;IAC5D,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;IAC7B,8BAA8B;IAC9B,wBAAwB;AAC5B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,0DAA0D;IAC1D,WAAW;AACf;;AAEA;IACI,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,eAAe;IACf,6BAA6B;IAC7B,kBAAkB;IAClB,mDAAmD;IACnD,eAAe;IACf,mBAAmB;IACnB,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,eAAe;IACf,sBAAsB;AAC1B;AACA;IACI,UAAU;IACV,wBAAwB;IACxB,yBAAyB;IACzB,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,YAAY;IACZ,aAAa;IACb,MAAM;AACV","sourcesContent":[":root {\n    --background-color: #331E38;\n    --foreground-color: #706993;\n    --secondary-foreground-color: #E0D8DE;\n    --gap: 16px;\n}\n*{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody{\n    margin: 0;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100vh;\n}\n\n.info{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n}\n\n.tabView{\n    display:flex;\n    flex-direction: column;\n    overflow: clip;\n    background-color: var(--background-color);\n}\n\n.tabButton{\n    all: unset;\n    color: var(--secondary-foreground-color);\n    min-height:4rem;\n    padding-left: 1rem;\n    text-align:left;\n}\n\n.tabButton:hover{\n    cursor: pointer;\n}\n\n.grid{\n    display: grid;\n    height: min-content;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: var(--gap);\n    margin: var(--gap);\n}\n\n.grid .addButton {\n    display:flex;\n    background-color: lightgray;\n    color: slategray;\n    justify-content: center;\n    align-items: center;\n    font-size: xxx-large;\n}\n\n.grid .addButton:hover{\n    cursor: pointer;\n}\n\n.titleBar{\n    display:flex;\n    align-items: center;\n    background-color: lightsalmon;\n    justify-content: space-between;\n    padding-left: var(--gap);\n}\n\n.titleBar > *{\n    all: unset;\n}\n\n.titleBar :last-child{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    aspect-ratio: 1/1;\n    background-color: red;\n    font-size: x-large;\n}\n\n.titleBar :last-child:hover{\n    cursor:pointer;\n}\n\n.gridItem{\n    height: 200px;\n    display:grid;\n    grid-template-rows: 1fr 3fr 0.8fr;\n    background-color: aqua;\n}\n\n.gridItem .bottom {\n    display: flex;\n    justify-content: space-around;\n}\n\n.selected{\n    background-color: brown;\n}\n\n.bottom > * {\n    all: unset;\n    width: 100%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\np{\n    padding: 1rem;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.divided{\n    margin-top: 4rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\n    padding: 0%;\n}\n\n.divided > * {\n    all:unset;\n    text-align: center;\n}\n\n.formBox{\n    display: flex;\n    flex-direction: column;\n}\n\nlabel{\n    font-weight: 600;\n    letter-spacing: 0.05rem;\n    font-size: smaller;\n    color: #474747;\n    padding-bottom: 0.4rem;\n    text-transform: uppercase;\n}\n\ninput, textarea{\n    border-radius: 5px;\n    border: solid 1px #b2b3b4;\n    padding: 5px;\n    font-size: 1rem;\n}\n\n.row{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--gap);\n    width: 100%;\n    box-sizing: border-box;\n}\n\n.notes textarea{\n    width: 100%;\n    resize: none;\n    box-sizing: border-box;\n}\n\n.form{\n    display:flex;\n    flex-direction: column;\n    gap: var(--gap);\n    padding: calc(var(--gap) * 2);\n    width: fit-content;\n    background-color: var(--secondary-foreground-color);\n    position: fixed;\n    border-radius: 10px;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    opacity: 100%;\n}\n\n.cancelCreate{\n    display: flex;\n    justify-content: flex-end;\n    gap: var(--gap);\n    margin-top: var(--gap);\n}\n.cancelCreate > *{\n    all: unset;\n    padding-left: var(--gap);\n    padding-right: var(--gap);\n    padding-top: 10px;\n    padding-bottom: 10px;\n    color: white;\n    border-radius: 10px;\n}\n\n.cancelCreate :first-child{\n    background-color: gray;\n}\n\n.cancelCreate :last-child{\n    background-color: #596D48;\n}\n\n.overlay{\n    background-color: rgba(0,0,0,0.5);\n    position: fixed;\n    width: 1000%;\n    height: 1000%;\n    top: 0;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _javascript_storageAvailable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/storageAvailable.js */ "./src/javascript/storageAvailable.js");




const toDoItem = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes};
}

let projects = [
    ["My Project", [toDoItem("Project 1", "b", "c", "d", "e"), toDoItem("Project 2", "b", "c", "d", "e"), toDoItem("Project 3", "b", "c", "d", "e")]],
    ["My Project 2", [toDoItem("Project 1", "b", "c", "d", "e"), toDoItem("Project 2", "b", "c", "d", "e"), toDoItem("Project 3", "b", "c", "d", "e")]],
    ["My Project 3", [toDoItem("Project 1", "b", "c", "d", "e"), toDoItem("Project 2", "b", "c", "d", "e"), toDoItem("Project 3", "b", "c", "d", "e")]],
    ["My Project 4", [toDoItem("Project 1", "b", "c", "d", "e"), toDoItem("Project 2", "b", "c", "d", "e"), toDoItem("Project 3", "b", "c", "d", "e")]],
]

if((0,_javascript_storageAvailable_js__WEBPACK_IMPORTED_MODULE_2__["default"])('localStorage')){
    if(localStorage.getItem('projects')) {
        projects = JSON.parse(localStorage.getItem('projects'));
    } 
    else{
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}

console.log(projects);




let test = JSON.stringify(projects);
let test2 = JSON.parse(test);

(0,_javascript_visual_js__WEBPACK_IMPORTED_MODULE_1__.tabView)(projects);
(0,_javascript_visual_js__WEBPACK_IMPORTED_MODULE_1__.displayItems)(projects[0]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);









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

/***/ "./src/javascript/form.js":
/*!********************************!*\
  !*** ./src/javascript/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addForms)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.js */ "./src/javascript/add.js");
/* harmony import */ var _keyInArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyInArray.js */ "./src/javascript/keyInArray.js");
/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoItem */ "./src/javascript/toDoItem.js");
/* harmony import */ var _visual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visual */ "./src/javascript/visual.js");






const body = document.querySelector('html');

function addForms(project) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    //overlay.addEventListener('click', () => {close()});
    const form = document.createElement('div');
    form.classList.add('form');
    
    const row = document.createElement('div');
    row.classList.add('row');
        let title = createFormBox("title", "text")
        row.appendChild(title);
        let description = createFormBox("description", "text")
        row.appendChild(description);
    const row2 = document.createElement('div');
    row2.classList.add('row');
        let date = createFormBox("date", "date")
        row2.appendChild(date);
        let priority = createFormBox("priority", "number", "1", "5")
        row2.appendChild(priority);
    const notes = createFormBox("notes", "notes");
    notes.querySelector('input').outerHTML = '<textarea rows="7"></textarea>';
    notes.classList.add("notes");
    
    const cancelCreateButton = document.createElement('div');
    cancelCreateButton.classList.add('cancelCreate');

    const createButton = document.createElement('button');
    createButton.classList.add('create');
    createButton.innerHTML = "Create";
    createButton.addEventListener('click', () => {
        submit(title, description, date, priority, notes, project);
    })

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel');
    cancelButton.innerHTML = "Cancel";
    cancelButton.addEventListener('click', () => { close() });

    cancelCreateButton.appendChild(cancelButton);
    cancelCreateButton.appendChild(createButton);

    form.appendChild(row);
    form.appendChild(row2);
    form.appendChild(notes);
    form.appendChild(cancelCreateButton);

    overlay.appendChild(form);

    return body.appendChild(overlay);
}

function createFormBox(variable, type, min, max){
    const formBox = document.createElement('div');
    formBox.classList.add('formBox');
    const label = document.createElement('label');
    label.setAttribute('for', variable);
    label.innerHTML = variable;
    const input = document.createElement('input');
    input.setAttribute('type', type);
    if(min !== undefined && max !== undefined){
        input.setAttribute('min', min);
        input.setAttribute('max', max);
        input.setAttribute('value',  min);
    }
    formBox.appendChild(label);
    formBox.appendChild(input);
    return formBox;
}

function submit(title, description, date, priority, notes, project){
    if(title.lastChild.value.length === 0){
        alert("Please fill out title field.");
    }
    else{
        if(priority.lastChild.value > 5){
            console.log(priority.lastChild.value);
            priority.lastChild.value = 5;
            console.log(priority.lastChild.value);
        }
        if(priority.lastChild.value < 1 || isNaN(priority.lastChild.value)){
            priority.lastChild.value = 1;
        }
        (0,_add_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"], project, (0,_toDoItem__WEBPACK_IMPORTED_MODULE_3__["default"])(title.lastChild.value, description.lastChild.value, date.lastChild.value, priority.lastChild.value, notes.lastChild.value));
        close();
        (0,_visual__WEBPACK_IMPORTED_MODULE_4__.reset)((0,_keyInArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(project, _index_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
    }
}

function close(){
    body.removeChild(body.querySelector('.overlay'));
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

/***/ "./src/javascript/storageAvailable.js":
/*!********************************************!*\
  !*** ./src/javascript/storageAvailable.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

// I did not write this! 
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API


/***/ }),

/***/ "./src/javascript/toDoItem.js":
/*!************************************!*\
  !*** ./src/javascript/toDoItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDoItem)
/* harmony export */ });
function toDoItem (title, description, dueDate, priority, notes){
    return {title, description, dueDate, priority, notes};
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
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.js */ "./src/javascript/form.js");






const body = document.querySelector('body');

function displayItems(project, viewingMultiple){
    if(project !== undefined){
        const toDoGrid = document.createElement('div');
        toDoGrid.classList.add("grid");

        project[1].forEach((toDoItem, index) => { //project[1] = Project items
            let toDoItemDiv = document.createElement('div');
            toDoItemDiv.classList.add("gridItem");

            let titleBar = document.createElement('div');
            let title = document.createElement('h2');
            let removeElement = document.createElement('button');
            title.innerHTML = toDoItem.title;
            removeElement.innerHTML = "✖";
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
        addButton.innerHTML = "+"
        addButton.addEventListener('click', () => {
            ;(0,_form_js__WEBPACK_IMPORTED_MODULE_4__["default"])(project[0]);
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
    else{
        const container = document.createElement('div');
        container.classList.add('container');

        const info = document.createElement('div');
        info.classList.add('info');
        info.innerHTML = "Add a project using the add button on your project list!";
        container.appendChild(info);
        body.appendChild(container);
    }
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
    localStorage.setItem('projects', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aURBQVE7QUFDNUQ7Ozs7Ozs7O1VDektBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvamF2YXNjcmlwdC9hZGQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2phdmFzY3JpcHQvZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvamF2YXNjcmlwdC9rZXlJbkFycmF5LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9qYXZhc2NyaXB0L3JlbW92ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvamF2YXNjcmlwdC9zdG9yYWdlQXZhaWxhYmxlLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9qYXZhc2NyaXB0L3RvRG9JdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9qYXZhc2NyaXB0L3Zpc3VhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzMzMUUzODtcXG4gICAgLS1mb3JlZ3JvdW5kLWNvbG9yOiAjNzA2OTkzO1xcbiAgICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kLWNvbG9yOiAjRTBEOERFO1xcbiAgICAtLWdhcDogMTZweDtcXG59XFxuKntcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YWJWaWV3e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLnRhYkJ1dHRvbntcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb3JlZ3JvdW5kLWNvbG9yKTtcXG4gICAgbWluLWhlaWdodDo0cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHRleHQtYWxpZ246bGVmdDtcXG59XFxuXFxuLnRhYkJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxuICAgIG1hcmdpbjogdmFyKC0tZ2FwKTtcXG59XFxuXFxuLmdyaWQgLmFkZEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBjb2xvcjogc2xhdGVncmF5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XFxufVxcblxcbi5ncmlkIC5hZGRCdXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpdGxlQmFye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tZ2FwKTtcXG59XFxuXFxuLnRpdGxlQmFyID4gKntcXG4gICAgYWxsOiB1bnNldDtcXG59XFxuXFxuLnRpdGxlQmFyIDpsYXN0LWNoaWxke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi50aXRsZUJhciA6bGFzdC1jaGlsZDpob3ZlcntcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5ncmlkSXRlbXtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMC44ZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5ncmlkSXRlbSAuYm90dG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbi5ib3R0b20gPiAqIHtcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5kaXZpZGVke1xcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDFmcikpO1xcbiAgICBwYWRkaW5nOiAwJTtcXG59XFxuXFxuLmRpdmlkZWQgPiAqIHtcXG4gICAgYWxsOnVuc2V0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtQm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5sYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gICAgY29sb3I6ICM0NzQ3NDc7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYXtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYjJiM2I0O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnJvd3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubm90ZXMgdGV4dGFyZWF7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5mb3Jte1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tZ2FwKTtcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1nYXApICogMik7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvcmVncm91bmQtY29sb3IpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbn1cXG5cXG4uY2FuY2VsQ3JlYXRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxuICAgIG1hcmdpbi10b3A6IHZhcigtLWdhcCk7XFxufVxcbi5jYW5jZWxDcmVhdGUgPiAqe1xcbiAgICBhbGw6IHVuc2V0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdhcCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWdhcCk7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FuY2VsQ3JlYXRlIDpmaXJzdC1jaGlsZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmNhbmNlbENyZWF0ZSA6bGFzdC1jaGlsZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NkQ0ODtcXG59XFxuXFxuLm92ZXJsYXl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwMCU7XFxuICAgIGhlaWdodDogMTAwMCU7XFxuICAgIHRvcDogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDREQUE0RDtJQUM1RCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwREFBMEQ7SUFDMUQsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1EQUFtRDtJQUNuRCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixNQUFNO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMzMzFFMzg7XFxuICAgIC0tZm9yZWdyb3VuZC1jb2xvcjogIzcwNjk5MztcXG4gICAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZC1jb2xvcjogI0UwRDhERTtcXG4gICAgLS1nYXA6IDE2cHg7XFxufVxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFiVmlld3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogY2xpcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi50YWJCdXR0b257XFxuICAgIGFsbDogdW5zZXQ7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9yZWdyb3VuZC1jb2xvcik7XFxuICAgIG1pbi1oZWlnaHQ6NHJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XFxufVxcblxcbi50YWJCdXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICBtYXJnaW46IHZhcigtLWdhcCk7XFxufVxcblxcbi5ncmlkIC5hZGRCdXR0b24ge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6IHNsYXRlZ3JheTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbn1cXG5cXG4uZ3JpZCAuYWRkQnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aXRsZUJhcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdhcCk7XFxufVxcblxcbi50aXRsZUJhciA+ICp7XFxuICAgIGFsbDogdW5zZXQ7XFxufVxcblxcbi50aXRsZUJhciA6bGFzdC1jaGlsZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4udGl0bGVCYXIgOmxhc3QtY2hpbGQ6aG92ZXJ7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uZ3JpZEl0ZW17XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDAuOGZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4uZ3JpZEl0ZW0gLmJvdHRvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uYm90dG9tID4gKiB7XFxuICAgIGFsbDogdW5zZXQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5we1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uZGl2aWRlZHtcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG4gICAgcGFkZGluZzogMCU7XFxufVxcblxcbi5kaXZpZGVkID4gKiB7XFxuICAgIGFsbDp1bnNldDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9ybUJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuICAgIGNvbG9yOiAjNDc0NzQ3O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWF7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2IyYjNiNDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5yb3d7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm5vdGVzIHRleHRhcmVhe1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZm9ybXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLWdhcCk7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZ2FwKSAqIDIpO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb3JlZ3JvdW5kLWNvbG9yKTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG59XFxuXFxuLmNhbmNlbENyZWF0ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiB2YXIoLS1nYXApO1xcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1nYXApO1xcbn1cXG4uY2FuY2VsQ3JlYXRlID4gKntcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1nYXApO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1nYXApO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNhbmNlbENyZWF0ZSA6Zmlyc3QtY2hpbGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5jYW5jZWxDcmVhdGUgOmxhc3QtY2hpbGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTZENDg7XFxufVxcblxcbi5vdmVybGF5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMDAlO1xcbiAgICBoZWlnaHQ6IDEwMDAlO1xcbiAgICB0b3A6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBkaXNwbGF5SXRlbXMsIHRhYlZpZXcgfSBmcm9tICcuL2phdmFzY3JpcHQvdmlzdWFsLmpzJztcbmltcG9ydCBzdG9yYWdlQXZhaWxhYmxlIGZyb20gJy4vamF2YXNjcmlwdC9zdG9yYWdlQXZhaWxhYmxlLmpzJztcblxuY29uc3QgdG9Eb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzfTtcbn1cblxubGV0IHByb2plY3RzID0gW1xuICAgIFtcIk15IFByb2plY3RcIiwgW3RvRG9JdGVtKFwiUHJvamVjdCAxXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiKSwgdG9Eb0l0ZW0oXCJQcm9qZWN0IDJcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpLCB0b0RvSXRlbShcIlByb2plY3QgM1wiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIildXSxcbiAgICBbXCJNeSBQcm9qZWN0IDJcIiwgW3RvRG9JdGVtKFwiUHJvamVjdCAxXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiKSwgdG9Eb0l0ZW0oXCJQcm9qZWN0IDJcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpLCB0b0RvSXRlbShcIlByb2plY3QgM1wiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIildXSxcbiAgICBbXCJNeSBQcm9qZWN0IDNcIiwgW3RvRG9JdGVtKFwiUHJvamVjdCAxXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiKSwgdG9Eb0l0ZW0oXCJQcm9qZWN0IDJcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpLCB0b0RvSXRlbShcIlByb2plY3QgM1wiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIildXSxcbiAgICBbXCJNeSBQcm9qZWN0IDRcIiwgW3RvRG9JdGVtKFwiUHJvamVjdCAxXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiKSwgdG9Eb0l0ZW0oXCJQcm9qZWN0IDJcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIpLCB0b0RvSXRlbShcIlByb2plY3QgM1wiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIildXSxcbl1cblxuaWYoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpe1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gICAgICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgfSBcbiAgICBlbHNle1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbn1cblxuY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG5cblxuXG5sZXQgdGVzdCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbmxldCB0ZXN0MiA9IEpTT04ucGFyc2UodGVzdCk7XG5cbnRhYlZpZXcocHJvamVjdHMpO1xuZGlzcGxheUl0ZW1zKHByb2plY3RzWzBdKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG5cblxuXG5cblxuXG5cbiIsImltcG9ydCBrZXlJbkFycmF5IGZyb20gXCIuL2tleUluQXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkKHByb2plY3RzLCBwcm9qZWN0LCB0b0RvSXRlbSl7XG4gICAgaWYoa2V5SW5BcnJheShwcm9qZWN0LCBwcm9qZWN0cykgPT09IC0xKXtcbiAgICAgICAgcHJvamVjdHMucHVzaChbcHJvamVjdCwgW11dKTtcbiAgICB9IFxuICAgIGlmKHRvRG9JdGVtICE9PSB1bmRlZmluZWQpe1xuICAgICAgIHByb2plY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50WzBdID09PSBwcm9qZWN0KXsgLy8gaWYgcHJvamVjdCBrZXkgbWF0Y2hlcyBhZGQgdG9kb2l0ZW1cbiAgICAgICAgICAgICAgICBlbGVtZW50WzFdLnB1c2godG9Eb0l0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgIH0pO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuLi9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZCBmcm9tIFwiLi9hZGQuanNcIjtcbmltcG9ydCBrZXlJbkFycmF5IGZyb20gXCIuL2tleUluQXJyYXkuanNcIjtcbmltcG9ydCB0b0RvSXRlbSBmcm9tIFwiLi90b0RvSXRlbVwiO1xuaW1wb3J0IHtyZXNldH0gZnJvbSBcIi4vdmlzdWFsXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEZvcm1zKHByb2plY3QpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgLy9vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2Nsb3NlKCl9KTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG4gICAgXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICBsZXQgdGl0bGUgPSBjcmVhdGVGb3JtQm94KFwidGl0bGVcIiwgXCJ0ZXh0XCIpXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUZvcm1Cb3goXCJkZXNjcmlwdGlvblwiLCBcInRleHRcIilcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93Mi5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgbGV0IGRhdGUgPSBjcmVhdGVGb3JtQm94KFwiZGF0ZVwiLCBcImRhdGVcIilcbiAgICAgICAgcm93Mi5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gY3JlYXRlRm9ybUJveChcInByaW9yaXR5XCIsIFwibnVtYmVyXCIsIFwiMVwiLCBcIjVcIilcbiAgICAgICAgcm93Mi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgY29uc3Qgbm90ZXMgPSBjcmVhdGVGb3JtQm94KFwibm90ZXNcIiwgXCJub3Rlc1wiKTtcbiAgICBub3Rlcy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLm91dGVySFRNTCA9ICc8dGV4dGFyZWEgcm93cz1cIjdcIj48L3RleHRhcmVhPic7XG4gICAgbm90ZXMuY2xhc3NMaXN0LmFkZChcIm5vdGVzXCIpO1xuICAgIFxuICAgIGNvbnN0IGNhbmNlbENyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbmNlbENyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxDcmVhdGUnKTtcblxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUnKTtcbiAgICBjcmVhdGVCdXR0b24uaW5uZXJIVE1MID0gXCJDcmVhdGVcIjtcbiAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN1Ym1pdCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvamVjdCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwnKTtcbiAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNsb3NlKCkgfSk7XG5cbiAgICBjYW5jZWxDcmVhdGVCdXR0b24uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICBjYW5jZWxDcmVhdGVCdXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocm93KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJvdzIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobm90ZXMpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQ3JlYXRlQnV0dG9uKTtcblxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICByZXR1cm4gYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybUJveCh2YXJpYWJsZSwgdHlwZSwgbWluLCBtYXgpe1xuICAgIGNvbnN0IGZvcm1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Cb3gnKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCB2YXJpYWJsZSk7XG4gICAgbGFiZWwuaW5uZXJIVE1MID0gdmFyaWFibGU7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICAgIGlmKG1pbiAhPT0gdW5kZWZpbmVkICYmIG1heCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBtaW4pO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsIG1heCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAgbWluKTtcbiAgICB9XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcmV0dXJuIGZvcm1Cb3g7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvamVjdCl7XG4gICAgaWYodGl0bGUubGFzdENoaWxkLnZhbHVlLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgb3V0IHRpdGxlIGZpZWxkLlwiKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgaWYocHJpb3JpdHkubGFzdENoaWxkLnZhbHVlID4gNSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eS5sYXN0Q2hpbGQudmFsdWUpO1xuICAgICAgICAgICAgcHJpb3JpdHkubGFzdENoaWxkLnZhbHVlID0gNTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByaW9yaXR5Lmxhc3RDaGlsZC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYocHJpb3JpdHkubGFzdENoaWxkLnZhbHVlIDwgMSB8fCBpc05hTihwcmlvcml0eS5sYXN0Q2hpbGQudmFsdWUpKXtcbiAgICAgICAgICAgIHByaW9yaXR5Lmxhc3RDaGlsZC52YWx1ZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgYWRkKHByb2plY3RzLCBwcm9qZWN0LCB0b0RvSXRlbSh0aXRsZS5sYXN0Q2hpbGQudmFsdWUsIGRlc2NyaXB0aW9uLmxhc3RDaGlsZC52YWx1ZSwgZGF0ZS5sYXN0Q2hpbGQudmFsdWUsIHByaW9yaXR5Lmxhc3RDaGlsZC52YWx1ZSwgbm90ZXMubGFzdENoaWxkLnZhbHVlKSk7XG4gICAgICAgIGNsb3NlKCk7XG4gICAgICAgIHJlc2V0KGtleUluQXJyYXkocHJvamVjdCwgcHJvamVjdHMpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlKCl7XG4gICAgYm9keS5yZW1vdmVDaGlsZChib2R5LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtleUluQXJyYXkoa2V5LCBhcnJheSkgeyAvL2Z1bmN0aW9uIHRoYXQgcmV0dXJucyBrZXkgbG9jYXRpb24gKC0xIGlmIG5vdCBmb3VuZClcbiAgICBsZXQgcG9zID0gLTE7XG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYoZWxlbWVudFswXSA9PT0ga2V5KXtcbiAgICAgICAgICAgIHBvcyA9IGluZGV4O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBvcztcbn1cbiIsImltcG9ydCBrZXlJbkFycmF5IGZyb20gXCIuL2tleUluQXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlKHByb2plY3RzLCBwcm9qZWN0LCBpbmRleCl7XG4gICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGlmKGtleUluQXJyYXkocHJvamVjdCwgcHJvamVjdHMpID09PSAtMSl7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yOiBQcm9qZWN0IGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2Uoa2V5SW5BcnJheShwcm9qZWN0LCBwcm9qZWN0cyksIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHByb2plY3RzW2tleUluQXJyYXkocHJvamVjdCwgcHJvamVjdHMpXVsxXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG4vLyBJIGRpZCBub3Qgd3JpdGUgdGhpcyEgXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViX1N0b3JhZ2VfQVBJL1VzaW5nX3RoZV9XZWJfU3RvcmFnZV9BUElcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRG9JdGVtICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyl7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlc307XG59IiwiaW1wb3J0IGFkZCBmcm9tIFwiLi9hZGQuanNcIjtcbmltcG9ydCByZW1vdmUgZnJvbSBcIi4vcmVtb3ZlLmpzXCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi4vaW5kZXguanMnXG5pbXBvcnQga2V5SW5BcnJheSBmcm9tIFwiLi9rZXlJbkFycmF5LmpzXCI7XG5pbXBvcnQgYWRkRm9ybSBmcm9tIFwiLi9mb3JtLmpzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlJdGVtcyhwcm9qZWN0LCB2aWV3aW5nTXVsdGlwbGUpe1xuICAgIGlmKHByb2plY3QgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbnN0IHRvRG9HcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvRG9HcmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuXG4gICAgICAgIHByb2plY3RbMV0uZm9yRWFjaCgodG9Eb0l0ZW0sIGluZGV4KSA9PiB7IC8vcHJvamVjdFsxXSA9IFByb2plY3QgaXRlbXNcbiAgICAgICAgICAgIGxldCB0b0RvSXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1EaXYuY2xhc3NMaXN0LmFkZChcImdyaWRJdGVtXCIpO1xuXG4gICAgICAgICAgICBsZXQgdGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdG9Eb0l0ZW0udGl0bGU7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50LmlubmVySFRNTCA9IFwi4pyWXCI7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZShwcm9qZWN0cywgcHJvamVjdFswXSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJlc2V0KGtleUluQXJyYXkocHJvamVjdFswXSwgcHJvamVjdHMpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aXRsZUJhci5jbGFzc0xpc3QuYWRkKCd0aXRsZUJhcicpO1xuICAgICAgICAgICAgdGl0bGVCYXIuYXBwZW5kKHRpdGxlKTtcbiAgICAgICAgICAgIHRpdGxlQmFyLmFwcGVuZChyZW1vdmVFbGVtZW50KTtcblxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdG9Eb0l0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgIGxldCBib3R0b21CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJvdHRvbUJhci5jbGFzc0xpc3QuYWRkKFwiYm90dG9tXCIpOyAvLyBBZGQgYW55IG5ldyBlbGVtZW50cyB1bmRlciB0aGlzIGRpdlxuXG4gICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gdG9Eb0l0ZW0ucHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gdG9Eb0l0ZW0uZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgIGxldCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG5vdGVzLmlubmVySFRNTCA9IFwibm90ZXNcIjtcbiAgICAgICAgICAgICAgICBub3Rlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQodG9Eb0l0ZW0ubm90ZXMpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBib3R0b21CYXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIGJvdHRvbUJhci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgICAgICBib3R0b21CYXIuYXBwZW5kQ2hpbGQobm90ZXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b0RvSXRlbURpdi5hcHBlbmRDaGlsZCh0aXRsZUJhcik7XG4gICAgICAgICAgICB0b0RvSXRlbURpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB0b0RvSXRlbURpdi5hcHBlbmRDaGlsZChib3R0b21CYXIpO1xuXG4gICAgICAgICAgICB0b0RvR3JpZC5hcHBlbmRDaGlsZCh0b0RvSXRlbURpdik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdncmlkSXRlbScsICdhZGRCdXR0b24nKTtcbiAgICAgICAgYWRkQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiXG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFkZEZvcm0ocHJvamVjdFswXSk7XG4gICAgICAgICAgICByZXNldChrZXlJbkFycmF5KHByb2plY3RbMF0sIHByb2plY3RzKSk7XG4gICAgICAgIH0pXG4gICAgICAgIHRvRG9HcmlkLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpICE9PSBudWxsKXtcbiAgICAgICAgICAgIGlmKHZpZXdpbmdNdWx0aXBsZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHRvRG9HcmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykpOyAvLyBDbGVhcnMgdGhlIGdyaWQgaWYgdGhlcmUgaXMgb25lIGFscmVhZHkgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvR3JpZCk7XG4gICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvR3JpZCk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiQnV0dG9uJykuZm9yRWFjaChidXR0b24gPT4geyAvLyBHaXZlcyBidXR0b24gc2VsZWN0aW9uIGNsYXNzIGlmIGl0IGlzIHBpY2tlZFxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBpZihidXR0b24uaW5uZXJIVE1MID09PSBwcm9qZWN0WzBdKXsgLy9wcm9qZWN0WzBdID0gbmFtZSBvZiBwcm9qZWN0XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gXG4gICAgZWxzZXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgICAgICBpbmZvLmlubmVySFRNTCA9IFwiQWRkIGEgcHJvamVjdCB1c2luZyB0aGUgYWRkIGJ1dHRvbiBvbiB5b3VyIHByb2plY3QgbGlzdCFcIjtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsSXRlbXMocHJvamVjdHMpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gcHJvamVjdFswXTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGRpc3BsYXlJdGVtcyhwcm9qZWN0LCB0cnVlKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdGFiVmlldyhwcm9qZWN0cyl7XG4gICAgY29uc3QgdGFiVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYlZpZXcuY2xhc3NMaXN0LmFkZCgndGFiVmlldycpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIGl0ZW1zXSBvZiBwcm9qZWN0cyl7IC8vIGZvciBlYWNoIHByb2plY3QgbmFtZSBsaXN0IGl0ZW1zIHdoZW4gY2xpY2tlZFxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFiQnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gbmFtZTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlJdGVtcyhbbmFtZSwgaXRlbXNdKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFiVmlldy5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcbiAgICB9O1xuICAgIGNvbnN0IHZpZXdBbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB2aWV3QWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RhYkJ1dHRvbicpO1xuICAgIHZpZXdBbGxCdXR0b24uaW5uZXJIVE1MID0gXCJWaWV3IEFsbCBQcm9qZWN0c1wiO1xuICAgIHZpZXdBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlBbGxJdGVtcyhwcm9qZWN0cyk7XG4gICAgfSlcbiAgICBjb25zdCBhZGRSZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRSZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFiQnV0dG9uJywgJ2RpdmlkZWQnKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkJyk7XG4gICAgYWRkQnV0dG9uLmlubmVySFRNTCA9ICdhZGQnO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb21wdChcIlR5cGUgcHJvamVjdCBuYW1lXCIpO1xuICAgICAgICBpZihwcm9qZWN0ICE9PSBudWxsKXtcbiAgICAgICAgICAgIGFkZChwcm9qZWN0cywgcHJvamVjdCk7XG4gICAgICAgICAgICByZXNldChrZXlJbkFycmF5KHByb2plY3QsIHByb2plY3RzKSk7ICBcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgIHJlbW92ZUJ1dHRvbi5pbm5lckhUTUwgPSAncmVtb3ZlJztcbiAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9tcHQoJ1R5cGUgcHJvamVjdCB0byByZW1vdmUnKTtcbiAgICAgICAgaWYocHJvamVjdCAhPT0gbnVsbCl7XG4gICAgICAgICAgICByZW1vdmUocHJvamVjdHMsIHByb2plY3QpO1xuICAgICAgICAgICAgcmVzZXQoMCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGFkZFJlbW92ZUJ1dHRvbi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGFkZFJlbW92ZUJ1dHRvbi5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuICAgIHRhYlZpZXcuYXBwZW5kQ2hpbGQodmlld0FsbEJ1dHRvbik7XG4gICAgdGFiVmlldy5hcHBlbmRDaGlsZChhZGRSZW1vdmVCdXR0b24pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGFiVmlldyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0KGluZGV4KSB7XG4gICAgYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRhYlZpZXcocHJvamVjdHMpO1xuICAgIGRpc3BsYXlJdGVtcyhwcm9qZWN0c1tpbmRleF0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmV4cG9ydCB7ZGlzcGxheUl0ZW1zLCB0YWJWaWV3LCByZXNldH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=