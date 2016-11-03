import {Battler} from "../base_objects/Battler";
import {getPunch} from "../moves/punch";

export function getFarscrubler() : Battler{
    let battler = new Battler();
    battler.name = "Farscrubler";
    battler.max_hp = 100;
    battler.hp = battler.max_hp;
    battler.moves[battler.moves.length] = getPunch();
    battler.frontImage = "app/battler/battlers/img/Farscrubler.png";
    battler.backImage = "app/battler/battlers/img/Farscrubler-back.png";
    return battler;
}