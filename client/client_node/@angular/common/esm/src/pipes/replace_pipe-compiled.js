'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReplacePipe = undefined;

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

var ReplacePipe = exports.ReplacePipe = function () {
    function ReplacePipe() {
        _classCallCheck(this, ReplacePipe);
    }

    _createClass(ReplacePipe, [{
        key: 'transform',
        value: function transform(value, pattern, replacement) {
            if ((0, _lang.isBlank)(value)) {
                return value;
            }
            if (!this._supportedInput(value)) {
                throw new _invalid_pipe_argument_exception.InvalidPipeArgumentException(ReplacePipe, value);
            }
            var input = value.toString();
            if (!this._supportedPattern(pattern)) {
                throw new _invalid_pipe_argument_exception.InvalidPipeArgumentException(ReplacePipe, pattern);
            }
            if (!this._supportedReplacement(replacement)) {
                throw new _invalid_pipe_argument_exception.InvalidPipeArgumentException(ReplacePipe, replacement);
            }
            if ((0, _lang.isFunction)(replacement)) {
                var rgxPattern = (0, _lang.isString)(pattern) ? _lang.RegExpWrapper.create(pattern) : pattern;
                return _lang.StringWrapper.replaceAllMapped(input, rgxPattern, replacement);
            }
            if (pattern instanceof RegExp) {
                // use the replaceAll variant
                return _lang.StringWrapper.replaceAll(input, pattern, replacement);
            }
            return _lang.StringWrapper.replace(input, pattern, replacement);
        }
    }, {
        key: '_supportedInput',
        value: function _supportedInput(input) {
            return (0, _lang.isString)(input) || (0, _lang.isNumber)(input);
        }
    }, {
        key: '_supportedPattern',
        value: function _supportedPattern(pattern) {
            return (0, _lang.isString)(pattern) || pattern instanceof RegExp;
        }
    }, {
        key: '_supportedReplacement',
        value: function _supportedReplacement(replacement) {
            return (0, _lang.isString)(replacement) || (0, _lang.isFunction)(replacement);
        }
    }]);

    return ReplacePipe;
}();
/** @nocollapse */


ReplacePipe.decorators = [{ type: _core.Pipe, args: [{ name: 'replace' }] }];
//# sourceMappingURL=replace_pipe.js.map

//# sourceMappingURL=replace_pipe-compiled.js.map