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
          lineNumber: 27
        }
      }, _react2.default.createElement("form", { onSubmit: this.handleTodoSubmission, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement("input", {
        ref: "_name",
        type: "text",
        id: "name",
        placeholder: "Name", __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement("input", {
        ref: "_description",
        type: "text",
        id: "description",
        placeholder: "Description", __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement("button", { type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Add"))), _react2.default.createElement(_TodoList2.default, {
        masterTodoList: this.state.masterTodoList, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }));
    }
  }]);

  return FormInput;
}(_react2.default.Component);

exports.default = FormInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9ybUlucHV0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVG9kb0xpc3QiLCJGb3JtSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwibWFzdGVyVG9kb0xpc3QiLCJoYW5kbGVUb2RvU3VibWlzc2lvbiIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZWZzIiwiX25hbWUiLCJfZGVzY3JpcHRpb24iLCJuZXdNYXN0ZXJUb2RvTGlzdCIsInNsaWNlIiwidGFzayIsIm5hbWUiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwicHVzaCIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7cUNBQ0o7O3FCQUFBLEFBQVksT0FBTzt3Q0FBQTs7NElBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7c0JBQUwsQUFBYSxBQUNLLEFBRWxCO0FBSGEsQUFDWDtVQUVGLEFBQUssdUJBQXVCLE1BQUEsQUFBSyxxQkFBTCxBQUEwQixLQUxyQyxBQUtqQjtXQUNEOzs7Ozt5Q0FFb0IsQSxHQUFHLEFBQ3RCO1FBRHNCLEFBQ3RCLEFBQUU7a0JBQzhCLEtBRlYsQUFFZTtVQUZmLEFBRWQsY0FGYyxBQUVkO1VBRmMsQUFFUCxxQkFGTyxBQUVQLEFBQ2Y7O1VBQU0sb0JBQW9CLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBckMsQUFBMEIsQUFBMEIsQUFDcEQ7VUFBTTtjQUNFLE1BREssQUFDQyxBQUNaO3FCQUFhLGFBRmYsQUFBYSxBQUVlLEFBRTVCO0FBSmEsQUFDWDt3QkFHRixBQUFrQixLQUFsQixBQUF1QixBQUN2QjtXQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFoQixBQUFjLEFBQWtCLEFBQ2pDOzs7OzZCQUVRLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFVBQU0sVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGOzthQUNFLEFBQ00sQUFDSjtjQUZGLEFBRU8sQUFDTDtZQUhGLEFBR0ssQUFDSDtxQkFKRixBQUljO29CQUpkO3NCQURGLEFBQ0UsQUFLQTtBQUxBO0FBQ0U7O29CQUlGO3NCQU5GLEFBTUUsQUFDRTtBQURGO0FBQUE7YUFDRSxBQUNNLEFBQ0o7Y0FGRixBQUVPLEFBQ0w7WUFIRixBQUdLLEFBQ0g7cUJBSkYsQUFJYztvQkFKZDtzQkFQSixBQU9JLEFBS0E7QUFMQTtBQUNFLDBCQUlGLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLHlCQUFJLGNBQUEsWUFBUSxNQUFSLEFBQWE7b0JBQWI7c0JBQUE7QUFBQTtTQWJWLEFBQ0UsQUFZSSxBQUFJLEFBRVYsMEJBQUEsQUFBQzt3QkFDaUIsS0FBQSxBQUFLLE1BRHZCLEFBQzZCO29CQUQ3QjtzQkFoQkYsQUFDRSxBQWVBLEFBSUg7QUFKRztBQUNFOzs7OztFQXZDZ0IsZ0JBQU0sQSxBQThDOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRm9ybUlucHV0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ELWxpc2gvRGVza3RvcC9uZXh0LXRvLWRvIn0=