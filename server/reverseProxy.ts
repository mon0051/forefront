require('bunyan');
import {
    dotNetCoreServerAddress,
    liveContentServerAddress,
    staticContentServerAddress,
    loggerSettings,
    reverseProxyPort
} from "./serverSettings";

let redbird = require('redbird');

export function proxyResolver(host, url) {
    console.log("host",host);
    if(host && typeof host === 'string' && host.includes('.live.')){
        return url.startsWith("/api/") ? dotNetCoreServerAddress : {url: [liveContentServerAddress]};
    }
    return url.startsWith("/api/") ? dotNetCoreServerAddress : {url: [staticContentServerAddress]};
}

export function startRedbird(){
    return redbird({
        port: reverseProxyPort,
        bunyan: loggerSettings,
        resolvers: [proxyResolver]
    });
}

