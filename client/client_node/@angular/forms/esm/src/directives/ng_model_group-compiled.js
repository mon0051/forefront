'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgModelGroup = exports.modelGroupProvider = undefined;

var _core = require('@angular/core');

var _validators = require('../validators');

var _abstract_form_group_directive = require('./abstract_form_group_directive');

var _control_container = require('./control_container');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var modelGroupProvider =
/*@ts2dart_const*/ /* @ts2dart_Provider */exports.modelGroupProvider = {
    provide: _control_container.ControlContainer,
    useExisting: (0, _core.forwardRef)(function () {
        return NgModelGroup;
    })
};

var NgModelGroup = exports.NgModelGroup = function (_AbstractFormGroupDir) {
    _inherits(NgModelGroup, _AbstractFormGroupDir);

    function NgModelGroup(parent, validators, asyncValidators) {
        _classCallCheck(this, NgModelGroup);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NgModelGroup).call(this));

        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }

    return NgModelGroup;
}(_abstract_form_group_directive.AbstractFormGroupDirective);
/** @nocollapse */


NgModelGroup.decorators = [{ type: _core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' }] }];
/** @nocollapse */
NgModelGroup.ctorParameters = [{ type: _control_container.ControlContainer, decorators: [{ type: _core.Host }, { type: _core.SkipSelf }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators.NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _core.Optional }, { type: _core.Self }, { type: _core.Inject, args: [_validators.NG_ASYNC_VALIDATORS] }] }];
/** @nocollapse */
NgModelGroup.propDecorators = {
    'name': [{ type: _core.Input, args: ['ngModelGroup'] }]
};
//# sourceMappingURL=ng_model_group.js.map

//# sourceMappingURL=ng_model_group-compiled.js.map