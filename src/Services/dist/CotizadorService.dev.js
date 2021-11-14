"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cotizadorService = {
  obtenerdatospersona: function obtenerdatospersona(filter) {
    var baseApi, _ref, data;

    return regeneratorRuntime.async(function obtenerdatospersona$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            baseApi = "https://freestyle.getsandbox.com/dummy/obtenerdatospersona";
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(baseApi)));

          case 3:
            _ref = _context.sent;
            data = _ref.data;
            return _context.abrupt("return", data.data.tercero == null ? [] : data.data.tercero);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var _default = cotizadorService;
exports["default"] = _default;