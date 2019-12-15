/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/board.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/board.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = module.exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* body {\n  margin: 0 auto;\n  padding: 0;\n} */\n\n#main {\n  /* width: 100vw;\n  height: 100vh; */\n  /* margin: 0 auto; */\n  /* padding: 0; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#container {\n  display: flex;\n  width: 500px;\n  height: 500px;\n  flex: 9;\n  flex-direction: column;\n  border: 1px solid black;\n}\n\n.row {\n  display: flex;\n  flex: 1;\n}\n\n.tile {\n  display: flex;\n  flex: 1;\n  box-sizing: border-box;\n  border: 1px solid black;\n}\n\n.ball {\n  border-radius: 50%;\n  display: flex;\n  flex: 0.8;\n  border: 1px solid black;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/board */ "./src/components/board.ts");
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/board.css */ "./src/css/board.css");
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_board_css__WEBPACK_IMPORTED_MODULE_1__);
/* TODO
    - Równanie prostej przechodzącej przez dwa punkty
    - Po kolei sprawdzamy współrzędne punktów
    - Kolizje
*/


var main = document.createElement("div");
main.id = "main";
var board = new _components_board__WEBPACK_IMPORTED_MODULE_0__["default"]();
main.appendChild(board.render());
document.body.appendChild(main);


/***/ }),

/***/ "./src/components/board.ts":
/*!*********************************!*\
  !*** ./src/components/board.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row */ "./src/components/row.ts");
/* harmony import */ var _settings_game_funcs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/game-funcs */ "./src/settings/game-funcs.ts");
/* harmony import */ var _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/static-settings */ "./src/settings/static-settings.ts");
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/board.css */ "./src/css/board.css");
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_board_css__WEBPACK_IMPORTED_MODULE_3__);




var Board = /** @class */ (function () {
    function Board() {
        var _this = this;
        this.boardDiv = document.createElement("div");
        this.startPath = function (e) {
            var indexA = e.target.id.slice(4, 6);
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].firstTile = _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].tilesList[parseInt(indexA)];
            e.target.style.backgroundColor = "pink";
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].isPathStarted = true;
            // calcPath(
            //   { x: Settings.firstTile.x, y: Settings.firstTile.y },
            //   { x: 4, y: 4 }
            // );
            _this.boardDiv.removeEventListener("click", _this.startPath);
            _this.boardDiv.addEventListener("mousemove", _this.drawPath);
        };
        this.drawPath = function (e) {
            var indexB = e.target.id.slice(4, 6);
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].lastTile = _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].tilesList[parseInt(indexB)];
            console.log(_settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].lastTile);
            _this.path = Object(_settings_game_funcs__WEBPACK_IMPORTED_MODULE_1__["calcPath"])({ x: _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].firstTile.x, y: _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].firstTile.y }, { x: _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].lastTile.x, y: _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].lastTile.y });
            for (var i = 0; i < 9; i++) {
                var row = document.body.lastElementChild.firstElementChild.children[i];
                for (var j = 0; j < 9; j++)
                    row.children[j].style.backgroundColor = "white";
            }
            e.target.style.backgroundColor = "pink";
            for (var i = 0; i < _this.path.pathIds.length; i++) {
                var indexEnd = (parseInt(_this.path.pathIds[i][2]) * 9 +
                    parseInt(_this.path.pathIds[i][0])).toString();
                var end = void 0;
                parseInt(indexEnd) < 10 ? (end = "0" + indexEnd) : (end = indexEnd);
                console.log(end);
                var div = document.getElementById(_this.path.pathIds[i] + ("-" + end));
                div.style.backgroundColor = "pink";
            }
            // let coeff = findCoefficients(
            //   { x: Settings.firstTile.x, y: Settings.firstTile.y },
            //   { x: Settings.lastTile.x, y: Settings.lastTile.y }
            // );
            // console.log(coeff);
            // for (let x = 0; x < 9; x++) {
            //   let y: number = Math.round(findTileY(x, { a: coeff.a, b: coeff.b }));
            //   console.log(y);
            //   y <= Settings.lastTile.y
            //     ? console.log("mniejsze")
            //     : console.log("wieksze");
            // }
            // (<HTMLDivElement>e.target).style.backgroundColor = "pink";
        };
    }
    Board.prototype.render = function () {
        this.boardDiv.id = "container";
        for (var i = 0; i < _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].boardSize; i++) {
            var row = new _row__WEBPACK_IMPORTED_MODULE_0__["default"](i.toString());
            this.boardDiv.appendChild(row.render());
        }
        console.log(_settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].tilesList);
        this.boardDiv.addEventListener("click", this.startPath);
        return this.boardDiv;
    };
    return Board;
}());
/* harmony default export */ __webpack_exports__["default"] = (Board);


