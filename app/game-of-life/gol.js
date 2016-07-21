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
var core_1 = require('@angular/core');
var grid_1 = require('./grid');
var settings_1 = require("./settings");
var GameOfLife = (function () {
    function GameOfLife() {
        this.grid = new grid_1.Grid(new settings_1.Settings());
    }
    GameOfLife = __decorate([
        core_1.Component({
            selector: 'game-of-life',
            templateUrl: './app/game-of-life/gol-root.html',
            providers: [settings_1.Settings],
            directives: [grid_1.Grid]
        }), 
        __metadata('design:paramtypes', [])
    ], GameOfLife);
    return GameOfLife;
}());
exports.GameOfLife = GameOfLife;
//# sourceMappingURL=gol.js.map