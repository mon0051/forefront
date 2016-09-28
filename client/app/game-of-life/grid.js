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
var url_helper_1 = require("../util/url-helper");
var Grid = (function () {
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
        for (var y_1 = 0; y_1 < this.height; y_1++) {
            this.cells[y_1] = [];
            for (var x_1 = 0; x_1 < this.width; x_1++) {
                var cell = new cell_1.Cell(this);
                cell.status = "dormant";
                cell.x = x_1;
                cell.y = y_1;
                this.cells[y_1][x_1] = cell;
            }
        }
        this.cells.forEach(function (row) {
            row.forEach(function (cell) {
                cell.setNeighbours();
            });
        });
    }
    Grid = __decorate([
        core_1.Component({
            selector: 'gol-grid',
            templateUrl: url_helper_1.pathPrefix + 'app/game-of-life/grid.html',
            providers: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [settings_1.Settings])
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.js.map