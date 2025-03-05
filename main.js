/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/blockbit.ttf */ \"./src/assets/fonts/blockbit.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Wargate-Normal.otf */ \"./src/assets/fonts/Wargate-Normal.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --grey: #a7aaae;\n  --blue-grey: #627286;\n  --text-shadow: #38393a;\n}\n\nhtml, body {\n  height: 100%;\n  margin: 0;\n}\n\nbody {\n  background: linear-gradient(rgba(14, 22, 38, 1), rgba(58, 64, 82, 1));\n  height: 100%;\n  width: 100%;\n}\n\n@font-face {\n  font-family: 'titlePixel';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap; \n}\n\n@font-face {\n  font-family: 'bodyText';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('opentype');\n}\n\n#header-container {\n  width: 100vw;\n  height: 25vh;\n}\n\n#title-container {\n  width: 100%;\n  height: 50%;\n  display: flex;\n  flex: start;\n  justify-content: center;\n}\n\n#title {\n  font-family: 'titlePixel';\n  font-size: 80px;\n  color: var(--grey);\n  text-shadow: 4px 4px var(--text-shadow);\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n#game-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.board {\n  outline: 1px solid var(--grey);\n}\n\n.player-board {\n  border: 2px solid black;\n  flex-direction: column;\n  height: 100%;\n}\n\n.board-container{\n  height: 430px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n  order: 2;\n}\n\n.player-tag {\n  font-family: 'bodyText';\n  letter-spacing: .4rem;\n  font-size: 22px;\n}\n\n#playerOne-tag {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  color: var(--grey);\n}\n\n#computer-tag, #dock-tag {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  justify-self: end;\n  color: var(--grey);\n}\n\n#playerOneBoard {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 2;\n  grid-row-end: 3;\n  }\n\n#computerBoard, .dock-container {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n\n.dock-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.dock {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  height: 250px;\n  width: 250px;\n  gap: 10px;\n}\n\n.dock.horizontal{\n  display: flex;\n  flex-direction: column;\n  height: 250px;\n  width: 250px;\n}\n\n.co-ord {\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--grey);\n  box-sizing: border-box;\n  position: relative;\n  transform-style: preserve-3d; /*keeps styling for game-board square on top*/\n}\n\n.ship-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 0;\n  height: fit-content;\n  width: fit-content;\n  transform: translateZ(-10px); /*keeps styling for ships under gameboard so hit markers are displayed over top*/\n}\n\n.ship-container.horizontal {\n  flex-direction: row;\n  min-width: fit-content;\n}\n\n.shipSquare {\n  width: 40px;\n  height: 40px;\n  background-color: var(--blue-grey);\n  box-sizing: border-box;\n  border: 2px solid transparent;\n}\n\n.shipSquare.tracker {\n  border: 1px solid var(--grey);\n}\n\n.player-ship-status {\n  outline: 1px solid var(--grey);\n}\n\n#rotate-button {\n  width: 50px;\n  height: 50px;\n  outline: none;\n  margin-left: 2rem;\n  filter: invert(77%) sepia(7%) saturate(144%) hue-rotate(174deg) brightness(88%) contrast(88%);\n}\n\n#rotate-button:hover {\n  filter: invert(47%) sepia(11%) saturate(758%) hue-rotate(173deg) brightness(91%) contrast(92%);\n  cursor: pointer;\n}\n\n#rotate-button img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.state-display-container {\n  height: 450px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  padding-top: 10px;\n  box-sizing: border-box;\n}\n\n.state-display-container.left > .ship-container.tracker{\n  display: flex;\n  align-items: start;\n}\n\n.state-display-container.right > .ship-container.tracker{\n  display: flex;\n  align-items: end;\n}\n\n.left {\n  order: 1;\n}\n\n.right {\n  order: 3;\n  align-items: end;\n}\n\n.player-ship-status {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 0;\n  height: fit-content;\n  width: fit-content;\n}\n\n.ship-name {\n  margin-top: .5rem;\n  font-family: 'bodyText';\n  letter-spacing: .2rem;\n  margin-bottom: 5px;\n  text-align: center;\n  color: var(--grey);\n}\n\n.dock-container.board {\n  outline: none;\n  display: flex;\n  justify-content: center;\n}\n\n#info-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n#winner-display > h3 {\n  font-family: 'bodyText';\n  font-size: 40px;\n  letter-spacing: .5rem;\n  color: var(--grey);\n}\n\n.start-end-button {\n  position: relative;\n  background-color: var(--blue-grey);\n  outline: none;\n  border: none;\n  font-family: 'bodyText';\n  padding-top: 3px;\n  letter-spacing: .2rem;\n  height: 3rem;\n  width: 8rem;\n  font-size: 1.2rem;\n  box-shadow: var(--text-shadow) 3px 3px;\n  transition: all 0.1s ease;\n }\n \n .start-end-button::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-shadow: var(--text-shadow) 3px 3px;\n  z-index: -1;\n }\n \n .start-end-button:hover {\n  background-color: var(--grey);\n  color: var(--blue-grey);\n  outline: none;\n  border: none;\n }\n \n .start-end-button:active {\n  transform: translateY(2px);\n }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameState: () => (/* binding */ createGameState),\n/* harmony export */   gameController: () => (/* binding */ gameController)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\nconst { Ship, Gameboard, Player, Computer, } = __webpack_require__(/*! ./modules */ \"./src/modules.js\");\n\n\n\nconst createGameState = () => {\n    const playerOne = new Player('playerOne');\n    const playerTwo = new Player('computer');\n\n    const initShips = () => {\n        return [\n        new Ship(5, 'carrier'),\n        new Ship(4, 'battleship'),\n        new Ship(3, 'cruiser'),\n        new Ship(3, 'submarine'),\n        new Ship(2, 'destroyer')\n        ];\n    };\n\n    \n    const ships = initShips();\n\n    const computerShipsRand = () => {\n        // call initShips\n        const computerShips = initShips();\n        //loop through each ship\n        for (let i = 0; i < computerShips.length; i++) {\n            const directions = ['horizontal', 'vertical'];\n            const number = (max) => Math.floor(Math.random() * max);\n            \n            let placed = false;\n            \n            while (placed !== 'allowed') {\n                // randomly create x and y coords\n                const x = number(10);\n                const y = number(10);\n                // randomly choose direction\n                const direction = directions[number(2)];\n                \n                // call placeShip() and check placement\n                placed = playerTwo.gameBoard.placeShip(direction, x, y, computerShips[i]);\n            }\n        }\n    };\n\n\n    return {\n        ships,\n        playerOne,\n        playerTwo,\n        computerShipsRand,\n    };\n};\n\n\nconst gameController = (playerOne, playerTwo) => {\n    const handleCellClick = (e) => {\n        // get the board selected\n        const board = e.target.closest('.board').id;\n        // send target cell and board\n        chooseCell(e.target, board);\n    }\n    \n    // attach listeners to all cells\n    const cells = document.querySelectorAll('.co-ord');\n    cells.forEach(cell => {\n        cell.addEventListener('click', handleCellClick)\n    });\n\n    // Initialize computer logic if playerTwo is the computer\n    const computer = playerTwo.player === 'computer' ? new Computer() : null;\n\n    // initiate first turn\n    let activePlayer = playerOne;\n\n    const switchPlayer = () => {\n        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;\n        if (activePlayer.player === 'computer' && computer) {\n            computerTurnHandler();\n        }\n    };\n\n    const computerTurnHandler = async () => {\n        await computer.computerAttack();\n        const computerChoiceCell = document.getElementById(computer.choice);\n        chooseCell(computerChoiceCell, 'playerOneBoard');\n    }\n\n    const chooseCell = (selectedCell, selectedBoard) => {\n        // define other player\n        const otherPlayer = activePlayer === playerOne ? playerTwo : playerOne;\n        \n        const cellId = selectedCell.id\n        const cellArray = cellId.split(' ').map(Number);\n        // send attack to player\n        const attackResult = attackHandler(otherPlayer,cellArray, selectedBoard, cellId);\n        console.log(attackResult.result);\n        const resultString = attackResult.result;\n        const shipAttacked = attackResult.ship\n\n        if (resultString === 'go again') {\n            if (activePlayer.player === 'computer' && computer){\n                computer.updateLastAttackResult(resultString);\n                computerTurnHandler();\n            }\n            return;\n        }\n\n        if (activePlayer === playerTwo && playerTwo.player === 'computer') {\n            computer.updateLastAttackResult(resultString);\n        } \n        \n        gameStatus(otherPlayer);\n        (0,_display__WEBPACK_IMPORTED_MODULE_0__.updateSquareDisplay)(resultString, selectedCell, shipAttacked);\n        switchPlayer();\n    };\n\n    const attackHandler = (otherPlayer, cellArray, selectedBoard, cellId) => {\n        if (checkAttackValid(otherPlayer, selectedBoard, cellId) === false) {\n            return { result: 'go again', ship: null };\n        };\n        otherPlayer.cellsReceived.push(cellId);\n        return otherPlayer.gameBoard.receiveAttack(cellArray);\n    };\n\n    const checkAttackValid = (otherPlayer, selectedBoard, cellId) => {\n        let validity = false;\n        // check if player has selected the correct board\n        if (selectedBoard !== `${otherPlayer.player}Board`) {\n            return validity;\n        } else if (otherPlayer.cellsReceived.includes(cellId)) {\n            return validity;\n        } else {\n            validity = true;\n        }\n        return validity;\n    };\n\n    const gameStatus = (otherPlayer) => {\n        if (otherPlayer.gameBoard.allShipsSunk() === 'game over') {\n            console.log('game over');\n            gameOver();\n        }\n    };\n\n    const gameOver = () => {\n        const cells = document.querySelectorAll('.co-ord');\n        cells.forEach(cell => {\n            cell.removeEventListener('click', handleCellClick);\n        });\n        const winner = `${activePlayer.player}`\n        ;(0,_display__WEBPACK_IMPORTED_MODULE_0__.endGame)(winner);\n    };\n\n\n    return {\n        activePlayer,\n        switchPlayer,\n        chooseCell,\n        attackHandler,\n        gameStatus,\n    };\n};\n\n\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domContentLoader: () => (/* binding */ domContentLoader),\n/* harmony export */   endGame: () => (/* binding */ endGame),\n/* harmony export */   updateSquareDisplay: () => (/* binding */ updateSquareDisplay)\n/* harmony export */ });\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _assets_svg_rotate_clockwise_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/svg/rotate-clockwise-svgrepo-com.svg */ \"./src/assets/svg/rotate-clockwise-svgrepo-com.svg\");\n\n\n\nconst gameContainer = document.querySelector('#game-container');\nconst newGameButton = document.querySelector('#new-game');\nconst infoContainer = document.querySelector('#info-container');\n\nconst domContentLoader = () => {\n    newGameButton.remove();\n    const gameState = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.createGameState)();\n\n    renderBoardContainer();\n    \n    // render the player board initially\n    renderBoard(gameState.playerOne);\n    \n    renderDock(gameState.ships);\n    dragShip(gameState);\n    \n    gameState.computerShipsRand();\n}\n\nconst renderBoardContainer = () => {\n    //create container for both boards\n    const boardContainer = document.createElement('div');\n    boardContainer.classList.add('board-container');\n    gameContainer.appendChild(boardContainer);\n}\n\nconst formatPlayerName = (playerName) => {\n    return playerName.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()).trim();\n}\n  \nconst renderBoard = (player) => {\n    const boardContainer = document.querySelector('.board-container');\n\n    const playerTag = document.createElement('div');\n    playerTag.classList.add('player-tag');\n    playerTag.id = (`${player.player}-tag`)\n    playerTag.innerText = formatPlayerName(player.player);\n    boardContainer.appendChild(playerTag);\n\n    //Create the game boards\n    const playerBoard = document.createElement('div');\n    playerBoard.classList.add('board');\n    playerBoard.id = (`${player.player}Board`);\n    boardContainer.appendChild(playerBoard);\n\n    populateGameBoard(player, playerBoard);\n};\n\nconst populateGameBoard = (player, playerBoard) => {\n    //Populate game board\n    player.gameBoard.board.forEach((row, index) => {\n        // Container for each row\n        const rowDiv = document.createElement('div');\n        //add class and number to each row\n        rowDiv.classList.add('row');\n        rowDiv.id = index;\n        \n        row.forEach((element, index) => {\n            const coord = document.createElement('div');\n            coord.classList.add('co-ord');\n            coord.id = `${rowDiv.id} ${index}`;\n            rowDiv.appendChild(coord);\n        });\n        playerBoard.appendChild(rowDiv);\n    });\n};\n    \nconst renderDock = (ships) => {\n    const boardContainer = document.querySelector('.board-container');\n    \n    const dockTag = document.createElement('div');\n    dockTag.classList.add('player-tag');\n    dockTag.id = 'dock-tag';\n    dockTag.innerText = 'Place Your Ships';\n    boardContainer.appendChild(dockTag);\n\n    const dockContainer = document.createElement('div');\n    dockContainer.classList.add('dock-container');\n    dockContainer.classList.add('board'); \n    boardContainer.appendChild(dockContainer);\n\n    const dock = document.createElement('div');\n    dock.classList.add('dock');\n    dockContainer.appendChild(dock);\n\n    const rotateBtn = document.createElement('div');\n    rotateBtn.id = 'rotate-button';\n    rotateBtn.classList.add('button');\n\n    const imgElement = document.createElement('img');\n    imgElement.src = _assets_svg_rotate_clockwise_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;\n    rotateBtn.appendChild(imgElement);\n    dockContainer.appendChild(rotateBtn);\n    \n    ships.forEach(ship => {\n        const shipContainer = document.createElement('div');\n        shipContainer.classList.add('ship-container');\n        shipContainer.setAttribute('draggable', true);\n        shipContainer.id = ship.name;\n        shipContainer.shipData = ship;\n        dock.appendChild(shipContainer);\n        \n        for (let i = 0; i < ship.length; i++) {\n        const shipSquare = document.createElement('div');\n        shipSquare.classList.add('shipSquare');\n        shipContainer.appendChild(shipSquare);\n        }\n    });\n    rotateDock();\n};\n\nlet direction = 'vertical';\n\nconst rotateDock = () => {\n    const rotateBtn = document.getElementById('rotate-button');\n    const dock = document.querySelector('.dock');\n    const ships = dock.querySelectorAll('.ship-container');\n\n       \n    const rotateHandler = () => {\n        direction = direction === 'vertical' ? 'horizontal' : 'vertical';\n        console.log(direction);\n\n        if (direction === 'horizontal'){ \n            dock.classList.add('horizontal');\n        } else {\n            dock.classList.remove('horizontal');\n        };\n\n        ships.forEach(ship => {\n            if (ship.getAttribute('draggable') === 'true') {\n                if (direction === 'horizontal'){ \n                    ship.classList.add('horizontal');\n                } else {\n                    ship.classList.remove('horizontal');\n                }\n            }\n        });\n    }\n    rotateBtn.addEventListener('click', rotateHandler);\n};\n\nconst dragShip = (gameState) => {\n    const draggableShips = document.querySelectorAll('.ship-container');\n    const playerBoard = document.querySelector('#playerOneBoard');\n    const dock = document.querySelector('.dock');\n    const dockContainer = document.querySelector('.dock-container');\n    const dockTag = document.getElementById('dock-tag');\n\n    const handleDragStart = (e) => {\n        e.dataTransfer.setData('text/plain', e.target.id);\n    };\n\n    draggableShips.forEach(ship => {\n        ship.addEventListener('dragstart', handleDragStart);\n    });\n\n    for (const playerSquares of playerBoard.querySelectorAll('.co-ord')) {\n        playerSquares.addEventListener('dragover', e => {\n            e.preventDefault();\n        });\n        \n        playerSquares.addEventListener('drop', e => {\n            e.preventDefault();\n            const shipData = e.dataTransfer.getData('text/plain');\n            const shipElement = document.getElementById(shipData);\n            const ship = shipElement.shipData;\n\n            const startCoord = playerSquares.id.split(' ').map(coord => parseInt(coord));\n            \n            const placed = gameState.playerOne.gameBoard.placeShip(direction, startCoord[0], startCoord[1], ship);\n\n            if (placed === 'collision'){\n                alert('ship already placed there');\n                return;\n            } \n            playerSquares.appendChild(shipElement);\n\n            shipElement.removeEventListener('dragstart', handleDragStart);\n            shipElement.setAttribute('draggable', false);\n            const rotateBtn = document.getElementById('rotate-button');\n            rotateBtn.removeEventListener('click', shipElement.rotateHandler);\n            \n            \n            if (dock.children.length <= 0) {\n                dockContainer.remove();\n                dockTag.remove();\n                //render comp board after ships are placed\n                renderBoard(gameState.playerTwo);\n                (0,_controller__WEBPACK_IMPORTED_MODULE_0__.gameController)(gameState.playerOne, gameState.playerTwo);\n                stateDisplay(gameState);\n            };\n        });\n    }\n};\n\nconst stateDisplay = (gameState) => {\n    \n    const stateDisplayContLeft = document.createElement('div');\n    stateDisplayContLeft.classList.add('state-display-container');\n    stateDisplayContLeft.classList.add('left');\n    gameContainer.appendChild(stateDisplayContLeft);\n    \n    const stateDisplayContRight = document.createElement('div');\n    stateDisplayContRight.classList.add('state-display-container');\n    stateDisplayContRight.classList.add('right');\n    gameContainer.appendChild(stateDisplayContRight);\n    \n    const players = [gameState.playerOne, gameState.playerTwo];\n    players.forEach(player => {\n      const ships = player.gameBoard.ships;\n      ships.forEach(ship => {\n        const shipContainer = document.createElement('div');\n        shipContainer.classList.add('ship-container');\n        shipContainer.classList.add('tracker');\n        \n        const shipName = document.createElement('div');\n        shipName.classList.add('ship-name');\n        shipName.textContent = String(ship.name).charAt(0).toUpperCase() + String(ship.name).slice(1);\n        shipContainer.appendChild(shipName);\n        \n        const playerShipStatus = document.createElement('div');\n        playerShipStatus.classList.add('player-ship-status');\n        playerShipStatus.id = `${ship.name}-${player.player}`;\n        playerShipStatus.shipData = ship;\n        shipContainer.appendChild(playerShipStatus);\n        \n        function renderEachship() {\n          for (let i = 0; i < ship.length; i++) {\n            const shipSquare = document.createElement('div');\n            shipSquare.classList.add('shipSquare');\n            shipSquare.classList.add('tracker');\n            playerShipStatus.appendChild(shipSquare);\n          }\n        }\n        \n        if (player.player === 'playerOne') {\n          renderEachship();\n          stateDisplayContLeft.appendChild(shipContainer);\n        } else {\n          renderEachship();\n          stateDisplayContRight.appendChild(shipContainer);\n        }\n      });\n    });\n  };\n\nconst updateSquareDisplay = (attackResult, target, shipAttacked) => {\n    if (attackResult === 'miss'){\n        target.style.background = 'white';\n    } else if (attackResult === 'hit' || attackResult === 'sunk'){\n        target.style.background = 'red';\n        const trackerName = `${shipAttacked.name}-${target.closest('.board').id}`.slice(0, -5);\n        const targetedTracker = document.getElementById(trackerName);\n        const shipSquares = targetedTracker.querySelectorAll('.shipSquare');\n        const hitCount = shipAttacked.hits;\n\n        if (hitCount <= shipSquares.length) {\n            for (let i = 0; i < hitCount; i++) {\n                shipSquares[i].style.background = 'red';\n            };\n        }\n    }\n};\n\nconst displayWinner = (winner) => {\n\n    const winnerDisplay = document.createElement('div');\n    winnerDisplay.id = 'winner-display';\n    infoContainer.appendChild(winnerDisplay);\n\n    const winnerText = document.createElement('h3');\n    winnerText.innerText = winner;\n    winnerDisplay.appendChild(winnerText);\n}\n\n\nconst endGame = (winner) => {\n    const formattedWinner = formatPlayerName(winner);\n    const winnerMessage = `${formattedWinner} wins!`\n    displayWinner(winnerMessage);\n\n\n    const playAgainBtn = document.createElement('button');\n    playAgainBtn.innerText = 'Play again?';\n    playAgainBtn.classList.add('start-end-button');\n    infoContainer.appendChild(playAgainBtn);\n    playAgainBtn.addEventListener('click', () => {\n        window.location.reload();\n    });\n};\n\n//# sourceURL=webpack:///./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\nconst newGameButton = document.querySelector('#new-game');\nnewGameButton.addEventListener('click', () => {\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.domContentLoader)();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules.js":
/*!************************!*\
  !*** ./src/modules.js ***!
  \************************/
