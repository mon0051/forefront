'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormControlName = exports.controlNameBinding = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('@angular/core');

var _async = require('../../facade/async');

var _validators2 = require('../../validators');

var _control_container = require('../control_container');

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


var controlNameBinding =
/*@ts2dart_const*/ /* @ts2dart_Provider */exports.controlNameBinding = {
    provide: _ng_control.NgControl,
    useExisting: (0, _core.forwardRef)(function () {
        return FormControlName;
    })
};

var FormControlName = exports.FormControlName = function (_NgControl) {
    _inherits(FormControlName, _NgControl);

    function FormControlName(_parent, _validators, _asyncValidators, valueAccessors) {
        _classCallCheck(this, FormControlName);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormControlName).call(this));

        _this._parent = _parent;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        _this._added = false;
        _this.update = new _async.EventEmitter();
        _this.valueAccessor = (0, _shared.selectValueAccessor)(_this, valueAccessors);
        return _this;
    }

    _createClass(FormControlName, [{
        key: 'ngOnChanges',
        value: function ngOnChanges(changes) {
            if (!this._added) {
                this.formDirective.addControl(this);
                this._added = true;
            }
            if ((0, _shared.isPropertyUpdated)(changes, this.viewModel)) {
                this.viewModel = this.model;
                this.formDirective.updateModel(this, this.model);
            }
        }
    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            this.formDirective.removeControl(this);
        }
    }, {
        key: 'viewToModelUpdate',
        value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            _async.ObservableWrapper.callEmit(this.update, newValue);
        }
    }, {
        key: 'path',
        get: function get() {
            return (0, _shared.controlPath)(this.name, this._parent);
        }
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
    }, {
        key: 'control',
        get: function get() {
            return this.formDirective.getControl(this);
        }
    }]);

    return FormControlName;
}(_ng_control.NgControl);
/** @nocollapse */


FormControlName.decorators = [{ type: _core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] }] }];
/** @nocollapse */
FormControlName.ctorParameters = [{ type: _control_container.ControlContainer, decorators: [{ type: _core.Host }, { type: _core.SkipSelf }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators2.NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators2.NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_control_value_accessor.NG_VALUE_ACCESSOR] }] }];
/** @nocollapse */
FormControlName.propDecorators = {
    'name': [{ type: _core.Input, args: ['formControlName'] }],
    'model': [{ type: _core.Input, args: ['ngModel'] }],
    'update': [{ type: _core.Output, args: ['ngModelChange'] }]
};
//# sourceMappingURL=form_control_name.js.map

//# sourceMappingURL=form_control_name-compiled.js.map