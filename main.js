/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  background-color: #94deef;\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  overflow: hidden;\\n}\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\nbutton {\\n  font-weight: bolder;\\n  height: 30px;\\n}\\n\\n.changePlayerName {\\n  margin-left: 2%;\\n}\\n\\n#battleShipTitle {\\n  text-align: center;\\n  background-color: rgb(145, 138, 211);\\n  margin-top: 0;\\n  padding: 30px;\\n  color: beige;\\n}\\n\\n.formContainer {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: fixed;\\n  height: 100%;\\n  width: 100%;\\n  background-color: rgba(0, 0, 0, 0.699);\\n}\\n\\nform {\\n  margin-bottom: 15%;\\n  background-color: #4f3099;\\n  padding-top: 20px;\\n  border: solid white;\\n  gap: 20px;\\n  width: 20%;\\n  height: 20%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  position: absolute;\\n  color: white;\\n  font-weight: bolder;\\n}\\n\\n.hidden {\\n  width: 0;\\n  height: 0;\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n\\n.playingField {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.playersContainer {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-around;\\n}\\n\\n.playerContent {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.cell {\\n  height: 50px;\\n  width: 50px;\\n  border: solid 0.2px black;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.gamePaused {\\n  pointer-events: none;\\n}\\n\\n.gameboard {\\n  display: flex;\\n  flex-direction: column;\\n  border: solid black;\\n  background-color: white;\\n}\\n\\n.AICell:not(.clicked):hover {\\n  background-color: rgba(48, 238, 0, 0.514);\\n}\\n\\n.clicked {\\n  cursor: not-allowed;\\n}\\n\\n.ship {\\n  background-color: yellow;\\n}\\n\\n.hit {\\n  background-color: red;\\n}\\n\\n.miss {\\n  background-color: green;\\n}\\n\\n.sunk {\\n  background-color: rgb(145, 138, 211);\\n}\\n\\n.row {\\n  display: flex;\\n}\\n\\n#gameStarted {\\n  cursor: not-allowed;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n\n\nclass Gameboard {\n  constructor() {\n    this.missedShots = 0;\n    this.board = new Array(10);\n    for (let i = 0; i < this.board.length; i++) {\n      this.board[i] = new Array(10);\n    }\n\n    this.ships = [\n      new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5),\n      new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4),\n      new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3),\n      new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3),\n      new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2),\n    ];\n\n    this.availableMoves = this.fillAvailableMoves();\n  }\n\n  getShipsPositions() {\n    const shipsPositions = [];\n    for (let ship of this.ships) {\n      shipsPositions.push(ship.getPosition());\n    }\n\n    return shipsPositions;\n  }\n\n  getFleetSize() {\n    return this.ships.length;\n  }\n\n  getBoardSize() {\n    return this.board.length;\n  }\n\n  areShipsSunk() {\n    if (this.ships.length <= 0) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  positionShip(row, column, oriantation = \"X\", shipIndex) {\n    const ship = this.ships[shipIndex];\n    const shipSize = ship.getLength();\n    const shipPosition = new Set();\n    if (this.isSpaceAvailable(row, column, shipSize, oriantation)) {\n      if (oriantation === \"X\") {\n        for (let i = column; i < column + shipSize; i++) {\n          this.board[row][i] = shipIndex;\n          shipPosition.add([row, i]);\n        }\n      } else {\n        for (let i = row; i < row + shipSize; i++) {\n          this.board[i][column] = shipIndex;\n          shipPosition.add([i, column]);\n        }\n      }\n\n      ship.setPosition(shipPosition);\n      return true;\n    }\n\n    return false;\n  }\n\n  recieveAttack(row, column) {\n    if (!this.containMove(row, column)) {\n      return -1;\n    }\n\n    const shipIndex = this.board[row][column];\n    if (isNaN(shipIndex)) {\n      this.missedShots++;\n      return 0;\n    }\n    const ship = this.ships[shipIndex];\n\n    ship.hit();\n\n    if (ship.isSunk()) {\n      return ship.getPosition();\n    }\n\n    return 1;\n  }\n\n  containMove(row, column) {\n    for (let i = 0; i < this.availableMoves.length; i++) {\n      let move = this.availableMoves[i];\n      if (move[0] === row && move[1] === column) {\n        this.availableMoves.splice(i, 1);\n        return true;\n      }\n    }\n    return false;\n  }\n\n  isSpaceAvailable(row, column, shipSize, oriantation) {\n    if (oriantation === \"X\") {\n      if (this.board.length < column + shipSize || this.board.length < row) {\n        return false;\n      }\n\n      for (let i = column; i < shipSize + column; i++) {\n        if (!isNaN(this.board[row][i])) {\n          return false;\n        }\n      }\n    } else {\n      if (this.board.length < row + shipSize || this.board.length < column) {\n        return false;\n      }\n      for (let i = row; i < shipSize + row; i++) {\n        if (!isNaN(this.board[i][column])) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  }\n\n  fillAvailableMoves() {\n    const moves = [];\n\n    for (let i = 0; i < this.board.length; i++) {\n      for (let j = 0; j < this.board.length; j++) {\n        moves.push([i, j]);\n      }\n    }\n\n    return moves;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.score = 0;\n    this.gameBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.fleetSize = this.gameBoard.getFleetSize();\n  }\n\n  getShipsPositions() {\n    return this.gameBoard.getShipsPositions();\n  }\n  attack(row, column) {\n    return this.gameBoard.recieveAttack(row, column);\n  }\n\n  resetBoard() {\n    this.gameBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  getBoardSize() {\n    return this.gameBoard.getBoardSize();\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  fillBoardRandomly() {\n    let shipIndex = 0;\n    const boardSize = this.gameBoard.getBoardSize();\n    const oriantations = [\"X\", \"Y\"];\n    while (shipIndex < this.fleetSize) {\n      let row = Math.floor(Math.random() * boardSize);\n      let column = Math.floor(Math.random() * boardSize);\n      let oriantation = oriantations[Math.floor(Math.random() * 2)];\n\n      if (this.positionShip(row, column, oriantation, shipIndex)) {\n        shipIndex++;\n      }\n    }\n  }\n\n  positionShip(row, column, oriantation, index) {\n    return this.gameBoard.positionShip(row, column, oriantation, index);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.sunk = false;\n    this.hp = length;\n    this.position;\n  }\n\n  setPosition(position) {\n    this.position = position;\n  }\n\n  getPosition() {\n    return this.position;\n  }\n\n  getLength() {\n    return this.length;\n  }\n\n  isSunk() {\n    return this.sunk;\n  }\n\n  hit() {\n    if (this.sunk) {\n      return false;\n    }\n\n    this.hp--;\n\n    if (this.hp === 0) {\n      this.sunk = true;\n    }\n\n    return true;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/Ship.js?");

