'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgSelectOption = exports.SelectControlValueAccessor = exports.SELECT_VALUE_ACCESSOR = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _collection = require('../facade/collection');

var _lang = require('../facade/lang');

var _control_value_accessor = require('./control_value_accessor');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SELECT_VALUE_ACCESSOR = exports.SELECT_VALUE_ACCESSOR = {
    provide: _control_value_accessor.NG_VALUE_ACCESSOR,
    useExisting: (0, _core.forwardRef)(function () {
        return SelectControlValueAccessor;
    }),
    multi: true
};
function _buildValueString(id, value) {
    if ((0, _lang.isBlank)(id)) return '' + value;
    if (!(0, _lang.isPrimitive)(value)) value = 'Object';
    return _lang.StringWrapper.slice(id + ': ' + value, 0, 50);
}
function _extractId(valueString) {
    return valueString.split(':')[0];
}

var SelectControlValueAccessor = exports.SelectControlValueAccessor = function () {
    function SelectControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this.onChange = function (_) {};
        this.onTouched = function () {};
    }

    _createClass(SelectControlValueAccessor, [{
        key: 'writeValue',
        value: function writeValue(value) {
            this.value = value;
            var valueString = _buildValueString(this._getOptionId(value), value);
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
        }
    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            var _this = this;

            this.onChange = function (valueString) {
                _this.value = valueString;
                fn(_this._getOptionValue(valueString));
            };
        }
    }, {
        key: 'registerOnTouched',
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
        /** @internal */

    }, {
        key: '_registerOption',
        value: function _registerOption() {
            return (this._idCounter++).toString();
        }
        /** @internal */

    }, {
        key: '_getOptionId',
        value: function _getOptionId(value) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _collection.MapWrapper.keys(this._optionMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var id = _step.value;

                    if ((0, _lang.looseIdentical)(this._optionMap.get(id), value)) return id;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return null;
        }
        /** @internal */

    }, {
        key: '_getOptionValue',
        value: function _getOptionValue(valueString) {
            var value = this._optionMap.get(_extractId(valueString));
            return (0, _lang.isPresent)(value) ? value : valueString;
        }
    }]);

    return SelectControlValueAccessor;
}();
/** @nocollapse */


SelectControlValueAccessor.decorators = [{ type: _core.Directive, args: [{
        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
        providers: [SELECT_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
SelectControlValueAccessor.ctorParameters = [{ type: _core.Renderer }, { type: _core.ElementRef }];

var NgSelectOption = exports.NgSelectOption = function () {
    function NgSelectOption(_element, _renderer, _select) {
        _classCallCheck(this, NgSelectOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if ((0, _lang.isPresent)(this._select)) this.id = this._select._registerOption();
    }

    _createClass(NgSelectOption, [{
        key: '_setElementValue',

        /** @internal */
        value: function _setElementValue(value) {
            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
        }
    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            if ((0, _lang.isPresent)(this._select)) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        }
    }, {
        key: 'ngValue',
        set: function set(value) {
            if (this._select == null) return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        }
    }, {
        key: 'value',
        set: function set(value) {
            this._setElementValue(value);
            if ((0, _lang.isPresent)(this._select)) this._select.writeValue(this._select.value);
        }
    }]);

    return NgSelectOption;
}();
/** @nocollapse */


NgSelectOption.decorators = [{ type: _core.Directive, args: [{ selector: 'option' }] }];
/** @nocollapse */
NgSelectOption.ctorParameters = [{ type: _core.ElementRef }, { type: _core.Renderer }, { type: SelectControlValueAccessor, decorators: [{ type: _core.Optional }, { type: _core.Host }] }];
/** @nocollapse */
NgSelectOption.propDecorators = {
    'ngValue': [{ type: _core.Input, args: ['ngValue'] }],
    'value': [{ type: _core.Input, args: ['value'] }]
};
//# sourceMappingURL=select_control_value_accessor.js.map

//# sourceMappingURL=select_control_value_accessor-compiled.js.map