import {staticContentPort} from "./serverSettings";
let express = require('express');
let nodeHttp = require('http');

export function startExpress(){
    let clientFiles = express();

    // express       ===->
    clientFiles.use(express.static('client')); // relative to index.js, not this file

    clientFiles.get('*', (request, response) => {
        response.sendFile('/client/index.html',{'root':__dirname + '/../'});
    });

    // start serving static files    ===->
    nodeHttp.Server(clientFiles).listen(staticContentPort, ()=> {
    });
}
