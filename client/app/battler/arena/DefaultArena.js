import { getFarscrubler } from "../battlers/Farscrubler";
import { Arena } from "../base_objects/Arena";
export function getDefaultArena() {
    var arena = new Arena();
    arena.opponent = getFarscrubler();
    arena.player = getFarscrubler();
    return arena;
}
//# sourceMappingURL=DefaultArena.js.map