// modules       ============================================================================
let express = require('express');
let redbird = require('redbird');
let nodeHttp = require('http');
let socketIo = require('socket.io');
let bunyan = require('bunyan');
let exec = require('child_process').exec;

// instances     ============================================================================
let app = express();
let http = nodeHttp.Server(app);
let io = socketIo(http,undefined);
let dotnet = exec('dotnet api/src/ForeFrontCore/bin/Debug/netcoreapp1.0/ForeFrontCore.dll',function (e,stdout,stderr) {
    if(e){
        console.error(e);
        return false;
    }
});

// configuration ============================================================================

// redbird       ===->
let defaultServer = function (host,url) {
    if(url.startsWith("/api/")){
        return "http://127.0.0.1:4000";
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
    response.sendFile(__dirname + '/client/index.html');
});

// start http    ===->
http.listen(3000, function () {
});

// socket.io     ===->
io.on('connection', function (socket) {
    console.log('io hit');
});
