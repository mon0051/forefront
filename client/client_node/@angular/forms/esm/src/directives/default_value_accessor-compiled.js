'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DefaultValueAccessor = exports.DEFAULT_VALUE_ACCESSOR = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _lang = require('../facade/lang');

var _control_value_accessor = require('./control_value_accessor');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_VALUE_ACCESSOR =
/* @ts2dart_Provider */exports.DEFAULT_VALUE_ACCESSOR = {
    provide: _control_value_accessor.NG_VALUE_ACCESSOR,
    useExisting: (0, _core.forwardRef)(function () {
        return DefaultValueAccessor;
    }),
    multi: true
};

var DefaultValueAccessor = exports.DefaultValueAccessor = function () {
    function DefaultValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, DefaultValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) {};
        this.onTouched = function () {};
    }

    _createClass(DefaultValueAccessor, [{
        key: 'writeValue',
        value: function writeValue(value) {
            var normalizedValue = (0, _lang.isBlank)(value) ? '' : value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
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

    return DefaultValueAccessor;
}();
/** @nocollapse */


DefaultValueAccessor.decorators = [{ type: _core.Directive, args: [{
        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
        // TODO: vsavkin replace the above selector with the one below it once
        // https://github.com/angular/angular/issues/3011 is implemented
        // selector: '[ngControl],[ngModel],[ngFormControl]',
        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
        providers: [DEFAULT_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
DefaultValueAccessor.ctorParameters = [{ type: _core.Renderer }, { type: _core.ElementRef }];
//# sourceMappingURL=default_value_accessor.js.map

//# sourceMappingURL=default_value_accessor-compiled.js.map