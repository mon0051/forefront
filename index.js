"use strict";
var reverseProxy_1 = require('./server/reverseProxy');
var express_1 = require("./server/express");
var dotnet_1 = require("./server/dotnet");
dotnet_1.startDotNet();
reverseProxy_1.startRedbird();
express_1.startExpress();
