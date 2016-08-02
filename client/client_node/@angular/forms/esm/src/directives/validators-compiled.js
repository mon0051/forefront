'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PatternValidator = exports.PATTERN_VALIDATOR = exports.MaxLengthValidator = exports.MAX_LENGTH_VALIDATOR = exports.MinLengthValidator = exports.MIN_LENGTH_VALIDATOR = exports.RequiredValidator = exports.REQUIRED_VALIDATOR = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('@angular/core');

var _lang = require('../facade/lang');

var _validators = require('../validators');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @license
                                                                                                                                                           * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                           * found in the LICENSE file at https://angular.io/license
                                                                                                                                                           */


var REQUIRED = _validators.Validators.required;
var REQUIRED_VALIDATOR = exports.REQUIRED_VALIDATOR = {
    provide: _validators.NG_VALIDATORS,
    useValue: REQUIRED,
    multi: true
};

var RequiredValidator = exports.RequiredValidator = function RequiredValidator() {
    _classCallCheck(this, RequiredValidator);
};
/** @nocollapse */


RequiredValidator.decorators = [{ type: _core.Directive, args: [{
        selector: '[required][formControlName],[required][formControl],[required][ngModel]',
        providers: [REQUIRED_VALIDATOR]
    }] }];
/**
 * Provivder which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='min'}
 */
var MIN_LENGTH_VALIDATOR = exports.MIN_LENGTH_VALIDATOR = {
    provide: _validators.NG_VALIDATORS,
    useExisting: (0, _core.forwardRef)(function () {
        return MinLengthValidator;
    }),
    multi: true
};

var MinLengthValidator = exports.MinLengthValidator = function () {
    function MinLengthValidator(minLength) {
        _classCallCheck(this, MinLengthValidator);

        this._validator = _validators.Validators.minLength(_lang.NumberWrapper.parseInt(minLength, 10));
    }

    _createClass(MinLengthValidator, [{
        key: 'validate',
        value: function validate(c) {
            return this._validator(c);
        }
    }]);

    return MinLengthValidator;
}();
/** @nocollapse */


MinLengthValidator.decorators = [{ type: _core.Directive, args: [{
        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
        providers: [MIN_LENGTH_VALIDATOR]
    }] }];
/** @nocollapse */
MinLengthValidator.ctorParameters = [{ type: undefined, decorators: [{ type: _core.Attribute, args: ['minlength'] }] }];
/**
 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='max'}
 */
var MAX_LENGTH_VALIDATOR = exports.MAX_LENGTH_VALIDATOR = {
    provide: _validators.NG_VALIDATORS,
    useExisting: (0, _core.forwardRef)(function () {
        return MaxLengthValidator;
    }),
    multi: true
};

var MaxLengthValidator = exports.MaxLengthValidator = function () {
    function MaxLengthValidator(maxLength) {
        _classCallCheck(this, MaxLengthValidator);

        this._validator = _validators.Validators.maxLength(_lang.NumberWrapper.parseInt(maxLength, 10));
    }

    _createClass(MaxLengthValidator, [{
        key: 'validate',
        value: function validate(c) {
            return this._validator(c);
        }
    }]);

    return MaxLengthValidator;
}();
/** @nocollapse */


MaxLengthValidator.decorators = [{ type: _core.Directive, args: [{
        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
        providers: [MAX_LENGTH_VALIDATOR]
    }] }];
/** @nocollapse */
MaxLengthValidator.ctorParameters = [{ type: undefined, decorators: [{ type: _core.Attribute, args: ['maxlength'] }] }];
var PATTERN_VALIDATOR = exports.PATTERN_VALIDATOR = {
    provide: _validators.NG_VALIDATORS,
    useExisting: (0, _core.forwardRef)(function () {
        return PatternValidator;
    }),
    multi: true
};

var PatternValidator = exports.PatternValidator = function () {
    function PatternValidator(pattern) {
        _classCallCheck(this, PatternValidator);

        this._validator = _validators.Validators.pattern(pattern);
    }

    _createClass(PatternValidator, [{
        key: 'validate',
        value: function validate(c) {
            return this._validator(c);
        }
    }]);

    return PatternValidator;
}();
/** @nocollapse */


PatternValidator.decorators = [{ type: _core.Directive, args: [{
        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
        providers: [PATTERN_VALIDATOR]
    }] }];
/** @nocollapse */
PatternValidator.ctorParameters = [{ type: undefined, decorators: [{ type: _core.Attribute, args: ['pattern'] }] }];
//# sourceMappingURL=validators.js.map

//# sourceMappingURL=validators-compiled.js.map