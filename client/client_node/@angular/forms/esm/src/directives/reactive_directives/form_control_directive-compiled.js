'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormControlDirective = exports.formControlBinding = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('@angular/core');

var _async = require('../../facade/async');

var _collection = require('../../facade/collection');

var _validators2 = require('../../validators');

var _control_value_accessor = require('../control_value_accessor');

var _ng_control = require('../ng_control');

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


var formControlBinding =
/*@ts2dart_const*/ /* @ts2dart_Provider */exports.formControlBinding = {
    provide: _ng_control.NgControl,
    useExisting: (0, _core.forwardRef)(function () {
        return FormControlDirective;
    })
};

var FormControlDirective = exports.FormControlDirective = function (_NgControl) {
    _inherits(FormControlDirective, _NgControl);

    function FormControlDirective(_validators, _asyncValidators, valueAccessors) {
        _classCallCheck(this, FormControlDirective);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormControlDirective).call(this));

        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        _this.update = new _async.EventEmitter();
        _this.valueAccessor = (0, _shared.selectValueAccessor)(_this, valueAccessors);
        return _this;
    }

    _createClass(FormControlDirective, [{
        key: 'ngOnChanges',
        value: function ngOnChanges(changes) {
            if (this._isControlChanged(changes)) {
                (0, _shared.setUpControl)(this.form, this);
                this.form.updateValueAndValidity({ emitEvent: false });
            }
            if ((0, _shared.isPropertyUpdated)(changes, this.viewModel)) {
                this.form.updateValue(this.model);
                this.viewModel = this.model;
            }
        }
    }, {
        key: 'viewToModelUpdate',
        value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            _async.ObservableWrapper.callEmit(this.update, newValue);
        }
    }, {
        key: '_isControlChanged',
        value: function _isControlChanged(changes) {
            return _collection.StringMapWrapper.contains(changes, 'form');
        }
    }, {
        key: 'path',
        get: function get() {
            return [];
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
    }, {
        key: 'control',
        get: function get() {
            return this.form;
        }
    }]);

    return FormControlDirective;
}(_ng_control.NgControl);
/** @nocollapse */


FormControlDirective.decorators = [{ type: _core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding], exportAs: 'ngForm' }] }];
/** @nocollapse */
FormControlDirective.ctorParameters = [{ type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators2.NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators2.NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_control_value_accessor.NG_VALUE_ACCESSOR] }] }];
/** @nocollapse */
FormControlDirective.propDecorators = {
    'form': [{ type: _core.Input, args: ['formControl'] }],
    'model': [{ type: _core.Input, args: ['ngModel'] }],
    'update': [{ type: _core.Output, args: ['ngModelChange'] }]
};
//# sourceMappingURL=form_control_directive.js.map

//# sourceMappingURL=form_control_directive-compiled.js.map