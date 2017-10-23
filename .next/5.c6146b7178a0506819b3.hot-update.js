webpackHotUpdate(5,{

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Task = __webpack_require__(418);

var _Task2 = _interopRequireDefault(_Task);

var _propTypes = __webpack_require__(52);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/D-lish/Desktop/next-to-do/components/TodoList.js";


function TodoList(props) {

  if (props.masterTodoList.length > 0) {
    var hasTask = _react2.default.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, "Your tasks");
  }

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, hasTask, props.masterTodoList.map(function (task, index) {
    return _react2.default.createElement(_Task2.default, {
      task: task,
      key: index, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    });
  }));
}

TodoList.propTypes = {
  masterTodoList: _propTypes2.default.array
};

exports.default = TodoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kb0xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUYXNrIiwiUHJvcFR5cGVzIiwiVG9kb0xpc3QiLCJwcm9wcyIsIm1hc3RlclRvZG9MaXN0IiwibGVuZ3RoIiwiaGFzVGFzayIsIm1hcCIsInRhc2siLCJpbmRleCIsInByb3BUeXBlcyIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7Ozs7OztBQUdQLFNBQUEsQUFBUyxTQUFULEFBQWtCLE9BQU8sQUFFdkI7O01BQUksTUFBQSxBQUFNLGVBQU4sQUFBcUIsU0FBekIsQUFBa0MsR0FBRyxBQUNuQztRQUFJLDBCQUFVLGNBQUE7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxLQUFBLEVBQWQsQUFBYyxBQUNmO0FBRUQ7O3lCQUVFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEsRUFBQSxBQUVHLGVBQUEsQUFBTSxlQUFOLEFBQXFCLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFQOzJCQUN4QixBQUFDO1lBQUQsQUFDUSxBQUNOO1dBRkYsQUFFTztrQkFGUDtvQkFEd0IsQUFDeEI7QUFBQTtBQUNFLEtBREY7QUFMTixBQUVFLEFBRUcsQUFPTjs7O0FBRUQsU0FBQSxBQUFTO2tCQUNTLG9CQURsQixBQUFxQixBQUNPLEFBRzVCO0FBSnFCLEFBQ25COztrQkFHRixBQUFlIiwiZmlsZSI6IlRvZG9MaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ELWxpc2gvRGVza3RvcC9uZXh0LXRvLWRvIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/D-lish/Desktop/next-to-do/components/TodoList.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/D-lish/Desktop/next-to-do/components/TodoList.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jNjE0NmI3MTc4YTA1MDY4MTliMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvTGlzdC5qcz8yZjEzYjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cblxuZnVuY3Rpb24gVG9kb0xpc3QocHJvcHMpIHtcblxuICBpZiAocHJvcHMubWFzdGVyVG9kb0xpc3QubGVuZ3RoID4gMCkge1xuICAgIHZhciBoYXNUYXNrID0gPGgzPllvdXIgdGFza3M8L2gzPlxuICB9XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICB7aGFzVGFza31cbiAgICAgIHtwcm9wcy5tYXN0ZXJUb2RvTGlzdC5tYXAoKHRhc2ssIGluZGV4KSA9PlxuICAgICAgICA8VGFza1xuICAgICAgICAgIHRhc2s9e3Rhc2t9XG4gICAgICAgICAga2V5PXtpbmRleH0vPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Ub2RvTGlzdC5wcm9wVHlwZXMgPSB7XG4gIG1hc3RlclRvZG9MaXN0OiBQcm9wVHlwZXMuYXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVG9kb0xpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=