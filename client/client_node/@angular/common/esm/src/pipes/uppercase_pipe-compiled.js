'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UpperCasePipe = undefined;

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

var UpperCasePipe = exports.UpperCasePipe = function () {
    function UpperCasePipe() {
        _classCallCheck(this, UpperCasePipe);
    }

    _createClass(UpperCasePipe, [{
        key: 'transform',
        value: function transform(value) {
            if ((0, _lang.isBlank)(value)) return value;
            if (!(0, _lang.isString)(value)) {
                throw new _invalid_pipe_argument_exception.InvalidPipeArgumentException(UpperCasePipe, value);
            }
            return value.toUpperCase();
        }
    }]);

    return UpperCasePipe;
}();
/** @nocollapse */


UpperCasePipe.decorators = [{ type: _core.Pipe, args: [{ name: 'uppercase' }] }];
//# sourceMappingURL=uppercase_pipe.js.map

//# sourceMappingURL=uppercase_pipe-compiled.js.map