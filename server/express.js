"use strict";

var serverSettings = require("./serverSettings");
var express = require('express');
var nodeHttp = require('http');

function startExpress() {
    var clientFiles = express();

    clientFiles.use(express.static('client'));

    clientFiles.get('*', function (request, response) {
        response.sendFile('/client/' + serverSettings.index, { 'root': __dirname + '/../' });
    });

    nodeHttp.Server(clientFiles).listen(serverSettings.staticContentPort, function () {});
}

exports.startExpress = startExpress;

//# sourceMappingURL=express.js.map