import {Component} from '@angular/core';
import {Grid} from './grid';
import {Settings} from "./settings";

@Component({
    selector: 'game-of-life',
    templateUrl: 'game-of-life.html',
    providers: [Settings,Grid],
})
export class GameOfLife{
    grid : Grid = new Grid(new Settings());
}