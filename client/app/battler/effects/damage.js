import { Effect } from "../base_objects/Effect";
export function getDamage(damage) {
    var effect = new Effect(function (x) {
        x.hp = x.hp - damage;
    });
    effect.duration = 1;
    return effect;
}
//# sourceMappingURL=damage.js.map