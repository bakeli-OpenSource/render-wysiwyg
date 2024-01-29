"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _dompurify = _interopRequireDefault(require("dompurify"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RenderWysiwyg = function RenderWysiwyg(_ref) {
  var content = _ref.content;
  var sanitizedData = function sanitizedData(content) {
    return {
      __html: _dompurify["default"].sanitize(content)
    };
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    dangerouslySetInnerHTML: sanitizedData(content)
  });
};
var _default = exports["default"] = RenderWysiwyg;