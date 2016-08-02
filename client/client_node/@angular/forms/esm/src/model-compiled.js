'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormArray = exports.FormGroup = exports.FormControl = exports.AbstractControl = exports.PENDING = exports.INVALID = exports.VALID = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


exports.isControl = isControl;

var _shared = require('./directives/shared');

var _async = require('./facade/async');

var _collection = require('./facade/collection');

var _lang = require('./facade/lang');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
 */
var VALID = exports.VALID = 'VALID';
/**
 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
 */
var INVALID = exports.INVALID = 'INVALID';
/**
 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
 * errors are not yet available for the input value.
 */
var PENDING = exports.PENDING = 'PENDING';
function isControl(control) {
    return control instanceof AbstractControl;
}
function _find(control, path) {
    if ((0, _lang.isBlank)(path)) return null;
    if (!(path instanceof Array)) {
        path = path.split('/');
    }
    if (path instanceof Array && _collection.ListWrapper.isEmpty(path)) return null;
    return path.reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return (0, _lang.isPresent)(v.controls[name]) ? v.controls[name] : null;
        } else if (v instanceof FormArray) {
            var index = name;
            return (0, _lang.isPresent)(v.at(index)) ? v.at(index) : null;
        } else {
            return null;
        }
    }, control);
}
function toObservable(r) {
    return (0, _lang.isPromise)(r) ? _async.ObservableWrapper.fromPromise(r) : r;
}
function coerceToValidator(validator) {
    return Array.isArray(validator) ? (0, _shared.composeValidators)(validator) : validator;
}
function coerceToAsyncValidator(asyncValidator) {
    return Array.isArray(asyncValidator) ? (0, _shared.composeAsyncValidators)(asyncValidator) : asyncValidator;
}
/**
 * @experimental
 */

