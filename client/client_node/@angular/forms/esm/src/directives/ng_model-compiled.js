'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgModel = exports.formControlBinding = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('@angular/core');

var _async = require('../facade/async');

var _exceptions = require('../facade/exceptions');

var _model = require('../model');

var _validators2 = require('../validators');

var _control_container = require('./control_container');

var _control_value_accessor = require('./control_value_accessor');

var _ng_control = require('./ng_control');

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


var formControlBinding =
/*@ts2dart_const*/ /* @ts2dart_Provider */exports.formControlBinding = {
    provide: _ng_control.NgControl,
    useExisting: (0, _core.forwardRef)(function () {
        return NgModel;
    })
};

var NgModel = exports.NgModel = function (_NgControl) {
    _inherits(NgModel, _NgControl);

    function NgModel(_parent, _validators, _asyncValidators, valueAccessors) {
        _classCallCheck(this, NgModel);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NgModel).call(this));

        _this._parent = _parent;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        /** @internal */
        _this._control = new _model.FormControl();
        /** @internal */
        _this._registered = false;
        _this.update = new _async.EventEmitter();
        _this.valueAccessor = (0, _shared.selectValueAccessor)(_this, valueAccessors);
        return _this;
    }

    _createClass(NgModel, [{
        key: 'ngOnChanges',
        value: function ngOnChanges(changes) {
            this._checkName();
            if (!this._registered) this._setUpControl();
            if ((0, _shared.isPropertyUpdated)(changes, this.viewModel)) {
                this._updateValue(this.model);
                this.viewModel = this.model;
            }
        }
    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
        }
    }, {
        key: 'viewToModelUpdate',
        value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            _async.ObservableWrapper.callEmit(this.update, newValue);
        }
    }, {
        key: '_setUpControl',
        value: function _setUpControl() {
            this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
            this._registered = true;
        }
    }, {
        key: '_isStandalone',
        value: function _isStandalone() {
            return !this._parent || this.options && this.options.standalone;
        }
    }, {
        key: '_setUpStandalone',
        value: function _setUpStandalone() {
            (0, _shared.setUpControl)(this._control, this);
            this._control.updateValueAndValidity({ emitEvent: false });
        }
    }, {
        key: '_checkName',
        value: function _checkName() {
            if (this.options && this.options.name) this.name = this.options.name;
            if (!this._isStandalone() && !this.name) {
                throw new _exceptions.BaseException('If ngModel is used within a form tag, either the name attribute must be set\n                      or the form control must be defined as \'standalone\' in ngModelOptions.\n\n                      Example 1: <input [(ngModel)]="person.firstName" name="first">\n                      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">\n                   ');
            }
        }
    }, {
        key: '_updateValue',
        value: function _updateValue(value) {
            var _this2 = this;

            _async.PromiseWrapper.scheduleMicrotask(function () {
                _this2.control.updateValue(value);
            });
        }
    }, {
        key: 'control',
        get: function get() {
            return this._control;
        }
    }, {
        key: 'path',
        get: function get() {
            return this._parent ? (0, _shared.controlPath)(this.name, this._parent) : [];
        }
    }, {
        key: 'formDirective',
        get: function get() {
            return this._parent ? this._parent.formDirective : null;
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

    return NgModel;
}(_ng_control.NgControl);
/** @nocollapse */


NgModel.decorators = [{ type: _core.Directive, args: [{
        selector: '[ngModel]:not([formControlName]):not([formControl])',
        providers: [formControlBinding],
        exportAs: 'ngModel'
    }] }];
/** @nocollapse */
NgModel.ctorParameters = [{ type: _control_container.ControlContainer, decorators: [{ type: _core.Optional }, { type: _core.Host }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators2.NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators2.NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_control_value_accessor.NG_VALUE_ACCESSOR] }] }];
/** @nocollapse */
NgModel.propDecorators = {
    'model': [{ type: _core.Input, args: ['ngModel'] }],
    'name': [{ type: _core.Input }],
    'options': [{ type: _core.Input, args: ['ngModelOptions'] }],
    'update': [{ type: _core.Output, args: ['ngModelChange'] }]
};
//# sourceMappingURL=ng_model.js.map

//# sourceMappingURL=ng_model-compiled.js.map