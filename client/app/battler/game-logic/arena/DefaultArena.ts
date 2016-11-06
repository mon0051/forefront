import {getFarscrubler} from "../battlers/Farscrubler";
import {Arena} from "../base_objects/Arena";

export function getDefaultArena():Arena{
    let arena = new Arena();

    arena.opponent = getFarscrubler();
    arena.player = getFarscrubler();

    arena.opponent.hp = 50;

    return arena;
}