"use strict";
let reverseProxy = require('./server/reverseProxy');
let express = require("./server/express");

reverseProxy.startRedbird();
express.startExpress();
