webpackHotUpdate(6,{

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _TodoList = __webpack_require__(419);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/D-lish/Desktop/next-to-do/components/FormInput.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/D-lish/Desktop/next-to-do/components/FormInput.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43NTJmNTM4NGVjNjI1ZWU1ZDkyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtSW5wdXQuanM/NTFkYjY3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vVG9kb0xpc3RcIjtcblxuY2xhc3MgRm9ybUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1hc3RlclRvZG9MaXN0OiBbXVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVUb2RvU3VibWlzc2lvbiA9IHRoaXMuaGFuZGxlVG9kb1N1Ym1pc3Npb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVRvZG9TdWJtaXNzaW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBfbmFtZSwgX2Rlc2NyaXB0aW9uIH0gPSB0aGlzLnJlZnM7XG4gICAgY29uc3QgbmV3TWFzdGVyVG9kb0xpc3QgPSB0aGlzLnN0YXRlLm1hc3RlclRvZG9MaXN0LnNsaWNlKCk7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgIG5hbWU6IF9uYW1lLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IF9kZXNjcmlwdGlvbi52YWx1ZVxuICAgIH1cbiAgICBuZXdNYXN0ZXJUb2RvTGlzdC5wdXNoKHRhc2spO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtYXN0ZXJUb2RvTGlzdDogbmV3TWFzdGVyVG9kb0xpc3QgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlVG9kb1N1Ym1pc3Npb259PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPVwiX25hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZWY9XCJfZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDxoNT48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj48L2g1PlxuICAgICAgPC9mb3JtPlxuICAgICAgPFRvZG9MaXN0XG4gICAgICAgIG1hc3RlclRvZG9MaXN0PXt0aGlzLnN0YXRlLm1hc3RlclRvZG9MaXN0fS8+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUlucHV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb3JtSW5wdXQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBSkE7QUFDQTs7Ozs7QUF2Q0E7QUFDQTtBQTZDQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9