var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('client'));

app.get('/',function (request, response) {
    console.log(request);
    response.sendFile(__dirname + '/index.html');
});

io.on('connection',function (socket) {
    console.log('io hit')
});

http.listen(3000, function () {
    "use strict";
    console.log('listening to you sleep on *:3000')
});