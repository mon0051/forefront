export class Cell {
    status:string;
    environment:string;
    x:number;
    y:number;
    neigbours:Array<Cell>;

    cycleLife = function (matrix:Array<Array<Cell>>) {
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

    animate = function () {
      this.status = "alive";
    };

    digest = function (func, args) {
        return func.apply(this, ...args);
    };

    private getNeighbours = function (matrix:Array<Array<Cell>>) {
        let neighbours = [];
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;

                let cell = this.getRelative(matrix, i, j);

                if (cell !== undefined) {
                    neighbours[neighbours.length] = cell;
                }
            }
        }
        return neighbours;
    };

    private getRelative = function (matrix:Array<Array<Cell>>, offsetY:number, offsetX:number) {
        let height = matrix.length;
        let width = matrix[this.y].length;

        if (this.x + offsetX > 0 && this.x < width && this.y + offsetY > 0 && this.y + offsetY < height) {
            return matrix[this.y][this.x];
        }

        return undefined;
    };

    private updateEnvironmentStatus = function (neighbours:Array<Cell>) {
        let that:Cell = this;
        let livingNeighbours = 0;

        const environMap = {
            2: "stable",
            3: "perfect"
        };
        this.livingNeighbours = neighbours.filter((value:Cell)=>(value.status==="alive"||value.status==="dying")).length;
        neighbours.forEach(function (cell) {
            if (cell.status === "alive" || cell.status === "dying") {
                livingNeighbours += 1;
            }
        });

        this.environment = environMap[livingNeighbours] || "toxic";

        return that;
    };

    private updateHealthStatus = function () {
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