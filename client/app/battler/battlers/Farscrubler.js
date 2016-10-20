"use strict";
var Battler_1 = require("../base_objects/Battler");
var punch_1 = require("../moves/punch");
function getFarscrubler() {
    var battler = new Battler_1.Battler();
    battler.name = "Farscrubler";
    battler.max_hp = 100;
    battler.hp = battler.max_hp;
    battler.moves[battler.moves.length] = punch_1.getPunch();
}
exports.getFarscrubler = getFarscrubler;
//# sourceMappingURL=Farscrubler.js.map