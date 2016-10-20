import {Move} from "./Move";
import {ActiveEffect, Effect} from "./Effect";
import {Guid} from "../../util/Guid";

export class Battler {
    name:string;
    id:Guid;
    max_hp: number;
    hp: number;
    frontImage:string;
    backImage:string;

    moves: Array<Move>;
    active_effects: Array<ActiveEffect>;

    constructor() {
        this.id = new Guid();
        this.moves = [];
        this.active_effects = [];
    }

    digest() {

        this.active_effects.forEach(function (activeEffect: ActiveEffect) {
            activeEffect.duration_elapsed += 1;
            activeEffect.effect.digest(this);
        });

        this.active_effects = this.active_effects
            .filter(x => x.duration_elapsed < x.effect.duration);
    }
}