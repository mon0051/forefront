export const dotNetCoreServerAddress = "http://127.0.0.1:4000";
export const staticContentPort = 3000;
export const staticContentServerAddress = "http://127.0.0.1:" + staticContentPort;
export const liveContentPort = 7000;
export const liveContentServerAddress = "http://127.0.0.1:" + liveContentPort;
export const reverseProxyPort = process.env.PORT || 5000;
export const loggerSettings = {name: 'std', level: 'warn'};
export const dotnetCoreRoot = 'api/src/ForeFrontCoreWeb';
