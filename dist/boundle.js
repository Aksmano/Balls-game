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
exports.push([module.i, "#main {\r\n  /* width: 100vw;\r\n  height: 100vh; */\r\n  /* margin: 0 auto; */\r\n  /* padding: 0; */\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  width: 500px;\r\n  height: 500px;\r\n  flex-direction: column;\r\n  /* border: 1px solid black; */\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.tile {\r\n  display: flex;\r\n  flex: 1;\r\n  box-sizing: border-box;\r\n  border: 1px solid white;\r\n  background-color: rgb(60, 60, 60);\r\n}\r\n\r\n.ball {\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex: 1;\r\n  border: 5px solid white;\r\n  margin: 12%;\r\n  /* animation: border-unhover 0.5s ease-in-out; */\r\n}\r\n\r\n.ballPrev {\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex: 1;\r\n  /* display: inline-block;\r\n  width: 50px;\r\n  height: 50px; */\r\n  /* box-sizing: border-box; */\r\n  border: 5px solid white;\r\n  margin: 5px;\r\n}\r\n\r\n.prev {\r\n  margin: 20px;\r\n  padding: 10px;\r\n  display: flex;\r\n  width: 270px;\r\n  height: 50px;\r\n  background-color: rgb(60, 60, 60);\r\n  border-radius: 5px;\r\n  /* justify-content: center; */\r\n  /* align-items: center; */\r\n}\r\n\r\n.next {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  align-self: center;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  color: white;\r\n  display: block;\r\n  width: 120px;\r\n}\r\n\r\n.ball:hover {\r\n  /* animation: border-hover 0.5s ease-in-out; */\r\n  /* border: none; */\r\n  cursor: pointer;\r\n}\r\n\r\n.info {\r\n  width: 200px;\r\n  padding: 20px;\r\n  /* height: 120px; */\r\n  background-color: rgb(60, 60, 60);\r\n  /* border: 3px solid rgb(20, 20, 20); */\r\n  border-radius: 5px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.againButton {\r\n  width: 150px;\r\n  padding: 20px;\r\n  margin: 10px;\r\n  background-color: rgb(80, 80, 80);\r\n  border: 2px solid white;\r\n  border-radius: 5px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  color: white;\r\n  display: flex;\r\n  cursor: pointer;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.againButton:hover {\r\n  background-color: rgb(120, 120, 120);\r\n}\r\n\r\n.againButton:active {\r\n  background-color: rgb(100, 100, 100);\r\n}\r\n\r\n/* .ball:active {\r\n    border: none;\r\n} */\r\n\r\n@keyframes slide-up {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes border-hover {\r\n  0% {\r\n    border: 5px solid white;\r\n  }\r\n  100% {\r\n    border: none;\r\n  }\r\n}\r\n\r\n@keyframes border-unhover {\r\n  0% {\r\n    border: none;\r\n  }\r\n  100% {\r\n    border: 5px solid white;\r\n  }\r\n}\r\n", ""]);


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
/* harmony import */ var _bin_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bin/game */ "./src/bin/game.ts");
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/board.css */ "./src/css/board.css");
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_board_css__WEBPACK_IMPORTED_MODULE_1__);
/* TODO
    - Równanie prostej przechodzącej przez dwa punkty
    - Po kolei sprawdzamy współrzędne punktów
    - Kolizje
*/


// const main = document.createElement("div");
// main.id = "main";
var game = new _bin_game__WEBPACK_IMPORTED_MODULE_0__["default"]();


/***/ }),

/***/ "./src/bin/game.ts":
/*!*************************!*\
  !*** ./src/bin/game.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_game_funcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/game-funcs */ "./src/settings/game-funcs.ts");
/* harmony import */ var _components_ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ball */ "./src/components/ball.ts");
/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/board */ "./src/components/board.ts");
/* harmony import */ var _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/static-settings */ "./src/settings/static-settings.ts");
/* harmony import */ var _components_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/preview */ "./src/components/preview.ts");
/* harmony import */ var _components_score__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/score */ "./src/components/score.ts");
/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/info */ "./src/components/info.ts");







