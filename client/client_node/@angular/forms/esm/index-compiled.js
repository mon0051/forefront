'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forms = require('./src/forms');

Object.keys(_forms).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _forms[key];
    }
  });
});

//# sourceMappingURL=index-compiled.js.map