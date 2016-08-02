'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CurrencyPipe = exports.PercentPipe = exports.DecimalPipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _exceptions = require('../facade/exceptions');

var _intl = require('../facade/intl');

var _lang = require('../facade/lang');

var _invalid_pipe_argument_exception = require('./invalid_pipe_argument_exception');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultLocale = 'en-US';
var _NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(\-(\d+))?)?$/g;
/**
 * Internal function to format numbers used by Decimal, Percent and Date pipes.
 */
function formatNumber(pipe, value, style, digits) {
    var currency = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];
    var currencyAsSymbol = arguments.length <= 5 || arguments[5] === undefined ? false : arguments[5];

    if ((0, _lang.isBlank)(value)) return null;
    if (!(0, _lang.isNumber)(value)) {
        throw new _invalid_pipe_argument_exception.InvalidPipeArgumentException(pipe, value);
    }
    var minInt = 1,
        minFraction = 0,
        maxFraction = 3;
    if ((0, _lang.isPresent)(digits)) {
        var parts = _lang.RegExpWrapper.firstMatch(_NUMBER_FORMAT_REGEXP, digits);
        if ((0, _lang.isBlank)(parts)) {
            throw new _exceptions.BaseException(digits + ' is not a valid digit info for number pipes');
        }
        if ((0, _lang.isPresent)(parts[1])) {
            minInt = _lang.NumberWrapper.parseIntAutoRadix(parts[1]);
        }
        if ((0, _lang.isPresent)(parts[3])) {
            minFraction = _lang.NumberWrapper.parseIntAutoRadix(parts[3]);
        }
        if ((0, _lang.isPresent)(parts[5])) {
            maxFraction = _lang.NumberWrapper.parseIntAutoRadix(parts[5]);
        }
    }
    return _intl.NumberFormatter.format(value, defaultLocale, style, {
        minimumIntegerDigits: minInt,
        minimumFractionDigits: minFraction,
        maximumFractionDigits: maxFraction,
        currency: currency,
        currencyAsSymbol: currencyAsSymbol
    });
}

var DecimalPipe = exports.DecimalPipe = function () {
    function DecimalPipe() {
        _classCallCheck(this, DecimalPipe);
    }

    _createClass(DecimalPipe, [{
        key: 'transform',
        value: function transform(value) {
            var digits = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            return formatNumber(DecimalPipe, value, _intl.NumberFormatStyle.Decimal, digits);
        }
    }]);

    return DecimalPipe;
}();
/** @nocollapse */


DecimalPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'number' }] }];

var PercentPipe = exports.PercentPipe = function () {
    function PercentPipe() {
        _classCallCheck(this, PercentPipe);
    }

    _createClass(PercentPipe, [{
        key: 'transform',
        value: function transform(value) {
            var digits = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            return formatNumber(PercentPipe, value, _intl.NumberFormatStyle.Percent, digits);
        }
    }]);

    return PercentPipe;
}();
/** @nocollapse */


PercentPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'percent' }] }];

var CurrencyPipe = exports.CurrencyPipe = function () {
    function CurrencyPipe() {
        _classCallCheck(this, CurrencyPipe);
    }

    _createClass(CurrencyPipe, [{
        key: 'transform',
        value: function transform(value) {
            var currencyCode = arguments.length <= 1 || arguments[1] === undefined ? 'USD' : arguments[1];
            var symbolDisplay = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
            var digits = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

            return formatNumber(CurrencyPipe, value, _intl.NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
        }
    }]);

    return CurrencyPipe;
}();
/** @nocollapse */


CurrencyPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'currency' }] }];
//# sourceMappingURL=number_pipe.js.map

//# sourceMappingURL=number_pipe-compiled.js.map