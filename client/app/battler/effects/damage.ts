import {Effect} from "../base_objects/Effect";
export function getDamage(damage:number){
    let effect = new Effect(x=> {
        x.hp = x.hp - damage;
    });

    effect.duration = 1;

    return effect;
}
