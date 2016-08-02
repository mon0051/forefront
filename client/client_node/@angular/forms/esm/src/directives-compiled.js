'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REACTIVE_FORM_DIRECTIVES = exports.FORM_DIRECTIVES = exports.RequiredValidator = exports.PatternValidator = exports.MinLengthValidator = exports.MaxLengthValidator = exports.SelectMultipleControlValueAccessor = exports.NgSelectMultipleOption = exports.SelectControlValueAccessor = exports.NgSelectOption = exports.FormGroupName = exports.FormGroupDirective = exports.FormControlName = exports.FormControlDirective = exports.FormArrayName = exports.RadioControlValueAccessor = exports.NumberValueAccessor = exports.NgModelGroup = exports.NgModel = exports.NgForm = exports.NgControlStatus = exports.NgControl = exports.DefaultValueAccessor = exports.CheckboxControlValueAccessor = undefined;

var _checkbox_value_accessor = require('./directives/checkbox_value_accessor');

Object.defineProperty(exports, 'CheckboxControlValueAccessor', {
  enumerable: true,
  get: function get() {
    return _checkbox_value_accessor.CheckboxControlValueAccessor;
  }
});

var _default_value_accessor = require('./directives/default_value_accessor');

Object.defineProperty(exports, 'DefaultValueAccessor', {
  enumerable: true,
  get: function get() {
    return _default_value_accessor.DefaultValueAccessor;
  }
});

var _ng_control = require('./directives/ng_control');

Object.defineProperty(exports, 'NgControl', {
  enumerable: true,
  get: function get() {
    return _ng_control.NgControl;
  }
});

var _ng_control_status = require('./directives/ng_control_status');

Object.defineProperty(exports, 'NgControlStatus', {
  enumerable: true,
  get: function get() {
    return _ng_control_status.NgControlStatus;
  }
});

var _ng_form = require('./directives/ng_form');

Object.defineProperty(exports, 'NgForm', {
  enumerable: true,
  get: function get() {
    return _ng_form.NgForm;
  }
});

var _ng_model = require('./directives/ng_model');

Object.defineProperty(exports, 'NgModel', {
  enumerable: true,
  get: function get() {
    return _ng_model.NgModel;
  }
});

var _ng_model_group = require('./directives/ng_model_group');

Object.defineProperty(exports, 'NgModelGroup', {
  enumerable: true,
  get: function get() {
    return _ng_model_group.NgModelGroup;
  }
});

var _number_value_accessor = require('./directives/number_value_accessor');

Object.defineProperty(exports, 'NumberValueAccessor', {
  enumerable: true,
  get: function get() {
    return _number_value_accessor.NumberValueAccessor;
  }
});

var _radio_control_value_accessor = require('./directives/radio_control_value_accessor');

Object.defineProperty(exports, 'RadioControlValueAccessor', {
  enumerable: true,
  get: function get() {
    return _radio_control_value_accessor.RadioControlValueAccessor;
  }
});

var _form_array_name = require('./directives/reactive_directives/form_array_name');

Object.defineProperty(exports, 'FormArrayName', {
  enumerable: true,
  get: function get() {
    return _form_array_name.FormArrayName;
  }
});

var _form_control_directive = require('./directives/reactive_directives/form_control_directive');

Object.defineProperty(exports, 'FormControlDirective', {
  enumerable: true,
  get: function get() {
    return _form_control_directive.FormControlDirective;
  }
});

var _form_control_name = require('./directives/reactive_directives/form_control_name');

Object.defineProperty(exports, 'FormControlName', {
  enumerable: true,
  get: function get() {
    return _form_control_name.FormControlName;
  }
});

var _form_group_directive = require('./directives/reactive_directives/form_group_directive');

Object.defineProperty(exports, 'FormGroupDirective', {
  enumerable: true,
  get: function get() {
    return _form_group_directive.FormGroupDirective;
  }
});

var _form_group_name = require('./directives/reactive_directives/form_group_name');

Object.defineProperty(exports, 'FormGroupName', {
  enumerable: true,
  get: function get() {
    return _form_group_name.FormGroupName;
  }
});

var _select_control_value_accessor = require('./directives/select_control_value_accessor');

Object.defineProperty(exports, 'NgSelectOption', {
  enumerable: true,
  get: function get() {
    return _select_control_value_accessor.NgSelectOption;
  }
});
Object.defineProperty(exports, 'SelectControlValueAccessor', {
  enumerable: true,
  get: function get() {
    return _select_control_value_accessor.SelectControlValueAccessor;
  }
});

var _select_multiple_control_value_accessor = require('./directives/select_multiple_control_value_accessor');

Object.defineProperty(exports, 'NgSelectMultipleOption', {
  enumerable: true,
  get: function get() {
    return _select_multiple_control_value_accessor.NgSelectMultipleOption;
  }
});
Object.defineProperty(exports, 'SelectMultipleControlValueAccessor', {
  enumerable: true,
  get: function get() {
    return _select_multiple_control_value_accessor.SelectMultipleControlValueAccessor;
  }
});

var _validators = require('./directives/validators');

Object.defineProperty(exports, 'MaxLengthValidator', {
  enumerable: true,
  get: function get() {
    return _validators.MaxLengthValidator;
  }
});
Object.defineProperty(exports, 'MinLengthValidator', {
  enumerable: true,
  get: function get() {
    return _validators.MinLengthValidator;
  }
});
Object.defineProperty(exports, 'PatternValidator', {
  enumerable: true,
  get: function get() {
    return _validators.PatternValidator;
  }
});
Object.defineProperty(exports, 'RequiredValidator', {
  enumerable: true,
  get: function get() {
    return _validators.RequiredValidator;
  }
});

/**
 *
 * A list of all the form directives used as part of a `@Component` annotation.
 *
 *  This is a shorthand for importing them each individually.
 *
 * ### Example
 *
 * ```typescript
 * @Component({
 *   selector: 'my-app',
 *   directives: [FORM_DIRECTIVES]
 * })
 * class MyApp {}
 * ```
 * @experimental
 */
var FORM_DIRECTIVES = exports.FORM_DIRECTIVES = [_ng_model.NgModel, _ng_model_group.NgModelGroup, _ng_form.NgForm, _select_control_value_accessor.NgSelectOption, _select_multiple_control_value_accessor.NgSelectMultipleOption, _default_value_accessor.DefaultValueAccessor, _number_value_accessor.NumberValueAccessor, _checkbox_value_accessor.CheckboxControlValueAccessor, _select_control_value_accessor.SelectControlValueAccessor, _select_multiple_control_value_accessor.SelectMultipleControlValueAccessor, _radio_control_value_accessor.RadioControlValueAccessor, _ng_control_status.NgControlStatus, _validators.RequiredValidator, _validators.MinLengthValidator, _validators.MaxLengthValidator, _validators.PatternValidator];
/**
 * @experimental
 */
var REACTIVE_FORM_DIRECTIVES =
/*@ts2dart_const*/exports.REACTIVE_FORM_DIRECTIVES = [_form_control_directive.FormControlDirective, _form_group_directive.FormGroupDirective, _form_control_name.FormControlName, _form_group_name.FormGroupName, _form_array_name.FormArrayName];
//# sourceMappingURL=directives.js.map

//# sourceMappingURL=directives-compiled.js.map