var Game = /** @class */ (function () {
    //   private ballArr: Array<Array<number | string>> = [];
    //   private balls: Array<Array<Ball>> = [];
    function Game() {
        this.nextColors = ["", "", ""];
        this.BoardClass = new _components_board__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.BoardClass.render();
        this.board = document.getElementById("container");
        for (var i = 0; i < 9; i++) {
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr.push([]);
            for (var j = 0; j < 9; j++)
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr[i].push(0);
        }
        for (var i = 0; i < 9; i++) {
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].balls.push([]);
            for (var j = 0; j < 9; j++)
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].balls[i].push(null);
        }
        this.drawColors();
        this.preview = new _components_preview__WEBPACK_IMPORTED_MODULE_4__["default"](this.nextColors);
        this.score = new _components_score__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.info = new _components_info__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.drawBalls();
    }
    Game.prototype.drawColors = function () {
        for (var i = 0; i < 3; i++) {
            var colorIndex = Math.round(Math.random() * 7);
            colorIndex > 6 ? colorIndex-- : null;
            this.nextColors[i] = _settings_game_funcs__WEBPACK_IMPORTED_MODULE_0__["ColorsArr"][colorIndex];
            console.log(_settings_game_funcs__WEBPACK_IMPORTED_MODULE_0__["ColorsArr"][colorIndex]);
        }
    };
    Game.prototype.drawBalls = function () {
        var _this = this;
        var counter = 0;
        for (var i = 0; i < 9; i++)
            for (var j = 0; j < 9; j++)
                if (_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr[i][j] == 0)
                    counter++;
        if (counter > 3) {
            for (var i = 0; i < 3; i++) {
                while (true) {
                    var x = Math.floor(Math.random() * 9);
                    var y = Math.floor(Math.random() * 9);
                    if (_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr[y][x] == 0) {
                        _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr[y][x] = this.nextColors[i][0].toUpperCase();
                        _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].balls[y][x] = new _components_ball__WEBPACK_IMPORTED_MODULE_1__["default"](this.nextColors[i], {
                            x: x,
                            y: y
                        });
                        var endIndex = Object(_settings_game_funcs__WEBPACK_IMPORTED_MODULE_0__["calcTileIndex"])(x + "_" + y);
                        _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].tilesList[parseInt(endIndex)].isBall = true;
                        var tile = document.getElementById(x + "_" + y + "-" + endIndex);
                        tile.appendChild(_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].balls[y][x].render());
                        break;
                    }
                }
                //   console.log(Settings.balls);
                //   console.log(Settings.ballArr);
            }
            this.drawColors();
            this.preview.setBallColors(this.nextColors);
        }
        else {
            this.info.render();
            document.body.children[1].firstElementChild.addEventListener("click", function () {
                document.body.removeChild(document.body.children[1]);
                _this.BoardClass.render();
                _this.board = document.getElementById("container");
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr = [];
                for (var i = 0; i < 9; i++) {
                    _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr.push([]);
                    for (var j = 0; j < 9; j++)
                        _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr[i].push(0);
                }
                for (var i = 0; i < 9; i++) {
                    _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].balls.push([]);
                    for (var j = 0; j < 9; j++)
                        _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].balls[i].push(null);
                }
                _this.drawColors();
                _this.preview.render();
                _this.score.render();
            });
        }
    };
    Game.prototype.checkBalls = function () {
        this.checkBallsVH();
        this.checkBallsCross();
    };
    Game.prototype.checkBallsVH = function () {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++)
                this.compareBalls({ x: i, y: j });
            this.deleteBallsAndValues();
            for (var j = 0; j < 9; j++)
                this.compareBalls({ x: j, y: i });
            this.deleteBallsAndValues();
        }
    };
    Game.prototype.checkBallsCross = function () {
        // case I:
        var j, k;
        for (var i = 4; i < 9; i++) {
            j = 0;
            while (i - j >= 0) {
                console.log(i - j, j);
                this.compareBalls({ x: i - j, y: j });
                j++;
            }
        }
        this.deleteBallsAndValues();
        // case II:
        for (var l = 1; l < 5; l++) {
            k = 0;
            j = l;
            while (j < 9) {
                console.log(8 - k, j);
                this.compareBalls({ x: 8 - k, y: j });
                j++;
                k++;
            }
        }
        this.deleteBallsAndValues();
        // case III:
        for (var i = 4; i >= 0; i--) {
            j = 0;
            while (i + j <= 8) {
                console.log(i + j, j);
                this.compareBalls({ x: i + j, y: j });
                j++;
            }
        }
        this.deleteBallsAndValues();
        // case IV:
        for (var l = 1; l < 5; l++) {
            k = 0;
            j = l;
            while (j < 9) {
                console.log(0 + k, j);
                this.compareBalls({ x: 0 + k, y: j });
                j++;
                k++;
            }
        }
        this.deleteBallsAndValues();
        console.log("Score: " + _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].scorePoints);
    };
    Game.prototype.deleteBallsAndValues = function () {
        this.removeBalls();
        _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].currLetter = "";
        _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch = [];
    };
    Game.prototype.compareBalls = function (arrCoords) {
        if (_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch.length < 5 &&
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].currLetter != _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr[arrCoords.y][arrCoords.x]) {
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].currLetter = "";
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch = [];
        }
        if (typeof _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr[arrCoords.y][arrCoords.x] == "string") {
            if (_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr[arrCoords.y][arrCoords.x] == _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].currLetter) {
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch.push(arrCoords.x + "_" + arrCoords.y);
            }
            else {
                this.removeBalls();
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].currLetter = _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr[arrCoords.y][arrCoords.x];
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch = [arrCoords.x + "_" + arrCoords.y];
            }
        }
    };
    Game.prototype.removeBalls = function () {
        console.log(_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch.length);
        if (_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch.length >= 5) {
            console.log(_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch);
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].scorePoints += _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch.length * 10;
            for (var k = 0; k < _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch.length; k++) {
                // console.log(
                //   Settings.ballArr[parseInt(isMatch[k][2])][parseInt(isMatch[k][0])]
                // );
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr[parseInt(_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch[k][2])][parseInt(_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch[k][0])] = 0;
                document
                    .getElementById(_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch[k])
                    .parentElement.removeChild(document.getElementById(_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].isMatch[k]));
            }
            document.getElementById("score").innerText = "" + _settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].scorePoints;
            console.log(_settings_static_settings__WEBPACK_IMPORTED_MODULE_3__["default"].ballArr);
        }
    };
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/components/ball.ts":
/*!********************************!*\
  !*** ./src/components/ball.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/board.css */ "./src/css/board.css");
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_board_css__WEBPACK_IMPORTED_MODULE_0__);

