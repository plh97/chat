webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout/index.jsx":
/*!*************************************!*\
  !*** ./components/Layout/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyLayout; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
    var _this;

    _classCallCheck(this, MyLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyLayout).call(this, props));
    _this.state = {
      list: [],
      searching: false
    };
    return _this;
  }

  _createClass(MyLayout, [{
    key: "render",
    value: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Layout"], {
        className: "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "\u5934\u90E8\u4FE1\u606F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Layout"], {
        className: "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mySider__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_myContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })));
    }
  }]);

  return MyLayout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


;

/***/ })

})
//# sourceMappingURL=index.js.a800e0f36a2b0fd2c4ff.hot-update.js.map