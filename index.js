// modules       ============================================================================
let express = require('express');
let redbird = require('redbird');
let nodeHttp = require('http');
let socketIo = require('socket.io');

// instances     ============================================================================
let app = express();
let http = nodeHttp.Server(app);
let io = socketIo(http,undefined);

// configuration ============================================================================

// redbird       ===->
let defaultServer = function (host,url) {
    if(url.includes("api")){
        return "http://127.0.0.1:4000";
    }
    return {url: ['http://127.0.0.1:3000']}
};

let proxy = redbird({
    port: 5000,
    resolvers: [defaultServer]
});

// express       ===->
app.use(express.static('client'));

app.get('*',function (request, response) {
    response.sendFile(__dirname + '/client/index.html');
});

// start http    ===->
http.listen(3000, function () {
});

// socket.io     ===->
io.on('connection', function (socket) {
    console.log('io hit');
});