var Ball = /** @class */ (function () {
    function Ball(color, position) {
        this.ball = document.createElement("div");
        this._color = color;
        this.idColor = color[0].toUpperCase();
        if (position)
            this.point = position;
    }
    Object.defineProperty(Ball.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (newColor) {
            this.ball.style.backgroundColor = newColor;
        },
        enumerable: true,
        configurable: true
    });
    Ball.prototype.render = function () {
        this.ball = document.createElement("div");
        this.ball.className = "ball";
        if (this.point)
            this.ball.id = this.point.x + "_" + this.point.y;
        this.ball.style.backgroundColor = this._color;
        // ball.style.transition = "background 0.4s ease-in-out";
        return this.ball;
    };
    Ball.prototype.renderPrev = function () {
        this.ball = document.createElement("div");
        this.ball.className = "ballPrev";
        if (this.point)
            this.ball.id = this.point.x + "_" + this.point.y;
        this.ball.style.backgroundColor = this._color;
        // ball.style.transition = "background 0.4s ease-in-out";
        return this.ball;
    };
    return Ball;
}());
/* harmony default export */ __webpack_exports__["default"] = (Ball);


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
    function Board(game) {
        var _this = this;
        this._game = game;
        this.boardDiv = document.createElement("div");
        this.ballClick = function (e) {
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML.removeEventListener("click", _this.ballClick);
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML.style.border = "5px solid white";
        };
        this.endPath = function (e) {
            console.log("endPath");
            console.log(_this.path.pathIds);
            for (var i = 0; i < 9; i++) {
                var row = document.body.children[1].firstElementChild.children[i];
                for (var j = 0; j < 9; j++)
                    row.children[j].style.backgroundColor =
                        "rgb(60, 60, 60)";
            }
            if (e.target.id == _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML.id.slice(0, 3)) {
                _this.deselectBall(e);
            }
            else if ((_this.path.pathIds.length >= 0 &&
                e.target.children.length == 0) ||
                e.target.className == "ball")
                if (e.target.className == "ball" &&
                    Object(_settings_game_funcs__WEBPACK_IMPORTED_MODULE_1__["isAvailable"])({
                        x: parseInt(e.target.id.slice(0, 1)),
                        y: parseInt(e.target.id.slice(2, 3))
                    }, _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].ballArr) == true)
                    _this.changeBall(e);
                else if (_this.path.pathIds[0] == "blockError"
                // (<HTMLDivElement>e.target).className != "ball" &&
                // (<HTMLDivElement>e.target).children.length != 0
                )
                    e.target.style.backgroundColor = "rgb(255, 0, 0)";
                else if (e.target.className == "tile" &&
                    e.target.id !=
                        _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML.id.slice(0, 3) &&
                    e.target.children.length == 0)
                    _this.moveBall(e);
        };
        this.startPath = function (e) {
            if (e.target.className == "ball" &&
                Object(_settings_game_funcs__WEBPACK_IMPORTED_MODULE_1__["isAvailable"])({
                    x: parseInt(e.target.id.slice(0, 1)),
                    y: parseInt(e.target.id.slice(2, 3))
                }, _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].ballArr) == true) {
                console.log("startPath");
                var indexA = e.target.parentElement.id.slice(4, 6);
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML = e.target;
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].firstTile = _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].tilesList[parseInt(indexA)];
                e.target.style.border = "none";
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].isPathStarted = true;
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallColor = _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML.style.backgroundColor[0].toUpperCase();
                _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML.addEventListener("click", _this.ballClick);
                _this.boardDiv.removeEventListener("click", _this.startPath);
                _this.boardDiv.addEventListener("mousemove", _this.drawPath);
                _this.boardDiv.addEventListener("click", _this.endPath);
            }
        };
        this.drawPath = function (e) {
            for (var i = 0; i < 9; i++) {
                var row = document.body.children[1].firstElementChild.children[i];
                for (var j = 0; j < 9; j++)
                    row.children[j].style.backgroundColor =
                        "rgb(60, 60, 60)";
            }
            if (e.target.className == "ball" ||
                e.target.id == _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML.id ||
                e.target.id.slice(0, 3) ==
                    _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML.id ||
                e.target.children.length > 0)
                console.log("Nie masz tu swojej jurysdykcji Panie");
            else
                _this.drawAvailPath(e);
        };
    }
    Board.prototype.drawAvailPath = function (e) {
        var indexB = e.target.id.slice(4, 6);
        _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].lastTile = _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].tilesList[parseInt(indexB)];
        this.path = Object(_settings_game_funcs__WEBPACK_IMPORTED_MODULE_1__["calcPath"])({ x: _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].firstTile.x, y: _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].firstTile.y }, { x: _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].lastTile.x, y: _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].lastTile.y });
        console.log(JSON.stringify(this.path.pathIds));
        for (var i = 1; i < this.path.pathIds.length; i++)
            if (this.path.pathIds[0] == this.path.pathIds[i]) {
                this.path.pathIds = this.path.pathIds.slice(0, i);
                break;
            }
        if (this.path.pathIds[0] == "blockError")
            e.target.style.backgroundColor = "rgb(255, 0, 0)";
        else {
            e.target.style.backgroundColor = "rgb(140, 140, 140)";
            for (var i = 0; i < this.path.pathIds.length; i++) {
                var end = Object(_settings_game_funcs__WEBPACK_IMPORTED_MODULE_1__["calcTileIndex"])(this.path.pathIds[i]);
                console.log(end);
                var div = document.getElementById(this.path.pathIds[i] + ("-" + end));
                div.style.backgroundColor = "rgb(140, 140, 140)";
            }
        }
    };
    Board.prototype.deselectBall = function (e) {
        console.log("deselectBall");
        this.ballClick();
        this.boardDiv.removeEventListener("mousemove", this.drawPath);
        this.boardDiv.removeEventListener("click", this.endPath);
        this.boardDiv.addEventListener("click", this.startPath);
        _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].isPathStarted = false;
    };
    Board.prototype.changeBall = function (e) {
        console.log("changeBall");
        this.ballClick();
        var indexA = e.target.parentElement.id.slice(4, 6);
        _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML = e.target;
        _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].firstTile = _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].tilesList[parseInt(indexA)];
        _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML.style.border = "5px solid white";
        e.target.style.border = "none";
        _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].isPathStarted = true;
        _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallColor = _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML.style.backgroundColor[0].toUpperCase();
    };
    Board.prototype.moveBall = function (e) {
        var _this = this;
        console.log("moveBall");
        console.log(e.target);
        console.log(_settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML);
        e.target.appendChild(_settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML);
        _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallHTML.id = e.target.id[0] + "_" + e.target.id[2];
        for (var i = 0; i < this.path.pathIds.length; i++) {
            var end = Object(_settings_game_funcs__WEBPACK_IMPORTED_MODULE_1__["calcTileIndex"])(this.path.pathIds[i]);
            console.log(end);
            var div = document.getElementById(this.path.pathIds[i] + ("-" + end));
            div.style.backgroundColor = "rgb(200, 200, 200)";
        }
        e.target.style.backgroundColor = "rgb(200, 200, 200)";
        _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].ballArr = this.path.pathNum;
        this.path.pathNum[_settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].firstTile.y][_settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].firstTile.x] = 0;
        this.path.pathNum[_settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].lastTile.y][_settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].lastTile.x] =
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].clickedBallColor;
        console.log(_settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].ballArr);
        for (var i = 0; i < 9; i++)
            for (var j = 0; j < 9; j++)
                if (_settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].ballArr[i][j] > 0)
                    _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].ballArr[i][j] = 0;
        this.ballClick();
        this.boardDiv.removeEventListener("mousemove", this.drawPath);
        this.boardDiv.removeEventListener("click", this.endPath);
        setTimeout(function () {
            for (var i = 0; i < 9; i++) {
                var row = document.body.children[1].firstElementChild.children[i];
                for (var j = 0; j < 9; j++)
                    row.children[j].style.backgroundColor =
                        "rgb(60, 60, 60)";
            }
            _this.boardDiv.addEventListener("click", _this.startPath);
            _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].isPathStarted = false;
            _this._game.checkBalls();
            _this._game.drawBalls();
        }, 500);
    };
    Board.prototype.render = function () {
        this.boardDiv.id = "container";
        for (var i = 0; i < _settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].boardSize; i++) {
            var row = new _row__WEBPACK_IMPORTED_MODULE_0__["default"](i.toString());
            this.boardDiv.appendChild(row.render());
        }
        console.log(_settings_static_settings__WEBPACK_IMPORTED_MODULE_2__["default"].tilesList);
        this.boardDiv.addEventListener("click", this.startPath);
        var main = document.createElement("div");
        main.id = "main";
        main.appendChild(this.boardDiv);
        document.body.appendChild(main);
    };
    return Board;
}());
/* harmony default export */ __webpack_exports__["default"] = (Board);


