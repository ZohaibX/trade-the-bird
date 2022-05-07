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

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ \"./src/client/components/header.tsx\");\n/* harmony import */ var _Store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store/actions */ \"./src/client/Store/actions/index.tsx\");\n\n\n\n // any route, that is matched by matchRoutes fn, will be passed to this App\n// This App component will be directly connected to every route and to the components, we use here - like header\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"body\"\n  }), (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(route.routes));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: App,\n  loadData: function loadData(_ref2) {\n    var dispatch = _ref2.dispatch;\n    return dispatch((0,_Store_actions__WEBPACK_IMPORTED_MODULE_3__.fetchCurrentUser)());\n  }\n}); //? here, we have loaded current user data into the store\n//? this component is directly connected to every route and to the components, we use here - like header\n//? we can use this currentUser data there without dispatching currentUser action\n\n//# sourceURL=webpack://react-ssr/./src/client/App.tsx?");

/***/ }),

/***/ "./src/client/Store/actions/index.tsx":
/*!********************************************!*\
  !*** ./src/client/Store/actions/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FETCH_ADMINS\": () => (/* binding */ FETCH_ADMINS),\n/* harmony export */   \"FETCH_CURRENT_USER\": () => (/* binding */ FETCH_CURRENT_USER),\n/* harmony export */   \"FETCH_USERS_FAILED\": () => (/* binding */ FETCH_USERS_FAILED),\n/* harmony export */   \"FETCH_USERS_PENDING\": () => (/* binding */ FETCH_USERS_PENDING),\n/* harmony export */   \"FETCH_USERS_SUCCESS\": () => (/* binding */ FETCH_USERS_SUCCESS),\n/* harmony export */   \"fetchAdmins\": () => (/* binding */ fetchAdmins),\n/* harmony export */   \"fetchCurrentUser\": () => (/* binding */ fetchCurrentUser),\n/* harmony export */   \"fetchUsers\": () => (/* binding */ fetchUsers)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';\nvar FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';\nvar FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'; //? async requests - way\n\nvar fetchUsers = function fetchUsers() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n      var _yield$api$get, data;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              //? api: axiosInstance , we sent this in the store . details are there\n              dispatch({\n                type: FETCH_USERS_PENDING\n              });\n              _context.prev = 1;\n              _context.next = 4;\n              return api.get('/users');\n\n            case 4:\n              _yield$api$get = _context.sent;\n              data = _yield$api$get.data;\n              dispatch({\n                type: FETCH_USERS_SUCCESS,\n                payload: data\n              });\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n              dispatch({\n                type: FETCH_USERS_FAILED,\n                payload: _context.t0\n              });\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar FETCH_CURRENT_USER = 'FETCH_CURRENT_USER'; //? async requests - way\n\nvar fetchCurrentUser = function fetchCurrentUser() {\n  return /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n      var _yield$api$get2, data;\n\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return api.get('/current_user');\n\n            case 2:\n              _yield$api$get2 = _context2.sent;\n              data = _yield$api$get2.data;\n              dispatch({\n                type: FETCH_CURRENT_USER,\n                payload: data\n              });\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\nvar FETCH_ADMINS = 'FETCH_ADMINS'; //? async requests - way\n\nvar fetchAdmins = function fetchAdmins() {\n  return /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n      var _yield$api$get3, data;\n\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return api.get('/admins');\n\n            case 2:\n              _yield$api$get3 = _context3.sent;\n              data = _yield$api$get3.data;\n              dispatch({\n                type: FETCH_ADMINS,\n                payload: data\n              });\n\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x7, _x8, _x9) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n}; //? sync  action\n// Setting search text in a state\n// export const setUserToken = (token) => ({\n//   // we wanna recieve text here\n//   type: UserToken,\n//   payload: token,\n// });\n\n//# sourceURL=webpack://react-ssr/./src/client/Store/actions/index.tsx?");

/***/ }),

