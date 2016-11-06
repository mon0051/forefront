import {Effect} from "./Effect";
import {Guid} from "../../../util/Guid";


export class Move {
    id:Guid;
    target:Array<string> = [];
    effects: Array<Effect> = [];
    duration: number;
    max_uses: number;
    used:number;
}
