// settings      ============================================================================
let dotNetCoreServerAddress = "http://127.0.0.1:4000";
let staticContentPort = 3000;
let staticContentServerAddress = "http://127.0.0.1:" + staticContentPort;
let reverseProxyPort = 5000;
let loggerSettings = {name: 'std', level: 'warn'};
let dotnetCoreRoot = 'api/src/ForeFrontCore';

// imports       ============================================================================
let express = require('express');
let redbird = require('redbird');
let nodeHttp = require('http');
require('bunyan');
let spawn = require('child_process').spawn;

// instances     ============================================================================
let clientFiles = express();

let dotnet = spawn('dotnet' ,['run'], {
    cwd: dotnetCoreRoot,
    stdio: ['ignore', 'inherit', 'inherit']
});

// configuration ============================================================================

// reverse proxy resolver      ===->
let resolveUrl = (host, url) => {
    return url.startsWith("/api/") ? dotNetCoreServerAddress : {url: [staticContentServerAddress]};
};

// start redbird reverse proxy ===->
redbird({
    port: reverseProxyPort,
    bunyan: loggerSettings,
    resolvers: [resolveUrl]
});

// express       ===->
clientFiles.use(express.static('client'));
clientFiles.get('*', (request, response) => {
    response.sendFile(__dirname + '/client/index.html' );
});

// start serving static files    ===->
nodeHttp.Server(clientFiles).listen(staticContentPort, ()=>{});
