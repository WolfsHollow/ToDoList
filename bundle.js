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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Main Page Setup */\\n\\n#content {\\n    background-color: green;\\n    display: flex;\\n    flex-flow: column;\\n    width: 100vw;\\n    height: 100vh;\\n}\\n\\n.title {\\n    background-color: black;\\n    width: 100vw;\\n    height: 10%;\\n    color: white;\\n    font-size: 4rem;\\n}\\n\\n.contentWrapper { /* Main content */\\n    background-color: green;\\n    width: 100%;\\n    height: 90%;\\n    display: flex;\\n    flex-flow: row;\\n}\\n\\n.navWrapper {\\n    background-color: grey;\\n    color: black;\\n    font-size: 1.5rem;\\n    width: 15%;\\n    height: auto;\\n    display: flex;\\n    align-content: center;\\n    align-items: center;\\n    border: 3px solid black;\\n    flex-flow: column;\\n    padding-top: 5px;\\n}\\n\\n.navButtonsWrapper{\\n    font-size: 2rem;\\n    text-align: center;\\n    /* border: 2px solid white; */\\n    display: flex;\\n    flex-flow: column;\\n    gap: 10px;\\n    padding-bottom: 10px;\\n}\\n\\n\\n.navButton{\\n    border: 2px solid black;\\n    font-size: 2rem;\\n}\\n\\n.navButton:hover {\\n    background-color: white;\\n}\\n\\n.projectWrapper{\\n    font-size: 2.7rem;\\n    border: 2px solid white;\\n    width: 100%;\\n    height: 100%;\\n    text-align: center;\\n    gap: 10px;\\n}\\n\\n.listWrapper {\\n    background-color: lightgray;\\n    color: black;\\n    font-size: 2.5rem;\\n    width: 85%;\\n    height: auto;\\n}\\n\\n.navProjectDiv{\\n    background-color: white;\\n    font-size: 2rem;\\n    height: 30px;\\n}\\n\\n.navProjectDiv:hover{\\n  background-color: blue;\\n}\\n\\n/* Project div */\\n\\n.divWrapper{\\n    height: 100px;\\n    width: 100%;\\n    display: flex; \\n    flex-flow: row;\\n    align-items: center;\\n    justify-content: center;\\n    background-color: grey;\\n    border: 2px solid green;\\n}\\n\\n.nameDiv,\\n.descriptionDiv,\\n.priorityDiv,\\n.dateDiv,\\n.dueDateDiv{\\n  color: white;\\n  font-size: 2rem;\\n  height: 80px;\\n  widtH: 500px;\\n  border: 2px solid white;\\n  text-align: center;\\n  line-height: 80px;\\n}\\n\\n.addButton{\\n  width: 40px;\\n  height: 40px;\\n  border-radius: 25px;\\n  background-color: white;\\n  color: black;\\n}\\n\\n.addTask:hover {\\n  background-color: green;\\n}\\n\\n.newTaskScreen {\\n  display: none;\\n  position: fixed;\\n  top: 10%;\\n  left: 18%;\\n  right: 0;\\n  bottom: 0;  \\n  justify-content: center;\\n  align-items: center;\\n  color: white;\\n  font-size: 5rem;\\n  flex-direction: column;\\n}\\n\\nfieldset{\\n  background-color: grey;\\n}\\n\\n.show {\\n  display: flex;\\n}\\n\\n.newTaskScreen.show {\\n  display:flex;\\n}\\n\\n.wrapper{\\n  height: 150px;\\n  width: 150px;\\n  border: 2px solid black;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\ninput[type=text] {\\n  width: 100px;\\n  -webkit-transition: width .35s ease-in-out;\\n  transition: width .35s ease-in-out;\\n}\\ninput[type=text]:focus {\\n  width: 250px;\\n}\\n\\n.submit {\\n  font-size: 1rem;\\n  color: black;\\n  height: 50px;\\n  width: 350px;\\n}\\n\\nlabel {\\n  color: white;\\n  font-size: 2rem;\\n}\\n\\nlegend {\\n    background-color: #000;\\n    color: #fff;\\n    padding: 3px 6px;\\n    font-size: 3rem;\\n}\\n\\n.inputGroup{\\n  margin-left: 15%;   \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ToDoList/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ToDoList/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ToDoList/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ToDoList/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\n\n//To do list:\n// *******5. Local storage\n// 1. resize task divs\n// 2. add a remove task button\n// 3. make tasks editable \n// 4. sort by date/name (inbox/today/this week as well)\n// 6. Make it look nice\n// 7. be able to check items off\n\n//#region Initialize global variables, DOM stuff, and buttons; set up nav\n\nconst page = document.getElementById('content');\n\nconst title = document.createElement('div');\nconst contentWrapper = document.createElement('div');\nconst navWrapper = document.createElement('div');\nconst listWrapper = document.createElement('div');\nconst newTaskScreen = document.getElementById('newTaskScreen');\n\nconst taskSubmitBtn = document.getElementById('taskSubmitButton');\ntaskSubmitBtn.addEventListener('click', (x) => {createNewTask()});\n\nconst newTaskName = document.getElementById('name');\nconst newTaskDescription = document.getElementById('description');\nconst newTaskDate = document.getElementById('date');\nconst newTaskNotes = document.getElementById('notes');\nconst newTaskPriority = document.getElementById('priority');\nconst addNewProjectButton = document.createElement('div');\nlet isFormActive = false;\nconst addNewTaskButton = document.createElement('div');\n\nconst projectWrapper = setupNav();\n\n//#endregion\n\nclass Task{\n    constructor(name, description, dueDate, notes, priority){\n        this.name = name;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.notes = notes;\n        this.priority = priority;\n        this.div = null;\n    }\n\n    toJSON(){\n        return this;\n    }\n\n    get projectNode(){\n        return this.projectNodeDiv;\n    }\n    set projectNode(projectNodeDiv){\n        this.projectNodeDiv = projectNodeDiv; \n    }\n}\n\nclass Project{\n    constructor(name){\n        this.name = name;\n        this.taskObjList = [];\n        this.taskDivList = [];\n    }\n\n    // print(){\n    //     console.log('hello world');\n    // }\n\n    toJSON(){\n        return this;\n    }\n\n    addTaskDiv(task){\n        this.taskDivList.push(task);\n    }\n    addTaskObj(task){\n        this.taskObjList.push(task);\n    }\n    populateTaskDivs(){\n        let list = this.taskDivList;\n        \n        console.log(`the list is`);\n        console.log(list);\n        while (listWrapper.firstChild){\n            listWrapper.removeChild(listWrapper.firstChild);\n        }\n        for (let i=0; i< list.length; i++){\n            listWrapper.appendChild(list[i]);\n        }\n        listWrapper.appendChild(addNewTaskButton);\n    }\n}\nlet projectArray = [];\nlet currentProject = null;\n\npage.classList.add('page');\ntitle.classList.add('title');\ncontentWrapper.classList.add('contentWrapper');\nnavWrapper.classList.add('navWrapper');\nlistWrapper.classList.add('listWrapper');\n\naddNewProjectButton.classList.add('addButton');\naddNewProjectButton.addEventListener('click', (x)=>{addProjectNav(x)});\naddNewTaskButton.classList.add('addButton');\naddNewTaskButton.addEventListener('click', (x) => {addNewTask(x)});\n\npage.append(newTaskScreen, title, contentWrapper);\ncontentWrapper.append(navWrapper, listWrapper);\n\ntitle.textContent = 'To Do List';\n\n// local storage check\nif (localStorage.length == 0){\n    // load as normal\n    console.log('aint nothing here chief');\n    createNewProject('default');\n}\nelse {\n    // localStorage.clear();\n\n    let JSON_ProjectArray = JSON.parse(localStorage.projectArray);\n    // console.log(JSON_ProjectArray);\n    projectArray = projectStringToObject(JSON_ProjectArray);\n    currentProject = projectArray[0];\n    // console.log(`current json Project is`);\n    // console.log(currentProject);\n    // console.log(projectArray[0].print());\n    // console.log(projectArray);\n    populateProjects(projectArray);\n\n}\n\nfunction projectStringToObject(JSONArray){\n    let length = JSONArray.length;\n    let taskLength, objList;\n    let htmlList =[];\n    for (let i = 0; i < length; i++){\n        JSONArray[i] = Object.setPrototypeOf(JSONArray[i], Project.prototype); \n        objList = JSONArray[i].taskObjList;\n        taskLength = objList.length;\n        console.log(`task list below`, objList)\n        // console.log(`populating`);\n        for (let j = 0; j< taskLength; j++){\n            objList[j] = Object.setPrototypeOf(objList[j], Task.prototype);\n            htmlList.push(objList[j].div); // get html into an array to create new divs for\n            // console.log(`index ${i} ${j}`);\n        }        \n        console.log(JSONArray[i]);\n        JSONArray[i].taskDivList = populateTaskDivList(htmlList); // repopulate taskDivList for class object  \n        console.log(JSONArray[i].name);\n        console.log(JSONArray[i].taskObjList);        \n    }\n    return JSONArray;\n}\n\nfunction setupNav(){ // sets up navigation panel on the left and adds AddNew buttons\n    \n    const navButtonsWrapper = document.createElement('div');\n        const inbox = document.createElement('div');\n        const today = document.createElement('div');\n        const week = document.createElement('div');   \n    const projectWrapper = document.createElement('div'); \n\n    navButtonsWrapper.classList.add('navButtonsWrapper');\n    inbox.classList.add('navButton');\n    inbox.addEventListener('click', ()=>{changePage(inbox)});\n    today.classList.add('navButton');\n    today.addEventListener('click', ()=>{changePage(today)});\n    week.classList.add('navButton');\n    week.addEventListener('click', ()=>{changePage(week)});\n\n    projectWrapper.classList.add('projectWrapper');\n\n    navWrapper.appendChild(navButtonsWrapper);\n    navWrapper.appendChild(projectWrapper);\n\n    navButtonsWrapper.appendChild(inbox);\n    navButtonsWrapper.appendChild(today);\n    navButtonsWrapper.appendChild(week);\n\n    inbox.textContent = 'Inbox';\n    today.textContent = 'Today';\n    week.textContent = 'This Week';\n\n    projectWrapper.textContent = 'Projects';\n\n    projectWrapper.appendChild(addNewProjectButton);  \n    listWrapper.appendChild(addNewTaskButton);\n    \n    return projectWrapper;\n}\n\nfunction changePage(node){\n    console.log('hello this works');\n}\n\nfunction addNewTaskDiv(classObject){ // creates div for task defined by input\n    let newDivWrapper = document.createElement('div');\n    let nameDiv = document.createElement('div');\n    let descriptionDiv = document.createElement('div');\n    let dueDateDiv = document.createElement('div');\n    let priorityDiv = document.createElement('div');\n\n    nameDiv.textContent = classObject.name;\n    descriptionDiv.textContent = classObject.description;\n    dueDateDiv.textContent = classObject.dueDate;\n    priorityDiv.textContent = classObject.priority;\n\n    newDivWrapper.classList.add('divWrapper');\n    nameDiv.classList.add('nameDiv');\n    descriptionDiv.classList.add('descriptionDiv');\n    dueDateDiv.classList.add('dueDateDiv');\n    priorityDiv.classList.add('priorityDiv');\n \n    newDivWrapper.append(nameDiv);\n    newDivWrapper.append(descriptionDiv);\n    newDivWrapper.append(dueDateDiv);\n    newDivWrapper.append(priorityDiv);\n  \n    classObject.projectNode = newDivWrapper;\n\n    return newDivWrapper;\n}\n\nfunction addNewTask(){ // brings up form to create new task\n    let classTask = newTaskScreen.classList;\n    if (classTask.contains('show')){  \n      newTaskScreen.classList.remove('show');\n    }\n    else {newTaskScreen.classList.add('show');}\n}\n  \nfunction addProjectNav(target){ // brings up form to create new project and creates it\n    if (isFormActive == false){\n        isFormActive = true;\n        let newProjectForm = document.createElement('form');\n        let newProjectInput = document.createElement('input');\n        newProjectForm.onsubmit = () => {createNewProject(newProjectInput.value);\n                                        projectWrapper.removeChild(newProjectForm);\n                                        projectWrapper.removeChild(addNewProjectButton);\n                                        projectWrapper.appendChild(addNewProjectButton);\n                                        isFormActive = false;\n                                        return false};\n        projectWrapper.appendChild(newProjectForm);\n        newProjectForm.appendChild(newProjectInput);\n    }    \n}\n\nfunction createNewProject(value){ // makes new project from input and adds click event\n    let newProject = new Project(value);\n    // if (projectArray == ''){\n    //     currentProject = newProject;\n    // }\n\n    currentProject = newProject;\n\n    projectArray.push(newProject);\n    localStorage.setItem('projectArray', JSON.stringify(projectArray));\n    console.log('added to storage');\n    console.log(localStorage.projectArray);\n\n    let newProjectNavDiv = document.createElement('div');\n    newProjectNavDiv.innerText = value;\n    newProjectNavDiv.value = 'test value';\n    newProjectNavDiv.project = newProject;\n    newProjectNavDiv.addEventListener('click', (e)=>{ let divProject = e.target.project;\n                                                      currentProject = divProject;\n                                                      divProject.populateTaskDivs();\n                                                      });\n    newProjectNavDiv.classList.add('navProjectDiv');\n    projectWrapper.removeChild(addNewProjectButton);\n    projectWrapper.appendChild(newProjectNavDiv);\n    projectWrapper.appendChild(addNewProjectButton);\n}\n\nfunction populateProjects(projectArray){\n\n    let projLength = projectArray.length;\n\n    for (let i = 0; i < projLength; i++){\n        let newProjectNavDiv = document.createElement('div');\n\n        newProjectNavDiv.innerText = projectArray[i].name\n        newProjectNavDiv.value = 'test value';\n        newProjectNavDiv.project = projectArray[i];\n        newProjectNavDiv.addEventListener('click', (e)=>{  \n                                                        let divProject = e.target.project;\n                                                        currentProject = divProject;\n                                                        console.log(currentProject);\n                                                        currentProject.populateTaskDivs();\n                                                        });\n        newProjectNavDiv.classList.add('navProjectDiv');\n        projectWrapper.removeChild(addNewProjectButton);\n        projectWrapper.appendChild(newProjectNavDiv);\n        projectWrapper.appendChild(addNewProjectButton);\n    }    \n}\n\nfunction populateTaskDivList(outerHTMLArray){\n    let newDivArray = [];\n    let newDiv;\n    let length = outerHTMLArray.length;\n    // console.log('outerhtml array is');\n    // console.log(outerHTMLArray);\n    let newDivWrapper = document.createElement('div');\n    console.log(`populating`);\n    for (let i = 0; i< length; i++){\n        newDiv = document.createElement('div');\n        newDivWrapper.appendChild(newDiv);\n        newDivWrapper.children[i].outerHTML = outerHTMLArray[i];\n        // console.log(`outerhtml is`, newDivWrapper.children[i].outerHTML);\n        // console.log(`the ${i}-th child of the wrapper is`, newDivWrapper.children[i]);\n        newDivArray.push(newDivWrapper.children[i]);\n        console.log(`index ${i}`);\n    }\n    // console.log(`the new div array is`, newDivArray);\n    return newDivArray;    \n}\n\nfunction createNewTask(){ \n    let newTask = new Task(newTaskName.value, \n                            newTaskDescription.value,\n                            newTaskDate.value,\n                            newTaskNotes.value,\n                            newTaskPriority.value);\n    let newDiv = addNewTaskDiv(newTask)\n    newTask.div = newDiv.outerHTML;\n    newTaskScreen.classList.remove('show');\n    currentProject.addTaskObj(newTask);\n    currentProject.addTaskDiv(newDiv); \n    console.log(`currentproject taskdivlist is`, currentProject.taskDivList);\n    localStorage.setItem('projectArray', JSON.stringify(projectArray));\n    console.log(`current project is`)\n    console.log(currentProject);\n    listWrapper.appendChild(newDiv);\n    listWrapper.removeChild(addNewTaskButton);\n    listWrapper.appendChild(addNewTaskButton);\n}\n\n//# sourceURL=webpack://ToDoList/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createClassDiv)\n/* harmony export */ });\nfunction createClassDiv(classObject){\n    let newDivWrapper = document.createElement('div');\n    let nameDiv = document.createElement('div');\n    let descriptionDiv = document.createElement('div');\n    let dueDateDiv = document.createElement('div');\n    let priorityDiv = document.createElement('div');\n\n    nameDiv.textContent = classObject.name;\n    descriptionDiv.textContent = classObject.description;\n    dueDateDiv.textContent = classObject.dueDate;\n    priorityDiv.textContent = classObject.priority;\n\n    newDivWrapper.classList.add('divWrapper');\n    nameDiv.classList.add('nameDiv');\n    descriptionDiv.classList.add('descriptionDiv');\n    dueDateDiv.classList.add('dueDateDiv');\n    priorityDiv.classList.add('priorityDiv');\n\n    newDivWrapper.append(nameDiv);\n    newDivWrapper.append(descriptionDiv);\n    newDivWrapper.append(dueDateDiv);\n    newDivWrapper.append(priorityDiv);\n\n    return newDivWrapper;\n}\n\n//# sourceURL=webpack://ToDoList/./src/project.js?");

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