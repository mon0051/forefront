'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgForm = exports.formDirectiveProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('@angular/core');

var _async = require('../facade/async');

var _collection = require('../facade/collection');

var _lang = require('../facade/lang');

var _model = require('../model');

var _validators = require('../validators');

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


var formDirectiveProvider =
/*@ts2dart_const*/exports.formDirectiveProvider = { provide: _control_container.ControlContainer, useExisting: (0, _core.forwardRef)(function () {
        return NgForm;
    }) };

var NgForm = exports.NgForm = function (_ControlContainer) {
    _inherits(NgForm, _ControlContainer);

    function NgForm(validators, asyncValidators) {
        _classCallCheck(this, NgForm);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NgForm).call(this));

        _this._submitted = false;
        _this.ngSubmit = new _async.EventEmitter();
        _this.form = new _model.FormGroup({}, null, (0, _shared.composeValidators)(validators), (0, _shared.composeAsyncValidators)(asyncValidators));
        return _this;
    }

    _createClass(NgForm, [{
        key: 'addControl',
        value: function addControl(dir) {
            var _this2 = this;

            _async.PromiseWrapper.scheduleMicrotask(function () {
                var container = _this2._findContainer(dir.path);
                dir._control = container.registerControl(dir.name, dir.control);
                (0, _shared.setUpControl)(dir.control, dir);
                dir.control.updateValueAndValidity({ emitEvent: false });
            });
        }
    }, {
        key: 'getControl',
        value: function getControl(dir) {
            return this.form.find(dir.path);
        }
    }, {
        key: 'removeControl',
        value: function removeControl(dir) {
            var _this3 = this;

            _async.PromiseWrapper.scheduleMicrotask(function () {
                var container = _this3._findContainer(dir.path);
                if ((0, _lang.isPresent)(container)) {
                    container.removeControl(dir.name);
                }
            });
        }
    }, {
        key: 'addFormGroup',
        value: function addFormGroup(dir) {
            var _this4 = this;

            _async.PromiseWrapper.scheduleMicrotask(function () {
                var container = _this4._findContainer(dir.path);
                var group = new _model.FormGroup({});
                (0, _shared.setUpFormContainer)(group, dir);
                container.registerControl(dir.name, group);
                group.updateValueAndValidity({ emitEvent: false });
            });
        }
    }, {
        key: 'removeFormGroup',
        value: function removeFormGroup(dir) {
            var _this5 = this;

            _async.PromiseWrapper.scheduleMicrotask(function () {
                var container = _this5._findContainer(dir.path);
                if ((0, _lang.isPresent)(container)) {
                    container.removeControl(dir.name);
                }
            });
        }
    }, {
        key: 'getFormGroup',
        value: function getFormGroup(dir) {
            return this.form.find(dir.path);
        }
    }, {
        key: 'updateModel',
        value: function updateModel(dir, value) {
            var _this6 = this;

            _async.PromiseWrapper.scheduleMicrotask(function () {
                var ctrl = _this6.form.find(dir.path);
                ctrl.updateValue(value);
            });
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
        key: '_findContainer',
        value: function _findContainer(path) {
            path.pop();
            return _collection.ListWrapper.isEmpty(path) ? this.form : this.form.find(path);
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
    }, {
        key: 'controls',
        get: function get() {
            return this.form.controls;
        }
    }]);

    return NgForm;
}(_control_container.ControlContainer);
/** @nocollapse */


NgForm.decorators = [{ type: _core.Directive, args: [{
        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
        providers: [formDirectiveProvider],
        host: {
            '(submit)': 'onSubmit()'
        },
        outputs: ['ngSubmit'],
        exportAs: 'ngForm'
    }] }];
/** @nocollapse */
NgForm.ctorParameters = [{ type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators.NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators.NG_ASYNC_VALIDATORS] }] }];
//# sourceMappingURL=ng_form.js.map

//# sourceMappingURL=ng_form-compiled.js.map