'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('./http');

Object.keys(_http).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _http[key];
    }
  });
});

//# sourceMappingURL=index-compiled.js.map