/***/ }),

/***/ "./src/components/info.ts":
/*!********************************!*\
  !*** ./src/components/info.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_static_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/static-settings */ "./src/settings/static-settings.ts");

var Info = /** @class */ (function () {
    function Info() {
    }
    Info.prototype.render = function () {
        var div = "<div id=\"info\" class=\"info\">You end the game, your score: " + _settings_static_settings__WEBPACK_IMPORTED_MODULE_0__["default"].scorePoints + "<input type=\"submit\" class=\"againButton\" value=\"Play again\"></div>";
        document.body.children[1].innerHTML = div;
    };
    return Info;
}());
/* harmony default export */ __webpack_exports__["default"] = (Info);


/***/ }),

/***/ "./src/components/preview.ts":
/*!***********************************!*\
  !*** ./src/components/preview.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ "./src/components/ball.ts");

var Preview = /** @class */ (function () {
    //   private _ballColor: Array<string>;
    function Preview(ballColors) {
        this.balls = [];
        this.ballColors = ballColors;
        this.render();
    }
    Preview.prototype.setBallColors = function (colors) {
        for (var i = 0; i < colors.length; i++) {
            this.balls[i].color = colors[i];
        }
    };
    Preview.prototype.render = function () {
        for (var i = 0; i < 3; i++) {
            this.balls.push(new _ball__WEBPACK_IMPORTED_MODULE_0__["default"](this.ballColors[i]));
            //   this._ballColor.push(ballColors[i]);
        }
        var prev = document.createElement("div");
        prev.className = "prev";
        prev.innerHTML = "<p class='next'>Następne:</p>";
        for (var i = 0; i < 3; i++) {
            prev.appendChild(this.balls[i].renderPrev());
        }
        document.body.children[1].appendChild(prev);
    };
    return Preview;
}());
/* harmony default export */ __webpack_exports__["default"] = (Preview);


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

