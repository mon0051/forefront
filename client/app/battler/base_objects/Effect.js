"use strict";
var Guid_1 = require("../../util/Guid");
var Effect = (function () {
    function Effect(effect) {
        this.id = new Guid_1.Guid();
        this.effectFunction = effect;
        this.id = new Guid_1.Guid();
    }
    Effect.prototype.digest = function (target) {
        if (this.effectFunction && typeof this.effectFunction === 'function') {
            this.effectFunction.apply(this, [target]);
        }
    };
    return Effect;
}());
exports.Effect = Effect;
var ActiveEffect = (function () {
    function ActiveEffect() {
        this.id = new Guid_1.Guid();
        this.id = new Guid_1.Guid();
    }
    return ActiveEffect;
}());
exports.ActiveEffect = ActiveEffect;
//# sourceMappingURL=Effect.js.map