var AbstractControl = exports.AbstractControl = function () {
    function AbstractControl(validator, asyncValidator) {
        _classCallCheck(this, AbstractControl);

        this.validator = validator;
        this.asyncValidator = asyncValidator;
        this._pristine = true;
        this._touched = false;
    }

    _createClass(AbstractControl, [{
        key: 'setAsyncValidators',
        value: function setAsyncValidators(newValidator) {
            this.asyncValidator = coerceToAsyncValidator(newValidator);
        }
    }, {
        key: 'clearAsyncValidators',
        value: function clearAsyncValidators() {
            this.asyncValidator = null;
        }
    }, {
        key: 'setValidators',
        value: function setValidators(newValidator) {
            this.validator = coerceToValidator(newValidator);
        }
    }, {
        key: 'clearValidators',
        value: function clearValidators() {
            this.validator = null;
        }
    }, {
        key: 'markAsTouched',
        value: function markAsTouched() {
            this._touched = true;
        }
    }, {
        key: 'markAsDirty',
        value: function markAsDirty() {
            var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var onlySelf = _ref.onlySelf;

            onlySelf = (0, _lang.normalizeBool)(onlySelf);
            this._pristine = false;
            if ((0, _lang.isPresent)(this._parent) && !onlySelf) {
                this._parent.markAsDirty({ onlySelf: onlySelf });
            }
        }
    }, {
        key: 'markAsPending',
        value: function markAsPending() {
            var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var onlySelf = _ref2.onlySelf;

            onlySelf = (0, _lang.normalizeBool)(onlySelf);
            this._status = PENDING;
            if ((0, _lang.isPresent)(this._parent) && !onlySelf) {
                this._parent.markAsPending({ onlySelf: onlySelf });
            }
        }
    }, {
        key: 'setParent',
        value: function setParent(parent) {
            this._parent = parent;
        }
    }, {
        key: 'updateValueAndValidity',
        value: function updateValueAndValidity() {
            var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var onlySelf = _ref3.onlySelf;
            var emitEvent = _ref3.emitEvent;

            onlySelf = (0, _lang.normalizeBool)(onlySelf);
            emitEvent = (0, _lang.isPresent)(emitEvent) ? emitEvent : true;
            this._updateValue();
            this._errors = this._runValidator();
            this._status = this._calculateStatus();
            if (this._status == VALID || this._status == PENDING) {
                this._runAsyncValidator(emitEvent);
            }
            if (emitEvent) {
                _async.ObservableWrapper.callEmit(this._valueChanges, this._value);
                _async.ObservableWrapper.callEmit(this._statusChanges, this._status);
            }
            if ((0, _lang.isPresent)(this._parent) && !onlySelf) {
                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            }
        }
    }, {
        key: '_runValidator',
        value: function _runValidator() {
            return (0, _lang.isPresent)(this.validator) ? this.validator(this) : null;
        }
    }, {
        key: '_runAsyncValidator',
        value: function _runAsyncValidator(emitEvent) {
            var _this = this;

            if ((0, _lang.isPresent)(this.asyncValidator)) {
                this._status = PENDING;
                this._cancelExistingSubscription();
                var obs = toObservable(this.asyncValidator(this));
                this._asyncValidationSubscription = _async.ObservableWrapper.subscribe(obs, function (res) {
                    return _this.setErrors(res, { emitEvent: emitEvent });
                });
            }
        }
    }, {
        key: '_cancelExistingSubscription',
        value: function _cancelExistingSubscription() {
            if ((0, _lang.isPresent)(this._asyncValidationSubscription)) {
                _async.ObservableWrapper.dispose(this._asyncValidationSubscription);
            }
        }
        /**
         * Sets errors on a form control.
         *
         * This is used when validations are run not automatically, but manually by the user.
         *
         * Calling `setErrors` will also update the validity of the parent control.
         *
         * ## Usage
         *
         * ```
         * var login = new FormControl("someLogin");
         * login.setErrors({
         *   "notUnique": true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({"notUnique": true});
         *
         * login.updateValue("someOtherLogin");
         *
         * expect(login.valid).toEqual(true);
         * ```
         */

    }, {
        key: 'setErrors',
        value: function setErrors(errors) {
            var _ref4 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            var emitEvent = _ref4.emitEvent;

            emitEvent = (0, _lang.isPresent)(emitEvent) ? emitEvent : true;
            this._errors = errors;
            this._updateControlsErrors(emitEvent);
        }
    }, {
        key: 'find',
        value: function find(path) {
            return _find(this, path);
        }
    }, {
        key: 'getError',
        value: function getError(errorCode) {
            var path = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            var control = (0, _lang.isPresent)(path) && !_collection.ListWrapper.isEmpty(path) ? this.find(path) : this;
            if ((0, _lang.isPresent)(control) && (0, _lang.isPresent)(control._errors)) {
                return _collection.StringMapWrapper.get(control._errors, errorCode);
            } else {
                return null;
            }
        }
    }, {
        key: 'hasError',
        value: function hasError(errorCode) {
            var path = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            return (0, _lang.isPresent)(this.getError(errorCode, path));
        }
    }, {
        key: '_updateControlsErrors',

        /** @internal */
        value: function _updateControlsErrors(emitEvent) {
            this._status = this._calculateStatus();
            if (emitEvent) {
                _async.ObservableWrapper.callEmit(this._statusChanges, this._status);
            }
            if ((0, _lang.isPresent)(this._parent)) {
                this._parent._updateControlsErrors(emitEvent);
            }
        }
        /** @internal */

    }, {
        key: '_initObservables',
        value: function _initObservables() {
            this._valueChanges = new _async.EventEmitter();
            this._statusChanges = new _async.EventEmitter();
        }
    }, {
        key: '_calculateStatus',
        value: function _calculateStatus() {
            if ((0, _lang.isPresent)(this._errors)) return INVALID;
            if (this._anyControlsHaveStatus(PENDING)) return PENDING;
            if (this._anyControlsHaveStatus(INVALID)) return INVALID;
            return VALID;
        }
    }, {
        key: 'value',
        get: function get() {
            return this._value;
        }
    }, {
        key: 'status',
        get: function get() {
            return this._status;
        }
    }, {
        key: 'valid',
        get: function get() {
            return this._status === VALID;
        }
        /**
         * Returns the errors of this control.
         */

    }, {
        key: 'errors',
        get: function get() {
            return this._errors;
        }
    }, {
        key: 'pristine',
        get: function get() {
            return this._pristine;
        }
    }, {
        key: 'dirty',
        get: function get() {
            return !this.pristine;
        }
    }, {
        key: 'touched',
        get: function get() {
            return this._touched;
        }
    }, {
        key: 'untouched',
        get: function get() {
            return !this._touched;
        }
    }, {
        key: 'valueChanges',
        get: function get() {
            return this._valueChanges;
        }
    }, {
        key: 'statusChanges',
        get: function get() {
            return this._statusChanges;
        }
    }, {
        key: 'pending',
        get: function get() {
            return this._status == PENDING;
        }
    }, {
        key: 'root',
        get: function get() {
            var x = this;
            while ((0, _lang.isPresent)(x._parent)) {
                x = x._parent;
            }
            return x;
        }
    }]);

    return AbstractControl;
}();
/**
 * Defines a part of a form that cannot be divided into other controls. `FormControl`s have values
 * and
 * validation state, which is determined by an optional validation function.
 *
 * `FormControl` is one of the three fundamental building blocks used to define forms in Angular,
 * along
 * with {@link FormGroup} and {@link FormArray}.
 *
 * ## Usage
 *
 * By default, a `FormControl` is created for every `<input>` or other form component.
 * With {@link FormControlDirective} or {@link FormGroupDirective} an existing {@link FormControl}
 * can be bound to a DOM element instead. This `FormControl` can be configured with a custom
 * validation function.
 *
 * @experimental
 */


