'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DatePipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _collection = require('../facade/collection');

var _intl = require('../facade/intl');

var _lang = require('../facade/lang');

var _invalid_pipe_argument_exception = require('./invalid_pipe_argument_exception');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO: move to a global configurable location along with other i18n components.
var defaultLocale = 'en-US';

var DatePipe = exports.DatePipe = function () {
    function DatePipe() {
        _classCallCheck(this, DatePipe);
    }

    _createClass(DatePipe, [{
        key: 'transform',
        value: function transform(value) {
            var pattern = arguments.length <= 1 || arguments[1] === undefined ? 'mediumDate' : arguments[1];

            if ((0, _lang.isBlank)(value)) return null;
            if (!this.supports(value)) {
                throw new _invalid_pipe_argument_exception.InvalidPipeArgumentException(DatePipe, value);
            }
            if (_lang.NumberWrapper.isNumeric(value)) {
                value = _lang.DateWrapper.fromMillis(_lang.NumberWrapper.parseInt(value, 10));
            } else if ((0, _lang.isString)(value)) {
                value = _lang.DateWrapper.fromISOString(value);
            }
            if (_collection.StringMapWrapper.contains(DatePipe._ALIASES, pattern)) {
                pattern = _collection.StringMapWrapper.get(DatePipe._ALIASES, pattern);
            }
            return _intl.DateFormatter.format(value, defaultLocale, pattern);
        }
    }, {
        key: 'supports',
        value: function supports(obj) {
            if ((0, _lang.isDate)(obj) || _lang.NumberWrapper.isNumeric(obj)) {
                return true;
            }
            if ((0, _lang.isString)(obj) && (0, _lang.isDate)(_lang.DateWrapper.fromISOString(obj))) {
                return true;
            }
            return false;
        }
    }]);

    return DatePipe;
}();
/** @internal */


DatePipe._ALIASES = {
    'medium': 'yMMMdjms',
    'short': 'yMdjm',
    'fullDate': 'yMMMMEEEEd',
    'longDate': 'yMMMMd',
    'mediumDate': 'yMMMd',
    'shortDate': 'yMd',
    'mediumTime': 'jms',
    'shortTime': 'jm'
};
/** @nocollapse */
DatePipe.decorators = [{ type: _core.Pipe, args: [{ name: 'date', pure: true }] }];
//# sourceMappingURL=date_pipe.js.map

//# sourceMappingURL=date_pipe-compiled.js.map