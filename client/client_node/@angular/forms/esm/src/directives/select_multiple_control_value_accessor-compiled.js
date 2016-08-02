'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SELECT_DIRECTIVES = exports.NgSelectMultipleOption = exports.SelectMultipleControlValueAccessor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('@angular/core');

var _collection = require('../facade/collection');

var _lang = require('../facade/lang');

var _control_value_accessor = require('./control_value_accessor');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @license
                                                                                                                                                           * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                           * found in the LICENSE file at https://angular.io/license
                                                                                                                                                           */


var SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: _control_value_accessor.NG_VALUE_ACCESSOR,
    useExisting: (0, _core.forwardRef)(function () {
        return SelectMultipleControlValueAccessor;
    }),
    multi: true
};
function _buildValueString(id, value) {
    if ((0, _lang.isBlank)(id)) return '' + value;
    if ((0, _lang.isString)(value)) value = '\'' + value + '\'';
    if (!(0, _lang.isPrimitive)(value)) value = 'Object';
    return _lang.StringWrapper.slice(id + ': ' + value, 0, 50);
}
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/** Mock interface for HTMLCollection */

var HTMLCollection = function HTMLCollection() {
    _classCallCheck(this, HTMLCollection);
};

var SelectMultipleControlValueAccessor = exports.SelectMultipleControlValueAccessor = function () {
    function SelectMultipleControlValueAccessor() {
        _classCallCheck(this, SelectMultipleControlValueAccessor);

        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this.onChange = function (_) {};
        this.onTouched = function () {};
    }

    _createClass(SelectMultipleControlValueAccessor, [{
        key: 'writeValue',
        value: function writeValue(value) {
            var _this = this;

            this.value = value;
            if (value == null) return;
            var values = value;
            // convert values to ids
            var ids = values.map(function (v) {
                return _this._getOptionId(v);
            });
            this._optionMap.forEach(function (opt, o) {
                opt._setSelected(ids.indexOf(o.toString()) > -1);
            });
        }
    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            var _this2 = this;

            this.onChange = function (_) {
                var selected = [];
                if (_.hasOwnProperty('selectedOptions')) {
                    var options = _.selectedOptions;
                    for (var i = 0; i < options.length; i++) {
                        var opt = options.item(i);
                        var val = _this2._getOptionValue(opt.value);
                        selected.push(val);
                    }
                } else {
                    var _options = _.options;
                    for (var i = 0; i < _options.length; i++) {
                        var _opt = _options.item(i);
                        if (_opt.selected) {
                            var _val = _this2._getOptionValue(_opt.value);
                            selected.push(_val);
                        }
                    }
                }
                fn(selected);
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
        value: function _registerOption(value) {
            var id = (this._idCounter++).toString();
            this._optionMap.set(id, value);
            return id;
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

                    if ((0, _lang.looseIdentical)(this._optionMap.get(id)._value, value)) return id;
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
            var opt = this._optionMap.get(_extractId(valueString));
            return (0, _lang.isPresent)(opt) ? opt._value : valueString;
        }
    }]);

    return SelectMultipleControlValueAccessor;
}();
/** @nocollapse */


SelectMultipleControlValueAccessor.decorators = [{ type: _core.Directive, args: [{
        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
        host: { '(input)': 'onChange($event.target)', '(blur)': 'onTouched()' },
        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
SelectMultipleControlValueAccessor.ctorParameters = [];

var NgSelectMultipleOption = exports.NgSelectMultipleOption = function () {
    function NgSelectMultipleOption(_element, _renderer, _select) {
        _classCallCheck(this, NgSelectMultipleOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if ((0, _lang.isPresent)(this._select)) {
            this.id = this._select._registerOption(this);
        }
    }

    _createClass(NgSelectMultipleOption, [{
        key: '_setElementValue',

        /** @internal */
        value: function _setElementValue(value) {
            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
        }
        /** @internal */

    }, {
        key: '_setSelected',
        value: function _setSelected(selected) {
            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
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
            this._value = value;
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        }
    }, {
        key: 'value',
        set: function set(value) {
            if ((0, _lang.isPresent)(this._select)) {
                this._value = value;
                this._setElementValue(_buildValueString(this.id, value));
                this._select.writeValue(this._select.value);
            } else {
                this._setElementValue(value);
            }
        }
    }]);

    return NgSelectMultipleOption;
}();
/** @nocollapse */


NgSelectMultipleOption.decorators = [{ type: _core.Directive, args: [{ selector: 'option' }] }];
/** @nocollapse */
NgSelectMultipleOption.ctorParameters = [{ type: _core.ElementRef }, { type: _core.Renderer }, { type: SelectMultipleControlValueAccessor, decorators: [{ type: _core.Optional }, { type: _core.Host }] }];
/** @nocollapse */
NgSelectMultipleOption.propDecorators = {
    'ngValue': [{ type: _core.Input, args: ['ngValue'] }],
    'value': [{ type: _core.Input, args: ['value'] }]
};
var SELECT_DIRECTIVES = exports.SELECT_DIRECTIVES = [SelectMultipleControlValueAccessor, NgSelectMultipleOption];
//# sourceMappingURL=select_multiple_control_value_accessor.js.map

//# sourceMappingURL=select_multiple_control_value_accessor-compiled.js.map