/***/ ((module) => {

eval("class Ship {\n    constructor(length, name){\n        this.length = length;\n        this.name = name;\n        this.hits = 0;\n        this.sunk = false;\n    }\n\n    receivedHits() {\n        this.hits++;\n        this.isSunk();\n        if (this.sunk === true){ \n            return \"sunk\";\n        } else {\n            return \"hit\";\n        }\n    }\n\n    isSunk() {\n        if (this.hits >= this.length){\n            this.sunk = true;\n        }\n    }\n\n}\n\nclass Gameboard {\n    constructor(){\n        this.rows = 10;\n        this.cols = 10;\n        this.board = Array.from({ length: this.rows }, () => new Array(this.cols).fill(null));\n        this.ships = [];\n    }\n\n    placeShip(direction, x, y, ship) {\n        // check which way ship is facing\n        if (direction === 'horizontal') {\n          // check if all positions are valid\n          for (let i = 0; i < ship.length; i++) {\n            const check = this.checkAllowed(x, y + i);\n            if (check === 'collision' || check === 'out of bounds') {\n              return check; \n            }\n          }\n          \n          // place into arrays if valid\n          for (let i = 0; i < ship.length; i++) {\n            this.board[x][y + i] = ship;\n          }\n        } else {\n          // check if all positions are valid\n          for (let i = 0; i < ship.length; i++) {\n            const check = this.checkAllowed(x + i, y);\n            if (check === 'collision' || check === 'out of bounds') {\n              return check;\n            }\n          }\n          \n          // place into arrays\n          for (let i = 0; i < ship.length; i++) {\n            this.board[x + i][y] = ship;\n          }\n        }\n        \n    \n        this.ships.push(ship);\n        return 'allowed';\n      }\n\n      checkAllowed(x, y) {\n        if (this.board[x] === undefined || y < 0 || y >= this.board[x].length) {\n          return 'out of bounds';\n        }\n        if (this.board[x][y] !== null) {\n          return 'collision';\n        }\n        return 'allowed';\n      }\n\n    receiveAttack(coords){\n        //convert letters from top of board to a number\n        const [row, col] = coords;\n\n        let target = this.board[row][col];\n\n        if (target !== null){\n          const result = target.receivedHits()\n            return {\n              result: result,\n              ship: target\n            } \n        } else {\n            this.board[row][col] = 'miss';\n            return {\n              result: 'miss',\n              ship: null\n            }\n        }\n    }\n\n    allShipsSunk(){\n        if (this.ships.every(ship => ship.sunk === true)){ \n            return 'game over';\n        }\n    }\n}\n\nclass Player {\n    constructor(player){\n        this.player = player;\n        this.gameBoard = new Gameboard;\n        this.cellsReceived = [];\n    }\n}\n\nclass Computer extends Player {\n    constructor() {\n        super('computer');\n        this.lastAttackResult = null;\n        this.previousHit = null;\n        this.choice = null;\n        this.previousDirection = null;\n        this.directions = {\n            1: [-1, 0],//up\n            2: [1, 0],//down\n            3: [0, -1],//left\n            4: [0, 1],//right\n        };\n        this.usedDirections = [];\n    }\n\n    outOfRange(x, y) {\n        if (x < 0 || x >= 10 || y < 0 || y >= 10) {\n            return true;\n        }\n        return false;\n    }\n\n    async computerAttack() {\n        if (this.lastAttackResult === 'sunk'){\n            this.usedDirections.length = 0;\n            this.previousHit = null;\n            this.previousDirection = null;\n            this.randAttack();\n        }\n\n        if (this.lastAttackResult === 'hit'){\n            this.usedDirections.length = 0;\n            this.previousHit = this.choice;\n            this.previousHitAttack();\n        }\n\n        else if (this.usedDirections.length >= 4 && this.previousHit){\n            this.usedDirections.length = 0;\n            this.previousHit = null;\n            this.previousDirection = null;\n            this.randAttack();\n        }\n\n        else if (this.lastAttackResult === 'go again' && this.previousHit) {\n            this.previousHitAttack();\n        }\n\n        else if (this.lastAttackResult === 'miss' && this.usedDirections.length < 4 && this.previousHit){\n            this.previousHitAttack();\n        } \n\n        else {\n            this.randAttack();\n        }\n    }\n\n    randAttack() {\n        const x = this.numberGen(0, 9);\n        const y = this.numberGen(0, 9);\n        this.choice = `${x} ${y}`;\n    }\n\n    previousHitAttack() {\n        // try each direction until a valid one or run out of directions\n        while (this.usedDirections.length < 4) {\n          let randInt;\n          let nextMoveAround;\n          \n          if (this.lastAttackResult === 'hit' && this.previousDirection !== null) {\n            nextMoveAround = this.previousDirection;\n            this.previousHit = this.choice;\n          } else {\n            // find a direction that hasn't been used yet\n            do {\n              randInt = this.numberGen(1, 4);\n              nextMoveAround = this.directions[randInt];\n            } while (\n              this.usedDirections.some(direction => \n                direction[0] === nextMoveAround[0] && direction[1] === nextMoveAround[1]\n              )\n            );\n            \n            this.previousDirection = nextMoveAround;\n          }\n          \n          this.usedDirections.push(nextMoveAround);\n          \n          const [prevX, prevY] = this.previousHit.split(' ').map(Number);\n          const x = prevX + nextMoveAround[0];\n          const y = prevY + nextMoveAround[1];\n          \n          if (!this.outOfRange(x, y)) {\n            this.choice = `${x} ${y}`;\n            return;\n          }\n        }\n        // fallback if all directions fail\n        this.randAttack();\n      }\n\n    numberGen(min, max) {\n        return Math.floor(Math.random() * (max - min + 1)) + min;\n    }\n\n    updateLastAttackResult(attackResult) {\n        this.lastAttackResult = attackResult;\n    }\n}\n\n\nmodule.exports = { Ship, Gameboard, Player, Computer };\n\n\n//# sourceURL=webpack:///./src/modules.js?");

/***/ }),

/***/ "./src/assets/fonts/Wargate-Normal.otf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Wargate-Normal.otf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/Wargate-Normal.otf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Wargate-Normal.otf?");

/***/ }),

/***/ "./src/assets/fonts/blockbit.ttf":
/*!***************************************!*\
  !*** ./src/assets/fonts/blockbit.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/blockbit.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/blockbit.ttf?");

/***/ }),

/***/ "./src/assets/svg/rotate-clockwise-svgrepo-com.svg":
/*!*********************************************************!*\
  !*** ./src/assets/svg/rotate-clockwise-svgrepo-com.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e7e2ac6e0aeeb3f41201.svg\";\n\n//# sourceURL=webpack:///./src/assets/svg/rotate-clockwise-svgrepo-com.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;