'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RadioControlValueAccessor = exports.RadioControlRegistry = exports.RADIO_VALUE_ACCESSOR = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _collection = require('../facade/collection');

var _exceptions = require('../facade/exceptions');

var _lang = require('../facade/lang');

var _control_value_accessor = require('./control_value_accessor');

var _ng_control = require('./ng_control');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RADIO_VALUE_ACCESSOR = exports.RADIO_VALUE_ACCESSOR = {
    provide: _control_value_accessor.NG_VALUE_ACCESSOR,
    useExisting: (0, _core.forwardRef)(function () {
        return RadioControlValueAccessor;
    }),
    multi: true
};

var RadioControlRegistry = exports.RadioControlRegistry = function () {
    function RadioControlRegistry() {
        _classCallCheck(this, RadioControlRegistry);

        this._accessors = [];
    }

    _createClass(RadioControlRegistry, [{
        key: 'add',
        value: function add(control, accessor) {
            this._accessors.push([control, accessor]);
        }
    }, {
        key: 'remove',
        value: function remove(accessor) {
            var indexToRemove = -1;
            for (var i = 0; i < this._accessors.length; ++i) {
                if (this._accessors[i][1] === accessor) {
                    indexToRemove = i;
                }
            }
            _collection.ListWrapper.removeAt(this._accessors, indexToRemove);
        }
    }, {
        key: 'select',
        value: function select(accessor) {
            var _this = this;

            this._accessors.forEach(function (c) {
                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                    c[1].fireUncheck(accessor.value);
                }
            });
        }
    }, {
        key: '_isSameGroup',
        value: function _isSameGroup(controlPair, accessor) {
            if (!controlPair[0].control) return false;
            return controlPair[0].control.root === accessor._control.control.root && controlPair[1].name === accessor.name;
        }
    }]);

    return RadioControlRegistry;
}();
/** @nocollapse */


RadioControlRegistry.decorators = [{ type: _core.Injectable }];

var RadioControlValueAccessor = exports.RadioControlValueAccessor = function () {
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        _classCallCheck(this, RadioControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        this.onChange = function () {};
        this.onTouched = function () {};
    }

    _createClass(RadioControlValueAccessor, [{
        key: 'ngOnInit',
        value: function ngOnInit() {
            this._control = this._injector.get(_ng_control.NgControl);
            this._checkName();
            this._registry.add(this._control, this);
        }
    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            this._registry.remove(this);
        }
    }, {
        key: 'writeValue',
        value: function writeValue(value) {
            this._state = value === this.value;
            if ((0, _lang.isPresent)(value)) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
            }
        }
    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            var _this2 = this;

            this._fn = fn;
            this.onChange = function () {
                fn(_this2.value);
                _this2._registry.select(_this2);
            };
        }
    }, {
        key: 'fireUncheck',
        value: function fireUncheck(value) {
            this.writeValue(value);
        }
    }, {
        key: 'registerOnTouched',
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
    }, {
        key: '_checkName',
        value: function _checkName() {
            if (this.name && this.formControlName && this.name !== this.formControlName) {
                this._throwNameError();
            }
            if (!this.name && this.formControlName) this.name = this.formControlName;
        }
    }, {
        key: '_throwNameError',
        value: function _throwNameError() {
            throw new _exceptions.BaseException('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ');
        }
    }]);

    return RadioControlValueAccessor;
}();
/** @nocollapse */


RadioControlValueAccessor.decorators = [{ type: _core.Directive, args: [{
        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
        providers: [RADIO_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
RadioControlValueAccessor.ctorParameters = [{ type: _core.Renderer }, { type: _core.ElementRef }, { type: RadioControlRegistry }, { type: _core.Injector }];
/** @nocollapse */
RadioControlValueAccessor.propDecorators = {
    'name': [{ type: _core.Input }],
    'formControlName': [{ type: _core.Input }],
    'value': [{ type: _core.Input }]
};
//# sourceMappingURL=radio_control_value_accessor.js.map

//# sourceMappingURL=radio_control_value_accessor-compiled.js.map