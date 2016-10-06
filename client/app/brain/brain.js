"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var engine_1 = require("./engine");
var Brain = (function () {
    function Brain() {
        this.engine = new engine_1.Engine();
        this.inputX = 0;
        this.inputY = 0;
    }
    Brain.prototype.ngOnInit = function () { };
    Brain = __decorate([
        core_1.Component({
            selector: 'brain',
            templateUrl: 'brain.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Brain);
    return Brain;
}());
exports.Brain = Brain;
//# sourceMappingURL=brain.js.map