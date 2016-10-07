import {Battler} from "./Battler";
import {Guid} from "../../util/Guid";

export class Effect {
    id:Guid = new Guid();
    effectFunction: Function;
    duration: number;

    constructor(effect: Function) {
        this.effectFunction = effect;
        this.id = new Guid();
    }

    digest(target: Battler) {
        if (this.effectFunction && typeof this.effectFunction === 'function') {
            this.effectFunction.apply(this, [target]);
        }
    }
}

export class ActiveEffect {
    id: Guid = new Guid();
    effect: Effect;
    duration_elapsed: number;

    constructor(){
        this.id = new Guid();
    }
}