import { Cell } from './cell';
import { Component } from '@angular/core';
import { Settings } from "./settings";
import { NgClass } from '@angular/common';
export var Grid = (function () {
    function Grid(settings) {
        this.autoplay = false;
        this.cycleTime = 500; //time unit is ms
        this.clear = function () {
            this.forAllCells(function (cell) { return cell.status = "dormant"; });
        };
        this.step = function () {
            var that = this;
            this.forAllCells(function (cell) { return cell.cycleLife(); });
            this.forAllCells(function (cell) { return cell.factsOfLife(); });
            return that;
        };
        this.forAllCells = function (func, args) {
            this.cells.forEach(function (row) {
                row.forEach(function (cell) {
                    func.apply(void 0, [cell].concat(args));
                });
            });
        };
        this.digest = function (func, args) {
            if (typeof func === "function") {
                func.apply.apply(func, [this].concat(args));
            }
        };
        this.start = function () {
            this.autoplay = true;
            this.run();
        };
        this.stop = function () {
            this.autoplay = false;
        };
        this.run = function () {
            this.digest(this.step);
            var that = this;
            if (this.autoplay === true) {
                setTimeout(function () { return that.run(); }, that.cycleTime);
            }
        };
        this.height = settings.height;
        this.width = settings.width;
        this.cells = [];
        for (var y = 0; y < this.height; y++) {
            this.cells[y] = [];
            for (var x = 0; x < this.width; x++) {
                var cell = new Cell(this);
                cell.status = "dormant";
                cell.x = x;
                cell.y = y;
                this.cells[y][x] = cell;
            }
        }
        this.cells.forEach(function (row) {
            row.forEach(function (cell) {
                cell.setNeighbours();
            });
        });
    }
    Grid.decorators = [
        { type: Component, args: [{
                    selector: 'gol-grid',
                    templateUrl: 'grid.html',
                    providers: [NgClass]
                },] },
    ];
    /** @nocollapse */
    Grid.ctorParameters = [
        { type: Settings, },
    ];
    return Grid;
}());
//# sourceMappingURL=grid.js.map