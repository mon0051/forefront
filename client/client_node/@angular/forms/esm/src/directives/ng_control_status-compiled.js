'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgControlStatus = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _lang = require('../facade/lang');

var _ng_control = require('./ng_control');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NgControlStatus = exports.NgControlStatus = function () {
    function NgControlStatus(cd) {
        _classCallCheck(this, NgControlStatus);

        this._cd = cd;
    }

    _createClass(NgControlStatus, [{
        key: 'ngClassUntouched',
        get: function get() {
            return (0, _lang.isPresent)(this._cd.control) ? this._cd.control.untouched : false;
        }
    }, {
        key: 'ngClassTouched',
        get: function get() {
            return (0, _lang.isPresent)(this._cd.control) ? this._cd.control.touched : false;
        }
    }, {
        key: 'ngClassPristine',
        get: function get() {
            return (0, _lang.isPresent)(this._cd.control) ? this._cd.control.pristine : false;
        }
    }, {
        key: 'ngClassDirty',
        get: function get() {
            return (0, _lang.isPresent)(this._cd.control) ? this._cd.control.dirty : false;
        }
    }, {
        key: 'ngClassValid',
        get: function get() {
            return (0, _lang.isPresent)(this._cd.control) ? this._cd.control.valid : false;
        }
    }, {
        key: 'ngClassInvalid',
        get: function get() {
            return (0, _lang.isPresent)(this._cd.control) ? !this._cd.control.valid : false;
        }
    }]);

    return NgControlStatus;
}();
/** @nocollapse */


NgControlStatus.decorators = [{ type: _core.Directive, args: [{
        selector: '[formControlName],[ngModel],[formControl]',
        host: {
            '[class.ng-untouched]': 'ngClassUntouched',
            '[class.ng-touched]': 'ngClassTouched',
            '[class.ng-pristine]': 'ngClassPristine',
            '[class.ng-dirty]': 'ngClassDirty',
            '[class.ng-valid]': 'ngClassValid',
            '[class.ng-invalid]': 'ngClassInvalid'
        }
    }] }];
/** @nocollapse */
NgControlStatus.ctorParameters = [{ type: _ng_control.NgControl, decorators: [{ type: _core.Self }] }];
//# sourceMappingURL=ng_control_status.js.map

//# sourceMappingURL=ng_control_status-compiled.js.map