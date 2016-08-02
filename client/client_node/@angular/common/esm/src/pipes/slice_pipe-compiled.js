'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SlicePipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _collection = require('../facade/collection');

var _lang = require('../facade/lang');

var _invalid_pipe_argument_exception = require('./invalid_pipe_argument_exception');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SlicePipe = exports.SlicePipe = function () {
    function SlicePipe() {
        _classCallCheck(this, SlicePipe);
    }

    _createClass(SlicePipe, [{
        key: 'transform',
        value: function transform(value, start) {
            var end = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            if ((0, _lang.isBlank)(value)) return value;
            if (!this.supports(value)) {
                throw new _invalid_pipe_argument_exception.InvalidPipeArgumentException(SlicePipe, value);
            }
            if ((0, _lang.isString)(value)) {
                return _lang.StringWrapper.slice(value, start, end);
            }
            return _collection.ListWrapper.slice(value, start, end);
        }
    }, {
        key: 'supports',
        value: function supports(obj) {
            return (0, _lang.isString)(obj) || (0, _lang.isArray)(obj);
        }
    }]);

    return SlicePipe;
}();
/** @nocollapse */


SlicePipe.decorators = [{ type: _core.Pipe, args: [{ name: 'slice', pure: false }] }];
//# sourceMappingURL=slice_pipe.js.map

//# sourceMappingURL=slice_pipe-compiled.js.map