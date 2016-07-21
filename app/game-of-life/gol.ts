import {Component} from '@angular/core';
import {Grid} from './grid';
import {Settings} from "./settings";

@Component({
    selector: 'game-of-life',
    templateUrl: './app/game-of-life/gol-root.html',
    providers: [Settings],
    directives: [Grid]
})
export class GameOfLife{
    grid : Grid = new Grid(new Settings());
}