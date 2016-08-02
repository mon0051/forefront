'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormBuilder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _collection = require('./facade/collection');

var _lang = require('./facade/lang');

var _model = require('./model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormBuilder = exports.FormBuilder = function () {
    function FormBuilder() {
        _classCallCheck(this, FormBuilder);
    }

    _createClass(FormBuilder, [{
        key: 'group',

        /**
         * Construct a new {@link FormGroup} with the given map of configuration.
         * Valid keys for the `extra` parameter map are `optionals` and `validator`.
         *
         * See the {@link FormGroup} constructor for more details.
         */
        value: function group(controlsConfig) {
            var extra = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            var controls = this._reduceControls(controlsConfig);
            var optionals = (0, _lang.isPresent)(extra) ? _collection.StringMapWrapper.get(extra, 'optionals') : null;
            var validator = (0, _lang.isPresent)(extra) ? _collection.StringMapWrapper.get(extra, 'validator') : null;
            var asyncValidator = (0, _lang.isPresent)(extra) ? _collection.StringMapWrapper.get(extra, 'asyncValidator') : null;
            return new _model.FormGroup(controls, optionals, validator, asyncValidator);
        }
        /**
         * Construct a new {@link FormControl} with the given `value`,`validator`, and `asyncValidator`.
         */

    }, {
        key: 'control',
        value: function control(value) {
            var validator = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
            var asyncValidator = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            return new _model.FormControl(value, validator, asyncValidator);
        }
        /**
         * Construct an array of {@link FormControl}s from the given `controlsConfig` array of
         * configuration, with the given optional `validator` and `asyncValidator`.
         */

    }, {
        key: 'array',
        value: function array(controlsConfig) {
            var _this = this;

            var validator = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
            var asyncValidator = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            var controls = controlsConfig.map(function (c) {
                return _this._createControl(c);
            });
            return new _model.FormArray(controls, validator, asyncValidator);
        }
        /** @internal */

    }, {
        key: '_reduceControls',
        value: function _reduceControls(controlsConfig) {
            var _this2 = this;

            var controls = {};
            _collection.StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
                controls[controlName] = _this2._createControl(controlConfig);
            });
            return controls;
        }
        /** @internal */

    }, {
        key: '_createControl',
        value: function _createControl(controlConfig) {
            if (controlConfig instanceof _model.FormControl || controlConfig instanceof _model.FormGroup || controlConfig instanceof _model.FormArray) {
                return controlConfig;
            } else if ((0, _lang.isArray)(controlConfig)) {
                var value = controlConfig[0];
                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
                return this.control(value, validator, asyncValidator);
            } else {
                return this.control(controlConfig);
            }
        }
    }]);

    return FormBuilder;
}();
/** @nocollapse */


FormBuilder.decorators = [{ type: _core.Injectable }];
//# sourceMappingURL=form_builder.js.map

//# sourceMappingURL=form_builder-compiled.js.map