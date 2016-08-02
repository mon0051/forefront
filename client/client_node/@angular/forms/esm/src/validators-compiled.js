'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Validators = exports.NG_ASYNC_VALIDATORS = exports.NG_VALIDATORS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _async = require('./facade/async');

var _collection = require('./facade/collection');

var _lang = require('./facade/lang');

var _promise = require('./facade/promise');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Providers for validators to be used for {@link FormControl}s in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * ### Example
 *
 * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
 * @experimental
 */
var NG_VALIDATORS = exports.NG_VALIDATORS = new _core.OpaqueToken('NgValidators');
/**
 * Providers for asynchronous validators to be used for {@link FormControl}s
 * in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * See {@link NG_VALIDATORS} for more details.
 *
 * @experimental
 */
var NG_ASYNC_VALIDATORS =
/*@ts2dart_const*/exports.NG_ASYNC_VALIDATORS = new _core.OpaqueToken('NgAsyncValidators');
/**
 * Provides a set of validators used by form controls.
 *
 * A validator is a function that processes a {@link FormControl} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 *
 * ### Example
 *
 * ```typescript
 * var loginControl = new FormControl("", Validators.required)
 * ```
 *
 * @experimental
 */

var Validators = function () {
    function Validators() {
        _classCallCheck(this, Validators);
    }

    _createClass(Validators, null, [{
        key: 'required',

        /**
         * Validator that requires controls to have a non-empty value.
         */
        value: function required(control) {
            return (0, _lang.isBlank)(control.value) || (0, _lang.isString)(control.value) && control.value == '' ? { 'required': true } : null;
        }
        /**
         * Validator that requires controls to have a value of a minimum length.
         */

    }, {
        key: 'minLength',
        value: function minLength(_minLength) {
            return function (control) {
                if ((0, _lang.isPresent)(Validators.required(control))) return null;
                var v = control.value;
                return v.length < _minLength ? { 'minlength': { 'requiredLength': _minLength, 'actualLength': v.length } } : null;
            };
        }
        /**
         * Validator that requires controls to have a value of a maximum length.
         */

    }, {
        key: 'maxLength',
        value: function maxLength(_maxLength) {
            return function (control) {
                if ((0, _lang.isPresent)(Validators.required(control))) return null;
                var v = control.value;
                return v.length > _maxLength ? { 'maxlength': { 'requiredLength': _maxLength, 'actualLength': v.length } } : null;
            };
        }
        /**
         * Validator that requires a control to match a regex to its value.
         */

    }, {
        key: 'pattern',
        value: function pattern(_pattern) {
            return function (control) {
                if ((0, _lang.isPresent)(Validators.required(control))) return null;
                var regex = new RegExp('^' + _pattern + '$');
                var v = control.value;
                return regex.test(v) ? null : { 'pattern': { 'requiredPattern': '^' + _pattern + '$', 'actualValue': v } };
            };
        }
        /**
         * No-op validator.
         */

    }, {
        key: 'nullValidator',
        value: function nullValidator(c) {
            return null;
        }
        /**
         * Compose multiple validators into a single function that returns the union
         * of the individual error maps.
         */

    }, {
        key: 'compose',
        value: function compose(validators) {
            if ((0, _lang.isBlank)(validators)) return null;
            var presentValidators = validators.filter(_lang.isPresent);
            if (presentValidators.length == 0) return null;
            return function (control) {
                return _mergeErrors(_executeValidators(control, presentValidators));
            };
        }
    }, {
        key: 'composeAsync',
        value: function composeAsync(validators) {
            if ((0, _lang.isBlank)(validators)) return null;
            var presentValidators = validators.filter(_lang.isPresent);
            if (presentValidators.length == 0) return null;
            return function (control) {
                var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
                return _promise.PromiseWrapper.all(promises).then(_mergeErrors);
            };
        }
    }]);

    return Validators;
}();

exports.Validators = Validators;

function _convertToPromise(obj) {
    return (0, _lang.isPromise)(obj) ? obj : _async.ObservableWrapper.toPromise(obj);
}
function _executeValidators(control, validators) {
    return validators.map(function (v) {
        return v(control);
    });
}
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) {
        return v(control);
    });
}
function _mergeErrors(arrayOfErrors) {
    var res = arrayOfErrors.reduce(function (res, errors) {
        return (0, _lang.isPresent)(errors) ? _collection.StringMapWrapper.merge(res, errors) : res;
    }, {});
    return _collection.StringMapWrapper.isEmpty(res) ? null : res;
}
//# sourceMappingURL=validators.js.map

//# sourceMappingURL=validators-compiled.js.map