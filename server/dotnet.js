"use strict";
var serverSettings_1 = require("./serverSettings");
var spawn = require('child_process').spawn;
function startDotNet() {
    // instances     ============================================================================
    var dotnet = spawn('dotnet', ['run'], {
        cwd: serverSettings_1.dotnetCoreRoot,
        stdio: ['ignore', 'inherit', 'inherit']
    });
}
exports.startDotNet = startDotNet;
//# sourceMappingURL=dotnet.js.map