'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckboxControlValueAccessor = exports.CHECKBOX_VALUE_ACCESSOR = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _control_value_accessor = require('./control_value_accessor');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CHECKBOX_VALUE_ACCESSOR = exports.CHECKBOX_VALUE_ACCESSOR = {
    provide: _control_value_accessor.NG_VALUE_ACCESSOR,
    useExisting: (0, _core.forwardRef)(function () {
        return CheckboxControlValueAccessor;
    }),
    multi: true
};

var CheckboxControlValueAccessor = exports.CheckboxControlValueAccessor = function () {
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, CheckboxControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) {};
        this.onTouched = function () {};
    }

    _createClass(CheckboxControlValueAccessor, [{
        key: 'writeValue',
        value: function writeValue(value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
        }
    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            this.onChange = fn;
        }
    }, {
        key: 'registerOnTouched',
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
    }]);

    return CheckboxControlValueAccessor;
}();
/** @nocollapse */


CheckboxControlValueAccessor.decorators = [{ type: _core.Directive, args: [{
        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
        providers: [CHECKBOX_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
CheckboxControlValueAccessor.ctorParameters = [{ type: _core.Renderer }, { type: _core.ElementRef }];
//# sourceMappingURL=checkbox_value_accessor.js.map

//# sourceMappingURL=checkbox_value_accessor-compiled.js.map