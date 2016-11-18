import { Component } from '@angular/core';
import { GridComponent } from './grid.component';
import { Settings } from "./settings";
export var GameOfLifeComponent = (function () {
    function GameOfLifeComponent() {
        this.grid = new GridComponent(new Settings());
    }
    GameOfLifeComponent.decorators = [
        { type: Component, args: [{
                    moduleId: (module || { id: undefined }).id,
                    selector: 'game-of-life',
                    templateUrl: 'game-of-life.component.html',
                    providers: [Settings, GridComponent],
                },] },
    ];
    /** @nocollapse */
    GameOfLifeComponent.ctorParameters = [];
    return GameOfLifeComponent;
}());
//# sourceMappingURL=game-of-life.component.js.map