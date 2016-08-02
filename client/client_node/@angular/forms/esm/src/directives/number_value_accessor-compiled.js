'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NumberValueAccessor = exports.NUMBER_VALUE_ACCESSOR = undefined;

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

var NUMBER_VALUE_ACCESSOR = exports.NUMBER_VALUE_ACCESSOR = {
    provide: _control_value_accessor.NG_VALUE_ACCESSOR,
    useExisting: (0, _core.forwardRef)(function () {
        return NumberValueAccessor;
    }),
    multi: true
};

var NumberValueAccessor = exports.NumberValueAccessor = function () {
    function NumberValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, NumberValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) {};
        this.onTouched = function () {};
    }

    _createClass(NumberValueAccessor, [{
        key: 'writeValue',
        value: function writeValue(value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', value);
        }
    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            this.onChange = function (value) {
                fn(value == '' ? null : _lang.NumberWrapper.parseFloat(value));
            };
        }
    }, {
        key: 'registerOnTouched',
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
    }]);

    return NumberValueAccessor;
}();
/** @nocollapse */


NumberValueAccessor.decorators = [{ type: _core.Directive, args: [{
        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
        host: {
            '(change)': 'onChange($event.target.value)',
            '(input)': 'onChange($event.target.value)',
            '(blur)': 'onTouched()'
        },
        providers: [NUMBER_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
NumberValueAccessor.ctorParameters = [{ type: _core.Renderer }, { type: _core.ElementRef }];
//# sourceMappingURL=number_value_accessor.js.map

//# sourceMappingURL=number_value_accessor-compiled.js.map