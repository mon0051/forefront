"use strict";
require('bunyan');
var serverSettings_1 = require("./serverSettings");
var redbird = require('redbird');
function proxyResolver(host, url) {
    if (host && typeof host === 'string' && host.includes('.live.')) {
        return url.startsWith("/api/") ? serverSettings_1.dotNetCoreServerAddress : { url: [serverSettings_1.liveContentServerAddress] };
    }
    return url.startsWith("/api/") ? serverSettings_1.dotNetCoreServerAddress : { url: [serverSettings_1.staticContentServerAddress] };
}
exports.proxyResolver = proxyResolver;
function startRedbird() {
    return redbird({
        port: serverSettings_1.reverseProxyPort,
        bunyan: serverSettings_1.loggerSettings,
        resolvers: [proxyResolver]
    });
}
exports.startRedbird = startRedbird;
//# sourceMappingURL=reverseProxy.js.map