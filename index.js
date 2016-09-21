// modules       ============================================================================
let express = require('express');
let redbird = require('redbird');
let nodeHttp = require('http');
let socketIo = require('socket.io');
let bunyan = require('bunyan');
let spawn = require('child_process').spawn;

// instances     ============================================================================
let app = express();
let liveApp = express();
let http = nodeHttp.Server(app);
let liveHttp = nodeHttp.Server(liveApp);
let io = socketIo(http,undefined);
let dotnet = spawn('dotnet' ,['run'], {
    cwd:'api/src/ForeFrontCore',
    stdio:['ignore','inherit','inherit']
});

// configuration ============================================================================

// redbird       ===->
let defaultServer = function (host,url) {
    if(url.startsWith("/api/")){
        return "http://127.0.0.1:4000";
    }
    if (url.startsWith("/live/")) {
        return "http://127.0.0.1:2000";
    }
    return {url: ['http://127.0.0.1:3000']}
};

let proxy = redbird({
    port: 5000,
    bunyan:{
        name:'std',
        level:'warn'
    },
    resolvers: [defaultServer]
});

// express       ===->
app.use(express.static('client'));
app.get('*',function (request, response) {
    response.sendFile(__dirname + '/client/index-dynamic.html');
});

// start http    ===->
http.listen(3000, function () {
});
/*
liveApp.use(express.static('client'));
liveApp.get('*', function (request, response) {
    response.sendFile(__dirname + '/client/index-dynamic.html');
});

// start http    ===->
liveHttp.listen(2000, function () {
});
*/
// socket.io     ===->
io.on('connection', function (socket) {
    console.log('io hit');
});