/***/ "./src/client/Store/reducers/admins.tsx":
/*!**********************************************!*\
  !*** ./src/client/Store/reducers/admins.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FetchAdminsReducer\": () => (/* binding */ FetchAdminsReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index */ \"./src/client/Store/actions/index.tsx\");\n //? async reducer function\n\nvar FetchAdminsReducer = function FetchAdminsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_index__WEBPACK_IMPORTED_MODULE_0__.FETCH_ADMINS:\n      return action.payload;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/Store/reducers/admins.tsx?");

/***/ }),

/***/ "./src/client/Store/reducers/current-user.tsx":
/*!****************************************************!*\
  !*** ./src/client/Store/reducers/current-user.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FetchCurrentUserReducer\": () => (/* binding */ FetchCurrentUserReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index */ \"./src/client/Store/actions/index.tsx\");\n //? async reducer function\n\nvar FetchCurrentUserReducer = function FetchCurrentUserReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_index__WEBPACK_IMPORTED_MODULE_0__.FETCH_CURRENT_USER:\n      return action.payload || false;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/Store/reducers/current-user.tsx?");

/***/ }),

/***/ "./src/client/Store/reducers/index.tsx":
/*!*********************************************!*\
  !*** ./src/client/Store/reducers/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-user */ \"./src/client/Store/reducers/current-user.tsx\");\n/* harmony import */ var _usersListReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usersListReducer */ \"./src/client/Store/reducers/usersListReducer.tsx\");\n/* harmony import */ var _admins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admins */ \"./src/client/Store/reducers/admins.tsx\");\n\n\n\n\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  users: _usersListReducer__WEBPACK_IMPORTED_MODULE_2__.FetchUsersReducer,\n  currentUser: _current_user__WEBPACK_IMPORTED_MODULE_1__.FetchCurrentUserReducer,\n  admins: _admins__WEBPACK_IMPORTED_MODULE_3__.FetchAdminsReducer\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n\n//# sourceURL=webpack://react-ssr/./src/client/Store/reducers/index.tsx?");

/***/ }),

/***/ "./src/client/Store/reducers/usersListReducer.tsx":
/*!********************************************************!*\
  !*** ./src/client/Store/reducers/usersListReducer.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FetchUsersReducer\": () => (/* binding */ FetchUsersReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index */ \"./src/client/Store/actions/index.tsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  isPending: false,\n  data: [],\n  error: ''\n}; //? async reducer function\n\nvar FetchUsersReducer = function FetchUsersReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_index__WEBPACK_IMPORTED_MODULE_0__.FETCH_USERS_PENDING:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isPending: true\n      });\n\n    case _actions_index__WEBPACK_IMPORTED_MODULE_0__.FETCH_USERS_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        data: action.payload,\n        isPending: false\n      });\n\n    case _actions_index__WEBPACK_IMPORTED_MODULE_0__.FETCH_USERS_FAILED:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: action.payload,\n        isPending: false\n      });\n\n    default:\n      return state;\n  }\n}; //? sync redux reducer\n// const initialStateSearch = {\n//   userToken: \"\",\n// };\n// we cannot change our state . so we will have to recreate it with some changes we need\n// export const userToken = (state = initialStateSearch, action = {}) => {\n//   if (action.type === UserToken) {\n//     console.log(action.payload);\n//     return { ...state, userToken: action.payload };\n//   } else return state; // reducers must be returning something\n// };\n\n//# sourceURL=webpack://react-ssr/./src/client/Store/reducers/usersListReducer.tsx?");

/***/ }),

