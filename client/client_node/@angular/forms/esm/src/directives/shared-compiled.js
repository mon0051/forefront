'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.controlPath = controlPath;
exports.setUpControl = setUpControl;
exports.setUpFormContainer = setUpFormContainer;
exports.composeValidators = composeValidators;
exports.composeAsyncValidators = composeAsyncValidators;
exports.isPropertyUpdated = isPropertyUpdated;
exports.selectValueAccessor = selectValueAccessor;

var _collection = require('../facade/collection');

var _exceptions = require('../facade/exceptions');

var _lang = require('../facade/lang');

var _validators = require('../validators');

var _checkbox_value_accessor = require('./checkbox_value_accessor');

var _default_value_accessor = require('./default_value_accessor');

var _normalize_validator = require('./normalize_validator');

var _number_value_accessor = require('./number_value_accessor');

var _radio_control_value_accessor = require('./radio_control_value_accessor');

var _select_control_value_accessor = require('./select_control_value_accessor');

var _select_multiple_control_value_accessor = require('./select_multiple_control_value_accessor');

function controlPath(name, parent) {
    var p = _collection.ListWrapper.clone(parent.path);
    p.push(name);
    return p;
} /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function setUpControl(control, dir) {
    if ((0, _lang.isBlank)(control)) _throwError(dir, 'Cannot find control');
    if ((0, _lang.isBlank)(dir.valueAccessor)) _throwError(dir, 'No value accessor for');
    control.validator = _validators.Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = _validators.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    dir.valueAccessor.writeValue(control.value);
    // view -> model
    dir.valueAccessor.registerOnChange(function (newValue) {
        dir.viewToModelUpdate(newValue);
        control.updateValue(newValue, { emitModelToViewChange: false });
        control.markAsDirty();
    });
    // model -> view
    control.registerOnChange(function (newValue) {
        return dir.valueAccessor.writeValue(newValue);
    });
    // touched
    dir.valueAccessor.registerOnTouched(function () {
        return control.markAsTouched();
    });
}
function setUpFormContainer(control, dir) {
    if ((0, _lang.isBlank)(control)) _throwError(dir, 'Cannot find control');
    control.validator = _validators.Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = _validators.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
function _throwError(dir, message) {
    var path = dir.path.join(' -> ');
    throw new _exceptions.BaseException(message + ' \'' + path + '\'');
}
function composeValidators(validators) {
    return (0, _lang.isPresent)(validators) ? _validators.Validators.compose(validators.map(_normalize_validator.normalizeValidator)) : null;
}
function composeAsyncValidators(validators) {
    return (0, _lang.isPresent)(validators) ? _validators.Validators.composeAsync(validators.map(_normalize_validator.normalizeAsyncValidator)) : null;
}
function isPropertyUpdated(changes, viewModel) {
    if (!_collection.StringMapWrapper.contains(changes, 'model')) return false;
    var change = changes['model'];
    if (change.isFirstChange()) return true;
    return !(0, _lang.looseIdentical)(viewModel, change.currentValue);
}
// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
function selectValueAccessor(dir, valueAccessors) {
    if ((0, _lang.isBlank)(valueAccessors)) return null;
    var defaultAccessor;
    var builtinAccessor;
    var customAccessor;
    valueAccessors.forEach(function (v) {
        if ((0, _lang.hasConstructor)(v, _default_value_accessor.DefaultValueAccessor)) {
            defaultAccessor = v;
        } else if ((0, _lang.hasConstructor)(v, _checkbox_value_accessor.CheckboxControlValueAccessor) || (0, _lang.hasConstructor)(v, _number_value_accessor.NumberValueAccessor) || (0, _lang.hasConstructor)(v, _select_control_value_accessor.SelectControlValueAccessor) || (0, _lang.hasConstructor)(v, _select_multiple_control_value_accessor.SelectMultipleControlValueAccessor) || (0, _lang.hasConstructor)(v, _radio_control_value_accessor.RadioControlValueAccessor)) {
            if ((0, _lang.isPresent)(builtinAccessor)) _throwError(dir, 'More than one built-in value accessor matches');
            builtinAccessor = v;
        } else {
            if ((0, _lang.isPresent)(customAccessor)) _throwError(dir, 'More than one custom value accessor matches');
            customAccessor = v;
        }
    });
    if ((0, _lang.isPresent)(customAccessor)) return customAccessor;
    if ((0, _lang.isPresent)(builtinAccessor)) return builtinAccessor;
    if ((0, _lang.isPresent)(defaultAccessor)) return defaultAccessor;
    _throwError(dir, 'No valid value accessor for');
    return null;
}
//# sourceMappingURL=shared.js.map

//# sourceMappingURL=shared-compiled.js.map