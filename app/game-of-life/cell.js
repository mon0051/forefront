"use strict";
var Cell = (function () {
    function Cell() {
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
                    var cell = this.getRelative(matrix, i, j);
                    if (cell !== undefined) {
                        neighbours[neighbours.length] = cell;
                    }
                }
            }
            return neighbours;
        };
        this.getRelative = function (matrix, offsetY, offsetX) {
            var height = matrix.length;
            var width = matrix[this.y].length;
            if (this.x + offsetX > 0 && this.x < width && this.y + offsetY > 0 && this.y + offsetY < height) {
                return matrix[this.y][this.x];
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
            this.livingNeighbours = neighbours.filter(function (value) { return (value.status === "alive" || value.status === "dying"); }).length;
            neighbours.forEach(function (cell) {
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