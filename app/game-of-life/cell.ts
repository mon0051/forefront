export class Cell {
    status:string;
    environment:string;
    x:number;
    y:number;
    livingNeighbours:number;
    neighbours:Array<Cell>;

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

                neighbours[neighbours.length] = this.getRelative(matrix, i, j);
            }
        }
        return neighbours.filter((x)=>(x));
    };

    private getRelative = function (matrix:Array<Array<Cell>>, offsetY:number, offsetX:number) {
        let relativeX = this.x + offsetX;
        let relativeY = this.y + offsetY;
        if(matrix[relativeY]){
            return matrix[relativeY][relativeX];
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