'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractControlDirective = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _exceptions = require('../facade/exceptions');

var _lang = require('../facade/lang');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 * @experimental
 */
var AbstractControlDirective = exports.AbstractControlDirective = function () {
    function AbstractControlDirective() {
        _classCallCheck(this, AbstractControlDirective);
    }

    _createClass(AbstractControlDirective, [{
        key: 'control',
        get: function get() {
            return (0, _exceptions.unimplemented)();
        }
    }, {
        key: 'value',
        get: function get() {
            return (0, _lang.isPresent)(this.control) ? this.control.value : null;
        }
    }, {
        key: 'valid',
        get: function get() {
            return (0, _lang.isPresent)(this.control) ? this.control.valid : null;
        }
    }, {
        key: 'errors',
        get: function get() {
            return (0, _lang.isPresent)(this.control) ? this.control.errors : null;
        }
    }, {
        key: 'pristine',
        get: function get() {
            return (0, _lang.isPresent)(this.control) ? this.control.pristine : null;
        }
    }, {
        key: 'dirty',
        get: function get() {
            return (0, _lang.isPresent)(this.control) ? this.control.dirty : null;
        }
    }, {
        key: 'touched',
        get: function get() {
            return (0, _lang.isPresent)(this.control) ? this.control.touched : null;
        }
    }, {
        key: 'untouched',
        get: function get() {
            return (0, _lang.isPresent)(this.control) ? this.control.untouched : null;
        }
    }, {
        key: 'statusChanges',
        get: function get() {
            return (0, _lang.isPresent)(this.control) ? this.control.statusChanges : null;
        }
    }, {
        key: 'valueChanges',
        get: function get() {
            return (0, _lang.isPresent)(this.control) ? this.control.valueChanges : null;
        }
    }, {
        key: 'path',
        get: function get() {
            return null;
        }
    }]);

    return AbstractControlDirective;
}();
//# sourceMappingURL=abstract_control_directive.js.map

//# sourceMappingURL=abstract_control_directive-compiled.js.map