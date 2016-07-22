import {Component} from '@angular/core';
import {Grid} from './grid';
import {Settings} from "./settings";
import {UrlHelper} from "../util/url-helper";

@Component({
    selector: 'game-of-life',
    templateUrl: UrlHelper.resolvePath('app/game-of-life/gol-root.html'),
    providers: [Settings],
    directives: [Grid]
})
export class GameOfLife{
    grid : Grid = new Grid(new Settings());

}