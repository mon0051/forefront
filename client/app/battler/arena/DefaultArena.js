"use strict";
var Farscrubler_1 = require("../battlers/Farscrubler");
var Arena_1 = require("../base_objects/Arena");
function getDefaultArena() {
    var arena = new Arena_1.Arena();
    arena.opponent = Farscrubler_1.getFarscrubler();
    arena.player = Farscrubler_1.getFarscrubler();
    return arena;
}
exports.getDefaultArena = getDefaultArena;
//# sourceMappingURL=DefaultArena.js.map