/***/ }),

/***/ "./src/createDOM.js":
/*!**************************!*\
  !*** ./src/createDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameField\": () => (/* binding */ gameField),\n/* harmony export */   \"setPlayerName\": () => (/* binding */ setPlayerName)\n/* harmony export */ });\nfunction gameField(firstPlayer, secondPlayer) {\n  const playerContainer = document.querySelector(\".playersContainer\");\n  playerContainer.classList.add(\"gamePaused\");\n\n  const firstPlayerContainer = document.createElement(\"div\");\n  firstPlayerContainer.classList.add(\"playerContent\");\n\n  const secondPlayerContainer = document.createElement(\"div\");\n  secondPlayerContainer.classList.add(\"playerContent\");\n\n  const firstPlayerName = document.createElement(\"h2\");\n  firstPlayerName.id = \"playerName\";\n\n  const secondPlayerName = document.createElement(\"h2\");\n\n  firstPlayerName.textContent = firstPlayer.name;\n  secondPlayerName.textContent = secondPlayer.name;\n\n  firstPlayerContainer.appendChild(firstPlayerName);\n\n  const playerGameboard = createGameBoard(firstPlayer.getBoardSize(), \"playerCell\");\n  playerGameboard.classList.add(\"playerGameboard\");\n  firstPlayerContainer.appendChild(playerGameboard);\n\n  secondPlayerContainer.appendChild(secondPlayerName);\n\n  const AIGameboard = createGameBoard(secondPlayer.getBoardSize(), \"AICell\");\n  AIGameboard.classList.add(\"AIGameboard\");\n\n  secondPlayerContainer.appendChild(AIGameboard);\n\n  playerContainer.appendChild(firstPlayerContainer);\n  playerContainer.appendChild(secondPlayerContainer);\n}\n\nfunction createGameBoard(size, player) {\n  const gameboard = document.createElement(\"div\");\n  gameboard.classList.add(\"gameboard\");\n\n  for (let i = 0; i < size; i++) {\n    const row = document.createElement(\"div\");\n    row.classList.add(\"row\");\n\n    for (let j = 0; j < size; j++) {\n      const column = document.createElement(\"div\");\n      column.classList.add(\"cell\");\n      column.classList.add(player);\n      column.id = player + \" \" + i + \" \" + j;\n\n      row.appendChild(column);\n    }\n\n    gameboard.appendChild(row);\n  }\n\n  return gameboard;\n}\n\nfunction setPlayerName(name) {\n  document.querySelector(\"#playerName\").textContent = name;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/createDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDOM */ \"./src/createDOM.js\");\n\n\n\n\nconst player = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Player\");\nconst AI = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"AI Opponent\");\nlet ships = [\n  { index: 0, place: false },\n  { index: 1, placed: false },\n  { index: 2, placed: false },\n  { index: 3, placed: false },\n  { index: 4, placed: false },\n];\n\nlet currentPlayer = player;\n\n(0,_createDOM__WEBPACK_IMPORTED_MODULE_2__.gameField)(player, AI);\nAI.fillBoardRandomly();\n\ndocument.querySelector(\"form\").addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  (0,_createDOM__WEBPACK_IMPORTED_MODULE_2__.setPlayerName)(e.target.name.value);\n\n  document.querySelector(\".formContainer\").classList.add(\"hidden\");\n});\n\ndocument.querySelector(\".changePlayerName\").addEventListener(\"click\", () => {\n  document.querySelector(\".formContainer\").classList.remove(\"hidden\");\n});\nconst restartButton = document.querySelector(\".restartButton\");\nconst startButton = document.querySelector(\".startButton\");\nconst hintMessage = document.querySelector(\".hintMessage\");\n\nstartButton.addEventListener(\"click\", () => {\n  if (!shipsReady()) {\n    alert(\"You need to place all the ships before you can start\");\n    return;\n  }\n  document.querySelector(\".playersContainer\").classList.remove(\"gamePaused\");\n  hintMessage.classList.add(\"hidden\");\n  startButton.classList.add(\"hidden\");\n  restartButton.classList.remove(\"hidden\");\n});\n\nrestartButton.addEventListener(\"click\", () => {\n  document.querySelector(\".playersContainer\").classList.add(\"gamePaused\");\n\n  hintMessage.classList.remove(\"hidden\");\n  startButton.classList.remove(\"hidden\");\n  restartButton.classList.add(\"hidden\");\n  restartGame();\n});\n\ndocument.querySelector(\".AIGameboard\").addEventListener(\"click\", (e) => {\n  attackAI(e.target, \"AICell\");\n});\n\nfunction attackAI(targetCell, cellName) {\n  if (targetCell.classList[0] === \"cell\") {\n    const information = targetCell.id.split(\" \");\n    const row = Number(information[1]);\n    const column = Number(information[2]);\n\n    const result = AI.attack(row, column);\n\n    attack(targetCell, cellName, result);\n  }\n}\n\nfunction attackPlayer() {\n  const index = Math.floor(\n    Math.random() * player.gameBoard.availableMoves.length,\n  );\n\n  const cords = player.gameBoard.availableMoves[index];\n  const row = cords[0];\n  const column = cords[1];\n\n  const result = player.attack(row, column);\n  const cell = document.getElementById(`playerCell ${row} ${column}`);\n  attack(cell, \"playerCell\", result);\n}\n\nfunction attack(targetCell, cellName, result) {\n  if (result === -1) {\n    return;\n  }\n\n  if (result === 1) {\n    targetCell.classList.add(\"hit\");\n    targetCell.textContent = \"hit\";\n  } else if (result === 0) {\n    targetCell.classList.add(\"miss\");\n    targetCell.textContent = \"miss\";\n  } else {\n    targetCell.classList.add(\"sunk\");\n    targetCell.textContent = \"sunk\";\n\n    for (let cords of result) {\n      const row = cords[0];\n      const column = cords[1];\n\n      const cell = document.getElementById(`${cellName} ${row} ${column}`);\n      cell.classList.replace(\"hit\", \"sunk\");\n      cell.textContent = \"sunk\";\n    }\n  }\n\n  targetCell.classList.add(\"clicked\");\n}\n\nfunction showPlayerShips() {\n  for (let positions of player.getShipsPositions()) {\n    for (let position of positions) {\n      if (!position) {\n        console.log(\"yes\");\n        return;\n      }\n      const cell = document.getElementById(\n        `playerCell ${position[0]} ${position[1]}`,\n      );\n      cell.classList.add(\"ship\");\n    }\n  }\n}\n\nfunction restartGame() {\n  document.querySelectorAll(\".cell\").forEach((cell) => {\n    cell.classList.remove(\"sunk\");\n    cell.classList.remove(\"hit\");\n    cell.classList.remove(\"miss\");\n    cell.classList.remove(\"ship\");\n    cell.classList.remove(\"clicked\");\n    cell.textContent = \"\";\n    player.resetBoard();\n    AI.resetBoard();\n    AI.fillBoardRandomly();\n  });\n}\n\nfunction shipsReady() {\n  for (let ship of ships) {\n    if (!ship.placed) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction placeShips(row, column, shipIndex, oriantation) {\n  player.positionShip(row, column, oriantation, shipIndex);\n  ships[shipIndex].placed = true;\n  showPlayerShips();\n}\n\nplaceShips(0, 0, 0, \"X\");\nplaceShips(1, 0, 1, \"X\");\nplaceShips(2, 0, 2, \"X\");\nplaceShips(3, 0, 3, \"X\");\nplaceShips(4, 0, 4, \"X\");\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;