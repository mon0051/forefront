import {Component} from '@angular/core';
import {Grid} from './grid';
import {Settings} from "./settings";
import {resolvePath} from "../util/url-helper";

@Component({
    selector: 'game-of-life',
    templateUrl: resolvePath('app/game-of-life/game-of-life.html'),
    providers: [Settings,Grid],
})
export class GameOfLife{
    grid : Grid = new Grid(new Settings());
}