/***/ "./src/client/components/header.tsx":
/*!******************************************!*\
  !*** ./src/client/components/header.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Header = function Header(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n    collapseOnSelect: true,\n    style: {\n      height: \"100px\",\n      fontFamily: \"lobster\",\n      fontSize: \"20px\"\n    },\n    bg: \"dark\",\n    variant: \"dark\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\",\n    className: \"font-weight-bold my-5\",\n    style: {\n      fontFamily: \"lobster\",\n      fontSize: \"40px\",\n      color: \"white\",\n      fontStyle: \"none\",\n      textDecoration: \"none\"\n    }\n  }, \"Trade - Bird\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Toggle, {\n    \"aria-controls\": \"responsive-navbar-nav\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {\n    id: \"responsive-navbar-nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n    className: \"me-auto\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n    className: \"me-auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n    className: \"mx-2\"\n  }, \"Features\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n    className: \"mx-2\"\n  }, \"Features 2\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/register\",\n    className: \"my-auto mx-5\",\n    style: {\n      fontStyle: \"none\",\n      color: \"grey\",\n      textDecoration: \"none\"\n    }\n  }, \"Register\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/sign-in\",\n    className: \"my-auto \",\n    style: {\n      fontStyle: \"none\",\n      color: \"grey\",\n      textDecoration: \"none\"\n    },\n    eventKey: 2\n  }, \"Sign In\")))));\n}; // function mapStateToProps({ currentUser }) {\n//   return { currentUser };\n// }\n// mapStateToProps have state object as an argument, we can fetch state[Data] like this as obvious\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header); // in App.tsx file, currentUserDetails are already fetched\n// and App.tsx file is directly connected to the every route we render --- notice --- only routes - pages\n// normal components (not pages) will be connected to App.tsx by using that components in that App.tsx\n\n//# sourceURL=webpack://react-ssr/./src/client/components/header.tsx?");

/***/ }),

/***/ "./src/client/components/hocs/require-auth.jsx":
/*!*****************************************************!*\
  !*** ./src/client/components/hocs/require-auth.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n//! This HOC is specially for wrapping a normal component\n//! and here, we can apply any rule, to redirect the user..\n//? This is redirection, for authorization\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (ChildComponent) {\n  var RequireAuth = /*#__PURE__*/function (_Component) {\n    _inherits(RequireAuth, _Component);\n\n    var _super = _createSuper(RequireAuth);\n\n    function RequireAuth() {\n      _classCallCheck(this, RequireAuth);\n\n      return _super.apply(this, arguments);\n    }\n\n    _createClass(RequireAuth, [{\n      key: \"render\",\n      value: function render() {\n        console.log(' Current User is ', this.props.currentUser);\n        if (this.props.currentUser === false) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {\n          to: \"/\"\n        });\n        if (this.props.currentUser === null) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Loading...\");\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildComponent, this.props);\n      }\n    }]);\n\n    return RequireAuth;\n  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n  function mapStateToProps(_ref) {\n    var currentUser = _ref.currentUser;\n    return {\n      currentUser: currentUser\n    };\n  }\n\n  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(RequireAuth);\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/components/hocs/require-auth.jsx?");

/***/ }),

/***/ "./src/client/components/passport/auth.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/passport/auth.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction Passport(props) {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      user = _React$useState2[0],\n      setUser = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    var getUser = /*#__PURE__*/function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var User;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:5000/api/users/currentUser\");\n\n              case 2:\n                User = _context.sent;\n                setUser(User);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getUser() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getUser();\n  }, []); //! whenever we go to the main page -- redux will run and get current user from fb or google and will get their data\n\n  console.log(\"Current User Is: \", user);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, \"Passport App\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"http://localhost:5000/auth/google\"\n  }, \" Sign In By Google \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"http://localhost:5000/auth/facebook\"\n  }, \" Sign In By Facebook \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"http://localhost:5000/api/users/signOut\"\n  }, \"Logout \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Passport);\n\n//# sourceURL=webpack://react-ssr/./src/client/components/passport/auth.tsx?");

/***/ }),

/***/ "./src/client/pages/admins.tsx":
/*!*************************************!*\
  !*** ./src/client/pages/admins.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Store_actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Store/actions/index */ \"./src/client/Store/actions/index.tsx\");\n/* harmony import */ var _components_hocs_require_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hocs/require-auth */ \"./src/client/components/hocs/require-auth.jsx\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);\n//! This page is special, bcoz we have applied routes redirection using HOC\n\n\n\n\n\n\nvar Admins = function Admins(props) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.fetchAdmins();\n  }, []); //? This function is for SEO\n\n  var head = function head() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"\".concat(props.admins.length, \" Admins Loaded\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"Admins List\"\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Protected List Of Routes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, props.admins.map(function (admin) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: admin.id\n    }, admin.name);\n  })));\n};\n\nfunction mapStateToProps(_ref) {\n  var admins = _ref.admins;\n  return {\n    admins: admins\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  loadData: function loadData(_ref2) {\n    var dispatch = _ref2.dispatch;\n    return dispatch((0,_Store_actions_index__WEBPACK_IMPORTED_MODULE_2__.fetchAdmins)());\n  },\n  // short way of loadData fn\n  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n    fetchAdmins: _Store_actions_index__WEBPACK_IMPORTED_MODULE_2__.fetchAdmins\n  })((0,_components_hocs_require_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Admins))\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/admins.tsx?");

