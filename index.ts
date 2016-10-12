import {startRedbird} from './server/reverseProxy';
import {startExpress} from "./server/express";

startRedbird();
startExpress();
