'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COMMON_PIPES = undefined;

var _async_pipe = require('./async_pipe');

var _date_pipe = require('./date_pipe');

var _i18n_plural_pipe = require('./i18n_plural_pipe');

var _i18n_select_pipe = require('./i18n_select_pipe');

var _json_pipe = require('./json_pipe');

var _lowercase_pipe = require('./lowercase_pipe');

var _number_pipe = require('./number_pipe');

var _replace_pipe = require('./replace_pipe');

var _slice_pipe = require('./slice_pipe');

var _uppercase_pipe = require('./uppercase_pipe');

/**
 * A collection of Angular core pipes that are likely to be used in each and every
 * application.
 *
 * This collection can be used to quickly enumerate all the built-in pipes in the `pipes`
 * property of the `@Component` decorator.
 *
 * @experimental Contains i18n pipes which are experimental
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var COMMON_PIPES = exports.COMMON_PIPES = [_async_pipe.AsyncPipe, _uppercase_pipe.UpperCasePipe, _lowercase_pipe.LowerCasePipe, _json_pipe.JsonPipe, _slice_pipe.SlicePipe, _number_pipe.DecimalPipe, _number_pipe.PercentPipe, _number_pipe.CurrencyPipe, _date_pipe.DatePipe, _replace_pipe.ReplacePipe, _i18n_plural_pipe.I18nPluralPipe, _i18n_select_pipe.I18nSelectPipe];
//# sourceMappingURL=common_pipes.js.map

//# sourceMappingURL=common_pipes-compiled.js.map