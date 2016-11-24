"use strict";
let serverSettings = require("./serverSettings");
let express = require('express');
let nodeHttp = require('http');


function startExpress() {
    let clientFiles = express();

    clientFiles.use(express.static('client'));

    clientFiles.get('*', (request, response) => {
        response.sendFile('/client/' + serverSettings.index, { 'root': __dirname + '/../' });
    });

    nodeHttp.Server(clientFiles).listen(serverSettings.staticContentPort, () => { });
}

exports.startExpress = startExpress;