/***/ }),

/***/ "./src/client/pages/auth/change-password.tsx":
/*!***************************************************!*\
  !*** ./src/client/pages/auth/change-password.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n//! This page is special, bcoz we have applied routes redirection using HOC\n\n\n\nvar ChangePassword = function ChangePassword() {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log(\"Welcome to Sign Up Page\");\n  }, []); //? This function is for SEO\n\n  var head = function head() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Trade - Change Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"Admins List\"\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"text-center my-5\"\n  }, \"Change Password Page\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: ChangePassword\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/auth/change-password.tsx?");

/***/ }),

/***/ "./src/client/pages/auth/forgot-password.tsx":
/*!***************************************************!*\
  !*** ./src/client/pages/auth/forgot-password.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n//! This page is special, bcoz we have applied routes redirection using HOC\n\n\n\nvar ForgotPassword = function ForgotPassword() {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log(\"Welcome to Sign Up Page\");\n  }, []); //? This function is for SEO\n\n  var head = function head() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Trade - Get Your New Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"Admins List\"\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"text-center my-5\"\n  }, \"Forgot Password Page\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: ForgotPassword\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/auth/forgot-password.tsx?");

/***/ }),

/***/ "./src/client/pages/auth/sign-in.tsx":
/*!*******************************************!*\
  !*** ./src/client/pages/auth/sign-in.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n//! This page is special, bcoz we have applied routes redirection using HOC\n\n\n\nvar SignIn = function SignIn() {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log(\"Welcome to Sign Up Page\");\n  }, []); //? This function is for SEO\n\n  var head = function head() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Trade - Sign In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"Admins List\"\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"text-center my-5\",\n    style: {\n      fontFamily: \"lobster\"\n    }\n  }, \"Sign In Here.\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: SignIn\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/auth/sign-in.tsx?");

/***/ }),

/***/ "./src/client/pages/auth/sign-up.tsx":
/*!*******************************************!*\
  !*** ./src/client/pages/auth/sign-up.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n//! This page is special, bcoz we have applied routes redirection using HOC\n\n\n\nvar SignUp = function SignUp() {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log(\"Welcome to Sign Up Page\");\n  }, []);\n\n  var onFinish = function onFinish(values) {\n    console.log('Success:', values);\n  };\n\n  var onFinishFailed = function onFinishFailed(errorInfo) {\n    console.log('Failed:', errorInfo);\n  }; //? This function is for SEO\n\n\n  var head = function head() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Trade - Register\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"Admins List\"\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"text-center my-5\",\n    style: {\n      fontFamily: \"lobster\"\n    }\n  }, \"Sign Up Here.\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: SignUp\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/auth/sign-up.tsx?");

/***/ }),

/***/ "./src/client/pages/home.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/home.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Store/actions */ \"./src/client/Store/actions/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_passport_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/passport/auth */ \"./src/client/components/passport/auth.tsx\");\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  //! This function is for SEO\n  var head = function head() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", null, \"Home Component\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"Home\"\n    }));\n  };\n\n  var fetchFakeAPIOnClick = function fetchFakeAPIOnClick() {\n    props.fetchUsers();\n  };\n\n  var showFakeAPIOnClick = function showFakeAPIOnClick() {\n    if (props.users.data.length) {\n      return props.users.data.map(function (item) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n          key: item.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, \"Name is: \", item.name));\n      });\n    }\n\n    return null;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Im a Home Component \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: function onClick() {\n      return console.log('You Pressed Me!');\n    }\n  }, \"Press Me - !\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/users\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", null, \"Get me to Users\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: fetchFakeAPIOnClick\n  }, \"fetch data \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), showFakeAPIOnClick(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_passport_auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Hello World\")));\n};\n\nfunction mapStateToProps(_ref) {\n  var users = _ref.users;\n  return {\n    users: users\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, {\n    fetchUsers: _Store_actions__WEBPACK_IMPORTED_MODULE_3__.fetchUsers\n  })(Home) // this styling is for Routes file specially\n\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/home.tsx?");

