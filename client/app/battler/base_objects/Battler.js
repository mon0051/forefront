"use strict";
var Guid_1 = require("../../util/Guid");
var Battler = (function () {
    function Battler() {
        this.id = new Guid_1.Guid();
        this.moves = [];
        this.active_effects = [];
    }
    Battler.prototype.digest = function () {
        this.active_effects.forEach(function (activeEffect) {
            activeEffect.duration_elapsed += 1;
            activeEffect.effect.digest(this);
        });
        this.active_effects = this.active_effects
            .filter(function (x) { return x.duration_elapsed < x.effect.duration; });
    };
    return Battler;
}());
exports.Battler = Battler;
//# sourceMappingURL=Battler.js.map