var FormControl = exports.FormControl = function (_AbstractControl) {
    _inherits(FormControl, _AbstractControl);

    function FormControl() {
        var value = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
        var validator = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
        var asyncValidator = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

        _classCallCheck(this, FormControl);

        /** @internal */
        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(FormControl).call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)));

        _this2._onChange = [];
        _this2._value = value;
        _this2.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this2._initObservables();
        return _this2;
    }
    /**
     * Set the value of the form control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
     * and not its parent component. If `emitEvent` is `true`, this change will cause a
     * `valueChanges` event on the `FormControl` to be emitted. Both of these options default to
     * `false`.
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     */


    _createClass(FormControl, [{
        key: 'updateValue',
        value: function updateValue(value) {
            var _this3 = this;

            var _ref5 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            var onlySelf = _ref5.onlySelf;
            var emitEvent = _ref5.emitEvent;
            var emitModelToViewChange = _ref5.emitModelToViewChange;

            emitModelToViewChange = (0, _lang.isPresent)(emitModelToViewChange) ? emitModelToViewChange : true;
            this._value = value;
            if (this._onChange.length && emitModelToViewChange) {
                this._onChange.forEach(function (changeFn) {
                    return changeFn(_this3._value);
                });
            }
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        }
        /**
         * @internal
         */

    }, {
        key: '_updateValue',
        value: function _updateValue() {}
        /**
         * @internal
         */

    }, {
        key: '_anyControlsHaveStatus',
        value: function _anyControlsHaveStatus(status) {
            return false;
        }
        /**
         * Register a listener for change events.
         */

    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            this._onChange.push(fn);
        }
    }]);

    return FormControl;
}(AbstractControl);
/**
 * Defines a part of a form, of fixed length, that can contain other controls.
 *
 * A `FormGroup` aggregates the values of each {@link FormControl} in the group.
 * The status of a `FormGroup` depends on the status of its children.
 * If one of the controls in a group is invalid, the entire group is invalid.
 * Similarly, if a control changes its value, the entire group changes as well.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {@link FormControl} and {@link FormArray}. {@link FormArray} can also contain other
 * controls, but is of variable length.
 *
 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
 *
 * @experimental
 */