/***/ "./src/components/score.ts":
/*!*********************************!*\
  !*** ./src/components/score.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_static_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/static-settings */ "./src/settings/static-settings.ts");

var Score = /** @class */ (function () {
    //   private _ballColor: Array<string>;
    function Score() {
        this.score = 0;
        this.render();
    }
    Score.prototype.render = function () {
        var score = document.createElement("div");
        score.className = "prev";
        score.innerHTML = "<p class='next'>Wynik:<div id='score' class='next sc'>" + _settings_static_settings__WEBPACK_IMPORTED_MODULE_0__["default"].scorePoints + "</div></p>";
        document.body.children[1].appendChild(score);
    };
    return Score;
}());
/* harmony default export */ __webpack_exports__["default"] = (Score);


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
/*! exports provided: ColorsArr, Colors, signArr, pathArr, controlM, findCoefficients, findTileY, calcTileIndex, calcPath, isAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsArr", function() { return ColorsArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signArr", function() { return signArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathArr", function() { return pathArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlM", function() { return controlM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCoefficients", function() { return findCoefficients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findTileY", function() { return findTileY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcTileIndex", function() { return calcTileIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcPath", function() { return calcPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAvailable", function() { return isAvailable; });
/* harmony import */ var _static_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-settings */ "./src/settings/static-settings.ts");

