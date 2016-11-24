"use strict";
require('bunyan');

let serverSettings = require("./serverSettings");
let redbird = require('redbird');

function proxyResolver(host) {
    if (host && typeof host === 'string' && host.includes('.live.')) {
        return { url: [serverSettings.liveContentServerAddress] };
    }

    return { url: [serverSettings.staticContentServerAddress] };
}

exports.proxyResolver = proxyResolver;

function startRedbird() {
    return redbird({
        port: serverSettings.reverseProxyPort,
        bunyan: serverSettings.loggerSettings,
        resolvers: [proxyResolver]
    });
}

exports.startRedbird = startRedbird;