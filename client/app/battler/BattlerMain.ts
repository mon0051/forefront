
import {Component} from "@angular/core";
import {Arena} from "./game-logic/base_objects/Arena";
import {getDefaultArena} from "./game-logic/arena/DefaultArena";

@Component({
    moduleId: (module || {id: undefined}).id,
    templateUrl:"battler-main.html"
})
export class BattlerMain{
    arena:Arena;

    constructor(){
        this.arena = getDefaultArena();
    }
}