/***/ }),

/***/ "./src/client/pages/image-upload.tsx":
/*!*******************************************!*\
  !*** ./src/client/pages/image-upload.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar Upload = function Upload(props) {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      file = _React$useState2[0],\n      setFile = _React$useState2[1];\n\n  var onFileChange = function onFileChange(e) {\n    setFile(e.target.files[0]);\n    console.log('files are: ', e.target.files);\n  };\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n\n              if (file) {\n                _context.next = 3;\n                break;\n              }\n\n              return _context.abrupt(\"return\", alert('File is not selected'));\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"text-center my-5 font-weight-bolder\"\n  }, \"This is Upload Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    action: \"\",\n    onSubmit: onSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Add an image\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"file\",\n    onChange: onFileChange,\n    accept: \"image/*\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"btn btn-primary\"\n  }, \"Submit\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"\",\n    alt: \"\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: Upload\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/image-upload.tsx?");

/***/ }),

/***/ "./src/client/pages/not-found.tsx":
/*!****************************************!*\
  !*** ./src/client/pages/not-found.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFound = function NotFound(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === void 0 ? {\n    notFound: false\n  } : _ref$staticContext;\n  staticContext.notFound = true; // this value, we will set here, and we have set this in server file -- index.tsx\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Oops.. Page Not Found \");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: NotFound\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/not-found.tsx?");

/***/ }),

/***/ "./src/client/pages/test.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/test.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_hocs_require_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hocs/require-auth */ \"./src/client/components/hocs/require-auth.jsx\");\n\n\n\nvar Test = function Test(props) {\n  console.log(props.currentUser);\n  return 'Im a test Page';\n};\n\nfunction mapStateToProps(_ref) {\n  var currentUser = _ref.currentUser;\n  return {\n    currentUser: currentUser\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)((0,_components_hocs_require_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Test))\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/test.tsx?");

/***/ }),

/***/ "./src/client/pages/usersList.tsx":
/*!****************************************!*\
  !*** ./src/client/pages/usersList.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Store_actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Store/actions/index */ \"./src/client/Store/actions/index.tsx\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar UsersList = function UsersList(props) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.fetchUsers();\n  }, []); //? this function is special for SEO\n\n  var head = function head() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"\".concat(props.users.data.length, \" Users Loaded\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"Users List\"\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \" UsersList \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"User Data is: \", props.currentUser.googleId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, props.users.data.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: user.id + user.name\n    }, user.name);\n  })));\n};\n\nfunction mapStateToProps(_ref) {\n  var users = _ref.users,\n      currentUser = _ref.currentUser;\n  return {\n    users: users,\n    currentUser: currentUser\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  loadData: function loadData(_ref2) {\n    var dispatch = _ref2.dispatch;\n    return dispatch((0,_Store_actions_index__WEBPACK_IMPORTED_MODULE_2__.fetchUsers)());\n  },\n  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n    fetchUsers: _Store_actions_index__WEBPACK_IMPORTED_MODULE_2__.fetchUsers\n  })(UsersList)\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/usersList.tsx?");

/***/ }),

