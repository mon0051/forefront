"use strict";
var serverSettings_1 = require("./serverSettings");
var express = require('express');
var nodeHttp = require('http');
function startExpress() {
    var clientFiles = express();
    // express       ===->
    clientFiles.use(express.static('/../client'));
    clientFiles.get('*', function (request, response) {
        response.sendFile(__dirname + '/../client/index.html');
    });
    // start serving static files    ===->
    nodeHttp.Server(clientFiles).listen(serverSettings_1.staticContentPort, function () {
    });
}
exports.startExpress = startExpress;
//# sourceMappingURL=express.js.map