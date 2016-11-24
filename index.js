"use strict";

var reverseProxy = require('./server/reverseProxy');
var express = require("./server/express");

reverseProxy.startRedbird();
express.startExpress();

//# sourceMappingURL=index.js.map