"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProductCart = exports.listProducts = exports.listProductsSuccess = exports.ADD_PRODUCT_CART = exports.LIST_PRODUCTS_SUCCESS = exports.LIST_PRODUCTS = void 0;

var _CotizadorService = _interopRequireDefault(require("../../Services/CotizadorService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LIST_PRODUCTS = "LIST_PRODUCTS";
exports.LIST_PRODUCTS = LIST_PRODUCTS;
var LIST_PRODUCTS_SUCCESS = "LIST_PRODUCTS_SUCCESS";
exports.LIST_PRODUCTS_SUCCESS = LIST_PRODUCTS_SUCCESS;
var ADD_PRODUCT_CART = "ADD_PRODUCT_CART";
exports.ADD_PRODUCT_CART = ADD_PRODUCT_CART;

var listProductsSuccess = function listProductsSuccess(payload) {
  return {
    type: LIST_PRODUCTS_SUCCESS,
    payload: payload
  };
};

exports.listProductsSuccess = listProductsSuccess;

var listProducts = function listProducts(filter) {
  return function _callee(dispatch) {
    var persona;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_CotizadorService["default"].obtenerdatospersona(filter));

          case 2:
            persona = _context.sent;
            dispatch(listProductsSuccess(persona));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.listProducts = listProducts;

var addProductCart = function addProductCart(payload) {
  return {
    type: ADD_PRODUCT_CART,
    payload: payload
  };
};

exports.addProductCart = addProductCart;