var FormGroup = exports.FormGroup = function (_AbstractControl2) {
    _inherits(FormGroup, _AbstractControl2);

    function FormGroup(controls) {
        var optionals = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
        var validator = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
        var asyncValidator = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

        _classCallCheck(this, FormGroup);

        var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(FormGroup).call(this, validator, asyncValidator));

        _this4.controls = controls;
        _this4._optionals = (0, _lang.isPresent)(optionals) ? optionals : {};
        _this4._initObservables();
        _this4._setParentForControls();
        _this4.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this4;
    }
    /**
     * Register a control with the group's list of controls.
     */


    _createClass(FormGroup, [{
        key: 'registerControl',
        value: function registerControl(name, control) {
            if (this.controls[name]) return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);
            return control;
        }
        /**
         * Add a control to this group.
         */

    }, {
        key: 'addControl',
        value: function addControl(name, control) {
            this.registerControl(name, control);
            this.updateValueAndValidity();
        }
        /**
         * Remove a control from this group.
         */

    }, {
        key: 'removeControl',
        value: function removeControl(name) {
            _collection.StringMapWrapper.delete(this.controls, name);
            this.updateValueAndValidity();
        }
        /**
         * Mark the named control as non-optional.
         */

    }, {
        key: 'include',
        value: function include(controlName) {
            _collection.StringMapWrapper.set(this._optionals, controlName, true);
            this.updateValueAndValidity();
        }
        /**
         * Mark the named control as optional.
         */

    }, {
        key: 'exclude',
        value: function exclude(controlName) {
            _collection.StringMapWrapper.set(this._optionals, controlName, false);
            this.updateValueAndValidity();
        }
        /**
         * Check whether there is a control with the given name in the group.
         */

    }, {
        key: 'contains',
        value: function contains(controlName) {
            var c = _collection.StringMapWrapper.contains(this.controls, controlName);
            return c && this._included(controlName);
        }
        /** @internal */

    }, {
        key: '_setParentForControls',
        value: function _setParentForControls() {
            var _this5 = this;

            _collection.StringMapWrapper.forEach(this.controls, function (control, name) {
                control.setParent(_this5);
            });
        }
        /** @internal */

    }, {
        key: '_updateValue',
        value: function _updateValue() {
            this._value = this._reduceValue();
        }
        /** @internal */

    }, {
        key: '_anyControlsHaveStatus',
        value: function _anyControlsHaveStatus(status) {
            var _this6 = this;

            var res = false;
            _collection.StringMapWrapper.forEach(this.controls, function (control, name) {
                res = res || _this6.contains(name) && control.status == status;
            });
            return res;
        }
        /** @internal */

    }, {
        key: '_reduceValue',
        value: function _reduceValue() {
            return this._reduceChildren({}, function (acc, control, name) {
                acc[name] = control.value;
                return acc;
            });
        }
        /** @internal */

    }, {
        key: '_reduceChildren',
        value: function _reduceChildren(initValue, fn) {
            var _this7 = this;

            var res = initValue;
            _collection.StringMapWrapper.forEach(this.controls, function (control, name) {
                if (_this7._included(name)) {
                    res = fn(res, control, name);
                }
            });
            return res;
        }
        /** @internal */

    }, {
        key: '_included',
        value: function _included(controlName) {
            var isOptional = _collection.StringMapWrapper.contains(this._optionals, controlName);
            return !isOptional || _collection.StringMapWrapper.get(this._optionals, controlName);
        }
    }]);

    return FormGroup;
}(AbstractControl);
/**
 * Defines a part of a form, of variable length, that can contain other controls.
 *
 * A `FormArray` aggregates the values of each {@link FormControl} in the group.
 * The status of a `FormArray` depends on the status of its children.
 * If one of the controls in a group is invalid, the entire array is invalid.
 * Similarly, if a control changes its value, the entire array changes as well.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {@link FormControl} and {@link FormGroup}. {@link FormGroup} can also contain
 * other controls, but is of fixed length.
 *
 * ## Adding or removing controls
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that will result in strange and unexpected behavior such
 * as broken change detection.
 *
 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
 *
 * @experimental
 */


var FormArray = exports.FormArray = function (_AbstractControl3) {
    _inherits(FormArray, _AbstractControl3);

    function FormArray(controls) {
        var validator = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
        var asyncValidator = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

        _classCallCheck(this, FormArray);

        var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(FormArray).call(this, validator, asyncValidator));

        _this8.controls = controls;
        _this8._initObservables();
        _this8._setParentForControls();
        _this8.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this8;
    }
    /**
     * Get the {@link AbstractControl} at the given `index` in the array.
     */


    _createClass(FormArray, [{
        key: 'at',
        value: function at(index) {
            return this.controls[index];
        }
        /**
         * Insert a new {@link AbstractControl} at the end of the array.
         */

    }, {
        key: 'push',
        value: function push(control) {
            this.controls.push(control);
            control.setParent(this);
            this.updateValueAndValidity();
        }
        /**
         * Insert a new {@link AbstractControl} at the given `index` in the array.
         */

    }, {
        key: 'insert',
        value: function insert(index, control) {
            _collection.ListWrapper.insert(this.controls, index, control);
            control.setParent(this);
            this.updateValueAndValidity();
        }
        /**
         * Remove the control at the given `index` in the array.
         */

    }, {
        key: 'removeAt',
        value: function removeAt(index) {
            _collection.ListWrapper.removeAt(this.controls, index);
            this.updateValueAndValidity();
        }
        /**
         * Length of the control array.
         */

    }, {
        key: '_updateValue',

        /** @internal */
        value: function _updateValue() {
            this._value = this.controls.map(function (control) {
                return control.value;
            });
        }
        /** @internal */

    }, {
        key: '_anyControlsHaveStatus',
        value: function _anyControlsHaveStatus(status) {
            return this.controls.some(function (c) {
                return c.status == status;
            });
        }
        /** @internal */

    }, {
        key: '_setParentForControls',
        value: function _setParentForControls() {
            var _this9 = this;

            this.controls.forEach(function (control) {
                control.setParent(_this9);
            });
        }
    }, {
        key: 'length',
        get: function get() {
            return this.controls.length;
        }
    }]);

    return FormArray;
}(AbstractControl);
//# sourceMappingURL=model.js.map

//# sourceMappingURL=model-compiled.js.map