"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _CotizadorReducer = _interopRequireDefault(require("../Store/Reducers/CotizadorReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.createStore)(_CotizadorReducer["default"], (0, _redux.applyMiddleware)(_reduxThunk["default"]));

exports["default"] = _default;