var ColorsArr = [
    "crimson",
    "orange",
    "indigo",
    "sienna",
    "magenta",
    "green",
    "dodgerblue"
];
var Colors;
(function (Colors) {
    Colors["firebrick"] = "F";
    Colors["darkturquise"] = "D";
    Colors["lightseagreen"] = "L";
    Colors["yellow"] = "Y";
    Colors["magenta"] = "M";
    Colors["green"] = "G";
    Colors["teal"] = "T";
})(Colors || (Colors = {}));
var signArr = [];
var pathArr = [];
var controlM = false;
var recursionControl = 0;
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
var calcTileIndex = function (tileId) {
    var indexEnd = (parseInt(tileId[2]) * 9 + parseInt(tileId[0])).toString();
    var end;
    parseInt(indexEnd) < 10 ? (end = "0" + indexEnd) : (end = indexEnd);
    return end;
};
var calcPath = function (pointA, pointB) {
    signArr = [];
    pathArr = [];
    controlM = false;
    for (var i = 0; i < 9; i++) {
        signArr.push([]);
        for (var j = 0; j < 9; j++)
            _static_settings__WEBPACK_IMPORTED_MODULE_0__["default"].ballArr[i][j] == 0
                ? (signArr[i][j] = 0)
                : (signArr[i][j] = _static_settings__WEBPACK_IMPORTED_MODULE_0__["default"].ballArr[i][j]);
    }
    for (var i = 0; i < 9; i++) {
        pathArr.push([]);
        for (var j = 0; j < 9; j++)
            pathArr[i].push([]);
    }
    signArr[pointA.y][pointA.x] = "A";
    signArr[pointB.y][pointB.x] = "Z";
    recursionControl = 0;
    if (isAvailable(pointB, signArr))
        return calcArrayNums(0, pointA, pointB, signArr, pathArr);
    return { pathNum: signArr, pathIds: [] };
};
var calcArrayNums = function (recursionCounter, pointA, pointB, arr, arrIds) {
    if (pointA.y < pointB.y)
        for (var i = 0; i < 9; i++)
            if (pointA.x < pointB.x)
                for (var j = 0; j < 9; j++)
                    createPathNums({ i: i, j: j }, arr, arrIds);
            else
                for (var j = 8; j >= 0; j--)
                    createPathNums({ i: i, j: j }, arr, arrIds);
    else
        for (var i = 8; i >= 0; i--)
            if (pointA.x < pointB.x)
                for (var j = 0; j < 9; j++)
                    createPathNums({ i: i, j: j }, arr, arrIds);
            else
                for (var j = 8; j >= 0; j--)
                    createPathNums({ i: i, j: j }, arr, arrIds);
    for (var i = 1; i < pathArr[pointB.y][pointB.x].length; i++)
        if (pathArr[pointB.y][pointB.x][0] == pathArr[pointB.y][pointB.x][i]) {
            pathArr[pointB.y][pointB.x] = pathArr[pointB.y][pointB.x].slice(0, i + 1);
            break;
        }
    try {
        if (arrIds[pointB.y][pointB.x].length == 0)
            try {
                if (recursionCounter < 15) {
                    console.log("recursion lvl: ", recursionCounter);
                    recursionCounter++;
                    calcArrayNums(recursionCounter, pointA, pointB, arr, arrIds);
                }
                else {
                    console.log("a tu?");
                    recursionControl = 15;
                }
            }
            catch (err) {
                console.log(err);
            }
    }
    catch (err) {
        console.log(err);
    }
    console.log("tutaj?", recursionCounter, recursionControl);
    if (recursionControl == 0) {
        var newPathArrays = {
            pathNum: arr,
            pathIds: arrIds[pointB.y][pointB.x]
        };
        return newPathArrays;
    }
    else {
        var newPathArrays = {
            pathNum: arr,
            pathIds: ["blockError"]
        };
        return newPathArrays;
    }
};
var createPathNums = function (index, arr, arrIds) {
    if (arr[index.i][index.j] == "A")
        assignValues(1, { i: index.i, j: index.j }, arr, arrIds);
    // if (controlM) break;
    else if (arr[index.i][index.j] > 0)
        assignValues(arr[index.i][index.j] + 1, { i: index.i, j: index.j }, arr, arrIds);
    // if (controlM) break;
};
var isAvailable = function (point, arr) {
    var isAvail = 0;
    isAvail += isColorNext(point, { x: 1, y: 0 }, arr);
    isAvail += isColorNext(point, { x: -1, y: 0 }, arr);
    isAvail += isColorNext(point, { x: 0, y: -1 }, arr);
    isAvail += isColorNext(point, { x: 0, y: 1 }, arr);
    if (isAvail == 4)
        return false;
    return true;
};
var isColorNext = function (point, shift, arr) {
    // console.log(point.y - shift.y, point.x - shift.x);
    // console.log(arr[point.y - shift.y][point.x - shift.x]);
    try {
        if (arr[point.y - shift.y][point.x - shift.x] == undefined ||
            typeof arr[point.y - shift.y][point.x - shift.x] == "string")
            return 1;
    }
    catch (err) {
        console.log(err);
        return 1;
    }
    return 0;
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
            arr[index.i - shift.i][index.j - shift.j] == "Z") {
            if (arr[index.i - shift.i][index.j - shift.j] != "Z")
                arr[index.i - shift.i][index.j - shift.j] = val;
            if (arr[index.i][index.j] == "A")
                arrIds[index.i - shift.i][index.j - shift.j].push(index.j + "_" + index.i);
            else {
                // console.log(arrIds[index.i][index.j]);
                arrIds[index.i - shift.i][index.j - shift.j] = arrIds[index.i - shift.i][index.j - shift.j].concat(arrIds[index.i][index.j]);
                arrIds[index.i - shift.i][index.j - shift.j].push(index.j + "_" + index.i);
            }
        }
        // if (arr[index.i - shift.i][index.j - shift.j] == "Z") controlM = true;
    }
    catch (err) {
        // console.log(err);
        // console.log(arr);
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
    Settings.ballArr = [];
    Settings.balls = [];
    Settings.scorePoints = 0;
    Settings.currLetter = "";
    Settings.isMatch = [];
    return Settings;
}());
/* harmony default export */ __webpack_exports__["default"] = (Settings);


/***/ })

/******/ });
//# sourceMappingURL=boundle.js.map