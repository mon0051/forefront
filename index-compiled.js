'use strict';

// modules       ============================================================================
var express = require('express');
var redbird = require('redbird');
var nodeHttp = require('http');
var socketIo = require('socket.io');

// instances     ============================================================================
var app = express();
var http = nodeHttp.Server(app);
var io = socketIo(http, undefined);

// configuration ============================================================================

// redbird       ===->
var defaultServer = function defaultServer() {
    return { url: ['http://127.0.0.1:3000'] };
};

var proxy = redbird({
    port: 5000,
    resolvers: [defaultServer]
});

// express       ===->
app.use(express.static('client'));

app.get('*', function (request, response) {
    response.sendFile(__dirname + '/client/index.html');
});

// start http    ===->
http.listen(3000, function () {});

// socket.io     ===->
io.on('connection', function (socket) {
    console.log('io hit');
});

//# sourceMappingURL=index-compiled.js.map