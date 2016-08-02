"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var __extends = undefined && undefined.__extends || function (d, b) {
  function __() {
    this.constructor = d;
  }for (var p in b) {
    b.hasOwnProperty(p) && (d[p] = b[p]);
  }d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};!function (global, factory) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? factory(exports, require("@angular/core"), require("rxjs/Subject"), require("rxjs/observable/PromiseObservable"), require("rxjs/operator/toPromise"), require("rxjs/Observable"), require("@angular/common"), require("@angular/compiler")) : "function" == typeof define && define.amd ? define(["exports", "@angular/core", "rxjs/Subject", "rxjs/observable/PromiseObservable", "rxjs/operator/toPromise", "rxjs/Observable", "@angular/common", "@angular/compiler"], factory) : factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}), global.ng.core, global.Rx, global.Rx, global.Rx.Observable.prototype, global.Rx, global.ng.common, global.ng.compiler);
}(undefined, function (exports, _angular_core, rxjs_Subject, rxjs_observable_PromiseObservable, rxjs_operator_toPromise, rxjs_Observable, _angular_common, _angular_compiler) {
  "use strict";
  function isPresent(obj) {
    return void 0 !== obj && null !== obj;
  }function isBlank(obj) {
    return void 0 === obj || null === obj;
  }function isString(obj) {
    return "string" == typeof obj;
  }function isPromise(obj) {
    return obj instanceof global$1.Promise;
  }function isArray(obj) {
    return Array.isArray(obj);
  }function noop() {}function looseIdentical(a, b) {
    return a === b || "number" == typeof a && "number" == typeof b && isNaN(a) && isNaN(b);
  }function normalizeBool(obj) {
    return !isBlank(obj) && obj;
  }function isJsObject(o) {
    return null !== o && ("function" == typeof o || "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)));
  }function isPrimitive(obj) {
    return !isJsObject(obj);
  }function hasConstructor(value, type) {
    return value.constructor === type;
  }function _flattenArray(source, target) {
    if (isPresent(source)) for (var i = 0; i < source.length; i++) {
      var item = source[i];isArray(item) ? _flattenArray(item, target) : target.push(item);
    }return target;
  }function unimplemented() {
    throw new BaseException("unimplemented");
  }function _convertToPromise(obj) {
    return isPromise(obj) ? obj : ObservableWrapper.toPromise(obj);
  }function _executeValidators(control, validators) {
    return validators.map(function (v) {
      return v(control);
    });
  }function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) {
      return v(control);
    });
  }function _mergeErrors(arrayOfErrors) {
    var res = arrayOfErrors.reduce(function (res, errors) {
      return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
    }, {});return StringMapWrapper.isEmpty(res) ? null : res;
  }function normalizeValidator(validator) {
    return void 0 !== validator.validate ? function (c) {
      return validator.validate(c);
    } : validator;
  }function normalizeAsyncValidator(validator) {
    return void 0 !== validator.validate ? function (c) {
      return validator.validate(c);
    } : validator;
  }function _buildValueString(id, value) {
    return isBlank(id) ? "" + value : (isPrimitive(value) || (value = "Object"), StringWrapper.slice(id + ": " + value, 0, 50));
  }function _extractId(valueString) {
    return valueString.split(":")[0];
  }function _buildValueString$1(id, value) {
    return isBlank(id) ? "" + value : (isString(value) && (value = "'" + value + "'"), isPrimitive(value) || (value = "Object"), StringWrapper.slice(id + ": " + value, 0, 50));
  }function _extractId$1(valueString) {
    return valueString.split(":")[0];
  }function controlPath(name, parent) {
    var p = ListWrapper.clone(parent.path);return p.push(name), p;
  }function setUpControl(control, dir) {
    isBlank(control) && _throwError(dir, "Cannot find control"), isBlank(dir.valueAccessor) && _throwError(dir, "No value accessor for"), control.validator = Validators.compose([control.validator, dir.validator]), control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]), dir.valueAccessor.writeValue(control.value), dir.valueAccessor.registerOnChange(function (newValue) {
      dir.viewToModelUpdate(newValue), control.updateValue(newValue, { emitModelToViewChange: !1 }), control.markAsDirty();
    }), control.registerOnChange(function (newValue) {
      return dir.valueAccessor.writeValue(newValue);
    }), dir.valueAccessor.registerOnTouched(function () {
      return control.markAsTouched();
    });
  }function setUpFormContainer(control, dir) {
    isBlank(control) && _throwError(dir, "Cannot find control"), control.validator = Validators.compose([control.validator, dir.validator]), control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
  }function _throwError(dir, message) {
    var path = dir.path.join(" -> ");throw new BaseException(message + " '" + path + "'");
  }function composeValidators(validators) {
    return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
  }function composeAsyncValidators(validators) {
    return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) : null;
  }function isPropertyUpdated(changes, viewModel) {
    if (!StringMapWrapper.contains(changes, "model")) return !1;var change = changes.model;return !!change.isFirstChange() || !looseIdentical(viewModel, change.currentValue);
  }function selectValueAccessor(dir, valueAccessors) {
    if (isBlank(valueAccessors)) return null;var defaultAccessor, builtinAccessor, customAccessor;return valueAccessors.forEach(function (v) {
      hasConstructor(v, DefaultValueAccessor) ? defaultAccessor = v : hasConstructor(v, CheckboxControlValueAccessor) || hasConstructor(v, NumberValueAccessor) || hasConstructor(v, SelectControlValueAccessor) || hasConstructor(v, SelectMultipleControlValueAccessor) || hasConstructor(v, RadioControlValueAccessor) ? (isPresent(builtinAccessor) && _throwError(dir, "More than one built-in value accessor matches"), builtinAccessor = v) : (isPresent(customAccessor) && _throwError(dir, "More than one custom value accessor matches"), customAccessor = v);
    }), isPresent(customAccessor) ? customAccessor : isPresent(builtinAccessor) ? builtinAccessor : isPresent(defaultAccessor) ? defaultAccessor : (_throwError(dir, "No valid value accessor for"), null);
  }function _find(control, path) {
    return isBlank(path) ? null : (path instanceof Array || (path = path.split("/")), path instanceof Array && ListWrapper.isEmpty(path) ? null : path.reduce(function (v, name) {
      if (v instanceof FormGroup) return isPresent(v.controls[name]) ? v.controls[name] : null;if (v instanceof FormArray) {
        var index = name;return isPresent(v.at(index)) ? v.at(index) : null;
      }return null;
    }, control));
  }function toObservable(r) {
    return isPromise(r) ? ObservableWrapper.fromPromise(r) : r;
  }function coerceToValidator(validator) {
    return Array.isArray(validator) ? composeValidators(validator) : validator;
  }function coerceToAsyncValidator(asyncValidator) {
    return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
  }function flatten(platformDirectives) {
    var flattenedDirectives = [];return platformDirectives.forEach(function (directives) {
      Array.isArray(directives) ? flattenedDirectives = flattenedDirectives.concat(directives) : flattenedDirectives.push(directives);
    }), flattenedDirectives;
  }function disableDeprecatedForms() {
    return [{ provide: _angular_compiler.CompilerConfig, useFactory: function useFactory(platformDirectives, platformPipes) {
        var flattenedDirectives = flatten(platformDirectives);return ListWrapper.remove(flattenedDirectives, _angular_common.FORM_DIRECTIVES), new _angular_compiler.CompilerConfig({ platformDirectives: flattenedDirectives, platformPipes: platformPipes });
      }, deps: [_angular_core.PLATFORM_DIRECTIVES, _angular_core.PLATFORM_PIPES] }];
  }function provideForms() {
    return [{ provide: _angular_core.PLATFORM_DIRECTIVES, useValue: NEW_FORM_DIRECTIVES, multi: !0 }, FORM_PROVIDERS];
  }var NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken("NgValueAccessor"),
      CHECKBOX_VALUE_ACCESSOR = { provide: NG_VALUE_ACCESSOR, useExisting: _angular_core.forwardRef(function () {
      return CheckboxControlValueAccessor;
    }), multi: !0 },
      CheckboxControlValueAccessor = function () {
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
      this._renderer = _renderer, this._elementRef = _elementRef, this.onChange = function (_) {}, this.onTouched = function () {};
    }return CheckboxControlValueAccessor.prototype.writeValue = function (value) {
      this._renderer.setElementProperty(this._elementRef.nativeElement, "checked", value);
    }, CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) {
      this.onChange = fn;
    }, CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) {
      this.onTouched = fn;
    }, CheckboxControlValueAccessor;
  }();CheckboxControlValueAccessor.decorators = [{ type: _angular_core.Directive, args: [{ selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]", host: { "(change)": "onChange($event.target.checked)", "(blur)": "onTouched()" }, providers: [CHECKBOX_VALUE_ACCESSOR] }] }], CheckboxControlValueAccessor.ctorParameters = [{ type: _angular_core.Renderer }, { type: _angular_core.ElementRef }];var globalScope;globalScope = "undefined" == typeof window ? "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : global : window;var global$1 = globalScope;global$1.assert = function (condition) {};var StringWrapper = function () {
    function StringWrapper() {}return StringWrapper.fromCharCode = function (code) {
      return String.fromCharCode(code);
    }, StringWrapper.charCodeAt = function (s, index) {
      return s.charCodeAt(index);
    }, StringWrapper.split = function (s, regExp) {
      return s.split(regExp);
    }, StringWrapper.equals = function (s, s2) {
      return s === s2;
    }, StringWrapper.stripLeft = function (s, charVal) {
      if (s && s.length) {
        for (var pos = 0, i = 0; i < s.length && s[i] == charVal; i++) {
          pos++;
        }s = s.substring(pos);
      }return s;
    }, StringWrapper.stripRight = function (s, charVal) {
      if (s && s.length) {
        for (var pos = s.length, i = s.length - 1; i >= 0 && s[i] == charVal; i--) {
          pos--;
        }s = s.substring(0, pos);
      }return s;
    }, StringWrapper.replace = function (s, from, replace) {
      return s.replace(from, replace);
    }, StringWrapper.replaceAll = function (s, from, replace) {
      return s.replace(from, replace);
    }, StringWrapper.slice = function (s, from, to) {
      return void 0 === from && (from = 0), void 0 === to && (to = null), s.slice(from, null === to ? void 0 : to);
    }, StringWrapper.replaceAllMapped = function (s, from, cb) {
      return s.replace(from, function () {
        for (var matches = [], _i = 0; _i < arguments.length; _i++) {
          matches[_i - 0] = arguments[_i];
        }return matches.splice(-2, 2), cb(matches);
      });
    }, StringWrapper.contains = function (s, substr) {
      return s.indexOf(substr) != -1;
    }, StringWrapper.compare = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }, StringWrapper;
  }(),
      NumberParseError = function (_super) {
    function NumberParseError(message) {
      _super.call(this), this.message = message;
    }return __extends(NumberParseError, _super), NumberParseError.prototype.toString = function () {
      return this.message;
    }, NumberParseError;
  }(Error),
      NumberWrapper = function () {
    function NumberWrapper() {}return NumberWrapper.toFixed = function (n, fractionDigits) {
      return n.toFixed(fractionDigits);
    }, NumberWrapper.equal = function (a, b) {
      return a === b;
    }, NumberWrapper.parseIntAutoRadix = function (text) {
      var result = parseInt(text);if (isNaN(result)) throw new NumberParseError("Invalid integer literal when parsing " + text);return result;
    }, NumberWrapper.parseInt = function (text, radix) {
      if (10 == radix) {
        if (/^(\-|\+)?[0-9]+$/.test(text)) return parseInt(text, radix);
      } else if (16 == radix) {
        if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) return parseInt(text, radix);
      } else {
        var result = parseInt(text, radix);if (!isNaN(result)) return result;
      }throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " + radix);
    }, NumberWrapper.parseFloat = function (text) {
      return parseFloat(text);
    }, Object.defineProperty(NumberWrapper, "NaN", { get: function get() {
        return NaN;
      }, enumerable: !0, configurable: !0 }), NumberWrapper.isNumeric = function (value) {
      return !isNaN(value - parseFloat(value));
    }, NumberWrapper.isNaN = function (value) {
      return isNaN(value);
    }, NumberWrapper.isInteger = function (value) {
      return Number.isInteger(value);
    }, NumberWrapper;
  }(),
      DEFAULT_VALUE_ACCESSOR = { provide: NG_VALUE_ACCESSOR, useExisting: _angular_core.forwardRef(function () {
      return DefaultValueAccessor;
    }), multi: !0 },
      DefaultValueAccessor = function () {
    function DefaultValueAccessor(_renderer, _elementRef) {
      this._renderer = _renderer, this._elementRef = _elementRef, this.onChange = function (_) {}, this.onTouched = function () {};
    }return DefaultValueAccessor.prototype.writeValue = function (value) {
      var normalizedValue = isBlank(value) ? "" : value;this._renderer.setElementProperty(this._elementRef.nativeElement, "value", normalizedValue);
    }, DefaultValueAccessor.prototype.registerOnChange = function (fn) {
      this.onChange = fn;
    }, DefaultValueAccessor.prototype.registerOnTouched = function (fn) {
      this.onTouched = fn;
    }, DefaultValueAccessor;
  }();DefaultValueAccessor.decorators = [{ type: _angular_core.Directive, args: [{ selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]", host: { "(input)": "onChange($event.target.value)", "(blur)": "onTouched()" }, providers: [DEFAULT_VALUE_ACCESSOR] }] }], DefaultValueAccessor.ctorParameters = [{ type: _angular_core.Renderer }, { type: _angular_core.ElementRef }];var Map$1 = global$1.Map,
      Set = global$1.Set,
      createMapFromPairs = function () {
    try {
      if (1 === new Map$1([[1, 2]]).size) return function (pairs) {
        return new Map$1(pairs);
      };
    } catch (e) {}return function (pairs) {
      for (var map = new Map$1(), i = 0; i < pairs.length; i++) {
        var pair = pairs[i];map.set(pair[0], pair[1]);
      }return map;
    };
  }(),
      createMapFromMap = function () {
    try {
      if (new Map$1(new Map$1())) return function (m) {
        return new Map$1(m);
      };
    } catch (e) {}return function (m) {
      var map = new Map$1();return m.forEach(function (v, k) {
        map.set(k, v);
      }), map;
    };
  }(),
      _clearValues = function () {
    return new Map$1().keys().next ? function (m) {
      for (var k, keyIterator = m.keys(); !(k = keyIterator.next()).done;) {
        m.set(k.value, null);
      }
    } : function (m) {
      m.forEach(function (v, k) {
        m.set(k, null);
      });
    };
  }(),
      _arrayFromMap = function () {
    try {
      if (new Map$1().values().next) return function (m, getValues) {
        return getValues ? Array.from(m.values()) : Array.from(m.keys());
      };
    } catch (e) {}return function (m, getValues) {
      var res = ListWrapper.createFixedSize(m.size),
          i = 0;return m.forEach(function (v, k) {
        res[i] = getValues ? v : k, i++;
      }), res;
    };
  }(),
      MapWrapper = function () {
    function MapWrapper() {}return MapWrapper.clone = function (m) {
      return createMapFromMap(m);
    }, MapWrapper.createFromStringMap = function (stringMap) {
      var result = new Map$1();for (var prop in stringMap) {
        result.set(prop, stringMap[prop]);
      }return result;
    }, MapWrapper.toStringMap = function (m) {
      var r = {};return m.forEach(function (v, k) {
        return r[k] = v;
      }), r;
    }, MapWrapper.createFromPairs = function (pairs) {
      return createMapFromPairs(pairs);
    }, MapWrapper.clearValues = function (m) {
      _clearValues(m);
    }, MapWrapper.iterable = function (m) {
      return m;
    }, MapWrapper.keys = function (m) {
      return _arrayFromMap(m, !1);
    }, MapWrapper.values = function (m) {
      return _arrayFromMap(m, !0);
    }, MapWrapper;
  }(),
      StringMapWrapper = function () {
    function StringMapWrapper() {}return StringMapWrapper.create = function () {
      return {};
    }, StringMapWrapper.contains = function (map, key) {
      return map.hasOwnProperty(key);
    }, StringMapWrapper.get = function (map, key) {
      return map.hasOwnProperty(key) ? map[key] : void 0;
    }, StringMapWrapper.set = function (map, key, value) {
      map[key] = value;
    }, StringMapWrapper.keys = function (map) {
      return Object.keys(map);
    }, StringMapWrapper.values = function (map) {
      return Object.keys(map).reduce(function (r, a) {
        return r.push(map[a]), r;
      }, []);
    }, StringMapWrapper.isEmpty = function (map) {
      for (var prop in map) {
        return !1;
      }return !0;
    }, StringMapWrapper.delete = function (map, key) {
      delete map[key];
    }, StringMapWrapper.forEach = function (map, callback) {
      for (var prop in map) {
        map.hasOwnProperty(prop) && callback(map[prop], prop);
      }
    }, StringMapWrapper.merge = function (m1, m2) {
      var m = {};for (var attr in m1) {
        m1.hasOwnProperty(attr) && (m[attr] = m1[attr]);
      }for (var attr in m2) {
        m2.hasOwnProperty(attr) && (m[attr] = m2[attr]);
      }return m;
    }, StringMapWrapper.equals = function (m1, m2) {
      var k1 = Object.keys(m1),
          k2 = Object.keys(m2);if (k1.length != k2.length) return !1;for (var key, i = 0; i < k1.length; i++) {
        if (key = k1[i], m1[key] !== m2[key]) return !1;
      }return !0;
    }, StringMapWrapper;
  }(),
      ListWrapper = function () {
    function ListWrapper() {}return ListWrapper.createFixedSize = function (size) {
      return new Array(size);
    }, ListWrapper.createGrowableSize = function (size) {
      return new Array(size);
    }, ListWrapper.clone = function (array) {
      return array.slice(0);
    }, ListWrapper.forEachWithIndex = function (array, fn) {
      for (var i = 0; i < array.length; i++) {
        fn(array[i], i);
      }
    }, ListWrapper.first = function (array) {
      return array ? array[0] : null;
    }, ListWrapper.last = function (array) {
      return array && 0 != array.length ? array[array.length - 1] : null;
    }, ListWrapper.indexOf = function (array, value, startIndex) {
      return void 0 === startIndex && (startIndex = 0), array.indexOf(value, startIndex);
    }, ListWrapper.contains = function (list, el) {
      return list.indexOf(el) !== -1;
    }, ListWrapper.reversed = function (array) {
      var a = ListWrapper.clone(array);return a.reverse();
    }, ListWrapper.concat = function (a, b) {
      return a.concat(b);
    }, ListWrapper.insert = function (list, index, value) {
      list.splice(index, 0, value);
    }, ListWrapper.removeAt = function (list, index) {
      var res = list[index];return list.splice(index, 1), res;
    }, ListWrapper.removeAll = function (list, items) {
      for (var i = 0; i < items.length; ++i) {
        var index = list.indexOf(items[i]);list.splice(index, 1);
      }
    }, ListWrapper.remove = function (list, el) {
      var index = list.indexOf(el);return index > -1 && (list.splice(index, 1), !0);
    }, ListWrapper.clear = function (list) {
      list.length = 0;
    }, ListWrapper.isEmpty = function (list) {
      return 0 == list.length;
    }, ListWrapper.fill = function (list, value, start, end) {
      void 0 === start && (start = 0), void 0 === end && (end = null), list.fill(value, start, null === end ? list.length : end);
    }, ListWrapper.equals = function (a, b) {
      if (a.length != b.length) return !1;for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return !1;
      }return !0;
    }, ListWrapper.slice = function (l, from, to) {
      return void 0 === from && (from = 0), void 0 === to && (to = null), l.slice(from, null === to ? void 0 : to);
    }, ListWrapper.splice = function (l, from, length) {
      return l.splice(from, length);
    }, ListWrapper.sort = function (l, compareFn) {
      isPresent(compareFn) ? l.sort(compareFn) : l.sort();
    }, ListWrapper.toString = function (l) {
      return l.toString();
    }, ListWrapper.toJSON = function (l) {
      return JSON.stringify(l);
    }, ListWrapper.maximum = function (list, predicate) {
      if (0 == list.length) return null;for (var solution = null, maxValue = -(1 / 0), index = 0; index < list.length; index++) {
        var candidate = list[index];if (!isBlank(candidate)) {
          var candidateValue = predicate(candidate);candidateValue > maxValue && (solution = candidate, maxValue = candidateValue);
        }
      }return solution;
    }, ListWrapper.flatten = function (list) {
      var target = [];return _flattenArray(list, target), target;
    }, ListWrapper.addAll = function (list, source) {
      for (var i = 0; i < source.length; i++) {
        list.push(source[i]);
      }
    }, ListWrapper;
  }(),
      BaseException = (function () {
    var test = new Set([1, 2, 3]);return 3 === test.size ? function (lst) {
      return new Set(lst);
    } : function (lst) {
      var res = new Set(lst);if (res.size !== lst.length) for (var i = 0; i < lst.length; i++) {
        res.add(lst[i]);
      }return res;
    };
  }(), function (_super) {
    function BaseException(message) {
      void 0 === message && (message = "--"), _super.call(this, message), this.message = message, this.stack = new Error(message).stack;
    }return __extends(BaseException, _super), BaseException.prototype.toString = function () {
      return this.message;
    }, BaseException;
  }(Error)),
      AbstractControlDirective = function () {
    function AbstractControlDirective() {}return Object.defineProperty(AbstractControlDirective.prototype, "control", { get: function get() {
        return unimplemented();
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControlDirective.prototype, "value", { get: function get() {
        return isPresent(this.control) ? this.control.value : null;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControlDirective.prototype, "valid", { get: function get() {
        return isPresent(this.control) ? this.control.valid : null;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControlDirective.prototype, "errors", { get: function get() {
        return isPresent(this.control) ? this.control.errors : null;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControlDirective.prototype, "pristine", { get: function get() {
        return isPresent(this.control) ? this.control.pristine : null;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControlDirective.prototype, "dirty", { get: function get() {
        return isPresent(this.control) ? this.control.dirty : null;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControlDirective.prototype, "touched", { get: function get() {
        return isPresent(this.control) ? this.control.touched : null;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControlDirective.prototype, "untouched", { get: function get() {
        return isPresent(this.control) ? this.control.untouched : null;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", { get: function get() {
        return isPresent(this.control) ? this.control.statusChanges : null;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", { get: function get() {
        return isPresent(this.control) ? this.control.valueChanges : null;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControlDirective.prototype, "path", { get: function get() {
        return null;
      }, enumerable: !0, configurable: !0 }), AbstractControlDirective;
  }(),
      NgControl = function (_super) {
    function NgControl() {
      for (var args = [], _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
      }_super.apply(this, args), this.name = null, this.valueAccessor = null;
    }return __extends(NgControl, _super), Object.defineProperty(NgControl.prototype, "validator", { get: function get() {
        return unimplemented();
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgControl.prototype, "asyncValidator", { get: function get() {
        return unimplemented();
      }, enumerable: !0, configurable: !0 }), NgControl;
  }(AbstractControlDirective),
      NgControlStatus = function () {
    function NgControlStatus(cd) {
      this._cd = cd;
    }return Object.defineProperty(NgControlStatus.prototype, "ngClassUntouched", { get: function get() {
        return !!isPresent(this._cd.control) && this._cd.control.untouched;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgControlStatus.prototype, "ngClassTouched", { get: function get() {
        return !!isPresent(this._cd.control) && this._cd.control.touched;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgControlStatus.prototype, "ngClassPristine", { get: function get() {
        return !!isPresent(this._cd.control) && this._cd.control.pristine;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgControlStatus.prototype, "ngClassDirty", { get: function get() {
        return !!isPresent(this._cd.control) && this._cd.control.dirty;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgControlStatus.prototype, "ngClassValid", { get: function get() {
        return !!isPresent(this._cd.control) && this._cd.control.valid;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgControlStatus.prototype, "ngClassInvalid", { get: function get() {
        return !!isPresent(this._cd.control) && !this._cd.control.valid;
      }, enumerable: !0, configurable: !0 }), NgControlStatus;
  }();NgControlStatus.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[formControlName],[ngModel],[formControl]", host: { "[class.ng-untouched]": "ngClassUntouched", "[class.ng-touched]": "ngClassTouched", "[class.ng-pristine]": "ngClassPristine", "[class.ng-dirty]": "ngClassDirty", "[class.ng-valid]": "ngClassValid", "[class.ng-invalid]": "ngClassInvalid" } }] }], NgControlStatus.ctorParameters = [{ type: NgControl, decorators: [{ type: _angular_core.Self }] }];var PromiseCompleter = function () {
    function PromiseCompleter() {
      var _this = this;this.promise = new Promise(function (res, rej) {
        _this.resolve = res, _this.reject = rej;
      });
    }return PromiseCompleter;
  }(),
      PromiseWrapper = function () {
    function PromiseWrapper() {}return PromiseWrapper.resolve = function (obj) {
      return Promise.resolve(obj);
    }, PromiseWrapper.reject = function (obj, _) {
      return Promise.reject(obj);
    }, PromiseWrapper.catchError = function (promise, onError) {
      return promise.catch(onError);
    }, PromiseWrapper.all = function (promises) {
      return 0 == promises.length ? Promise.resolve([]) : Promise.all(promises);
    }, PromiseWrapper.then = function (promise, success, rejection) {
      return promise.then(success, rejection);
    }, PromiseWrapper.wrap = function (computation) {
      return new Promise(function (res, rej) {
        try {
          res(computation());
        } catch (e) {
          rej(e);
        }
      });
    }, PromiseWrapper.scheduleMicrotask = function (computation) {
      PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) {});
    }, PromiseWrapper.completer = function () {
      return new PromiseCompleter();
    }, PromiseWrapper;
  }(),
      ObservableWrapper = function () {
    function ObservableWrapper() {}return ObservableWrapper.subscribe = function (emitter, onNext, onError, onComplete) {
      return void 0 === onComplete && (onComplete = function onComplete() {}), onError = "function" == typeof onError && onError || noop, onComplete = "function" == typeof onComplete && onComplete || noop, emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
    }, ObservableWrapper.isObservable = function (obs) {
      return !!obs.subscribe;
    }, ObservableWrapper.hasSubscribers = function (obs) {
      return obs.observers.length > 0;
    }, ObservableWrapper.dispose = function (subscription) {
      subscription.unsubscribe();
    }, ObservableWrapper.callNext = function (emitter, value) {
      emitter.emit(value);
    }, ObservableWrapper.callEmit = function (emitter, value) {
      emitter.emit(value);
    }, ObservableWrapper.callError = function (emitter, error) {
      emitter.error(error);
    }, ObservableWrapper.callComplete = function (emitter) {
      emitter.complete();
    }, ObservableWrapper.fromPromise = function (promise) {
      return rxjs_observable_PromiseObservable.PromiseObservable.create(promise);
    }, ObservableWrapper.toPromise = function (obj) {
      return rxjs_operator_toPromise.toPromise.call(obj);
    }, ObservableWrapper;
  }(),
      EventEmitter = function (_super) {
    function EventEmitter(isAsync) {
      void 0 === isAsync && (isAsync = !1), _super.call(this), this.__isAsync = isAsync;
    }return __extends(EventEmitter, _super), EventEmitter.prototype.emit = function (value) {
      _super.prototype.next.call(this, value);
    }, EventEmitter.prototype.next = function (value) {
      _super.prototype.next.call(this, value);
    }, EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
      var schedulerFn,
          errorFn = function errorFn(err) {
        return null;
      },
          completeFn = function completeFn() {
        return null;
      };return generatorOrNext && "object" == (typeof generatorOrNext === "undefined" ? "undefined" : _typeof(generatorOrNext)) ? (schedulerFn = this.__isAsync ? function (value) {
        setTimeout(function () {
          return generatorOrNext.next(value);
        });
      } : function (value) {
        generatorOrNext.next(value);
      }, generatorOrNext.error && (errorFn = this.__isAsync ? function (err) {
        setTimeout(function () {
          return generatorOrNext.error(err);
        });
      } : function (err) {
        generatorOrNext.error(err);
      }), generatorOrNext.complete && (completeFn = this.__isAsync ? function () {
        setTimeout(function () {
          return generatorOrNext.complete();
        });
      } : function () {
        generatorOrNext.complete();
      })) : (schedulerFn = this.__isAsync ? function (value) {
        setTimeout(function () {
          return generatorOrNext(value);
        });
      } : function (value) {
        generatorOrNext(value);
      }, error && (errorFn = this.__isAsync ? function (err) {
        setTimeout(function () {
          return error(err);
        });
      } : function (err) {
        error(err);
      }), complete && (completeFn = this.__isAsync ? function () {
        setTimeout(function () {
          return complete();
        });
      } : function () {
        complete();
      })), _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
    }, EventEmitter;
  }(rxjs_Subject.Subject),
      NG_VALIDATORS = new _angular_core.OpaqueToken("NgValidators"),
      NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken("NgAsyncValidators"),
      Validators = function () {
    function Validators() {}return Validators.required = function (control) {
      return isBlank(control.value) || isString(control.value) && "" == control.value ? { required: !0 } : null;
    }, Validators.minLength = function (minLength) {
      return function (control) {
        if (isPresent(Validators.required(control))) return null;var v = control.value;return v.length < minLength ? { minlength: { requiredLength: minLength, actualLength: v.length } } : null;
      };
    }, Validators.maxLength = function (maxLength) {
      return function (control) {
        if (isPresent(Validators.required(control))) return null;var v = control.value;return v.length > maxLength ? { maxlength: { requiredLength: maxLength, actualLength: v.length } } : null;
      };
    }, Validators.pattern = function (pattern) {
      return function (control) {
        if (isPresent(Validators.required(control))) return null;var regex = new RegExp("^" + pattern + "$"),
            v = control.value;return regex.test(v) ? null : { pattern: { requiredPattern: "^" + pattern + "$", actualValue: v } };
      };
    }, Validators.nullValidator = function (c) {
      return null;
    }, Validators.compose = function (validators) {
      if (isBlank(validators)) return null;var presentValidators = validators.filter(isPresent);return 0 == presentValidators.length ? null : function (control) {
        return _mergeErrors(_executeValidators(control, presentValidators));
      };
    }, Validators.composeAsync = function (validators) {
      if (isBlank(validators)) return null;var presentValidators = validators.filter(isPresent);return 0 == presentValidators.length ? null : function (control) {
        var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);return PromiseWrapper.all(promises).then(_mergeErrors);
      };
    }, Validators;
  }(),
      NUMBER_VALUE_ACCESSOR = { provide: NG_VALUE_ACCESSOR, useExisting: _angular_core.forwardRef(function () {
      return NumberValueAccessor;
    }), multi: !0 },
      NumberValueAccessor = function () {
    function NumberValueAccessor(_renderer, _elementRef) {
      this._renderer = _renderer, this._elementRef = _elementRef, this.onChange = function (_) {}, this.onTouched = function () {};
    }return NumberValueAccessor.prototype.writeValue = function (value) {
      this._renderer.setElementProperty(this._elementRef.nativeElement, "value", value);
    }, NumberValueAccessor.prototype.registerOnChange = function (fn) {
      this.onChange = function (value) {
        fn("" == value ? null : NumberWrapper.parseFloat(value));
      };
    }, NumberValueAccessor.prototype.registerOnTouched = function (fn) {
      this.onTouched = fn;
    }, NumberValueAccessor;
  }();NumberValueAccessor.decorators = [{ type: _angular_core.Directive, args: [{ selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]", host: { "(change)": "onChange($event.target.value)", "(input)": "onChange($event.target.value)", "(blur)": "onTouched()" }, providers: [NUMBER_VALUE_ACCESSOR] }] }], NumberValueAccessor.ctorParameters = [{ type: _angular_core.Renderer }, { type: _angular_core.ElementRef }];var RADIO_VALUE_ACCESSOR = { provide: NG_VALUE_ACCESSOR, useExisting: _angular_core.forwardRef(function () {
      return RadioControlValueAccessor;
    }), multi: !0 },
      NewRadioControlRegistry = function () {
    function NewRadioControlRegistry() {
      this._accessors = [];
    }return NewRadioControlRegistry.prototype.add = function (control, accessor) {
      this._accessors.push([control, accessor]);
    }, NewRadioControlRegistry.prototype.remove = function (accessor) {
      for (var indexToRemove = -1, i = 0; i < this._accessors.length; ++i) {
        this._accessors[i][1] === accessor && (indexToRemove = i);
      }ListWrapper.removeAt(this._accessors, indexToRemove);
    }, NewRadioControlRegistry.prototype.select = function (accessor) {
      var _this = this;this._accessors.forEach(function (c) {
        _this._isSameGroup(c, accessor) && c[1] !== accessor && c[1].fireUncheck(accessor.value);
      });
    }, NewRadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
      return !!controlPair[0].control && controlPair[0].control.root === accessor._control.control.root && controlPair[1].name === accessor.name;
    }, NewRadioControlRegistry;
  }();NewRadioControlRegistry.decorators = [{ type: _angular_core.Injectable }];var RadioControlValueAccessor = function () {
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
      this._renderer = _renderer, this._elementRef = _elementRef, this._registry = _registry, this._injector = _injector, this.onChange = function () {}, this.onTouched = function () {};
    }return RadioControlValueAccessor.prototype.ngOnInit = function () {
      this._control = this._injector.get(NgControl), this._checkName(), this._registry.add(this._control, this);
    }, RadioControlValueAccessor.prototype.ngOnDestroy = function () {
      this._registry.remove(this);
    }, RadioControlValueAccessor.prototype.writeValue = function (value) {
      this._state = value === this.value, isPresent(value) && this._renderer.setElementProperty(this._elementRef.nativeElement, "checked", this._state);
    }, RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
      var _this = this;this._fn = fn, this.onChange = function () {
        fn(_this.value), _this._registry.select(_this);
      };
    }, RadioControlValueAccessor.prototype.fireUncheck = function (value) {
      this.writeValue(value);
    }, RadioControlValueAccessor.prototype.registerOnTouched = function (fn) {
      this.onTouched = fn;
    }, RadioControlValueAccessor.prototype._checkName = function () {
      this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName);
    }, RadioControlValueAccessor.prototype._throwNameError = function () {
      throw new BaseException('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ');
    }, RadioControlValueAccessor;
  }();RadioControlValueAccessor.decorators = [{ type: _angular_core.Directive, args: [{ selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", host: { "(change)": "onChange()", "(blur)": "onTouched()" }, providers: [RADIO_VALUE_ACCESSOR] }] }], RadioControlValueAccessor.ctorParameters = [{ type: _angular_core.Renderer }, { type: _angular_core.ElementRef }, { type: NewRadioControlRegistry }, { type: _angular_core.Injector
  }], RadioControlValueAccessor.propDecorators = { name: [{ type: _angular_core.Input }], formControlName: [{ type: _angular_core.Input }], value: [{ type: _angular_core.Input }] };var SELECT_VALUE_ACCESSOR = { provide: NG_VALUE_ACCESSOR, useExisting: _angular_core.forwardRef(function () {
      return SelectControlValueAccessor;
    }), multi: !0 },
      SelectControlValueAccessor = function () {
    function SelectControlValueAccessor(_renderer, _elementRef) {
      this._renderer = _renderer, this._elementRef = _elementRef, this._optionMap = new Map(), this._idCounter = 0, this.onChange = function (_) {}, this.onTouched = function () {};
    }return SelectControlValueAccessor.prototype.writeValue = function (value) {
      this.value = value;var valueString = _buildValueString(this._getOptionId(value), value);this._renderer.setElementProperty(this._elementRef.nativeElement, "value", valueString);
    }, SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
      var _this = this;this.onChange = function (valueString) {
        _this.value = valueString, fn(_this._getOptionValue(valueString));
      };
    }, SelectControlValueAccessor.prototype.registerOnTouched = function (fn) {
      this.onTouched = fn;
    }, SelectControlValueAccessor.prototype._registerOption = function () {
      return (this._idCounter++).toString();
    }, SelectControlValueAccessor.prototype._getOptionId = function (value) {
      for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
        var id = _a[_i];if (looseIdentical(this._optionMap.get(id), value)) return id;
      }return null;
    }, SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
      var value = this._optionMap.get(_extractId(valueString));return isPresent(value) ? value : valueString;
    }, SelectControlValueAccessor;
  }();SelectControlValueAccessor.decorators = [{ type: _angular_core.Directive, args: [{ selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", host: { "(change)": "onChange($event.target.value)", "(blur)": "onTouched()" }, providers: [SELECT_VALUE_ACCESSOR] }] }], SelectControlValueAccessor.ctorParameters = [{ type: _angular_core.Renderer }, { type: _angular_core.ElementRef }];var NgSelectOption = function () {
    function NgSelectOption(_element, _renderer, _select) {
      this._element = _element, this._renderer = _renderer, this._select = _select, isPresent(this._select) && (this.id = this._select._registerOption());
    }return Object.defineProperty(NgSelectOption.prototype, "ngValue", { set: function set(value) {
        null != this._select && (this._select._optionMap.set(this.id, value), this._setElementValue(_buildValueString(this.id, value)), this._select.writeValue(this._select.value));
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgSelectOption.prototype, "value", { set: function set(value) {
        this._setElementValue(value), isPresent(this._select) && this._select.writeValue(this._select.value);
      }, enumerable: !0, configurable: !0 }), NgSelectOption.prototype._setElementValue = function (value) {
      this._renderer.setElementProperty(this._element.nativeElement, "value", value);
    }, NgSelectOption.prototype.ngOnDestroy = function () {
      isPresent(this._select) && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
    }, NgSelectOption;
  }();NgSelectOption.decorators = [{ type: _angular_core.Directive, args: [{ selector: "option" }] }], NgSelectOption.ctorParameters = [{ type: _angular_core.ElementRef }, { type: _angular_core.Renderer }, { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }] }], NgSelectOption.propDecorators = { ngValue: [{ type: _angular_core.Input, args: ["ngValue"] }], value: [{ type: _angular_core.Input, args: ["value"] }] };var SELECT_MULTIPLE_VALUE_ACCESSOR = { provide: NG_VALUE_ACCESSOR, useExisting: _angular_core.forwardRef(function () {
      return SelectMultipleControlValueAccessor;
    }), multi: !0 },
      SelectMultipleControlValueAccessor = function () {
    function SelectMultipleControlValueAccessor() {
      this._optionMap = new Map(), this._idCounter = 0, this.onChange = function (_) {}, this.onTouched = function () {};
    }return SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
      var _this = this;if (this.value = value, null != value) {
        var values = value,
            ids = values.map(function (v) {
          return _this._getOptionId(v);
        });this._optionMap.forEach(function (opt, o) {
          opt._setSelected(ids.indexOf(o.toString()) > -1);
        });
      }
    }, SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
      var _this = this;this.onChange = function (_) {
        var selected = [];if (_.hasOwnProperty("selectedOptions")) for (var options = _.selectedOptions, i = 0; i < options.length; i++) {
          var opt = options.item(i),
              val = _this._getOptionValue(opt.value);selected.push(val);
        } else for (var options = _.options, i = 0; i < options.length; i++) {
          var opt = options.item(i);if (opt.selected) {
            var val = _this._getOptionValue(opt.value);selected.push(val);
          }
        }fn(selected);
      };
    }, SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) {
      this.onTouched = fn;
    }, SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
      var id = (this._idCounter++).toString();return this._optionMap.set(id, value), id;
    }, SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
      for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
        var id = _a[_i];if (looseIdentical(this._optionMap.get(id)._value, value)) return id;
      }return null;
    }, SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
      var opt = this._optionMap.get(_extractId$1(valueString));return isPresent(opt) ? opt._value : valueString;
    }, SelectMultipleControlValueAccessor;
  }();SelectMultipleControlValueAccessor.decorators = [{ type: _angular_core.Directive, args: [{ selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]", host: { "(input)": "onChange($event.target)", "(blur)": "onTouched()" }, providers: [SELECT_MULTIPLE_VALUE_ACCESSOR] }] }], SelectMultipleControlValueAccessor.ctorParameters = [];var NgSelectMultipleOption = function () {
    function NgSelectMultipleOption(_element, _renderer, _select) {
      this._element = _element, this._renderer = _renderer, this._select = _select, isPresent(this._select) && (this.id = this._select._registerOption(this));
    }return Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", { set: function set(value) {
        null != this._select && (this._value = value, this._setElementValue(_buildValueString$1(this.id, value)), this._select.writeValue(this._select.value));
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgSelectMultipleOption.prototype, "value", { set: function set(value) {
        isPresent(this._select) ? (this._value = value, this._setElementValue(_buildValueString$1(this.id, value)), this._select.writeValue(this._select.value)) : this._setElementValue(value);
      }, enumerable: !0, configurable: !0 }), NgSelectMultipleOption.prototype._setElementValue = function (value) {
      this._renderer.setElementProperty(this._element.nativeElement, "value", value);
    }, NgSelectMultipleOption.prototype._setSelected = function (selected) {
      this._renderer.setElementProperty(this._element.nativeElement, "selected", selected);
    }, NgSelectMultipleOption.prototype.ngOnDestroy = function () {
      isPresent(this._select) && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
    }, NgSelectMultipleOption;
  }();NgSelectMultipleOption.decorators = [{ type: _angular_core.Directive, args: [{ selector: "option" }] }], NgSelectMultipleOption.ctorParameters = [{ type: _angular_core.ElementRef }, { type: _angular_core.Renderer }, { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }] }], NgSelectMultipleOption.propDecorators = { ngValue: [{ type: _angular_core.Input, args: ["ngValue"] }], value: [{ type: _angular_core.Input, args: ["value"] }] };var VALID = "VALID",
      INVALID = "INVALID",
      PENDING = "PENDING",
      AbstractControl = function () {
    function AbstractControl(validator, asyncValidator) {
      this.validator = validator, this.asyncValidator = asyncValidator, this._pristine = !0, this._touched = !1;
    }return Object.defineProperty(AbstractControl.prototype, "value", { get: function get() {
        return this._value;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControl.prototype, "status", { get: function get() {
        return this._status;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControl.prototype, "valid", { get: function get() {
        return this._status === VALID;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControl.prototype, "errors", { get: function get() {
        return this._errors;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControl.prototype, "pristine", { get: function get() {
        return this._pristine;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControl.prototype, "dirty", { get: function get() {
        return !this.pristine;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControl.prototype, "touched", { get: function get() {
        return this._touched;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControl.prototype, "untouched", { get: function get() {
        return !this._touched;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControl.prototype, "valueChanges", { get: function get() {
        return this._valueChanges;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControl.prototype, "statusChanges", { get: function get() {
        return this._statusChanges;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractControl.prototype, "pending", { get: function get() {
        return this._status == PENDING;
      }, enumerable: !0, configurable: !0 }), AbstractControl.prototype.setAsyncValidators = function (newValidator) {
      this.asyncValidator = coerceToAsyncValidator(newValidator);
    }, AbstractControl.prototype.clearAsyncValidators = function () {
      this.asyncValidator = null;
    }, AbstractControl.prototype.setValidators = function (newValidator) {
      this.validator = coerceToValidator(newValidator);
    }, AbstractControl.prototype.clearValidators = function () {
      this.validator = null;
    }, AbstractControl.prototype.markAsTouched = function () {
      this._touched = !0;
    }, AbstractControl.prototype.markAsDirty = function (_a) {
      var onlySelf = (void 0 === _a ? {} : _a).onlySelf;onlySelf = normalizeBool(onlySelf), this._pristine = !1, isPresent(this._parent) && !onlySelf && this._parent.markAsDirty({ onlySelf: onlySelf });
    }, AbstractControl.prototype.markAsPending = function (_a) {
      var onlySelf = (void 0 === _a ? {} : _a).onlySelf;onlySelf = normalizeBool(onlySelf), this._status = PENDING, isPresent(this._parent) && !onlySelf && this._parent.markAsPending({ onlySelf: onlySelf });
    }, AbstractControl.prototype.setParent = function (parent) {
      this._parent = parent;
    }, AbstractControl.prototype.updateValueAndValidity = function (_a) {
      var _b = void 0 === _a ? {} : _a,
          onlySelf = _b.onlySelf,
          emitEvent = _b.emitEvent;onlySelf = normalizeBool(onlySelf), emitEvent = !isPresent(emitEvent) || emitEvent, this._updateValue(), this._errors = this._runValidator(), this._status = this._calculateStatus(), this._status != VALID && this._status != PENDING || this._runAsyncValidator(emitEvent), emitEvent && (ObservableWrapper.callEmit(this._valueChanges, this._value), ObservableWrapper.callEmit(this._statusChanges, this._status)), isPresent(this._parent) && !onlySelf && this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    }, AbstractControl.prototype._runValidator = function () {
      return isPresent(this.validator) ? this.validator(this) : null;
    }, AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
      var _this = this;if (isPresent(this.asyncValidator)) {
        this._status = PENDING, this._cancelExistingSubscription();var obs = toObservable(this.asyncValidator(this));this._asyncValidationSubscription = ObservableWrapper.subscribe(obs, function (res) {
          return _this.setErrors(res, { emitEvent: emitEvent });
        });
      }
    }, AbstractControl.prototype._cancelExistingSubscription = function () {
      isPresent(this._asyncValidationSubscription) && ObservableWrapper.dispose(this._asyncValidationSubscription);
    }, AbstractControl.prototype.setErrors = function (errors, _a) {
      var emitEvent = (void 0 === _a ? {} : _a).emitEvent;emitEvent = !isPresent(emitEvent) || emitEvent, this._errors = errors, this._updateControlsErrors(emitEvent);
    }, AbstractControl.prototype.find = function (path) {
      return _find(this, path);
    }, AbstractControl.prototype.getError = function (errorCode, path) {
      void 0 === path && (path = null);var control = isPresent(path) && !ListWrapper.isEmpty(path) ? this.find(path) : this;return isPresent(control) && isPresent(control._errors) ? StringMapWrapper.get(control._errors, errorCode) : null;
    }, AbstractControl.prototype.hasError = function (errorCode, path) {
      return void 0 === path && (path = null), isPresent(this.getError(errorCode, path));
    }, Object.defineProperty(AbstractControl.prototype, "root", { get: function get() {
        for (var x = this; isPresent(x._parent);) {
          x = x._parent;
        }return x;
      }, enumerable: !0, configurable: !0 }), AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
      this._status = this._calculateStatus(), emitEvent && ObservableWrapper.callEmit(this._statusChanges, this._status), isPresent(this._parent) && this._parent._updateControlsErrors(emitEvent);
    }, AbstractControl.prototype._initObservables = function () {
      this._valueChanges = new EventEmitter(), this._statusChanges = new EventEmitter();
    }, AbstractControl.prototype._calculateStatus = function () {
      return isPresent(this._errors) ? INVALID : this._anyControlsHaveStatus(PENDING) ? PENDING : this._anyControlsHaveStatus(INVALID) ? INVALID : VALID;
    }, AbstractControl;
  }(),
      FormControl = function (_super) {
    function FormControl(value, validator, asyncValidator) {
      void 0 === value && (value = null), void 0 === validator && (validator = null), void 0 === asyncValidator && (asyncValidator = null), _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)), this._onChange = [], this._value = value, this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), this._initObservables();
    }return __extends(FormControl, _super), FormControl.prototype.updateValue = function (value, _a) {
      var _this = this,
          _b = void 0 === _a ? {} : _a,
          onlySelf = _b.onlySelf,
          emitEvent = _b.emitEvent,
          emitModelToViewChange = _b.emitModelToViewChange;emitModelToViewChange = !isPresent(emitModelToViewChange) || emitModelToViewChange, this._value = value, this._onChange.length && emitModelToViewChange && this._onChange.forEach(function (changeFn) {
        return changeFn(_this._value);
      }), this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    }, FormControl.prototype._updateValue = function () {}, FormControl.prototype._anyControlsHaveStatus = function (status) {
      return !1;
    }, FormControl.prototype.registerOnChange = function (fn) {
      this._onChange.push(fn);
    }, FormControl;
  }(AbstractControl),
      FormGroup = function (_super) {
    function FormGroup(controls, optionals, validator, asyncValidator) {
      void 0 === optionals && (optionals = null), void 0 === validator && (validator = null), void 0 === asyncValidator && (asyncValidator = null), _super.call(this, validator, asyncValidator), this.controls = controls, this._optionals = isPresent(optionals) ? optionals : {}, this._initObservables(), this._setParentForControls(), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
    }return __extends(FormGroup, _super), FormGroup.prototype.registerControl = function (name, control) {
      return this.controls[name] ? this.controls[name] : (this.controls[name] = control, control.setParent(this), control);
    }, FormGroup.prototype.addControl = function (name, control) {
      this.registerControl(name, control), this.updateValueAndValidity();
    }, FormGroup.prototype.removeControl = function (name) {
      StringMapWrapper.delete(this.controls, name), this.updateValueAndValidity();
    }, FormGroup.prototype.include = function (controlName) {
      StringMapWrapper.set(this._optionals, controlName, !0), this.updateValueAndValidity();
    }, FormGroup.prototype.exclude = function (controlName) {
      StringMapWrapper.set(this._optionals, controlName, !1), this.updateValueAndValidity();
    }, FormGroup.prototype.contains = function (controlName) {
      var c = StringMapWrapper.contains(this.controls, controlName);return c && this._included(controlName);
    }, FormGroup.prototype._setParentForControls = function () {
      var _this = this;StringMapWrapper.forEach(this.controls, function (control, name) {
        control.setParent(_this);
      });
    }, FormGroup.prototype._updateValue = function () {
      this._value = this._reduceValue();
    }, FormGroup.prototype._anyControlsHaveStatus = function (status) {
      var _this = this,
          res = !1;return StringMapWrapper.forEach(this.controls, function (control, name) {
        res = res || _this.contains(name) && control.status == status;
      }), res;
    }, FormGroup.prototype._reduceValue = function () {
      return this._reduceChildren({}, function (acc, control, name) {
        return acc[name] = control.value, acc;
      });
    }, FormGroup.prototype._reduceChildren = function (initValue, fn) {
      var _this = this,
          res = initValue;return StringMapWrapper.forEach(this.controls, function (control, name) {
        _this._included(name) && (res = fn(res, control, name));
      }), res;
    }, FormGroup.prototype._included = function (controlName) {
      var isOptional = StringMapWrapper.contains(this._optionals, controlName);return !isOptional || StringMapWrapper.get(this._optionals, controlName);
    }, FormGroup;
  }(AbstractControl),
      FormArray = function (_super) {
    function FormArray(controls, validator, asyncValidator) {
      void 0 === validator && (validator = null), void 0 === asyncValidator && (asyncValidator = null), _super.call(this, validator, asyncValidator), this.controls = controls, this._initObservables(), this._setParentForControls(), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
    }return __extends(FormArray, _super), FormArray.prototype.at = function (index) {
      return this.controls[index];
    }, FormArray.prototype.push = function (control) {
      this.controls.push(control), control.setParent(this), this.updateValueAndValidity();
    }, FormArray.prototype.insert = function (index, control) {
      ListWrapper.insert(this.controls, index, control), control.setParent(this), this.updateValueAndValidity();
    }, FormArray.prototype.removeAt = function (index) {
      ListWrapper.removeAt(this.controls, index), this.updateValueAndValidity();
    }, Object.defineProperty(FormArray.prototype, "length", { get: function get() {
        return this.controls.length;
      }, enumerable: !0, configurable: !0 }), FormArray.prototype._updateValue = function () {
      this._value = this.controls.map(function (control) {
        return control.value;
      });
    }, FormArray.prototype._anyControlsHaveStatus = function (status) {
      return this.controls.some(function (c) {
        return c.status == status;
      });
    }, FormArray.prototype._setParentForControls = function () {
      var _this = this;this.controls.forEach(function (control) {
        control.setParent(_this);
      });
    }, FormArray;
  }(AbstractControl),
      ControlContainer = function (_super) {
    function ControlContainer() {
      _super.apply(this, arguments);
    }return __extends(ControlContainer, _super), Object.defineProperty(ControlContainer.prototype, "formDirective", { get: function get() {
        return null;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(ControlContainer.prototype, "path", { get: function get() {
        return null;
      }, enumerable: !0, configurable: !0 }), ControlContainer;
  }(AbstractControlDirective),
      formDirectiveProvider = { provide: ControlContainer, useExisting: _angular_core.forwardRef(function () {
      return NgForm;
    }) },
      NgForm = function (_super) {
    function NgForm(validators, asyncValidators) {
      _super.call(this), this._submitted = !1, this.ngSubmit = new EventEmitter(), this.form = new FormGroup({}, null, composeValidators(validators), composeAsyncValidators(asyncValidators));
    }return __extends(NgForm, _super), Object.defineProperty(NgForm.prototype, "submitted", { get: function get() {
        return this._submitted;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgForm.prototype, "formDirective", { get: function get() {
        return this;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgForm.prototype, "control", { get: function get() {
        return this.form;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgForm.prototype, "path", { get: function get() {
        return [];
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgForm.prototype, "controls", { get: function get() {
        return this.form.controls;
      }, enumerable: !0, configurable: !0 }), NgForm.prototype.addControl = function (dir) {
      var _this = this;PromiseWrapper.scheduleMicrotask(function () {
        var container = _this._findContainer(dir.path);dir._control = container.registerControl(dir.name, dir.control), setUpControl(dir.control, dir), dir.control.updateValueAndValidity({ emitEvent: !1 });
      });
    }, NgForm.prototype.getControl = function (dir) {
      return this.form.find(dir.path);
    }, NgForm.prototype.removeControl = function (dir) {
      var _this = this;PromiseWrapper.scheduleMicrotask(function () {
        var container = _this._findContainer(dir.path);isPresent(container) && container.removeControl(dir.name);
      });
    }, NgForm.prototype.addFormGroup = function (dir) {
      var _this = this;PromiseWrapper.scheduleMicrotask(function () {
        var container = _this._findContainer(dir.path),
            group = new FormGroup({});setUpFormContainer(group, dir), container.registerControl(dir.name, group), group.updateValueAndValidity({ emitEvent: !1 });
      });
    }, NgForm.prototype.removeFormGroup = function (dir) {
      var _this = this;PromiseWrapper.scheduleMicrotask(function () {
        var container = _this._findContainer(dir.path);isPresent(container) && container.removeControl(dir.name);
      });
    }, NgForm.prototype.getFormGroup = function (dir) {
      return this.form.find(dir.path);
    }, NgForm.prototype.updateModel = function (dir, value) {
      var _this = this;PromiseWrapper.scheduleMicrotask(function () {
        var ctrl = _this.form.find(dir.path);ctrl.updateValue(value);
      });
    }, NgForm.prototype.onSubmit = function () {
      return this._submitted = !0, ObservableWrapper.callEmit(this.ngSubmit, null), !1;
    }, NgForm.prototype._findContainer = function (path) {
      return path.pop(), ListWrapper.isEmpty(path) ? this.form : this.form.find(path);
    }, NgForm;
  }(ControlContainer);NgForm.decorators = [{ type: _angular_core.Directive, args: [{ selector: "form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]", providers: [formDirectiveProvider], host: { "(submit)": "onSubmit()" }, outputs: ["ngSubmit"], exportAs: "ngForm" }] }], NgForm.ctorParameters = [{ type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS] }] }];var formControlBinding = { provide: NgControl, useExisting: _angular_core.forwardRef(function () {
      return NgModel;
    }) },
      NgModel = function (_super) {
    function NgModel(_parent, _validators, _asyncValidators, valueAccessors) {
      _super.call(this), this._parent = _parent, this._validators = _validators, this._asyncValidators = _asyncValidators, this._control = new FormControl(), this._registered = !1, this.update = new EventEmitter(), this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }return __extends(NgModel, _super), NgModel.prototype.ngOnChanges = function (changes) {
      this._checkName(), this._registered || this._setUpControl(), isPropertyUpdated(changes, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model);
    }, NgModel.prototype.ngOnDestroy = function () {
      this.formDirective && this.formDirective.removeControl(this);
    }, Object.defineProperty(NgModel.prototype, "control", { get: function get() {
        return this._control;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgModel.prototype, "path", { get: function get() {
        return this._parent ? controlPath(this.name, this._parent) : [];
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgModel.prototype, "formDirective", { get: function get() {
        return this._parent ? this._parent.formDirective : null;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgModel.prototype, "validator", { get: function get() {
        return composeValidators(this._validators);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(NgModel.prototype, "asyncValidator", { get: function get() {
        return composeAsyncValidators(this._asyncValidators);
      }, enumerable: !0, configurable: !0 }), NgModel.prototype.viewToModelUpdate = function (newValue) {
      this.viewModel = newValue, ObservableWrapper.callEmit(this.update, newValue);
    }, NgModel.prototype._setUpControl = function () {
      this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0;
    }, NgModel.prototype._isStandalone = function () {
      return !this._parent || this.options && this.options.standalone;
    }, NgModel.prototype._setUpStandalone = function () {
      setUpControl(this._control, this), this._control.updateValueAndValidity({ emitEvent: !1 });
    }, NgModel.prototype._checkName = function () {
      if (this.options && this.options.name && (this.name = this.options.name), !this._isStandalone() && !this.name) throw new BaseException('If ngModel is used within a form tag, either the name attribute must be set\n                      or the form control must be defined as \'standalone\' in ngModelOptions.\n\n                      Example 1: <input [(ngModel)]="person.firstName" name="first">\n                      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">\n                   ');
    }, NgModel.prototype._updateValue = function (value) {
      var _this = this;PromiseWrapper.scheduleMicrotask(function () {
        _this.control.updateValue(value);
      });
    }, NgModel;
  }(NgControl);NgModel.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[ngModel]:not([formControlName]):not([formControl])", providers: [formControlBinding], exportAs: "ngModel" }] }], NgModel.ctorParameters = [{ type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR] }] }], NgModel.propDecorators = { model: [{ type: _angular_core.Input, args: ["ngModel"] }], name: [{ type: _angular_core.Input }], options: [{ type: _angular_core.Input, args: ["ngModelOptions"] }], update: [{ type: _angular_core.Output, args: ["ngModelChange"] }] };var AbstractFormGroupDirective = function (_super) {
    function AbstractFormGroupDirective() {
      _super.apply(this, arguments);
    }return __extends(AbstractFormGroupDirective, _super), AbstractFormGroupDirective.prototype.ngOnInit = function () {
      this.formDirective.addFormGroup(this);
    }, AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
      this.formDirective.removeFormGroup(this);
    }, Object.defineProperty(AbstractFormGroupDirective.prototype, "control", { get: function get() {
        return this.formDirective.getFormGroup(this);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractFormGroupDirective.prototype, "path", { get: function get() {
        return controlPath(this.name, this._parent);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", { get: function get() {
        return this._parent.formDirective;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", { get: function get() {
        return composeValidators(this._validators);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", { get: function get() {
        return composeAsyncValidators(this._asyncValidators);
      }, enumerable: !0, configurable: !0 }), AbstractFormGroupDirective;
  }(ControlContainer),
      modelGroupProvider = { provide: ControlContainer, useExisting: _angular_core.forwardRef(function () {
      return NgModelGroup;
    }) },
      NgModelGroup = function (_super) {
    function NgModelGroup(parent, validators, asyncValidators) {
      _super.call(this), this._parent = parent, this._validators = validators, this._asyncValidators = asyncValidators;
    }return __extends(NgModelGroup, _super), NgModelGroup;
  }(AbstractFormGroupDirective);NgModelGroup.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[ngModelGroup]", providers: [modelGroupProvider], exportAs: "ngModelGroup" }] }], NgModelGroup.ctorParameters = [{ type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS] }] }], NgModelGroup.propDecorators = { name: [{ type: _angular_core.Input, args: ["ngModelGroup"] }] };var formArrayNameProvider = { provide: ControlContainer, useExisting: _angular_core.forwardRef(function () {
      return FormArrayName;
    }) },
      FormArrayName = function (_super) {
    function FormArrayName(parent, validators, asyncValidators) {
      _super.call(this), this._parent = parent, this._validators = validators, this._asyncValidators = asyncValidators;
    }return __extends(FormArrayName, _super), FormArrayName.prototype.ngOnInit = function () {
      this.formDirective.addFormArray(this);
    }, FormArrayName.prototype.ngOnDestroy = function () {
      this.formDirective.removeFormArray(this);
    }, Object.defineProperty(FormArrayName.prototype, "control", { get: function get() {
        return this.formDirective.getFormArray(this);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormArrayName.prototype, "formDirective", { get: function get() {
        return this._parent.formDirective;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormArrayName.prototype, "path", { get: function get() {
        return controlPath(this.name, this._parent);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormArrayName.prototype, "validator", { get: function get() {
        return composeValidators(this._validators);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormArrayName.prototype, "asyncValidator", { get: function get() {
        return composeAsyncValidators(this._asyncValidators);
      }, enumerable: !0, configurable: !0 }), FormArrayName;
  }(ControlContainer);FormArrayName.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[formArrayName]", providers: [formArrayNameProvider] }] }], FormArrayName.ctorParameters = [{ type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS] }] }], FormArrayName.propDecorators = { name: [{ type: _angular_core.Input, args: ["formArrayName"] }] };var formControlBinding$1 = { provide: NgControl, useExisting: _angular_core.forwardRef(function () {
      return FormControlDirective;
    }) },
      FormControlDirective = function (_super) {
    function FormControlDirective(_validators, _asyncValidators, valueAccessors) {
      _super.call(this), this._validators = _validators, this._asyncValidators = _asyncValidators, this.update = new EventEmitter(), this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }return __extends(FormControlDirective, _super), FormControlDirective.prototype.ngOnChanges = function (changes) {
      this._isControlChanged(changes) && (setUpControl(this.form, this), this.form.updateValueAndValidity({ emitEvent: !1 })), isPropertyUpdated(changes, this.viewModel) && (this.form.updateValue(this.model), this.viewModel = this.model);
    }, Object.defineProperty(FormControlDirective.prototype, "path", { get: function get() {
        return [];
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormControlDirective.prototype, "validator", { get: function get() {
        return composeValidators(this._validators);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormControlDirective.prototype, "asyncValidator", { get: function get() {
        return composeAsyncValidators(this._asyncValidators);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormControlDirective.prototype, "control", { get: function get() {
        return this.form;
      }, enumerable: !0, configurable: !0 }), FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
      this.viewModel = newValue, ObservableWrapper.callEmit(this.update, newValue);
    }, FormControlDirective.prototype._isControlChanged = function (changes) {
      return StringMapWrapper.contains(changes, "form");
    }, FormControlDirective;
  }(NgControl);FormControlDirective.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[formControl]", providers: [formControlBinding$1], exportAs: "ngForm" }] }], FormControlDirective.ctorParameters = [{ type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR] }] }], FormControlDirective.propDecorators = { form: [{ type: _angular_core.Input, args: ["formControl"] }], model: [{ type: _angular_core.Input, args: ["ngModel"] }], update: [{ type: _angular_core.Output, args: ["ngModelChange"] }] };var controlNameBinding = { provide: NgControl, useExisting: _angular_core.forwardRef(function () {
      return FormControlName;
    }) },
      FormControlName = function (_super) {
    function FormControlName(_parent, _validators, _asyncValidators, valueAccessors) {
      _super.call(this), this._parent = _parent, this._validators = _validators, this._asyncValidators = _asyncValidators, this._added = !1, this.update = new EventEmitter(), this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }return __extends(FormControlName, _super), FormControlName.prototype.ngOnChanges = function (changes) {
      this._added || (this.formDirective.addControl(this), this._added = !0), isPropertyUpdated(changes, this.viewModel) && (this.viewModel = this.model, this.formDirective.updateModel(this, this.model));
    }, FormControlName.prototype.ngOnDestroy = function () {
      this.formDirective.removeControl(this);
    }, FormControlName.prototype.viewToModelUpdate = function (newValue) {
      this.viewModel = newValue, ObservableWrapper.callEmit(this.update, newValue);
    }, Object.defineProperty(FormControlName.prototype, "path", { get: function get() {
        return controlPath(this.name, this._parent);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormControlName.prototype, "formDirective", { get: function get() {
        return this._parent.formDirective;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormControlName.prototype, "validator", { get: function get() {
        return composeValidators(this._validators);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormControlName.prototype, "asyncValidator", { get: function get() {
        return composeAsyncValidators(this._asyncValidators);
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormControlName.prototype, "control", { get: function get() {
        return this.formDirective.getControl(this);
      }, enumerable: !0, configurable: !0 }), FormControlName;
  }(NgControl);FormControlName.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[formControlName]", providers: [controlNameBinding] }] }], FormControlName.ctorParameters = [{ type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR] }] }], FormControlName.propDecorators = { name: [{ type: _angular_core.Input, args: ["formControlName"] }], model: [{ type: _angular_core.Input, args: ["ngModel"] }], update: [{ type: _angular_core.Output, args: ["ngModelChange"] }] };var formDirectiveProvider$1 = { provide: ControlContainer, useExisting: _angular_core.forwardRef(function () {
      return FormGroupDirective;
    }) },
      FormGroupDirective = function (_super) {
    function FormGroupDirective(_validators, _asyncValidators) {
      _super.call(this), this._validators = _validators, this._asyncValidators = _asyncValidators, this._submitted = !1, this.directives = [], this.form = null, this.ngSubmit = new EventEmitter();
    }return __extends(FormGroupDirective, _super), FormGroupDirective.prototype.ngOnChanges = function (changes) {
      if (this._checkFormPresent(), StringMapWrapper.contains(changes, "form")) {
        var sync = composeValidators(this._validators);this.form.validator = Validators.compose([this.form.validator, sync]);var async = composeAsyncValidators(this._asyncValidators);this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]), this.form.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
      }this._updateDomValue();
    }, Object.defineProperty(FormGroupDirective.prototype, "submitted", { get: function get() {
        return this._submitted;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormGroupDirective.prototype, "formDirective", { get: function get() {
        return this;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormGroupDirective.prototype, "control", { get: function get() {
        return this.form;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(FormGroupDirective.prototype, "path", { get: function get() {
        return [];
      }, enumerable: !0, configurable: !0 }), FormGroupDirective.prototype.addControl = function (dir) {
      var ctrl = this.form.find(dir.path);setUpControl(ctrl, dir), ctrl.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(dir);
    }, FormGroupDirective.prototype.getControl = function (dir) {
      return this.form.find(dir.path);
    }, FormGroupDirective.prototype.removeControl = function (dir) {
      ListWrapper.remove(this.directives, dir);
    }, FormGroupDirective.prototype.addFormGroup = function (dir) {
      var ctrl = this.form.find(dir.path);setUpFormContainer(ctrl, dir), ctrl.updateValueAndValidity({ emitEvent: !1 });
    }, FormGroupDirective.prototype.removeFormGroup = function (dir) {}, FormGroupDirective.prototype.getFormGroup = function (dir) {
      return this.form.find(dir.path);
    }, FormGroupDirective.prototype.addFormArray = function (dir) {
      var ctrl = this.form.find(dir.path);setUpFormContainer(ctrl, dir), ctrl.updateValueAndValidity({ emitEvent: !1 });
    }, FormGroupDirective.prototype.removeFormArray = function (dir) {}, FormGroupDirective.prototype.getFormArray = function (dir) {
      return this.form.find(dir.path);
    }, FormGroupDirective.prototype.updateModel = function (dir, value) {
      var ctrl = this.form.find(dir.path);ctrl.updateValue(value);
    }, FormGroupDirective.prototype.onSubmit = function () {
      return this._submitted = !0, ObservableWrapper.callEmit(this.ngSubmit, null), !1;
    }, FormGroupDirective.prototype._updateDomValue = function () {
      var _this = this;this.directives.forEach(function (dir) {
        var ctrl = _this.form.find(dir.path);dir.valueAccessor.writeValue(ctrl.value);
      });
    }, FormGroupDirective.prototype._checkFormPresent = function () {
      if (isBlank(this.form)) throw new BaseException('formGroup expects a FormGroup instance. Please pass one in.\n           Example: <form [formGroup]="myFormGroup">\n      ');
    }, FormGroupDirective;
  }(ControlContainer);FormGroupDirective.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[formGroup]", providers: [formDirectiveProvider$1], host: { "(submit)": "onSubmit()" }, exportAs: "ngForm" }] }], FormGroupDirective.ctorParameters = [{ type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS] }] }], FormGroupDirective.propDecorators = { form: [{ type: _angular_core.Input, args: ["formGroup"] }], ngSubmit: [{ type: _angular_core.Output }] };var formGroupNameProvider = { provide: ControlContainer, useExisting: _angular_core.forwardRef(function () {
      return FormGroupName;
    }) },
      FormGroupName = function (_super) {
    function FormGroupName(parent, validators, asyncValidators) {
      _super.call(this), this._parent = parent, this._validators = validators, this._asyncValidators = asyncValidators;
    }return __extends(FormGroupName, _super), FormGroupName;
  }(AbstractFormGroupDirective);FormGroupName.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[formGroupName]", providers: [formGroupNameProvider] }] }], FormGroupName.ctorParameters = [{ type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS] }] }], FormGroupName.propDecorators = { name: [{ type: _angular_core.Input, args: ["formGroupName"] }] };var REQUIRED = Validators.required,
      REQUIRED_VALIDATOR = { provide: NG_VALIDATORS, useValue: REQUIRED, multi: !0 },
      RequiredValidator = function () {
    function RequiredValidator() {}return RequiredValidator;
  }();RequiredValidator.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[required][formControlName],[required][formControl],[required][ngModel]", providers: [REQUIRED_VALIDATOR] }] }];var MIN_LENGTH_VALIDATOR = { provide: NG_VALIDATORS, useExisting: _angular_core.forwardRef(function () {
      return MinLengthValidator;
    }), multi: !0 },
      MinLengthValidator = function () {
    function MinLengthValidator(minLength) {
      this._validator = Validators.minLength(NumberWrapper.parseInt(minLength, 10));
    }return MinLengthValidator.prototype.validate = function (c) {
      return this._validator(c);
    }, MinLengthValidator;
  }();MinLengthValidator.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", providers: [MIN_LENGTH_VALIDATOR] }] }], MinLengthValidator.ctorParameters = [{ type: void 0, decorators: [{ type: _angular_core.Attribute, args: ["minlength"] }] }];var MAX_LENGTH_VALIDATOR = { provide: NG_VALIDATORS, useExisting: _angular_core.forwardRef(function () {
      return MaxLengthValidator;
    }), multi: !0 },
      MaxLengthValidator = function () {
    function MaxLengthValidator(maxLength) {
      this._validator = Validators.maxLength(NumberWrapper.parseInt(maxLength, 10));
    }return MaxLengthValidator.prototype.validate = function (c) {
      return this._validator(c);
    }, MaxLengthValidator;
  }();MaxLengthValidator.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", providers: [MAX_LENGTH_VALIDATOR] }] }], MaxLengthValidator.ctorParameters = [{ type: void 0, decorators: [{ type: _angular_core.Attribute, args: ["maxlength"] }] }];var PATTERN_VALIDATOR = { provide: NG_VALIDATORS, useExisting: _angular_core.forwardRef(function () {
      return PatternValidator;
    }), multi: !0 },
      PatternValidator = function () {
    function PatternValidator(pattern) {
      this._validator = Validators.pattern(pattern);
    }return PatternValidator.prototype.validate = function (c) {
      return this._validator(c);
    }, PatternValidator;
  }();PatternValidator.decorators = [{ type: _angular_core.Directive, args: [{ selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", providers: [PATTERN_VALIDATOR] }] }], PatternValidator.ctorParameters = [{ type: void 0, decorators: [{ type: _angular_core.Attribute, args: ["pattern"] }] }];var NEW_FORM_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator],
      REACTIVE_FORM_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
      NewFormBuilder = function () {
    function NewFormBuilder() {}return NewFormBuilder.prototype.group = function (controlsConfig, extra) {
      void 0 === extra && (extra = null);var controls = this._reduceControls(controlsConfig),
          optionals = isPresent(extra) ? StringMapWrapper.get(extra, "optionals") : null,
          validator = isPresent(extra) ? StringMapWrapper.get(extra, "validator") : null,
          asyncValidator = isPresent(extra) ? StringMapWrapper.get(extra, "asyncValidator") : null;return new FormGroup(controls, optionals, validator, asyncValidator);
    }, NewFormBuilder.prototype.control = function (value, validator, asyncValidator) {
      return void 0 === validator && (validator = null), void 0 === asyncValidator && (asyncValidator = null), new FormControl(value, validator, asyncValidator);
    }, NewFormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
      var _this = this;void 0 === validator && (validator = null), void 0 === asyncValidator && (asyncValidator = null);var controls = controlsConfig.map(function (c) {
        return _this._createControl(c);
      });return new FormArray(controls, validator, asyncValidator);
    }, NewFormBuilder.prototype._reduceControls = function (controlsConfig) {
      var _this = this,
          controls = {};return StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
        controls[controlName] = _this._createControl(controlConfig);
      }), controls;
    }, NewFormBuilder.prototype._createControl = function (controlConfig) {
      if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) return controlConfig;if (isArray(controlConfig)) {
        var value = controlConfig[0],
            validator = controlConfig.length > 1 ? controlConfig[1] : null,
            asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;return this.control(value, validator, asyncValidator);
      }return this.control(controlConfig);
    }, NewFormBuilder;
  }();NewFormBuilder.decorators = [{ type: _angular_core.Injectable }];var FORM_PROVIDERS = [NewFormBuilder, NewRadioControlRegistry];exports.FORM_DIRECTIVES = NEW_FORM_DIRECTIVES, exports.REACTIVE_FORM_DIRECTIVES = REACTIVE_FORM_DIRECTIVES, exports.AbstractControlDirective = AbstractControlDirective, exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor, exports.ControlContainer = ControlContainer, exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR, exports.DefaultValueAccessor = DefaultValueAccessor, exports.NgControl = NgControl, exports.NgControlStatus = NgControlStatus, exports.NgForm = NgForm, exports.NgModel = NgModel, exports.NgModelGroup = NgModelGroup, exports.FormArrayName = FormArrayName, exports.FormControlDirective = FormControlDirective, exports.FormControlName = FormControlName, exports.FormGroupDirective = FormGroupDirective, exports.FormGroupName = FormGroupName, exports.NgSelectOption = NgSelectOption, exports.SelectControlValueAccessor = SelectControlValueAccessor, exports.MaxLengthValidator = MaxLengthValidator, exports.MinLengthValidator = MinLengthValidator, exports.PatternValidator = PatternValidator, exports.RequiredValidator = RequiredValidator, exports.FormBuilder = NewFormBuilder, exports.AbstractControl = AbstractControl, exports.FormArray = FormArray, exports.FormControl = FormControl, exports.FormGroup = FormGroup, exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS, exports.NG_VALIDATORS = NG_VALIDATORS, exports.Validators = Validators, exports.FORM_PROVIDERS = FORM_PROVIDERS, exports.disableDeprecatedForms = disableDeprecatedForms, exports.provideForms = provideForms;
});

//# sourceMappingURL=forms.umd.min-compiled.js.map