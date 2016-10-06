import {dotnetCoreRoot} from "./serverSettings";
let spawn = require('child_process').spawn;

export function startDotNet(){
// instances     ============================================================================

    let dotnet = spawn('dotnet', ['run'], {
        cwd: dotnetCoreRoot,
        stdio: ['ignore', 'inherit', 'inherit']
    });
}