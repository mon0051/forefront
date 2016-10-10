"use strict";
var reverseProxy_1 = require('./server/reverseProxy');
var express_1 = require("./server/express");
//startDotNet();
reverseProxy_1.startRedbird();
express_1.startExpress();
