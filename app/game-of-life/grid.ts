import {Cell} from './cell';
import {Component} from '@angular/core';
import {Settings} from "./settings";
import {NgClass} from '@angular/common'
import {UrlHelper} from "../util/url-helper";

@Component({
    selector: 'gol-grid',
    templateUrl: UrlHelper.resolvePath('app/game-of-life/grid.html'),
    directives:[NgClass]
})
export class Grid {
    cells:Array<Array<Cell>>;
    height:number;
    width:number;

    constructor(settings: Settings) {
        this.height = settings.height;
        this.width = settings.width;
        this.cells = [];

        for (let y = 0; y < this.height; y++) {
            this.cells[y] = [];
            for (let x = 0; x < this.width; x++) {
                let cell = new Cell();
                cell.status = "dormant";
                cell.x = x;
                cell.y = y;
                this.cells[y][x] = cell;
            }
        }
    }

    digest = function () {
        this.cells.forEach(function (row:Array<Cell>, index, matrix:Array<Array<Cell>>) {
            row.forEach(function (cell) {
                cell.cycleLife(matrix);
            });
        });
    };
}
