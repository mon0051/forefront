'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidPipeArgumentException = undefined;

var _exceptions = require('../facade/exceptions');

var _lang = require('../facade/lang');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InvalidPipeArgumentException = exports.InvalidPipeArgumentException = function (_BaseException) {
    _inherits(InvalidPipeArgumentException, _BaseException);

    function InvalidPipeArgumentException(type, value) {
        _classCallCheck(this, InvalidPipeArgumentException);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(InvalidPipeArgumentException).call(this, 'Invalid argument \'' + value + '\' for pipe \'' + (0, _lang.stringify)(type) + '\''));
    }

    return InvalidPipeArgumentException;
}(_exceptions.BaseException);
//# sourceMappingURL=invalid_pipe_argument_exception.js.map

//# sourceMappingURL=invalid_pipe_argument_exception-compiled.js.map