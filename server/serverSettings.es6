"use strict";

exports.dotNetCoreServerAddress = "http://127.0.0.1:4000";
exports.staticContentPort = 3000;
exports.staticContentServerAddress = "http://127.0.0.1:" + exports.staticContentPort;
exports.liveContentPort = 7000;
exports.liveContentServerAddress = "http://127.0.0.1:" + exports.liveContentPort;
exports.reverseProxyPort = process.env.PORT || 5000;
exports.loggerSettings = { name: 'std', level: 'warn' };
exports.dotnetCoreRoot = 'api/src/ForeFrontCoreWeb';
exports.index = process.env.INDEX_HTML || "index-dynamic.html";