"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeValidator = normalizeValidator;
exports.normalizeAsyncValidator = normalizeAsyncValidator;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeValidator(validator) {
    if (validator.validate !== undefined) {
        return function (c) {
            return validator.validate(c);
        };
    } else {
        return validator;
    }
}
function normalizeAsyncValidator(validator) {
    if (validator.validate !== undefined) {
        return function (c) {
            return validator.validate(c);
        };
    } else {
        return validator;
    }
}
//# sourceMappingURL=normalize_validator.js.map

//# sourceMappingURL=normalize_validator-compiled.js.map