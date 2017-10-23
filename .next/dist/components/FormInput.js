"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TodoList = require("./TodoList");

var _TodoList2 = _interopRequireDefault(_TodoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/D-lish/Desktop/next-to-do/components/FormInput.js";


var FormInput = function (_React$Component) {
  (0, _inherits3.default)(FormInput, _React$Component);

  function FormInput(props) {
    (0, _classCallCheck3.default)(this, FormInput);

    console.log("test");

    var _this = (0, _possibleConstructorReturn3.default)(this, (FormInput.__proto__ || (0, _getPrototypeOf2.default)(FormInput)).call(this, props));

    _this.state = {
      masterTodoList: []
    };
    _this.handleTodoSubmission = _this.handleTodoSubmission.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(FormInput, [{
    key: "handleTodoSubmission",
    value: function handleTodoSubmission(e) {
      e.preventDefault();
      var _refs = this.refs,
          _name = _refs._name,
          _description = _refs._description;

      var newMasterTodoList = this.state.masterTodoList.slice();
      var task = {
        name: _name.value,
        description: _description.value
      };
      newMasterTodoList.push(task);
      this.setState({ masterTodoList: newMasterTodoList });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement("form", { onSubmit: this.handleTodoSubmission, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement("input", {
        ref: "_name",
        type: "text",
        id: "name",
        placeholder: "Name", __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement("input", {
        ref: "_description",
        type: "text",
        id: "description",
        placeholder: "Description", __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement("button", { type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Add"))), _react2.default.createElement(_TodoList2.default, {
        masterTodoList: this.state.masterTodoList, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }));
    }
  }]);

  return FormInput;
}(_react2.default.Component);

exports.default = FormInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9ybUlucHV0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVG9kb0xpc3QiLCJGb3JtSW5wdXQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsIm1hc3RlclRvZG9MaXN0IiwiaGFuZGxlVG9kb1N1Ym1pc3Npb24iLCJiaW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVmcyIsIl9uYW1lIiwiX2Rlc2NyaXB0aW9uIiwibmV3TWFzdGVyVG9kb0xpc3QiLCJzbGljZSIsInRhc2siLCJuYW1lIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInB1c2giLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBO3FDQUNKOztxQkFBQSxBQUFZLE9BQU87d0NBQ2pCOztZQUFBLEFBQVEsSUFEUyxBQUNqQixBQUFZOzs0SUFESyxBQUVYLEFBQ047O1VBQUEsQUFBSztzQkFBTCxBQUFhLEFBQ0ssQUFFbEI7QUFIYSxBQUNYO1VBRUYsQUFBSyx1QkFBdUIsTUFBQSxBQUFLLHFCQUFMLEFBQTBCLEtBTnJDLEFBTWpCO1dBQ0Q7Ozs7O3lDLEFBRW9CLEdBQUcsQUFDdEI7UUFEc0IsQUFDdEIsQUFBRTtrQkFDOEIsS0FGVixBQUVlO1VBRmYsQUFFZCxjQUZjLEFBRWQ7VUFGYyxBQUVQLHFCQUZPLEFBRVAsQUFDZjs7VUFBTSxvQkFBb0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxlQUFyQyxBQUEwQixBQUEwQixBQUNwRDtVQUFNO2NBQ0UsTUFESyxBQUNDLEFBQ1o7cUJBQWEsYUFGZixBQUFhLEFBRWUsQUFFNUI7QUFKYSxBQUNYO3dCQUdGLEFBQWtCLEtBQWxCLEFBQXVCLEFBQ3ZCO1dBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWhCLEFBQWMsQUFBa0IsQUFDakM7Ozs7NkJBRVEsQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7O2FBQ0UsQUFDTSxBQUNKO2NBRkYsQUFFTyxBQUNMO1lBSEYsQUFHSyxBQUNIO3FCQUpGLEFBSWM7b0JBSmQ7c0JBREYsQUFDRSxBQUtBO0FBTEE7QUFDRTs7b0JBSUY7c0JBTkYsQUFNRSxBQUNFO0FBREY7QUFBQTthQUNFLEFBQ00sQUFDSjtjQUZGLEFBRU8sQUFDTDtZQUhGLEFBR0ssQUFDSDtxQkFKRixBQUljO29CQUpkO3NCQVBKLEFBT0ksQUFLQTtBQUxBO0FBQ0UsMEJBSUYsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEseUJBQUksY0FBQSxZQUFRLE1BQVIsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBYlYsQUFDRSxBQVlJLEFBQUksQUFFViwwQkFBQSxBQUFDO3dCQUNpQixLQUFBLEFBQUssTUFEdkIsQUFDNkI7b0JBRDdCO3NCQWhCRixBQUNFLEFBZUEsQUFJSDtBQUpHO0FBQ0U7Ozs7O0VBeENnQixnQkFBTSxBLEFBK0M5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJGb3JtSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0QtbGlzaC9EZXNrdG9wL25leHQtdG8tZG8ifQ==