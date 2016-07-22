"use strict";
var Cell = (function () {
    function Cell() {
        this.neighbours = [];
        this.uiStatus = {};
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
        };
        this.updateStatus = function () {
            this.uiStatus["outlined"] = (this.neighbours.some(function (cell) { return (cell.uiStatus === "hovered"); }));
        };
        this.cycleLife = function (matrix) {
            if (this.status === "dying") {
                this.status = "dormant";
                return;
            }
            if (this.status === "growing") {
                this.status = "alive";
                return;
            }
            this.updateEnvironmentStatus(this.getNeighbours(matrix))
                .updateHealthStatus();
        };
        this.animate = function () {
            this.status = "alive";
        };
        this.digest = function (func, args) {
            return func.apply.apply(func, [this].concat(args));
        };
        this.getNeighbours = function (matrix) {
            var neighbours = [];
            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                    if (i === 0 && j === 0)
                        continue;
                    neighbours[neighbours.length] = this.getRelative(matrix, i, j);
                }
            }
            this.neighbours = neighbours;
            return neighbours.filter(function (x) { return (x); });
        };
        this.getRelative = function (matrix, offsetY, offsetX) {
            var relativeX = this.x + offsetX;
            var relativeY = this.y + offsetY;
            if (matrix[relativeY]) {
                return matrix[relativeY][relativeX];
            }
            return undefined;
        };
        this.updateEnvironmentStatus = function (neighbours) {
            var that = this;
            var livingNeighbours = 0;
            var environMap = {
                2: "stable",
                3: "perfect"
            };
            //this.livingNeighbours = neighbours.filter((value:Cell)=>(value.status==="alive"||value.status==="dying")).length;
            neighbours.forEach(function (cell) {
                if (cell.status === "alive" || cell.status === "dying") {
                    livingNeighbours += 1;
                }
            });
            this.livingNeighbours = livingNeighbours;
            this.environment = environMap[livingNeighbours] || "toxic";
            return that;
        };
        this.updateHealthStatus = function () {
            if (this.environment === "stable") {
                return this;
            }
            if (this.status === "dormant" && this.environment === "perfect") {
                this.status = "growing";
            }
            if (this.status === "alive" && this.environment === "toxic") {
                this.status = "dying";
            }
            return this;
        };
    }
    return Cell;
}());
exports.Cell = Cell;
//# sourceMappingURL=cell.js.map