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
var grid_component_1 = require('./grid.component');
var settings_1 = require("./settings");
var GameOfLifeComponent = (function () {
    function GameOfLifeComponent() {
        this.grid = new grid_component_1.GridComponent(new settings_1.Settings());
    }
    GameOfLifeComponent = __decorate([
        core_1.Component({
            moduleId: (module || { id: undefined }).id,
            selector: 'game-of-life',
            templateUrl: 'game-of-life.component.html',
            providers: [settings_1.Settings, grid_component_1.GridComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], GameOfLifeComponent);
    return GameOfLifeComponent;
}());
exports.GameOfLifeComponent = GameOfLifeComponent;
//# sourceMappingURL=game-of-life.component.js.map