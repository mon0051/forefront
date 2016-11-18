import { Component } from "@angular/core";
import { getDefaultArena } from "./arena/DefaultArena";
export var BattlerMain = (function () {
    function BattlerMain() {
        this.arena = getDefaultArena();
    }
    BattlerMain.decorators = [
        { type: Component, args: [{
                    moduleId: (module || { id: undefined }).id,
                    templateUrl: "battler-main.html"
                },] },
    ];
    /** @nocollapse */
    BattlerMain.ctorParameters = [];
    return BattlerMain;
}());
//# sourceMappingURL=BattlerMain.js.map