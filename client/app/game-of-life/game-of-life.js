import { Component } from '@angular/core';
import { Grid } from './grid';
import { Settings } from "./settings";
export var GameOfLife = (function () {
    function GameOfLife() {
        this.grid = new Grid(new Settings());
    }
    GameOfLife.decorators = [
        { type: Component, args: [{
                    moduleId: (module || { id: undefined }).id,
                    selector: 'game-of-life',
                    templateUrl: 'game-of-life.html',
                    providers: [Settings, Grid],
                },] },
    ];
    /** @nocollapse */
    GameOfLife.ctorParameters = [];
    return GameOfLife;
}());
//# sourceMappingURL=game-of-life.js.map