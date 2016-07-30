"use strict";
var Cell = (function () {
    function Cell(grid) {
        this.uiStatus = {
            hovered: false,
            outlined: false
        };
        this.getClasses = function () {
            return Object.assign({
                "alive": (this.status === "alive"),
                "dying": (this.status === "dying"),
                "dormant": (this.status === "dormant"),
                "growing": (this.status === "growing"),
            }, this.uiStatus);
        };
        this.mouseMoveIn = function () {
            this.uiStatus.hovered = true;
            this.neighbours.forEach(function (val) { return val.updateStatus(); });
        };
        this.mouseMoveOut = function () {
            this.uiStatus.hovered = false;
            this.neighbours.forEach(function (val) { return val.updateStatus(); });
        };
        this.updateStatus = function () {
            this.uiStatus.outlined = this.neighbours.some(function (cell) { return (cell.uiStatus.hovered === true); });
        };
        this.cycleLife = function () {
            this.updateEnvironmentStatus()
                .updateHealthStatus();
        };
        this.factsOfLife = function () {
            if (this.status === "dying") {
                this.status = "dormant";
                return this;
            }
            if (this.status === "growing") {
                this.status = "alive";
                return this;
            }
        };
        this.vivicate = function () {
            this.status = "alive";
        };
        this.digest = function (func, args) {
            var that = this;
            return func.apply.apply(func, [that].concat(args));
        };
        this.setNeighbours = function () {
            var neighbours = [];
            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                    if (i === 0 && j === 0)
                        continue;
                    neighbours[neighbours.length] = this.getRelative(i, j);
                }
            }
            this.neighbours = neighbours.filter(function (x) { return (x); });
        };
        this.getRelative = function (offsetY, offsetX) {
            var me = this;
            var relativeX = this.x + offsetX;
            var relativeY = this.y + offsetY;
            if (me.parentGrid.cells[relativeY]) {
                return me.parentGrid.cells[relativeY][relativeX];
            }
            return undefined;
        };
        this.updateEnvironmentStatus = function () {
            var that = this;
            var livingNeighbours = 0;
            var environMap = {
                2: "stable",
                3: "perfect"
            };
            this.neighbours.forEach(function (cell) {
                if (cell.status === "alive" || cell.status === "dying") {
                    livingNeighbours += 1;
                }
            });
            this.environment = environMap[livingNeighbours] || "toxic";
            return that;
        };
        this.updateHealthStatus = function () {
            if (this.environment === "stable") {
                return this;
            }
            if (this.status === "dormant" && this.environment === "perfect") {
                this.status = "growing";
                return this;
            }
            if (this.status === "alive" && this.environment === "toxic") {
                this.status = "dying";
                return this;
            }
            return this;
        };
        this.parentGrid = grid;
        this.environment = "toxic";
    }
    return Cell;
}());
exports.Cell = Cell;
//# sourceMappingURL=cell.js.map