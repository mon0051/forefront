import {startRedbird} from './server/reverseProxy';
import {startExpress} from "./server/express";
import {startDotNet} from "./server/dotnet";

//startDotNet();
startRedbird();
startExpress();
