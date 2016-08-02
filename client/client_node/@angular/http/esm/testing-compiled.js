'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mock_backend = require('./testing/mock_backend');

Object.keys(_mock_backend).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mock_backend[key];
    }
  });
});

//# sourceMappingURL=testing-compiled.js.map