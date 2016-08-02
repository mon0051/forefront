'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A base class for the WrappedException that can be used to identify
 * a WrappedException from ExceptionHandler without adding circular
 * dependency.
 */
var BaseWrappedException = exports.BaseWrappedException = function (_Error) {
  _inherits(BaseWrappedException, _Error);

  function BaseWrappedException(message) {
    _classCallCheck(this, BaseWrappedException);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseWrappedException).call(this, message));
  }

  _createClass(BaseWrappedException, [{
    key: 'wrapperMessage',
    get: function get() {
      return '';
    }
  }, {
    key: 'wrapperStack',
    get: function get() {
      return null;
    }
  }, {
    key: 'originalException',
    get: function get() {
      return null;
    }
  }, {
    key: 'originalStack',
    get: function get() {
      return null;
    }
  }, {
    key: 'context',
    get: function get() {
      return null;
    }
  }, {
    key: 'message',
    get: function get() {
      return '';
    }
  }]);

  return BaseWrappedException;
}(Error);
//# sourceMappingURL=base_wrapped_exception.js.map

//# sourceMappingURL=base_wrapped_exception-compiled.js.map