"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Task = require("./Task");

var _Task2 = _interopRequireDefault(_Task);

var _propTypes = require("prop-types");

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