"use strict";
var Effect_1 = require("../base_objects/Effect");
function getDamage(damage) {
    var effect = new Effect_1.Effect(function (x) {
        x.hp = x.hp - damage;
    });
    effect.duration = 1;
    return effect;
}
exports.getDamage = getDamage;
//# sourceMappingURL=damage.js.map