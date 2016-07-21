import {Cell} from './cell';
import {Component} from '@angular/core';
import {Settings} from "./settings";
import {NgClass} from '@angular/common'

@Component({
    selector: 'gol-grid',
    templateUrl: './app/game-of-life/grid.html',
    directives:[NgClass]
})
export class Grid {
    cells:Array<Array<Cell>>;
    height:number;
    width:number;

    constructor(settings: Settings) {
        this.height = settings.height;
        this.width = settings.width;
        this.cells = new Array<Array<Cell>>();

        for (let y = 0; y < this.height; y++) {
            this.cells[y] = new Array<Cell>();
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
        this.cells.forEach(function (value:Cell, index, array:Array<Array<Cell>>) {
            let cycle = function(cellArray:Array<Array<Cell>>){
                let x = this.x;
                let y = this.y;

            };
            value.digest(cycle,array);
        });
    };
}
