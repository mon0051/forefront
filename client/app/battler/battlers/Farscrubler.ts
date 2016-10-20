import {Battler} from "../base_objects/Battler";
import {getPunch} from "../moves/punch";

export function getFarscrubler(){
    let battler = new Battler();
    battler.name = "Farscrubler";
    battler.max_hp = 100;
    battler.hp = battler.max_hp;
    battler.moves[battler.moves.length] = getPunch();
}