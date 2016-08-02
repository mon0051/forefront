'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormGroupDirective = exports.formDirectiveProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('@angular/core');

var _async = require('../../facade/async');

var _collection = require('../../facade/collection');

var _exceptions = require('../../facade/exceptions');

var _lang = require('../../facade/lang');

var _validators2 = require('../../validators');

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


var formDirectiveProvider =
/*@ts2dart_const*/ /* @ts2dart_Provider */exports.formDirectiveProvider = {
    provide: _control_container.ControlContainer,
    useExisting: (0, _core.forwardRef)(function () {
        return FormGroupDirective;
    })
};

var FormGroupDirective = exports.FormGroupDirective = function (_ControlContainer) {
    _inherits(FormGroupDirective, _ControlContainer);

    function FormGroupDirective(_validators, _asyncValidators) {
        _classCallCheck(this, FormGroupDirective);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormGroupDirective).call(this));

        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        _this._submitted = false;
        _this.directives = [];
        _this.form = null;
        _this.ngSubmit = new _async.EventEmitter();
        return _this;
    }

    _createClass(FormGroupDirective, [{
        key: 'ngOnChanges',
        value: function ngOnChanges(changes) {
            this._checkFormPresent();
            if (_collection.StringMapWrapper.contains(changes, 'form')) {
                var sync = (0, _shared.composeValidators)(this._validators);
                this.form.validator = _validators2.Validators.compose([this.form.validator, sync]);
                var async = (0, _shared.composeAsyncValidators)(this._asyncValidators);
                this.form.asyncValidator = _validators2.Validators.composeAsync([this.form.asyncValidator, async]);
                this.form.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            }
            this._updateDomValue();
        }
    }, {
        key: 'addControl',
        value: function addControl(dir) {
            var ctrl = this.form.find(dir.path);
            (0, _shared.setUpControl)(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
            this.directives.push(dir);
        }
    }, {
        key: 'getControl',
        value: function getControl(dir) {
            return this.form.find(dir.path);
        }
    }, {
        key: 'removeControl',
        value: function removeControl(dir) {
            _collection.ListWrapper.remove(this.directives, dir);
        }
    }, {
        key: 'addFormGroup',
        value: function addFormGroup(dir) {
            var ctrl = this.form.find(dir.path);
            (0, _shared.setUpFormContainer)(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        }
    }, {
        key: 'removeFormGroup',
        value: function removeFormGroup(dir) {}
    }, {
        key: 'getFormGroup',
        value: function getFormGroup(dir) {
            return this.form.find(dir.path);
        }
    }, {
        key: 'addFormArray',
        value: function addFormArray(dir) {
            var ctrl = this.form.find(dir.path);
            (0, _shared.setUpFormContainer)(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        }
    }, {
        key: 'removeFormArray',
        value: function removeFormArray(dir) {}
    }, {
        key: 'getFormArray',
        value: function getFormArray(dir) {
            return this.form.find(dir.path);
        }
    }, {
        key: 'updateModel',
        value: function updateModel(dir, value) {
            var ctrl = this.form.find(dir.path);
            ctrl.updateValue(value);
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit() {
            this._submitted = true;
            _async.ObservableWrapper.callEmit(this.ngSubmit, null);
            return false;
        }
        /** @internal */

    }, {
        key: '_updateDomValue',
        value: function _updateDomValue() {
            var _this2 = this;

            this.directives.forEach(function (dir) {
                var ctrl = _this2.form.find(dir.path);
                dir.valueAccessor.writeValue(ctrl.value);
            });
        }
    }, {
        key: '_checkFormPresent',
        value: function _checkFormPresent() {
            if ((0, _lang.isBlank)(this.form)) {
                throw new _exceptions.BaseException('formGroup expects a FormGroup instance. Please pass one in.\n           Example: <form [formGroup]="myFormGroup">\n      ');
            }
        }
    }, {
        key: 'submitted',
        get: function get() {
            return this._submitted;
        }
    }, {
        key: 'formDirective',
        get: function get() {
            return this;
        }
    }, {
        key: 'control',
        get: function get() {
            return this.form;
        }
    }, {
        key: 'path',
        get: function get() {
            return [];
        }
    }]);

    return FormGroupDirective;
}(_control_container.ControlContainer);
/** @nocollapse */


FormGroupDirective.decorators = [{ type: _core.Directive, args: [{
        selector: '[formGroup]',
        providers: [formDirectiveProvider],
        host: { '(submit)': 'onSubmit()' },
        exportAs: 'ngForm'
    }] }];
/** @nocollapse */
FormGroupDirective.ctorParameters = [{ type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators2.NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators2.NG_ASYNC_VALIDATORS] }] }];
/** @nocollapse */
FormGroupDirective.propDecorators = {
    'form': [{ type: _core.Input, args: ['formGroup'] }],
    'ngSubmit': [{ type: _core.Output }]
};
//# sourceMappingURL=form_group_directive.js.map

//# sourceMappingURL=form_group_directive-compiled.js.map