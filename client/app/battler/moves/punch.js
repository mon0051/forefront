import { Move } from "../base_objects/Move";
import { getDamage } from "../effects/damage";
export function getPunch() {
    var move = new Move();
    move.duration = 1;
    move.effects[move.effects.length] = getDamage(10);
    move.target[move.target.length] = "enemy";
    move.max_uses = 20;
    move.used = 0;
    return move;
}
//# sourceMappingURL=punch.js.map