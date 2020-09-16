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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // ************************************************************
//  Simple DOM Manipulation

var container1 = document.createElement('div');
container1.classList.add('c1-container', 'container'); // c1.textContent='c1 textContent'; //?
// c1.innerText='c1 innerText'; //?

container1.innerHTML = 'c1 innerHTML';
container1.id = "c1";
container1.style["text-align"] = "left";
var hr1 = document.createElement('hr');
container1.appendChild(hr1);
container1.appendChild(hr1.cloneNode());
container1.appendChild(hr1.cloneNode());
var button1 = document.createElement('button');
button1.innerText = "Click then check console log!";
button1.setAttribute("onClick", "window.console.log(this)");
container1.appendChild(button1);
document.body.append(container1);
var query1 = document.querySelectorAll('hr');
Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])('= find and log all <hr> elements');
Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])(query1); // ************************************************************
//  Testing variable types under certain conditions

var testValue = function testValue($var, $varNameString, $varValueString) {
  // let getVarNam = (obj) => {
  //     return Object.keys(obj)[0];
  //     // return Object.keys(obj);
  // };
  // let $varName = getVarNam($var);
  // let $varValue = $var[$varName];
  // let $evalString = 'var ' + $varNameString + " = " + $varValueString;
  // dd($evalString);
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])('= Testing : let ' + $varNameString + ' = ' + $varValueString);
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])('- value of ' + $varNameString + ' = ' + $var);
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])('- type of ' + $varNameString + ' = ' + _typeof($var));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("- Number.isNaN(".concat($varNameString, ")") + ' = ' + Number.isNaN($var));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("- Number.isInteger(".concat($varNameString, ")") + ' = ' + Number.isInteger($var));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("- Number.isSafeInteger(".concat($varNameString, ")") + ' = ' + Number.isSafeInteger($var));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("- Number.isFinite(".concat($varNameString, ")") + ' = ' + Number.isFinite($var));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("- Array.isArray(".concat($varNameString, ")") + ' = ' + Array.isArray($var));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("- Object.prototype.toString.call(".concat($varNameString, ")") + ' = ' + Object.prototype.toString.call($var));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("- undefined + ".concat($varNameString, " below: "));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])(undefined + $var);
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("- 5 + ".concat($varNameString, " below: "));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])(5 + $var);
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("- 5 - ".concat($varNameString, " below: "));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])(5 - $var);
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("- 5 * ".concat($varNameString, " below: "));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])(5 * $var);
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("- 5 / ".concat($varNameString, " below: "));
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])(5 / $var);
}; // const whatsMyName = "Snoop Doggy Dogg";
// console.log("Variable name is: " + name({whatsMyName}));
// testValue('myString Here', 'myString', '"myString Here"');
// testValue(4, 'myIntNumber', '4');
// testValue(46.222, 'myFloatNumber', '46.222');
// testValue("79", 'myNumberAsString', '"79"');
// testValue(Math.pow(10, 1000), 'myInfiniteNumber', 'Math.pow(10, 1000)');
// testValue(NaN, 'myNaN', 'NaN');
// testValue(undefined, 'myUndefined', 'undefined');
// testValue(true, 'myTrueBool', 'true');
// testValue(false, 'myFalseBool', 'false');
// testValue(function(){}, 'myFunction', 'function(){}');
// testValue({prop:"value"}, 'myObject', '{prop:"value"}');
// testValue(['item1','item2'], 'myArray', "[\'item1\',\'item2\']");

/* ************************************************************
* Arrays & Loops
* */

/*
Create Array
*/


var myAlphabetA2EArray = ['a', 'b', 'c', 'd', 'e'];
var myAlphabetF2KArray = ['f', 'g', 'h', 'i', 'j', 'k'];
/*
Manipulating and Merge Arrays
*/

var myAlphabetArray = [].concat(myAlphabetA2EArray, myAlphabetF2KArray);
myAlphabetArray.unshift('x'); // Add items to the start of an array.

myAlphabetArray.push('z'); // Add items to the end of an array.

myAlphabetArray.splice(0, 1); // Removes a number of items from a specified starting point.

myAlphabetArray.splice(myAlphabetArray.length - 1, 1, 'Y, z has been replaced!');
var myAlphabetSliceArray = myAlphabetArray.slice(1, 3); // "copy" items from specified range into a new array without modifying the source array.

/*
Create a simple key=>value object.
*/

var myNatoPhoneticAlphabetObject = {
  "A": "Alfa",
  "B": "Bravo",
  "C": "Charlie",
  "D": "Delta",
  "E": "Echo",
  "F": "Foxtrot",
  "G": "Golf",
  "H": "Hotel",
  "I": "India",
  "J": "Juliett",
  "K": "Kilo",
  "L": "Lima",
  "M": "Mike",
  "N": "November",
  "O": "Oscar",
  "P": "Papa",
  "Q": "Quebec",
  "R": "Romeo",
  "S": "Sierra",
  "T": "Tango",
  "U": "Uniform",
  "V": "Victor",
  "W": "Whiskey",
  "X": "X-ray",
  "Y": "Yankee",
  "Z": "Zulu"
};
/*
Convert object properties into an array.
*/

var myNatoPhoneticAlphabetArray = Object.entries(myNatoPhoneticAlphabetObject);
/*
Simple forEach loop
 */

myAlphabetArray.forEach(function (v, i) {
  Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(i, " : ").concat(v));
});
myNatoPhoneticAlphabetArray.forEach(function (v, i) {// dd(`${i} : ${v}`);
});
/*
Loop using X in Arr
Can be used to iterate over object properties.
*/
// for (const i in myNatoPhoneticAlphabetArray) {

for (var k in myNatoPhoneticAlphabetObject) {// dd(`${k} : ${myNatoPhoneticAlphabetObject[k]}`);
}
/*
Loop using [k,v] OF Arr .
Keep in mind this uses OF not IN.
 */


for (var _i = 0, _myNatoPhoneticAlphab = myNatoPhoneticAlphabetArray; _i < _myNatoPhoneticAlphab.length; _i++) {// dd(`${i} : ${v}`);

  var _myNatoPhoneticAlphab2 = _slicedToArray(_myNatoPhoneticAlphab[_i], 2),
      i = _myNatoPhoneticAlphab2[0],
      v = _myNatoPhoneticAlphab2[1];
}
/* ************************************************************
* Switch
* */


var switchKey = "x";

switch (switchKey) {
  case "x":
    Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("switchKey = x , but no break command, so keep looking!");

  default:
    Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])("default switch case here ...");
}
/*
* ************************************************************
* Maps : Maintains the order of added elements.
* */


var myMap = new Map();
myMap.set('v', 'VVV');
myMap.set('a', 'AAA');
Object(debugdump__WEBPACK_IMPORTED_MODULE_0__["default"])(myMap.entries());

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