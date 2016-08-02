'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.I18nPluralPipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _lang = require('../facade/lang');

var _localization2 = require('../localization');

var _invalid_pipe_argument_exception = require('./invalid_pipe_argument_exception');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _INTERPOLATION_REGEXP = /#/g;

var I18nPluralPipe = exports.I18nPluralPipe = function () {
    function I18nPluralPipe(_localization) {
        _classCallCheck(this, I18nPluralPipe);

        this._localization = _localization;
    }

    _createClass(I18nPluralPipe, [{
        key: 'transform',
        value: function transform(value, pluralMap) {
            if ((0, _lang.isBlank)(value)) return '';
            if (!(0, _lang.isStringMap)(pluralMap)) {
                throw new _invalid_pipe_argument_exception.InvalidPipeArgumentException(I18nPluralPipe, pluralMap);
            }
            var key = (0, _localization2.getPluralCategory)(value, Object.getOwnPropertyNames(pluralMap), this._localization);
            return _lang.StringWrapper.replaceAll(pluralMap[key], _INTERPOLATION_REGEXP, value.toString());
        }
    }]);

    return I18nPluralPipe;
}();
/** @nocollapse */


I18nPluralPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'i18nPlural', pure: true }] }];
/** @nocollapse */
I18nPluralPipe.ctorParameters = [{ type: _localization2.NgLocalization }];
//# sourceMappingURL=i18n_plural_pipe.js.map

//# sourceMappingURL=i18n_plural_pipe-compiled.js.map