/***/ "./src/client/routes/routes.tsx":
/*!**************************************!*\
  !*** ./src/client/routes/routes.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ \"./src/client/pages/home.tsx\");\n/* harmony import */ var _pages_usersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/usersList */ \"./src/client/pages/usersList.tsx\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ \"./src/client/App.tsx\");\n/* harmony import */ var _pages_not_found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/not-found */ \"./src/client/pages/not-found.tsx\");\n/* harmony import */ var _pages_admins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/admins */ \"./src/client/pages/admins.tsx\");\n/* harmony import */ var _pages_test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../pages/test */ \"./src/client/pages/test.tsx\");\n/* harmony import */ var _pages_auth_sign_up__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/auth/sign-up */ \"./src/client/pages/auth/sign-up.tsx\");\n/* harmony import */ var _pages_auth_sign_in__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/auth/sign-in */ \"./src/client/pages/auth/sign-in.tsx\");\n/* harmony import */ var _pages_auth_change_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/auth/change-password */ \"./src/client/pages/auth/change-password.tsx\");\n/* harmony import */ var _pages_auth_forgot_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/auth/forgot-password */ \"./src/client/pages/auth/forgot-password.tsx\");\n/* harmony import */ var _pages_image_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/image-upload */ \"./src/client/pages/image-upload.tsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_objectSpread(_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), {}, {\n  routes: [_objectSpread(_objectSpread({\n    path: '/'\n  }, _pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]), {}, {\n    exact: true\n  }), _objectSpread({\n    path: '/users'\n  }, _pages_usersList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), _objectSpread({\n    path: '/admins'\n  }, _pages_admins__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), _objectSpread({\n    path: '/test'\n  }, _pages_test__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), _objectSpread({\n    path: '/register'\n  }, _pages_auth_sign_up__WEBPACK_IMPORTED_MODULE_6__[\"default\"]), _objectSpread({\n    path: '/sign-in'\n  }, _pages_auth_sign_in__WEBPACK_IMPORTED_MODULE_7__[\"default\"]), _objectSpread({\n    path: '/change-password'\n  }, _pages_auth_change_password__WEBPACK_IMPORTED_MODULE_8__[\"default\"]), _objectSpread({\n    path: '/forgot-password'\n  }, _pages_auth_forgot_password__WEBPACK_IMPORTED_MODULE_9__[\"default\"]), _objectSpread({\n    path: '/image-upload'\n  }, _pages_image_upload__WEBPACK_IMPORTED_MODULE_10__[\"default\"]), _objectSpread({}, _pages_not_found__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) // this is how we use not-found page -- by not providing path\n  ]\n})]);\n\n//# sourceURL=webpack://react-ssr/./src/client/routes/routes.tsx?");

/***/ }),

/***/ "./src/helpers-for-server/renderer.jsx":
/*!*********************************************!*\
  !*** ./src/helpers-for-server/renderer.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/routes/routes */ \"./src/client/routes/routes.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n // this works as JSON.stringify() but when some malicious script tag is placed as a normal data\n// serialize will also replace that special script tag with a normal string\n// and it will replace \"<\" \">\" characters with their unit codes\n//? the attack is called xss attack -- cross side script attack\n\nvar renderer = function renderer(req, store, context) {\n  // context, we are providing in context prop\n  // we have used it in notFound page, and then passed a property to server side there\n  // this context is handled in index.tsx\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {\n    location: req.path,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.renderRoutes)(_client_routes_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]))))); //! Difference btw renderToString() and renderToNodeStream\n  // renderToString() -- we will send the request -- it will build all the data and will send back the response\n  // renderToNodeStream() -- we will send req, it will build a small snippet/bid of data and will send response with that data\n  // then, it will again build a small snippet of data and will send that\n  // and this process will continue until all the data is send to the browser\n  // renderToNodeStream() has a huge positive impact on performance, as its first bid of data will be tremendously faster to retrieve than the bid of renderToString()\n  // as renderToNodeStream()'s first bid will be a small snippet and renderToString()'s 1st bid will be all the data\n  // but there is a gotcha with this approach\n  // if user go to the page, server will send 1st!! small snippet/bid of data instantaneously.\n  // if user!!! , instantaneously, clicks a button to go on a page, he will instantaneously go to that page\n  // but when 2nd!! or 3rd!! snippet of that data arrives... it comes to know that it had to redirect the user to home page due to some reason\n  // so, user will not be redirected, once it has already opened the page\n  // important -- thats y we will stick into the renderToString()\n\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_6__.Helmet.renderStatic(); //? to pull all the tags, we have provided to the rendered page\n  // have added Materialize css cdn here\n\n  return \"\\n  <html>\\n  <head>\\n    \".concat(helmet.title.toString(), \"\\n    \").concat(helmet.meta.toString(), \"\\n    <link rel=\\\"stylesheet\\\" href=\\\"main.css\\\">\\n\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\\\">\\n    \\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n    <link href=\\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,300&family=Lobster&display=swap\\\" rel=\\\"stylesheet\\\">\\n  \\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n    <link href=\\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,300&family=Lobster&display=swap\\\" rel=\\\"stylesheet\\\">\\n\\n    <link href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\\\" rel=\\\"stylesheet\\\" integrity=\\\"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\\\" crossorigin=\\\"anonymous\\\">\\n  \\n  </head>\\n  <body>\\n  <div id=\\\"root\\\">\").concat(content, \"</div>\\n  <script> window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(store.getState()), \" </script>\\n  <script src=\\\"bundle.js\\\" ></script>\\n  </body>\\n  </html>\\n  \");\n}; // note -- all the meta tags for image, desc will be pull by ${helmet.meta.toString()}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);\n\n//# sourceURL=webpack://react-ssr/./src/helpers-for-server/renderer.jsx?");

