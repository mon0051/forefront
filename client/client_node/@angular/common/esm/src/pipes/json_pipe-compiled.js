'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JsonPipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _lang = require('../facade/lang');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsonPipe = exports.JsonPipe = function () {
    function JsonPipe() {
        _classCallCheck(this, JsonPipe);
    }

    _createClass(JsonPipe, [{
        key: 'transform',
        value: function transform(value) {
            return _lang.Json.stringify(value);
        }
    }]);

    return JsonPipe;
}();
/** @nocollapse */


JsonPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'json', pure: false }] }];
//# sourceMappingURL=json_pipe.js.map

//# sourceMappingURL=json_pipe-compiled.js.map