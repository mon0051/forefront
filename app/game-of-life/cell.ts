import {Grid} from "./grid";

export class Cell {
    status:string;
    environment:string;
    parentGrid:Grid;
    neighbours:Array<Cell>;
    uiStatus:any = {
        hovered:false,
        outlined:false
    };
    x:number;
    y:number;

    constructor(grid:Grid){
        this.parentGrid = grid;
        this.environment = "toxic"
    }

    getClasses = function () {
        return Object.assign({
            "alive": (this.status === "alive"),
            "dying": (this.status === "dying"),
            "dormant": (this.status === "dormant"),
            "growing": (this.status === "growing"),
        }, this.uiStatus);
    };

    mouseMoveIn = function () {
        this.uiStatus.hovered = true;
        this.neighbours.forEach((val:Cell)=>val.updateStatus());
    };

    mouseMoveOut = function () {
        this.uiStatus.hovered = false;
        this.neighbours.forEach((val:Cell)=>val.updateStatus());
    };

    updateStatus = function () {
        this.uiStatus.outlined = this.neighbours.some((cell:Cell)=>(cell.uiStatus.hovered === true));
    };

    cycleLife = function () {
        this.updateEnvironmentStatus()
            .updateHealthStatus();
    };

    factsOfLife = function () {
        if (this.status === "dying") {
            this.status = "dormant";
            return this;
        }

        if (this.status === "growing") {
            this.status = "alive";
            return this;
        }
    };

    vivicate = function () {
      this.status = "alive";
    };

    digest = function (func, args) {
        let that:Cell = this;
        return func.apply(that, ...args);
    };

    setNeighbours = function () {
        let neighbours = [];
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;

                neighbours[neighbours.length] = this.getRelative(i, j);
            }
        }
        this.neighbours = neighbours.filter((x)=>(x));
    };

    private getRelative = function (offsetY:number, offsetX:number) {
        let me:Cell = this;
        let relativeX = this.x + offsetX;
        let relativeY = this.y + offsetY;
        if(me.parentGrid.cells[relativeY]){
            return me.parentGrid.cells[relativeY][relativeX];
        }
        return undefined;
    };

    private updateEnvironmentStatus = function () {
        let that:Cell = this;
        let livingNeighbours = 0;

        const environMap = {
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

    private updateHealthStatus = function () {
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
}