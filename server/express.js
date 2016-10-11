"use strict";
var serverSettings_1 = require("./serverSettings");
var express = require('express');
var nodeHttp = require('http');
function startExpress() {
    var clientFiles = express();
    // express       ===->
    clientFiles.use(express.static('client')); // relative to index.js, not this file
    clientFiles.get('*', function (request, response) {
        response.sendFile('/client/index-dynamic.html', { 'root': __dirname + '/../' });
    });
    // start serving static files    ===->
    nodeHttp.Server(clientFiles).listen(serverSettings_1.staticContentPort, function () {
    });
}
exports.startExpress = startExpress;
//# sourceMappingURL=express.js.map