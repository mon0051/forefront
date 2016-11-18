import { Guid } from "../../util/Guid";
export var Battler = (function () {
    function Battler() {
        this.id = new Guid();
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
//# sourceMappingURL=Battler.js.map