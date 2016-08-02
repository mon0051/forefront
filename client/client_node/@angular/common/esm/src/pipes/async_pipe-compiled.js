'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncPipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _core = require('@angular/core');

var _async = require('../facade/async');

var _lang = require('../facade/lang');

var _invalid_pipe_argument_exception = require('./invalid_pipe_argument_exception');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObservableStrategy = function () {
    function ObservableStrategy() {
        _classCallCheck(this, ObservableStrategy);
    }

    _createClass(ObservableStrategy, [{
        key: 'createSubscription',
        value: function createSubscription(async, updateLatestValue) {
            return _async.ObservableWrapper.subscribe(async, updateLatestValue, function (e) {
                throw e;
            });
        }
    }, {
        key: 'dispose',
        value: function dispose(subscription) {
            _async.ObservableWrapper.dispose(subscription);
        }
    }, {
        key: 'onDestroy',
        value: function onDestroy(subscription) {
            _async.ObservableWrapper.dispose(subscription);
        }
    }]);

    return ObservableStrategy;
}();

var PromiseStrategy = function () {
    function PromiseStrategy() {
        _classCallCheck(this, PromiseStrategy);
    }

    _createClass(PromiseStrategy, [{
        key: 'createSubscription',
        value: function createSubscription(async, updateLatestValue) {
            return async.then(updateLatestValue, function (e) {
                throw e;
            });
        }
    }, {
        key: 'dispose',
        value: function dispose(subscription) {}
    }, {
        key: 'onDestroy',
        value: function onDestroy(subscription) {}
    }]);

    return PromiseStrategy;
}();

var _promiseStrategy = new PromiseStrategy();
var _observableStrategy = new ObservableStrategy();
var __unused;

var AsyncPipe = exports.AsyncPipe = function () {
    function AsyncPipe(_ref) {
        _classCallCheck(this, AsyncPipe);

        /** @internal */
        this._latestValue = null;
        /** @internal */
        this._latestReturnedValue = null;
        /** @internal */
        this._subscription = null;
        /** @internal */
        this._obj = null;
        this._strategy = null;
        this._ref = _ref;
    }

    _createClass(AsyncPipe, [{
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            if ((0, _lang.isPresent)(this._subscription)) {
                this._dispose();
            }
        }
    }, {
        key: 'transform',
        value: function transform(obj) {
            if ((0, _lang.isBlank)(this._obj)) {
                if ((0, _lang.isPresent)(obj)) {
                    this._subscribe(obj);
                }
                this._latestReturnedValue = this._latestValue;
                return this._latestValue;
            }
            if (obj !== this._obj) {
                this._dispose();
                return this.transform(obj);
            }
            if (this._latestValue === this._latestReturnedValue) {
                return this._latestReturnedValue;
            } else {
                this._latestReturnedValue = this._latestValue;
                return _core.WrappedValue.wrap(this._latestValue);
            }
        }
        /** @internal */

    }, {
        key: '_subscribe',
        value: function _subscribe(obj) {
            var _this = this;

            this._obj = obj;
            this._strategy = this._selectStrategy(obj);
            this._subscription = this._strategy.createSubscription(obj, function (value) {
                return _this._updateLatestValue(obj, value);
            });
        }
        /** @internal */

    }, {
        key: '_selectStrategy',
        value: function _selectStrategy(obj) {
            if ((0, _lang.isPromise)(obj)) {
                return _promiseStrategy;
            } else if (_async.ObservableWrapper.isObservable(obj)) {
                return _observableStrategy;
            } else {
                throw new _invalid_pipe_argument_exception.InvalidPipeArgumentException(AsyncPipe, obj);
            }
        }
        /** @internal */

    }, {
        key: '_dispose',
        value: function _dispose() {
            this._strategy.dispose(this._subscription);
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._obj = null;
        }
        /** @internal */

    }, {
        key: '_updateLatestValue',
        value: function _updateLatestValue(async, value) {
            if (async === this._obj) {
                this._latestValue = value;
                this._ref.markForCheck();
            }
        }
    }]);

    return AsyncPipe;
}();
/** @nocollapse */


AsyncPipe.decorators = [{ type: _core.Pipe, args: [{ name: 'async', pure: false }] }];
/** @nocollapse */
AsyncPipe.ctorParameters = [{ type: _core.ChangeDetectorRef }];
//# sourceMappingURL=async_pipe.js.map

//# sourceMappingURL=async_pipe-compiled.js.map