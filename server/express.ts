import {staticContentPort} from "./serverSettings";
let express = require('express');
let nodeHttp = require('http');

export function startExpress(){
    let clientFiles = express();

    // express       ===->
    clientFiles.use(express.static('/../client'));
    clientFiles.get('*', (request, response) => {
        response.sendFile(__dirname + '/../client/index.html');
    });

    // start serving static files    ===->
    nodeHttp.Server(clientFiles).listen(staticContentPort, ()=> {
    });
}
