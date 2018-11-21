module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout/index.jsx":
/*!*************************************!*\
  !*** ./components/Layout/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyLayout; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./components/Layout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mySider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mySider */ "./components/Layout/mySider/index.jsx");
/* harmony import */ var _myContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myContent */ "./components/Layout/myContent/index.jsx");
var _jsxFileName = "/Users/pengliheng/www/chat/components/Layout/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Header = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"].Header,
    Footer = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"].Footer,
    Sider = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"].Sider,
    Content = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"].Content;





var MyLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MyLayout, _React$Component);

  function MyLayout(props) {
    _classCallCheck(this, MyLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyLayout).call(this, props));
  }

  _createClass(MyLayout, [{
    key: "render",
    value: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Layout"], {
        className: "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "\u5934\u90E8\u4FE1\u606F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Layout"], {
        className: "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mySider__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_myContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })));
    }
  }]);

  return MyLayout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


;

/***/ }),

/***/ "./components/Layout/index.scss":
/*!**************************************!*\
  !*** ./components/Layout/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/myContent/index.jsx":
/*!***********************************************!*\
  !*** ./components/Layout/myContent/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MySider; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./components/Layout/myContent/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/pengliheng/www/chat/components/Layout/myContent/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Content = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"].Footer;


var MySider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MySider, _React$Component);

  function MySider(props) {
    _classCallCheck(this, MySider);

    return _possibleConstructorReturn(this, _getPrototypeOf(MySider).call(this, props));
  }

  _createClass(MySider, [{
    key: "render",
    value: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Content", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Footer"));
    }
  }]);

  return MySider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


;

/***/ }),

/***/ "./components/Layout/myContent/index.scss":
/*!************************************************!*\
  !*** ./components/Layout/myContent/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/mySider/index.jsx":
/*!*********************************************!*\
  !*** ./components/Layout/mySider/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MySider; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./components/Layout/mySider/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/pengliheng/www/chat/components/Layout/mySider/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Sider = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"].Sider;


var MySider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MySider, _React$Component);

  function MySider(props) {
    _classCallCheck(this, MySider);

    return _possibleConstructorReturn(this, _getPrototypeOf(MySider).call(this, props));
  }

  _createClass(MySider, [{
    key: "render",
    value: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Sider, {
        className: "sider",
        theme: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Search, {
        placeholder: "input search text",
        onSearch: function onSearch(value) {
          return console.log(value);
        },
        enterButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "\u7FA41"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "\u597D\u53CB"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "\u597D\u53CB")));
    }
  }]);

  return MySider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


;

/***/ }),

/***/ "./components/Layout/mySider/index.scss":
/*!**********************************************!*\
  !*** ./components/Layout/mySider/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.jsx");
var _jsxFileName = "/Users/pengliheng/www/chat/pages/index.jsx";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Hello world", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "scoped!"));
});

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map