'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
 * A directive that contains multiple {@link NgControl}s.
 *
 * Only used by the forms module.
 *
 * @experimental
 */
var ControlContainer = exports.ControlContainer = function (_AbstractControlDirec) {
  _inherits(ControlContainer, _AbstractControlDirec);

  function ControlContainer() {
    _classCallCheck(this, ControlContainer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ControlContainer).apply(this, arguments));
  }

  _createClass(ControlContainer, [{
    key: 'formDirective',

    /**
     * Get the form to which this container belongs.
     */
    get: function get() {
      return null;
    }
    /**
     * Get the path to this container.
     */

  }, {
    key: 'path',
    get: function get() {
      return null;
    }
  }]);

  return ControlContainer;
}(_abstract_control_directive.AbstractControlDirective);
//# sourceMappingURL=control_container.js.map

//# sourceMappingURL=control_container-compiled.js.map