import { Guid } from "../../util/Guid";
export var Effect = (function () {
    function Effect(effect) {
        this.id = new Guid();
        this.effectFunction = effect;
        this.id = new Guid();
    }
    Effect.prototype.digest = function (target) {
        if (this.effectFunction && typeof this.effectFunction === 'function') {
            this.effectFunction.apply(this, [target]);
        }
    };
    return Effect;
}());
export var ActiveEffect = (function () {
    function ActiveEffect() {
        this.id = new Guid();
        this.id = new Guid();
    }
    return ActiveEffect;
}());
//# sourceMappingURL=Effect.js.map