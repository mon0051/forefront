'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.I18nSelectPipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _lang = require('../facade/lang');

var _invalid_pipe_argument_exception = require('./invalid_pipe_argument_exception');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var I18nSelectPipe = exports.I18nSelectPipe = function () {
    function I18nSelectPipe() {
        _classCallCheck(this, I18nSelectPipe);
    }

    _createClass(I18nSelectPipe, [{
        key: 'transform',
        value: function transform(value, mapping) {
            if ((0, _lang.isBlank)(value)) return '';
            if (!(0, _lang.isStringMap)(mapping)) {
                throw new _invalid_pipe_argument_exception.InvalidPipeArgumentException(I18nSelectPipe, mapping);
            }
            return mapping.hasOwnProperty(value) ? mapping[value] : '';
        }
    }]);

    return I18nSelectPipe;
}();
/** @nocollapse */


I18nSelectPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'i18nSelect', pure: true }] }];
//# sourceMappingURL=i18n_select_pipe.js.map

//# sourceMappingURL=i18n_select_pipe-compiled.js.map