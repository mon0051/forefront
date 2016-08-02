'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FORM_PROVIDERS = undefined;
exports.disableDeprecatedForms = disableDeprecatedForms;
exports.provideForms = provideForms;

var _common = require('@angular/common');

var _compiler = require('@angular/compiler');

var _core = require('@angular/core');

var _directives = require('./directives');

var _radio_control_value_accessor = require('./directives/radio_control_value_accessor');

var _collection = require('./facade/collection');

var _form_builder = require('./form_builder');

/**
 * Shorthand set of providers used for building Angular forms.
 *
 * ### Example
 *
 * ```typescript
 * bootstrap(MyApp, [FORM_PROVIDERS]);
 * ```
 *
 * @experimental
 */
var FORM_PROVIDERS = exports.FORM_PROVIDERS = [_form_builder.FormBuilder, _radio_control_value_accessor.RadioControlRegistry]; /**
                                                                                                                                * @license
                                                                                                                                * Copyright Google Inc. All Rights Reserved.
                                                                                                                                *
                                                                                                                                * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                * found in the LICENSE file at https://angular.io/license
                                                                                                                                */

function flatten(platformDirectives) {
    var flattenedDirectives = [];
    platformDirectives.forEach(function (directives) {
        if (Array.isArray(directives)) {
            flattenedDirectives = flattenedDirectives.concat(directives);
        } else {
            flattenedDirectives.push(directives);
        }
    });
    return flattenedDirectives;
}
/**
 * @experimental
 */
function disableDeprecatedForms() {
    return [{
        provide: _compiler.CompilerConfig,
        useFactory: function useFactory(platformDirectives, platformPipes) {
            var flattenedDirectives = flatten(platformDirectives);
            _collection.ListWrapper.remove(flattenedDirectives, _common.FORM_DIRECTIVES);
            return new _compiler.CompilerConfig({ platformDirectives: flattenedDirectives, platformPipes: platformPipes });
        },
        deps: [_core.PLATFORM_DIRECTIVES, _core.PLATFORM_PIPES]
    }];
}
/**
 * @experimental
 */
function provideForms() {
    return [{ provide: _core.PLATFORM_DIRECTIVES, useValue: _directives.FORM_DIRECTIVES, multi: true }, FORM_PROVIDERS];
}
//# sourceMappingURL=form_providers.js.map

//# sourceMappingURL=form_providers-compiled.js.map