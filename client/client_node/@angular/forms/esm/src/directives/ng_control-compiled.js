'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NgControl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _exceptions = require('../facade/exceptions');

var _abstract_control_directive = require('./abstract_control_directive');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * A base class that all control directive extend.
 * It binds a {@link Control} object to a DOM element.
 *
 * Used internally by Angular forms.
 *
 * @experimental
 */
var NgControl = exports.NgControl = function (_AbstractControlDirec) {
  _inherits(NgControl, _AbstractControlDirec);

  function NgControl() {
    var _Object$getPrototypeO;

    _classCallCheck(this, NgControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(NgControl)).call.apply(_Object$getPrototypeO, [this].concat(args)));

    _this.name = null;
    _this.valueAccessor = null;
    return _this;
  }

  _createClass(NgControl, [{
    key: 'validator',
    get: function get() {
      return (0, _exceptions.unimplemented)();
    }
  }, {
    key: 'asyncValidator',
    get: function get() {
      return (0, _exceptions.unimplemented)();
    }
  }]);

  return NgControl;
}(_abstract_control_directive.AbstractControlDirective);
//# sourceMappingURL=ng_control.js.map

//# sourceMappingURL=ng_control-compiled.js.map