"use strict";

// settings      ============================================================================
var dotNetCoreServerAddress = "http://127.0.0.1:4000";
var staticContentPort = 3000;
var staticContentServerAddress = "http://127.0.0.1:" + staticContentPort;
var reverseProxyPort = 5000;
var loggerSettings = { name: 'std', level: 'warn' };
var dotnetCoreRoot = 'api/src/ForeFrontCore';

// imports       ============================================================================
var express = require('express');
var redbird = require('redbird');
var nodeHttp = require('http');
require('bunyan');
var spawn = require('child_process').spawn;

// instances     ============================================================================
var clientFiles = express();

var dotnet = spawn('dotnet', ['run'], {
    cwd: dotnetCoreRoot,
    stdio: ['ignore', 'inherit', 'inherit']
});

// configuration ============================================================================

// reverse proxy resolver      ===->
var resolveUrl = function resolveUrl(host, url) {
    return url.startsWith("/api/") ? dotNetCoreServerAddress : { url: [staticContentServerAddress] };
};

// start redbird reverse proxy ===->
redbird({
    port: reverseProxyPort,
    bunyan: loggerSettings,
    resolvers: [resolveUrl]
});

// express       ===->
clientFiles.use(express.static('client'));
clientFiles.get('*', function (request, response) {
    response.sendFile(__dirname + '/client/index.html');
});

// start serving static files    ===->
nodeHttp.Server(clientFiles).listen(staticContentPort, function () {});

//# sourceMappingURL=index.js.map