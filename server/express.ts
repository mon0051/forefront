import {staticContentPort} from "./serverSettings";
let express = require('express');
let nodeHttp = require('http');
let index = process.env.INDEX_HTML || "index-dynamic.html";
export function startExpress(){
    let clientFiles = express();

    // express       ===->
    clientFiles.use(express.static('client')); // relative to index.js, not this file

    clientFiles.get('*', (request, response) => {
        response.sendFile('/client/'+index,{'root':__dirname + '/../'});
    });

    // start serving static files    ===->
    nodeHttp.Server(clientFiles).listen(staticContentPort, ()=> {
    });
}
