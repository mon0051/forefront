'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _async = require('./testing/async');

Object.keys(_async).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _async[key];
    }
  });
});

var _component_fixture = require('./testing/component_fixture');

Object.keys(_component_fixture).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _component_fixture[key];
    }
  });
});

var _fake_async = require('./testing/fake_async');

Object.keys(_fake_async).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fake_async[key];
    }
  });
});

var _test_component_builder = require('./testing/test_component_builder');

Object.keys(_test_component_builder).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _test_component_builder[key];
    }
  });
});

var _test_injector = require('./testing/test_injector');

Object.keys(_test_injector).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _test_injector[key];
    }
  });
});

var _testing = require('./testing/testing');

Object.keys(_testing).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _testing[key];
    }
  });
});

//# sourceMappingURL=testing-compiled.js.map