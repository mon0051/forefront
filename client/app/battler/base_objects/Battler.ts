import {Move} from "./Move";
import {ActiveEffect, Effect} from "./Effect";
import {Guid} from "../../util/Guid";

export class Battler {
    name:string;
    id:Guid;
    max_hp: number;
    hp: number;

    private multipliers: any = {
        incoming_damage: 1,
        outgoing_damage: 1
    };

    moves: Array<Move>;
    active_effects: Array<ActiveEffect>;

    constructor() {
        this.id = new Guid();
        this.moves = [];
        this.active_effects = [];
    }

    adjustMultiplier(multiplierName, func) {
        if (this.multipliers[multiplierName] === 'undefined') {
            this.multipliers[multiplierName] = 1;
        }

        if (typeof func === 'function') {
            this.multipliers[multiplierName] = func.apply(this, [this.multipliers[multiplierName]]) || 1;
        }
    }

    useMultiplier(multiplierName,valueToMultiply) {
        if (this.multipliers[multiplierName] === 'undefined' || typeof this.multipliers[multiplierName] !== 'number') {
            this.multipliers[multiplierName] = 1;
        }

        return valueToMultiply * this.multipliers[multiplierName];
    }

    addEffect(effect: Effect) {
        let active = new ActiveEffect();
        active.effect = effect;
        active.duration_elapsed = 0;

        this.active_effects.push(active);
    }

    digest() {
        this.active_effects.forEach(function (effect: ActiveEffect) {
            effect.duration_elapsed += 1;
            effect.effect.digest(this);
        });

        this.active_effects = this.active_effects
            .filter(x => x.duration_elapsed < x.effect.duration);
    }
}