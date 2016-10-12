import {staticContentPort} from "./serverSettings";
let express = require('express');
let nodeHttp = require('http');

export function startExpress(){
    let clientFiles = express();

    // express       ===->
    clientFiles.use(express.static('client')); // relative to index.js, not this file

    clientFiles.get('*', (request, response) => {
        console.log("Request : ",request);
        console.log("Time : ",Date.now());
        response.sendFile('/client/index-dynamic.html',{'root':__dirname + '/../'});
        console.log("Response : ", response)
    });

    // start serving static files    ===->
    nodeHttp.Server(clientFiles).listen(staticContentPort, ()=> {
    });
}
