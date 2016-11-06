"use strict";
var Move_1 = require("../base_objects/Move");
var damage_1 = require("../effects/damage");
function getPunch() {
    var move = new Move_1.Move();
    move.duration = 1;
    move.effects[move.effects.length] = damage_1.getDamage(10);
    move.target[move.target.length] = "enemy";
    move.max_uses = 20;
    move.used = 0;
    return move;
}
exports.getPunch = getPunch;
//# sourceMappingURL=punch.js.map