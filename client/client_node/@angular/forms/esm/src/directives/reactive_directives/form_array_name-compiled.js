'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormArrayName = exports.formArrayNameProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('@angular/core');

var _validators = require('../../validators');

var _control_container = require('../control_container');

var _shared = require('../shared');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var formArrayNameProvider =
/*@ts2dart_const*/ /* @ts2dart_Provider */exports.formArrayNameProvider = {
    provide: _control_container.ControlContainer,
    useExisting: (0, _core.forwardRef)(function () {
        return FormArrayName;
    })
};

var FormArrayName = exports.FormArrayName = function (_ControlContainer) {
    _inherits(FormArrayName, _ControlContainer);

    function FormArrayName(parent, validators, asyncValidators) {
        _classCallCheck(this, FormArrayName);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormArrayName).call(this));

        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }

    _createClass(FormArrayName, [{
        key: 'ngOnInit',
        value: function ngOnInit() {
            this.formDirective.addFormArray(this);
        }
    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            this.formDirective.removeFormArray(this);
        }
    }, {
        key: 'control',
        get: function get() {
            return this.formDirective.getFormArray(this);
        }
    }, {
        key: 'formDirective',
        get: function get() {
            return this._parent.formDirective;
        }
    }, {
        key: 'path',
        get: function get() {
            return (0, _shared.controlPath)(this.name, this._parent);
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

    return FormArrayName;
}(_control_container.ControlContainer);
/** @nocollapse */


FormArrayName.decorators = [{ type: _core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] }] }];
/** @nocollapse */
FormArrayName.ctorParameters = [{ type: _control_container.ControlContainer, decorators: [{ type: _core.Host }, { type: _core.SkipSelf }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators.NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators.NG_ASYNC_VALIDATORS] }] }];
/** @nocollapse */
FormArrayName.propDecorators = {
    'name': [{ type: _core.Input, args: ['formArrayName'] }]
};
//# sourceMappingURL=form_array_name.js.map

//# sourceMappingURL=form_array_name-compiled.js.map