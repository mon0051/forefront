'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractFormGroupDirective = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _control_container = require('./control_container');

var _shared = require('./shared');

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
  This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
 */
var AbstractFormGroupDirective = exports.AbstractFormGroupDirective = function (_ControlContainer) {
  _inherits(AbstractFormGroupDirective, _ControlContainer);

  function AbstractFormGroupDirective() {
    _classCallCheck(this, AbstractFormGroupDirective);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractFormGroupDirective).apply(this, arguments));
  }

  _createClass(AbstractFormGroupDirective, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      this.formDirective.addFormGroup(this);
    }
  }, {
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      this.formDirective.removeFormGroup(this);
    }
    /**
     * Get the {@link FormGroup} backing this binding.
     */

  }, {
    key: 'control',
    get: function get() {
      return this.formDirective.getFormGroup(this);
    }
    /**
     * Get the path to this control group.
     */

  }, {
    key: 'path',
    get: function get() {
      return (0, _shared.controlPath)(this.name, this._parent);
    }
    /**
     * Get the {@link Form} to which this group belongs.
     */

  }, {
    key: 'formDirective',
    get: function get() {
      return this._parent.formDirective;
    }
  }, {
    key: 'validator',
    get: function get() {
      return (0, _shared.composeValidators)(this._validators);
    }
  }, {
    key: 'asyncValidator',
    get: function get() {
      return (0, _shared.composeAsyncValidators)(this._asyncValidators);
    }
  }]);

  return AbstractFormGroupDirective;
}(_control_container.ControlContainer);
//# sourceMappingURL=abstract_form_group_directive.js.map

//# sourceMappingURL=abstract_form_group_directive-compiled.js.map