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
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Your tasks"), props.masterTodoList.map(function (task, index) {
    return _react2.default.createElement(_Task2.default, {
      task: task,
      key: index, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    });
  }));
}

TodoList.propTypes = {
  masterTodoList: _propTypes2.default.array
};

exports.default = TodoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kb0xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUYXNrIiwiUHJvcFR5cGVzIiwiVG9kb0xpc3QiLCJwcm9wcyIsIm1hc3RlclRvZG9MaXN0IiwibWFwIiwidGFzayIsImluZGV4IiwicHJvcFR5cGVzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7O0FBRVAsU0FBQSxBQUFTLFNBQVQsQUFBa0IsT0FBTyxBQUN2Qjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQyxxQkFBQSxBQUFNLGVBQU4sQUFBcUIsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVA7MkJBQ3hCLEFBQUM7WUFBRCxBQUNRLEFBQ047V0FGRixBQUVPO2tCQUZQO29CQUR3QixBQUN4QjtBQUFBO0FBQ0UsS0FERjtBQUpOLEFBQ0UsQUFFRyxBQU9OOzs7QUFFRCxTQUFBLEFBQVM7a0JBQ1Msb0JBRGxCLEFBQXFCLEFBQ08sQUFHNUI7QUFKcUIsQUFDbkI7O2tCQUdGLEFBQWUiLCJmaWxlIjoiVG9kb0xpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0QtbGlzaC9EZXNrdG9wL25leHQtdG8tZG8ifQ==