"use strict";
var Effect_1 = require("./Effect");
var Battler = (function () {
    function Battler() {
        this.multipliers = {
            incoming_damage: 1,
            outgoing_damage: 1
        };
        this.moves = [];
        this.active_effects = [];
    }
    Battler.prototype.adjustMultiplier = function (multiplierName, func) {
        if (this.multipliers[multiplierName] === 'undefined') {
            this.multipliers[multiplierName] = 1;
        }
        if (typeof func === 'function') {
            this.multipliers[multiplierName] = func.apply(this, [this.multipliers[multiplierName]]) || 1;
        }
    };
    Battler.prototype.useMultiplier = function (multiplierName, valueToMultiply) {
        if (this.multipliers[multiplierName] === 'undefined' || typeof this.multipliers[multiplierName] !== 'number') {
            this.multipliers[multiplierName] = 1;
        }
        return valueToMultiply * this.multipliers[multiplierName];
    };
    Battler.prototype.addEffect = function (effect) {
        var active = new Effect_1.ActiveEffect();
        active.effect = effect;
        active.duration_elapsed = 0;
        this.active_effects.push(active);
    };
    Battler.prototype.digest = function () {
        this.active_effects.forEach(function (effect) {
            effect.duration_elapsed += 1;
            effect.effect.digest(this);
        });
        this.active_effects = this.active_effects
            .filter(function (x) { return x.duration_elapsed < x.effect.duration; });
    };
    return Battler;
}());
exports.Battler = Battler;
//# sourceMappingURL=Battler.js.map