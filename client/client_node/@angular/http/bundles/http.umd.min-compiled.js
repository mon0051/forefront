"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var __extends = undefined && undefined.__extends || function (d, b) {
  function __() {
    this.constructor = d;
  }for (var p in b) {
    b.hasOwnProperty(p) && (d[p] = b[p]);
  }d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
};!function (global, factory) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? factory(exports, require("@angular/core"), require("rxjs/Observable"), require("@angular/platform-browser")) : "function" == typeof define && define.amd ? define(["exports", "@angular/core", "rxjs/Observable", "@angular/platform-browser"], factory) : factory((global.ng = global.ng || {}, global.ng.http = global.ng.http || {}), global.ng.core, global.Rx, global.ng.platformBrowser);
}(undefined, function (exports, _angular_core, rxjs_Observable, _angular_platformBrowser) {
  "use strict";
  function isPresent(obj) {
    return void 0 !== obj && null !== obj;
  }function isBlank(obj) {
    return void 0 === obj || null === obj;
  }function isString(obj) {
    return "string" == typeof obj;
  }function isArray(obj) {
    return Array.isArray(obj);
  }function isJsObject(o) {
    return null !== o && ("function" == typeof o || "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)));
  }function getSymbolIterator() {
    if (isBlank(_symbolIterator)) if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) _symbolIterator = Symbol.iterator;else for (var keys = Object.getOwnPropertyNames(Map.prototype), i = 0; i < keys.length; ++i) {
      var key = keys[i];"entries" !== key && "size" !== key && Map.prototype[key] === Map.prototype.entries && (_symbolIterator = key);
    }return _symbolIterator;
  }function _getJsonpConnections() {
    return null === _jsonpConnections && (_jsonpConnections = global$1[JSONP_HOME] = {}), _jsonpConnections;
  }function _flattenArray(source, target) {
    if (isPresent(source)) for (var i = 0; i < source.length; i++) {
      var item = source[i];isArray(item) ? _flattenArray(item, target) : target.push(item);
    }return target;
  }function isListLikeIterable(obj) {
    return !!isJsObject(obj) && (isArray(obj) || !(obj instanceof Map$1) && getSymbolIterator() in obj);
  }function iterateListLike(obj, fn) {
    if (isArray(obj)) for (var i = 0; i < obj.length; i++) {
      fn(obj[i]);
    } else for (var item, iterator = obj[getSymbolIterator()](); !(item = iterator.next()).done;) {
      fn(item.value);
    }
  }function makeTypeError(message) {
    return new TypeError(message);
  }function normalizeMethodName(method) {
    if (isString(method)) {
      var originalMethod = method;if (method = method.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      }), method = exports.RequestMethod[method], "number" != typeof method) throw makeTypeError('Invalid request method. The method "' + originalMethod + '" is not supported.');
    }return method;
  }function getResponseURL(xhr) {
    return "responseURL" in xhr ? xhr.responseURL : /^X-Request-URL:/m.test(xhr.getAllResponseHeaders()) ? xhr.getResponseHeader("X-Request-URL") : void 0;
  }function paramParser(rawParams) {
    void 0 === rawParams && (rawParams = "");var map = new Map$1();if (rawParams.length > 0) {
      var params = rawParams.split("&");params.forEach(function (param) {
        var split = param.split("=", 2),
            key = split[0],
            val = split[1],
            list = isPresent(map.get(key)) ? map.get(key) : [];list.push(val), map.set(key, list);
      });
    }return map;
  }function standardEncoding(v) {
    return encodeURIComponent(v).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, ";").replace(/%3F/gi, "?").replace(/%2F/gi, "/");
  }function httpRequest(backend, request) {
    return backend.createConnection(request).response;
  }function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;return isPresent(providedOpts) ? newOptions.merge(new RequestOptions({ method: providedOpts.method || method, url: providedOpts.url || url, search: providedOpts.search, headers: providedOpts.headers, body: providedOpts.body, withCredentials: providedOpts.withCredentials })) : isPresent(method) ? newOptions.merge(new RequestOptions({ method: method, url: url })) : newOptions.merge(new RequestOptions({ url: url }));
  }function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
  }function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
  }var globalScope;globalScope = "undefined" == typeof window ? "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : global : window;var global$1 = globalScope;global$1.assert = function (condition) {};var StringWrapper = function () {
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
      Json = function () {
    function Json() {}return Json.parse = function (s) {
      return global$1.JSON.parse(s);
    }, Json.stringify = function (data) {
      return global$1.JSON.stringify(data, null, 2);
    }, Json;
  }(),
      _symbolIterator = null,
      _nextRequestId = 0,
      JSONP_HOME = "__ng_jsonp__",
      _jsonpConnections = null,
      BrowserJsonp = function () {
    function BrowserJsonp() {}return BrowserJsonp.prototype.build = function (url) {
      var node = document.createElement("script");return node.src = url, node;
    }, BrowserJsonp.prototype.nextRequestID = function () {
      return "__req" + _nextRequestId++;
    }, BrowserJsonp.prototype.requestCallback = function (id) {
      return JSONP_HOME + "." + id + ".finished";
    }, BrowserJsonp.prototype.exposeConnection = function (id, connection) {
      var connections = _getJsonpConnections();connections[id] = connection;
    }, BrowserJsonp.prototype.removeConnection = function (id) {
      var connections = _getJsonpConnections();connections[id] = null;
    }, BrowserJsonp.prototype.send = function (node) {
      document.body.appendChild(node);
    }, BrowserJsonp.prototype.cleanup = function (node) {
      node.parentNode && node.parentNode.removeChild(node);
    }, BrowserJsonp;
  }();BrowserJsonp.decorators = [{ type: _angular_core.Injectable }];var BrowserXhr = function () {
    function BrowserXhr() {}return BrowserXhr.prototype.build = function () {
      return new XMLHttpRequest();
    }, BrowserXhr;
  }();BrowserXhr.decorators = [{ type: _angular_core.Injectable }], BrowserXhr.ctorParameters = [], exports.RequestMethod, function (RequestMethod) {
    RequestMethod[RequestMethod.Get = 0] = "Get", RequestMethod[RequestMethod.Post = 1] = "Post", RequestMethod[RequestMethod.Put = 2] = "Put", RequestMethod[RequestMethod.Delete = 3] = "Delete", RequestMethod[RequestMethod.Options = 4] = "Options", RequestMethod[RequestMethod.Head = 5] = "Head", RequestMethod[RequestMethod.Patch = 6] = "Patch";
  }(exports.RequestMethod || (exports.RequestMethod = {})), exports.ReadyState, function (ReadyState) {
    ReadyState[ReadyState.Unsent = 0] = "Unsent", ReadyState[ReadyState.Open = 1] = "Open", ReadyState[ReadyState.HeadersReceived = 2] = "HeadersReceived", ReadyState[ReadyState.Loading = 3] = "Loading", ReadyState[ReadyState.Done = 4] = "Done", ReadyState[ReadyState.Cancelled = 5] = "Cancelled";
  }(exports.ReadyState || (exports.ReadyState = {})), exports.ResponseType, function (ResponseType) {
    ResponseType[ResponseType.Basic = 0] = "Basic", ResponseType[ResponseType.Cors = 1] = "Cors", ResponseType[ResponseType.Default = 2] = "Default", ResponseType[ResponseType.Error = 3] = "Error", ResponseType[ResponseType.Opaque = 4] = "Opaque";
  }(exports.ResponseType || (exports.ResponseType = {}));var ContentType;!function (ContentType) {
    ContentType[ContentType.NONE = 0] = "NONE", ContentType[ContentType.JSON = 1] = "JSON", ContentType[ContentType.FORM = 2] = "FORM", ContentType[ContentType.FORM_DATA = 3] = "FORM_DATA", ContentType[ContentType.TEXT = 4] = "TEXT", ContentType[ContentType.BLOB = 5] = "BLOB", ContentType[ContentType.ARRAY_BUFFER = 6] = "ARRAY_BUFFER";
  }(ContentType || (ContentType = {}));var Map$1 = global$1.Map,
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
      Headers = function () {
    function Headers(headers) {
      var _this = this;return headers instanceof Headers ? void (this._headersMap = headers._headersMap) : (this._headersMap = new Map$1(), void (isBlank(headers) || StringMapWrapper.forEach(headers, function (v, k) {
        _this._headersMap.set(k, isListLikeIterable(v) ? v : [v]);
      })));
    }return Headers.fromResponseHeaderString = function (headersString) {
      return headersString.trim().split("\n").map(function (val) {
        return val.split(":");
      }).map(function (_a) {
        var key = _a[0],
            parts = _a.slice(1);return [key.trim(), parts.join(":").trim()];
      }).reduce(function (headers, _a) {
        var key = _a[0],
            value = _a[1];return !headers.set(key, value) && headers;
      }, new Headers());
    }, Headers.prototype.append = function (name, value) {
      var mapName = this._headersMap.get(name),
          list = isListLikeIterable(mapName) ? mapName : [];list.push(value), this._headersMap.set(name, list);
    }, Headers.prototype.delete = function (name) {
      this._headersMap.delete(name);
    }, Headers.prototype.forEach = function (fn) {
      this._headersMap.forEach(fn);
    }, Headers.prototype.get = function (header) {
      return ListWrapper.first(this._headersMap.get(header));
    }, Headers.prototype.has = function (header) {
      return this._headersMap.has(header);
    }, Headers.prototype.keys = function () {
      return MapWrapper.keys(this._headersMap);
    }, Headers.prototype.set = function (header, value) {
      var list = [];if (isListLikeIterable(value)) {
        var pushValue = value.join(",");list.push(pushValue);
      } else list.push(value);this._headersMap.set(header, list);
    }, Headers.prototype.values = function () {
      return MapWrapper.values(this._headersMap);
    }, Headers.prototype.toJSON = function () {
      var serializableHeaders = {};return this._headersMap.forEach(function (values, name) {
        var list = [];iterateListLike(values, function (val) {
          return list = ListWrapper.concat(list, val.split(","));
        }), serializableHeaders[name] = list;
      }), serializableHeaders;
    }, Headers.prototype.getAll = function (header) {
      var headers = this._headersMap.get(header);return isListLikeIterable(headers) ? headers : [];
    }, Headers.prototype.entries = function () {
      throw new BaseException('"entries" method is not implemented on Headers class');
    }, Headers;
  }(),
      ResponseOptions = function () {
    function ResponseOptions(_a) {
      var _b = void 0 === _a ? {} : _a,
          body = _b.body,
          status = _b.status,
          headers = _b.headers,
          statusText = _b.statusText,
          type = _b.type,
          url = _b.url;this.body = isPresent(body) ? body : null, this.status = isPresent(status) ? status : null, this.headers = isPresent(headers) ? headers : null, this.statusText = isPresent(statusText) ? statusText : null, this.type = isPresent(type) ? type : null, this.url = isPresent(url) ? url : null;
    }return ResponseOptions.prototype.merge = function (options) {
      return new ResponseOptions({ body: isPresent(options) && isPresent(options.body) ? options.body : this.body, status: isPresent(options) && isPresent(options.status) ? options.status : this.status, headers: isPresent(options) && isPresent(options.headers) ? options.headers : this.headers, statusText: isPresent(options) && isPresent(options.statusText) ? options.statusText : this.statusText, type: isPresent(options) && isPresent(options.type) ? options.type : this.type, url: isPresent(options) && isPresent(options.url) ? options.url : this.url });
    }, ResponseOptions;
  }(),
      BaseResponseOptions = function (_super) {
    function BaseResponseOptions() {
      _super.call(this, { status: 200, statusText: "Ok", type: exports.ResponseType.Default, headers: new Headers() });
    }return __extends(BaseResponseOptions, _super), BaseResponseOptions;
  }(ResponseOptions);BaseResponseOptions.decorators = [{ type: _angular_core.Injectable }], BaseResponseOptions.ctorParameters = [];var ConnectionBackend = function () {
    function ConnectionBackend() {}return ConnectionBackend;
  }(),
      Connection = function () {
    function Connection() {}return Connection;
  }(),
      XSRFStrategy = function () {
    function XSRFStrategy() {}return XSRFStrategy;
  }(),
      isSuccess = function isSuccess(status) {
    return status >= 200 && status < 300;
  },
      Response = function () {
    function Response(responseOptions) {
      this._body = responseOptions.body, this.status = responseOptions.status, this.ok = this.status >= 200 && this.status <= 299, this.statusText = responseOptions.statusText, this.headers = responseOptions.headers, this.type = responseOptions.type, this.url = responseOptions.url;
    }return Response.prototype.blob = function () {
      throw new BaseException('"blob()" method not implemented on Response superclass');
    }, Response.prototype.json = function () {
      var jsonResponse;return isJsObject(this._body) ? jsonResponse = this._body : isString(this._body) && (jsonResponse = Json.parse(this._body)), jsonResponse;
    }, Response.prototype.text = function () {
      return this._body.toString();
    }, Response.prototype.arrayBuffer = function () {
      throw new BaseException('"arrayBuffer()" method not implemented on Response superclass');
    }, Response.prototype.toString = function () {
      return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    }, Response;
  }(),
      JSONP_ERR_NO_CALLBACK = "JSONP injected script did not invoke callback.",
      JSONP_ERR_WRONG_METHOD = "JSONP requests must use GET request method.",
      JSONPConnection = function () {
    function JSONPConnection() {}return JSONPConnection;
  }(),
      JSONPConnection_ = function (_super) {
    function JSONPConnection_(req, _dom, baseResponseOptions) {
      var _this = this;if (_super.call(this), this._dom = _dom, this.baseResponseOptions = baseResponseOptions, this._finished = !1, req.method !== exports.RequestMethod.Get) throw makeTypeError(JSONP_ERR_WRONG_METHOD);this.request = req, this.response = new rxjs_Observable.Observable(function (responseObserver) {
        _this.readyState = exports.ReadyState.Loading;var id = _this._id = _dom.nextRequestID();_dom.exposeConnection(id, _this);var callback = _dom.requestCallback(_this._id),
            url = req.url;url.indexOf("=JSONP_CALLBACK&") > -1 ? url = StringWrapper.replace(url, "=JSONP_CALLBACK&", "=" + callback + "&") : url.lastIndexOf("=JSONP_CALLBACK") === url.length - "=JSONP_CALLBACK".length && (url = url.substring(0, url.length - "=JSONP_CALLBACK".length) + ("=" + callback));var script = _this._script = _dom.build(url),
            onLoad = function onLoad(event) {
          if (_this.readyState !== exports.ReadyState.Cancelled) {
            if (_this.readyState = exports.ReadyState.Done, _dom.cleanup(script), !_this._finished) {
              var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: exports.ResponseType.Error, url: url });return isPresent(baseResponseOptions) && (responseOptions_1 = baseResponseOptions.merge(responseOptions_1)), void responseObserver.error(new Response(responseOptions_1));
            }var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });isPresent(_this.baseResponseOptions) && (responseOptions = _this.baseResponseOptions.merge(responseOptions)), responseObserver.next(new Response(responseOptions)), responseObserver.complete();
          }
        },
            onError = function onError(error) {
          if (_this.readyState !== exports.ReadyState.Cancelled) {
            _this.readyState = exports.ReadyState.Done, _dom.cleanup(script);var responseOptions = new ResponseOptions({ body: error.message, type: exports.ResponseType.Error });isPresent(baseResponseOptions) && (responseOptions = baseResponseOptions.merge(responseOptions)), responseObserver.error(new Response(responseOptions));
          }
        };return script.addEventListener("load", onLoad), script.addEventListener("error", onError), _dom.send(script), function () {
          _this.readyState = exports.ReadyState.Cancelled, script.removeEventListener("load", onLoad), script.removeEventListener("error", onError), isPresent(script) && _this._dom.cleanup(script);
        };
      });
    }return __extends(JSONPConnection_, _super), JSONPConnection_.prototype.finished = function (data) {
      this._finished = !0, this._dom.removeConnection(this._id), this.readyState !== exports.ReadyState.Cancelled && (this._responseData = data);
    }, JSONPConnection_;
  }(JSONPConnection),
      JSONPBackend = function (_super) {
    function JSONPBackend() {
      _super.apply(this, arguments);
    }return __extends(JSONPBackend, _super), JSONPBackend;
  }(ConnectionBackend),
      JSONPBackend_ = function (_super) {
    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
      _super.call(this), this._browserJSONP = _browserJSONP, this._baseResponseOptions = _baseResponseOptions;
    }return __extends(JSONPBackend_, _super), JSONPBackend_.prototype.createConnection = function (request) {
      return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
    }, JSONPBackend_;
  }(JSONPBackend);JSONPBackend_.decorators = [{ type: _angular_core.Injectable }], JSONPBackend_.ctorParameters = [{ type: BrowserJsonp }, { type: ResponseOptions }];var XSSI_PREFIX = /^\)\]\}',?\n/,
      XHRConnection = function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
      var _this = this;this.request = req, this.response = new rxjs_Observable.Observable(function (responseObserver) {
        var _xhr = browserXHR.build();_xhr.open(exports.RequestMethod[req.method].toUpperCase(), req.url), isPresent(req.withCredentials) && (_xhr.withCredentials = req.withCredentials);var onLoad = function onLoad() {
          var body = isPresent(_xhr.response) ? _xhr.response : _xhr.responseText;isString(body) && (body = body.replace(XSSI_PREFIX, ""));var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders()),
              url = getResponseURL(_xhr),
              status = 1223 === _xhr.status ? 204 : _xhr.status;0 === status && (status = body ? 200 : 0);var statusText = _xhr.statusText || "OK",
              responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });isPresent(baseResponseOptions) && (responseOptions = baseResponseOptions.merge(responseOptions));var response = new Response(responseOptions);return response.ok = isSuccess(status), response.ok ? (responseObserver.next(response), void responseObserver.complete()) : void responseObserver.error(response);
        },
            onError = function onError(err) {
          var responseOptions = new ResponseOptions({ body: err, type: exports.ResponseType.Error, status: _xhr.status, statusText: _xhr.statusText });isPresent(baseResponseOptions) && (responseOptions = baseResponseOptions.merge(responseOptions)), responseObserver.error(new Response(responseOptions));
        };return _this.setDetectedContentType(req, _xhr), isPresent(req.headers) && req.headers.forEach(function (values, name) {
          return _xhr.setRequestHeader(name, values.join(","));
        }), _xhr.addEventListener("load", onLoad), _xhr.addEventListener("error", onError), _xhr.send(_this.request.getBody()), function () {
          _xhr.removeEventListener("load", onLoad), _xhr.removeEventListener("error", onError), _xhr.abort();
        };
      });
    }return XHRConnection.prototype.setDetectedContentType = function (req, _xhr) {
      if (!isPresent(req.headers) || !isPresent(req.headers.get("Content-Type"))) switch (req.contentType) {case ContentType.NONE:
          break;case ContentType.JSON:
          _xhr.setRequestHeader("Content-Type", "application/json");break;case ContentType.FORM:
          _xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");break;case ContentType.TEXT:
          _xhr.setRequestHeader("Content-Type", "text/plain");break;case ContentType.BLOB:
          var blob = req.blob();blob.type && _xhr.setRequestHeader("Content-Type", blob.type);}
    }, XHRConnection;
  }(),
      CookieXSRFStrategy = function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
      void 0 === _cookieName && (_cookieName = "XSRF-TOKEN"), void 0 === _headerName && (_headerName = "X-XSRF-TOKEN"), this._cookieName = _cookieName, this._headerName = _headerName;
    }return CookieXSRFStrategy.prototype.configureRequest = function (req) {
      var xsrfToken = _angular_platformBrowser.__platform_browser_private__.getDOM().getCookie(this._cookieName);xsrfToken && !req.headers.has(this._headerName) && req.headers.set(this._headerName, xsrfToken);
    }, CookieXSRFStrategy;
  }(),
      XHRBackend = function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
      this._browserXHR = _browserXHR, this._baseResponseOptions = _baseResponseOptions, this._xsrfStrategy = _xsrfStrategy;
    }return XHRBackend.prototype.createConnection = function (request) {
      return this._xsrfStrategy.configureRequest(request), new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    }, XHRBackend;
  }();XHRBackend.decorators = [{ type: _angular_core.Injectable }], XHRBackend.ctorParameters = [{ type: BrowserXhr }, { type: ResponseOptions }, { type: XSRFStrategy }];var QueryEncoder = function () {
    function QueryEncoder() {}return QueryEncoder.prototype.encodeKey = function (k) {
      return standardEncoding(k);
    }, QueryEncoder.prototype.encodeValue = function (v) {
      return standardEncoding(v);
    }, QueryEncoder;
  }(),
      URLSearchParams = function () {
    function URLSearchParams(rawParams, queryEncoder) {
      void 0 === rawParams && (rawParams = ""), void 0 === queryEncoder && (queryEncoder = new QueryEncoder()), this.rawParams = rawParams, this.queryEncoder = queryEncoder, this.paramsMap = paramParser(rawParams);
    }return URLSearchParams.prototype.clone = function () {
      var clone = new URLSearchParams();return clone.appendAll(this), clone;
    }, URLSearchParams.prototype.has = function (param) {
      return this.paramsMap.has(param);
    }, URLSearchParams.prototype.get = function (param) {
      var storedParam = this.paramsMap.get(param);return isListLikeIterable(storedParam) ? ListWrapper.first(storedParam) : null;
    }, URLSearchParams.prototype.getAll = function (param) {
      var mapParam = this.paramsMap.get(param);return isPresent(mapParam) ? mapParam : [];
    }, URLSearchParams.prototype.set = function (param, val) {
      var mapParam = this.paramsMap.get(param),
          list = isPresent(mapParam) ? mapParam : [];ListWrapper.clear(list), list.push(val), this.paramsMap.set(param, list);
    }, URLSearchParams.prototype.setAll = function (searchParams) {
      var _this = this;searchParams.paramsMap.forEach(function (value, param) {
        var mapParam = _this.paramsMap.get(param),
            list = isPresent(mapParam) ? mapParam : [];ListWrapper.clear(list), list.push(value[0]), _this.paramsMap.set(param, list);
      });
    }, URLSearchParams.prototype.append = function (param, val) {
      var mapParam = this.paramsMap.get(param),
          list = isPresent(mapParam) ? mapParam : [];list.push(val), this.paramsMap.set(param, list);
    }, URLSearchParams.prototype.appendAll = function (searchParams) {
      var _this = this;searchParams.paramsMap.forEach(function (value, param) {
        for (var mapParam = _this.paramsMap.get(param), list = isPresent(mapParam) ? mapParam : [], i = 0; i < value.length; ++i) {
          list.push(value[i]);
        }_this.paramsMap.set(param, list);
      });
    }, URLSearchParams.prototype.replaceAll = function (searchParams) {
      var _this = this;searchParams.paramsMap.forEach(function (value, param) {
        var mapParam = _this.paramsMap.get(param),
            list = isPresent(mapParam) ? mapParam : [];ListWrapper.clear(list);for (var i = 0; i < value.length; ++i) {
          list.push(value[i]);
        }_this.paramsMap.set(param, list);
      });
    }, URLSearchParams.prototype.toString = function () {
      var _this = this,
          paramsList = [];return this.paramsMap.forEach(function (values, k) {
        values.forEach(function (v) {
          return paramsList.push(_this.queryEncoder.encodeKey(k) + "=" + _this.queryEncoder.encodeValue(v));
        });
      }), paramsList.join("&");
    }, URLSearchParams.prototype.delete = function (param) {
      this.paramsMap.delete(param);
    }, URLSearchParams;
  }(),
      RequestOptions = function () {
    function RequestOptions(_a) {
      var _b = void 0 === _a ? {} : _a,
          method = _b.method,
          headers = _b.headers,
          body = _b.body,
          url = _b.url,
          search = _b.search,
          withCredentials = _b.withCredentials;this.method = isPresent(method) ? normalizeMethodName(method) : null, this.headers = isPresent(headers) ? headers : null, this.body = isPresent(body) ? body : null, this.url = isPresent(url) ? url : null, this.search = isPresent(search) ? isString(search) ? new URLSearchParams(search) : search : null, this.withCredentials = isPresent(withCredentials) ? withCredentials : null;
    }return RequestOptions.prototype.merge = function (options) {
      return new RequestOptions({ method: isPresent(options) && isPresent(options.method) ? options.method : this.method, headers: isPresent(options) && isPresent(options.headers) ? options.headers : this.headers, body: isPresent(options) && isPresent(options.body) ? options.body : this.body, url: isPresent(options) && isPresent(options.url) ? options.url : this.url, search: isPresent(options) && isPresent(options.search) ? isString(options.search) ? new URLSearchParams(options.search) : options.search.clone() : this.search, withCredentials: isPresent(options) && isPresent(options.withCredentials) ? options.withCredentials : this.withCredentials });
    }, RequestOptions;
  }(),
      BaseRequestOptions = function (_super) {
    function BaseRequestOptions() {
      _super.call(this, { method: exports.RequestMethod.Get, headers: new Headers() });
    }return __extends(BaseRequestOptions, _super), BaseRequestOptions;
  }(RequestOptions);BaseRequestOptions.decorators = [{ type: _angular_core.Injectable }], BaseRequestOptions.ctorParameters = [];var Request = function () {
    function Request(requestOptions) {
      var url = requestOptions.url;if (this.url = requestOptions.url, isPresent(requestOptions.search)) {
        var search = requestOptions.search.toString();if (search.length > 0) {
          var prefix = "?";StringWrapper.contains(this.url, "?") && (prefix = "&" == this.url[this.url.length - 1] ? "" : "&"), this.url = url + prefix + search;
        }
      }this._body = requestOptions.body, this.contentType = this.detectContentType(), this.method = normalizeMethodName(requestOptions.method), this.headers = new Headers(requestOptions.headers), this.withCredentials = requestOptions.withCredentials;
    }return Request.prototype.text = function () {
      return isPresent(this._body) ? this._body.toString() : "";
    }, Request.prototype.json = function () {
      return isPresent(this._body) ? JSON.stringify(this._body) : "";
    }, Request.prototype.arrayBuffer = function () {
      if (this._body instanceof ArrayBuffer) return this._body;throw "The request body isn't an array buffer";
    }, Request.prototype.blob = function () {
      if (this._body instanceof Blob) return this._body;if (this._body instanceof ArrayBuffer) return new Blob([this._body]);throw "The request body isn't either a blob or an array buffer";
    }, Request.prototype.detectContentType = function () {
      return null == this._body ? ContentType.NONE : this._body instanceof URLSearchParams ? ContentType.FORM : this._body instanceof FormData ? ContentType.FORM_DATA : this._body instanceof Blob ? ContentType.BLOB : this._body instanceof ArrayBuffer ? ContentType.ARRAY_BUFFER : this._body && "object" == _typeof(this._body) ? ContentType.JSON : ContentType.TEXT;
    }, Request.prototype.getBody = function () {
      switch (this.contentType) {case ContentType.JSON:
          return this.json();case ContentType.FORM:
          return this.text();case ContentType.FORM_DATA:
          return this._body;case ContentType.TEXT:
          return this.text();case ContentType.BLOB:
          return this.blob();case ContentType.ARRAY_BUFFER:
          return this.arrayBuffer();default:
          return null;}
    }, Request;
  }(),
      noop$1 = function noop$1() {},
      w = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : noop$1,
      FormData = w.FormData || noop$1,
      Blob = w.Blob || noop$1,
      ArrayBuffer = w.ArrayBuffer || noop$1,
      Http = function () {
    function Http(_backend, _defaultOptions) {
      this._backend = _backend, this._defaultOptions = _defaultOptions;
    }return Http.prototype.request = function (url, options) {
      var responseObservable;if (isString(url)) responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Get, url)));else {
        if (!(url instanceof Request)) throw makeTypeError("First argument must be a url string or Request instance.");
        responseObservable = httpRequest(this._backend, url);
      }return responseObservable;
    }, Http.prototype.get = function (url, options) {
      return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Get, url)));
    }, Http.prototype.post = function (url, body, options) {
      return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, exports.RequestMethod.Post, url)));
    }, Http.prototype.put = function (url, body, options) {
      return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, exports.RequestMethod.Put, url)));
    }, Http.prototype.delete = function (url, options) {
      return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Delete, url)));
    }, Http.prototype.patch = function (url, body, options) {
      return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, exports.RequestMethod.Patch, url)));
    }, Http.prototype.head = function (url, options) {
      return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Head, url)));
    }, Http;
  }();Http.decorators = [{ type: _angular_core.Injectable }], Http.ctorParameters = [{ type: ConnectionBackend }, { type: RequestOptions }];var Jsonp = function (_super) {
    function Jsonp(backend, defaultOptions) {
      _super.call(this, backend, defaultOptions);
    }return __extends(Jsonp, _super), Jsonp.prototype.request = function (url, options) {
      var responseObservable;if (isString(url) && (url = new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Get, url))), !(url instanceof Request)) throw makeTypeError("First argument must be a url string or Request instance.");return url.method !== exports.RequestMethod.Get && makeTypeError("JSONP requests must use GET request method."), responseObservable = httpRequest(this._backend, url);
    }, Jsonp;
  }(Http);Jsonp.decorators = [{ type: _angular_core.Injectable }], Jsonp.ctorParameters = [{ type: ConnectionBackend }, { type: RequestOptions }];var HTTP_PROVIDERS = [{ provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] }, BrowserXhr, { provide: RequestOptions, useClass: BaseRequestOptions }, { provide: ResponseOptions, useClass: BaseResponseOptions }, XHRBackend, { provide: XSRFStrategy, useValue: new CookieXSRFStrategy() }],
      HTTP_BINDINGS = HTTP_PROVIDERS,
      JSONP_PROVIDERS = [{ provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] }, BrowserJsonp, { provide: RequestOptions, useClass: BaseRequestOptions }, { provide: ResponseOptions, useClass: BaseResponseOptions }, { provide: JSONPBackend, useClass: JSONPBackend_ }],
      JSON_BINDINGS = JSONP_PROVIDERS;exports.HTTP_PROVIDERS = HTTP_PROVIDERS, exports.httpFactory = httpFactory, exports.HTTP_BINDINGS = HTTP_BINDINGS, exports.JSONP_PROVIDERS = JSONP_PROVIDERS, exports.JSON_BINDINGS = JSON_BINDINGS, exports.BrowserXhr = BrowserXhr, exports.JSONPBackend = JSONPBackend, exports.JSONPConnection = JSONPConnection, exports.CookieXSRFStrategy = CookieXSRFStrategy, exports.XHRBackend = XHRBackend, exports.XHRConnection = XHRConnection, exports.BaseRequestOptions = BaseRequestOptions, exports.RequestOptions = RequestOptions, exports.BaseResponseOptions = BaseResponseOptions, exports.ResponseOptions = ResponseOptions, exports.Headers = Headers, exports.Http = Http, exports.Jsonp = Jsonp, exports.Connection = Connection, exports.ConnectionBackend = ConnectionBackend, exports.XSRFStrategy = XSRFStrategy, exports.Request = Request, exports.Response = Response, exports.QueryEncoder = QueryEncoder, exports.URLSearchParams = URLSearchParams;
});

//# sourceMappingURL=http.umd.min-compiled.js.map