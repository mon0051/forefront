/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";

var exceptions_1 = require('../facade/exceptions');
var lang_1 = require('../facade/lang');
/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 * @experimental
 */
var AbstractControlDirective = function () {
    function AbstractControlDirective() {}
    Object.defineProperty(AbstractControlDirective.prototype, "control", {
        get: function get() {
            return exceptions_1.unimplemented();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "value", {
        get: function get() {
            return lang_1.isPresent(this.control) ? this.control.value : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
        get: function get() {
            return lang_1.isPresent(this.control) ? this.control.valid : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
        get: function get() {
            return lang_1.isPresent(this.control) ? this.control.errors : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
        get: function get() {
            return lang_1.isPresent(this.control) ? this.control.pristine : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
        get: function get() {
            return lang_1.isPresent(this.control) ? this.control.dirty : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
        get: function get() {
            return lang_1.isPresent(this.control) ? this.control.touched : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
        get: function get() {
            return lang_1.isPresent(this.control) ? this.control.untouched : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
        get: function get() {
            return lang_1.isPresent(this.control) ? this.control.statusChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
        get: function get() {
            return lang_1.isPresent(this.control) ? this.control.valueChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "path", {
        get: function get() {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractControlDirective;
}();
exports.AbstractControlDirective = AbstractControlDirective;
//# sourceMappingURL=abstract_control_directive.js.map

//# sourceMappingURL=abstract_control_directive-compiled.js.map