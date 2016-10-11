import { Component } from '@angular/core';
import { Grid } from './grid';
import { Settings } from "./settings";
import { pathPrefix } from "../util/url-helper";
export var GameOfLife = (function () {
    function GameOfLife() {
        this.grid = new Grid(new Settings());
    }
    GameOfLife.decorators = [
        { type: Component, args: [{
                    selector: 'game-of-life',
                    templateUrl: pathPrefix + 'app/game-of-life/game-of-life.html',
                    providers: [Settings, Grid],
                },] },
    ];
    /** @nocollapse */
    GameOfLife.ctorParameters = [];
    return GameOfLife;
}());
//# sourceMappingURL=game-of-life.js.map