/***/ }),

/***/ "./src/helpers-for-server/server-redux-store.tsx":
/*!*******************************************************!*\
  !*** ./src/helpers-for-server/server-redux-store.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_Store_reducers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../client/Store/reducers/index */ \"./src/client/Store/reducers/index.tsx\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_5__);\n// server side redux file\n\n\n\n\n\n\nvar logger = (0,redux_logger__WEBPACK_IMPORTED_MODULE_5__.createLogger)();\n\nvar CreateStore = function CreateStore(req) {\n  var serverAxiosInstance = axios__WEBPACK_IMPORTED_MODULE_3___default().create({\n    baseURL: 'http://react-ssr-api.herokuapp.com',\n    headers: {\n      cookie: req.get('cookie') || ''\n    } // important -- we may need to handle 'cookie', if there is some difference in casing -- like 'Cookie' or so\n\n  }); //? server side proxy instance is not gonna go into the proxy setup in index.tsx\n  //? we have to provide full route to our backend service\n  //? in our micro-services and k8s -- i could apply ingress-service route here\n\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_client_Store_reducers_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default().withExtraArgument(serverAxiosInstance))) // add (thunkMiddleware , logger ) if wish -- logger\n  );\n  return store;\n}; // that's how we use store on the server side\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateStore);\n\n//# sourceURL=webpack://react-ssr/./src/helpers-for-server/server-redux-store.tsx?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/routes/routes */ \"./src/client/routes/routes.tsx\");\n/* harmony import */ var _helpers_for_server_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-for-server/renderer */ \"./src/helpers-for-server/renderer.jsx\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helpers_for_server_server_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-for-server/server-redux-store */ \"./src/helpers-for-server/server-redux-store.tsx\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\n//? serving as a root file for the server\n // to use async await\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_5___default()('http://react-ssr-api.herokuapp.com', {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    opts.headers['x-forwarded-host'] = 'localhost:3000';\n    return opts;\n  }\n})); //  route like /api/users will come into server, from browser\n// /api will be replaced with the backend route we provide -- something like https://backend/users\n// 2nd option is specifically for this course, to pass the google authentication\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"]('public')); // very important line of code , to run js functionality\n\napp.get('*', function (req, res) {\n  var store = (0,_helpers_for_server_server_redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req); // some logic to initialize and load data into redux store\n\n  var promises = (0,react_router_config__WEBPACK_IMPORTED_MODULE_2__.matchRoutes)(_client_routes_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve)[\"catch\"](resolve); // always render the page and not stuck if get some error from backend\n      });\n    }\n  }); // 2nd map statement is to catch errors, coming from backend -\n\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = (0,_helpers_for_server_renderer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req, store, context);\n    console.log('context is:', context);\n    if (context.url) return res.redirect(301, context.url); // whenever i will use Redirect from react-router-dom. that will set some path and url property to context\n    // thats how we will implement redirection on server side too\n\n    if (context.notFound) res.status(404); // this setting is for notFoundPage\n\n    res.send(content);\n  });\n});\napp.listen(3000, function () {\n  console.log('Server Side of SSR running on port -- 3000');\n});\n\n//# sourceURL=webpack://react-ssr/./src/index.jsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-http-proxy");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.jsx");
/******/ 	
/******/ })()
;