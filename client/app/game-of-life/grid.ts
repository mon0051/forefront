import {Cell} from './cell';
import {Component} from '@angular/core';
import {Settings} from "./settings";
import {NgClass} from '@angular/common'
import {pathPrefix} from "../util/url-helper";

@Component({
    selector: 'gol-grid',
    templateUrl: pathPrefix+'app/game-of-life/grid.html',
    providers:[NgClass]
})
export class Grid {
    cells:Array<Array<Cell>>;
    height:number;
    width:number;
    autoplay:boolean = false;
    cycleTime:number = 500; //time unit is ms

    constructor(settings: Settings) {
        this.height = settings.height;
        this.width = settings.width;
        this.cells = [];

        for (let y = 0; y < this.height; y++) {
            this.cells[y] = [];
            for (let x = 0; x < this.width; x++) {
                let cell = new Cell(this);
                cell.status = "dormant";
                cell.x = x;
                cell.y = y;
                this.cells[y][x] = cell;
            }
        }
        this.cells.forEach(function (row) {
            row.forEach(function (cell) {
                cell.setNeighbours();
            })
        })
    }

    clear = function () {
      this.forAllCells((cell:Cell)=>cell.status="dormant");
    };

    step = function () {
        var that:Grid = this;
        this.forAllCells((cell:Cell)=> cell.cycleLife());
        this.forAllCells((cell:Cell)=> cell.factsOfLife());
        return that;
    };

    forAllCells = function(func:any,args:any){
        this.cells.forEach(function (row:Array<Cell>) {
            row.forEach(function (cell:Cell) {
                func(cell,...args);
            });
        });
    };

    digest = function (func,args) {
        if(typeof func === "function"){
            func.apply(this,...args);
        }
    };

    start = function () {
        this.autoplay = true;
        this.run();
    };

    stop = function () {
        this.autoplay = false;
    };

    private run = function () {
        this.digest(this.step);
        var that:Grid = this;
        if (this.autoplay === true) {
            setTimeout(() => that.run(), that.cycleTime);
        }
    };
}
