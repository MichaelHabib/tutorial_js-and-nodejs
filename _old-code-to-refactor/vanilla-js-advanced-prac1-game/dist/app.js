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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules_local/debugdump/index.js":
/*!***********************************************!*\
  !*** ./node_modules_local/debugdump/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var dd = function (message) {

    console.log(message);

}
/* harmony default export */ __webpack_exports__["default"] = (dd);


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debugdump__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debugdump */ "./node_modules_local/debugdump/index.js");

var gamePlaySpeed = 1000;
var gameMainLoopSpeed = 100;

var factoryTemplate = function factoryTemplate(id, title) {
  var name = title.toLowerCase().replace(/[ _.]/g, '-'); // let data = {
  //     id: id,
  //     name: name,
  // };

  var factoryWrapperEl = document.createElement('div');
  var titleEl = document.createElement('h3');
  var actionsWrapperEl = document.createElement('div');
  var increaseButtonEl = document.createElement('button');
  var decreaseButtonEl = document.createElement('button');
  var statsWrapperEl = document.createElement('div');
  return {
    data: {
      id: id,
      name: name
    },
    cost: {
      currencies: []
    },
    produce: {
      currencies: []
    },
    elements: {
      factory: factoryWrapperEl
    },
    methods: {},
    computed: {}
  };
};

var currencyTemplate = function currencyTemplate() {};
/*
* ************************************************************
* Game GUI
* */


var appDiv = document.getElementById('app');
var workFactory = new factoryTemplate('work', 'Work');
var factories = new Map();
factories.set(workFactory.name, workFactory);
factories.forEach(function (factory, factoryName) {
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])(factory);
  appDiv.appendChild(factory.elements.factory);
});
/*
* ************************************************************
* Game Speed Controls
* */

function setGameSpeed(newGameSpeed) {
  gamePlaySpeed = newGameSpeed;
}

var gameSpeedSlowEl = document.createElement("button");
gameSpeedSlowEl.setAttribute('id', 'game-speed-slow');
gameSpeedSlowEl.innerText = "Game Speed >";
var gameSpeedNormalEl = document.createElement("button");
gameSpeedNormalEl.setAttribute('id', 'game-speed-normal');
gameSpeedNormalEl.innerText = "Game Speed >>";
var gameSpeedFastEl = document.createElement("button");
gameSpeedFastEl.setAttribute('id', 'game-speed-fast');
gameSpeedFastEl.innerText = "Game Speed >>> ";
var gamePauseEl = document.createElement("button");
gamePauseEl.setAttribute('id', 'game-pause');
gamePauseEl.innerText = "Pause Game | | ";
appDiv.appendChild(gameSpeedSlowEl);
appDiv.appendChild(gameSpeedNormalEl);
appDiv.appendChild(gameSpeedFastEl);
appDiv.appendChild(gamePauseEl);
document.addEventListener('click', function (e) {
  if (!e.target) {
    return;
  }

  if (e.target.id === "game-speed-slow") {
    gamePlaySpeed = 2000;
  } else if (e.target.id === "game-speed-normal") {
    gamePlaySpeed = 1000;
  } else if (e.target.id === "game-speed-fast") {
    gamePlaySpeed = 500;
  } else if (e.target.id === "game-pause") {
    gamePaused = !gamePaused;
  }
});
/*
* ************************************************************
* Main game loop & update timer.
* */

var gameAwaitingUpdate = true;
var gamePaused = false;

function updateGame() {
  var tickDateTime = new Date();
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])('tick - ' + tickDateTime.toLocaleDateString() + " - " + tickDateTime.toLocaleTimeString());
}

function main() {
  if (gamePaused) {
    Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])('game has been paused');
    return;
  }

  if (gameAwaitingUpdate) {
    gameAwaitingUpdate = false;
    setTimeout(function () {
      gameAwaitingUpdate = true;
      updateGame();
    }, gamePlaySpeed); // 33 milliseconds = ~ 30 frames per sec
  }

  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])('game looped ! Game Speed = ' + gamePlaySpeed);
}

setInterval(main, gameMainLoopSpeed); // 33 milliseconds = ~ 30 frames per sec

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /app/src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! /app/src/app.scss */"./src/app.scss");


/***/ })

/******/ });