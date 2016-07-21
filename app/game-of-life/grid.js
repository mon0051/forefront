"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var cell_1 = require('./cell');
var core_1 = require('@angular/core');
var settings_1 = require("./settings");
var common_1 = require('@angular/common');
var Grid = (function () {
    function Grid(settings) {
        this.digest = function () {
            this.cells.forEach(function (row, index, matrix) {
                row.forEach(function (cell) {
                    cell.cycleLife(matrix);
                });
            });
        };
        this.height = settings.height;
        this.width = settings.width;
        this.cells = [];
        for (var y = 0; y < this.height; y++) {
            this.cells[y] = [];
            for (var x = 0; x < this.width; x++) {
                var cell = new cell_1.Cell();
                cell.status = "dormant";
                cell.x = x;
                cell.y = y;
                this.cells[y][x] = cell;
            }
        }
    }
    Grid = __decorate([
        core_1.Component({
            selector: 'gol-grid',
            templateUrl: './app/game-of-life/grid.html',
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [settings_1.Settings])
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.js.map