/***/ }),

/***/ "./src/components/row.ts":
/*!*******************************!*\
  !*** ./src/components/row.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./src/components/tile.ts");
/* harmony import */ var _settings_static_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/static-settings */ "./src/settings/static-settings.ts");
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/board.css */ "./src/css/board.css");
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_board_css__WEBPACK_IMPORTED_MODULE_2__);



var Row = /** @class */ (function () {
    function Row(rowId) {
        this.id = rowId;
    }
    Row.prototype.render = function () {
        var row = document.createElement("div");
        row.className = "row";
        for (var i = 0; i < _settings_static_settings__WEBPACK_IMPORTED_MODULE_1__["default"].boardSize; i++) {
            var tile = new _tile__WEBPACK_IMPORTED_MODULE_0__["default"](i, parseInt(this.id), _settings_static_settings__WEBPACK_IMPORTED_MODULE_1__["default"].indexNum);
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_1__["default"].indexNum++;
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_1__["default"].tilesList.push(tile);
            row.appendChild(tile.render());
        }
        return row;
    };
    return Row;
}());
/* harmony default export */ __webpack_exports__["default"] = (Row);


/***/ }),

/***/ "./src/components/tile.ts":
/*!********************************!*\
  !*** ./src/components/tile.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/board.css */ "./src/css/board.css");
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_board_css__WEBPACK_IMPORTED_MODULE_0__);

var Tile = /** @class */ (function () {
    function Tile(tileNum, rowNum, index) {
        this.id = tileNum + "_" + rowNum + "-" + (index < 10 ? "0" + index : index);
        this.x = tileNum;
        this.y = rowNum;
        this.index = index;
        this.isBall = false;
        this.isStart = false;
    }
    Tile.prototype.randomizeColor = function () {
        return "rgb(" + Math.random() * 255 + ", " + Math.random() *
            255 + ", " + Math.random() * 255 + ")";
    };
    Tile.prototype.render = function () {
        var tile = document.createElement("div");
        tile.className = "tile";
        tile.id = this.id;
        // tile.nodeValue = this.id
        // tile.style.backgroundColor = this.randomizeColor();
        return tile;
    };
    return Tile;
}());
/* harmony default export */ __webpack_exports__["default"] = (Tile);


/***/ }),

/***/ "./src/css/board.css":
/*!***************************!*\
  !*** ./src/css/board.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./board.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/board.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/settings/game-funcs.ts":
/*!************************************!*\
  !*** ./src/settings/game-funcs.ts ***!
  \************************************/
/*! exports provided: Colors, signArr, pathArr, controlM, findCoefficients, findTileY, calcPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signArr", function() { return signArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathArr", function() { return pathArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlM", function() { return controlM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCoefficients", function() { return findCoefficients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findTileY", function() { return findTileY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcPath", function() { return calcPath; });
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["cyan"] = 1] = "cyan";
    Colors[Colors["green"] = 2] = "green";
    Colors[Colors["yellow"] = 3] = "yellow";
    Colors[Colors["violet"] = 4] = "violet";
    Colors[Colors["orange"] = 5] = "orange";
    Colors[Colors["pink"] = 6] = "pink";
})(Colors || (Colors = {}));
var signArr = [];
var pathArr = [];
var controlM = false;
var findCoefficients = function (pointA, pointB) {
    var newCoefficient = { a: 0, b: 0 };
    newCoefficient.a = -(pointA.y - pointB.y) / (pointA.x - pointB.x);
    newCoefficient.b = newCoefficient.a * pointA.x - pointA.y;
    return newCoefficient;
};
var findTileY = function (x, coefficient) {
    var y = Math.round(coefficient.a * x + coefficient.b);
    console.log(y);
    return y;
};
var calcPath = function (pointA, pointB) {
    signArr = [];
    pathArr = [];
    controlM = false;
    for (var i = 0; i < 9; i++)
        signArr.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    for (var i = 0; i < 9; i++) {
        pathArr.push([]);
        for (var j = 0; j < 9; j++)
            pathArr[i].push([]);
    }
    signArr[pointA.y][pointA.x] = "S";
    // pathArr[pointA.y][pointA.x].push(`${pointA.y}_${pointA.x}`);
    signArr[pointB.y][pointB.x] = "M";
    if (pointA.y < pointB.y) {
        for (var i = 0; i < 9; i++) {
            if (pointA.x < pointB.x)
                for (var j = 0; j < 9; j++)
                    createPathNums({ i: i, j: j }, signArr, pathArr);
            else
                for (var j = 8; j >= 0; j--)
                    createPathNums({ i: i, j: j }, signArr, pathArr);
            if (controlM)
                break;
        }
    }
    else {
        for (var i = 8; i >= 0; i--) {
            if (pointA.x < pointB.x)
                for (var j = 0; j < 9; j++)
                    createPathNums({ i: i, j: j }, signArr, pathArr);
            else
                for (var j = 8; j >= 0; j--)
                    createPathNums({ i: i, j: j }, signArr, pathArr);
            if (controlM)
                break;
        }
    }
    var newPathArrays = {
        pathNum: signArr,
        pathIds: pathArr[pointB.y][pointB.x]
    };
    return newPathArrays;
};
var createPathNums = function (index, arr, arrIds) {
    if (arr[index.i][index.j] == "S")
        assignValues(1, { i: index.i, j: index.j }, arr, arrIds);
    // if (controlM) break;
    else if (arr[index.i][index.j] > 0)
        assignValues(arr[index.i][index.j] + 1, { i: index.i, j: index.j }, arr, arrIds);
    // if (controlM) break;
};
var assignValues = function (val, index, arr, arrIds) {
    assignNewValue(val, index, arr, arrIds, { i: 1, j: 0 });
    assignNewValue(val, index, arr, arrIds, { i: -1, j: 0 });
    assignNewValue(val, index, arr, arrIds, { i: 0, j: 1 });
    assignNewValue(val, index, arr, arrIds, { i: 0, j: -1 });
};
var assignNewValue = function (val, index, arr, arrIds, shift) {
    try {
        if (arr[index.i - shift.i][index.j - shift.j] == 0 ||
            arr[index.i - shift.i][index.j - shift.j] == "M") {
            if (arr[index.i - shift.i][index.j - shift.j] != "M")
                arr[index.i - shift.i][index.j - shift.j] = val;
            if (arr[index.i][index.j] == "S")
                arrIds[index.i - shift.i][index.j - shift.j].push(index.j + "_" + index.i);
            else {
                console.log(arrIds[index.i][index.j]);
                arrIds[index.i - shift.i][index.j - shift.j] = arrIds[index.i - shift.i][index.j - shift.j].concat(arrIds[index.i][index.j]);
                arrIds[index.i - shift.i][index.j - shift.j].push(index.j + "_" + index.i);
            }
        }
        if (arr[index.i - shift.i][index.j - shift.j] == "M")
            controlM = true;
    }
    catch (err) {
        console.log(err);
        console.log(arr);
    }
};


/***/ }),

/***/ "./src/settings/static-settings.ts":
/*!*****************************************!*\
  !*** ./src/settings/static-settings.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Settings.isPathStarted = false;
    Settings.boardSize = 9;
    Settings.indexNum = 0;
    Settings.tilesList = [];
    Settings.tilesFields = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    return Settings;
}());
/* harmony default export */ __webpack_exports__["default"] = (Settings);


/***/ })

/******/ });
//# sourceMappingURL=boundle.js.map