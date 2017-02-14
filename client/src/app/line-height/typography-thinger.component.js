"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TypographyThingerComponent = (function () {
    function TypographyThingerComponent() {
        this.lineHeight = 22;
        this.fontSize = 14;
        this.lineWidth = 513;
        this.goldenRatio = 1.61803;
        this.resolveSizes = function (changedParam) {
            this['resolveFrom' + changedParam]();
        };
        this.containerSize = function () {
            return this.lineWidth + (20 * 2);
        };
        this.resolveFromLineHeight = function () {
            this.fontSize = this.lineHeight / this.goldenRatio;
            this.lineWidth = this.lineHeight * this.lineHeight;
        };
        this.resolveFromFontSize = function () {
            //  As both height and width are watched variables, complex calculations can cause the
            //  view to glitch. Best to fully resolve the variables, then assign.
            this.lineHeight = (this.fontSize * this.goldenRatio).toFixed();
            this.lineWidth = (this.fontSize * this.goldenRatio * this.fontSize * this.goldenRatio *
                (1 + (2 * this.goldenRatio) * ((this.lineHeight / this.fontSize) - this.goldenRatio)));
        };
        this.resolveFromLineWidth = function () {
            this.lineHeight = Math.sqrt(this.lineWidth);
            this.fontSize = this.lineHeight / this.goldenRatio;
        };
        this.pixilate = function (number) {
            return ("" + number + "px");
        };
    }
    return TypographyThingerComponent;
}());
TypographyThingerComponent = __decorate([
    core_1.Component({
        moduleId: (module || { id: undefined }).id,
        selector: "typography-thinger",
        templateUrl: "typography-thinger.component.html"
    })
], TypographyThingerComponent);
exports.TypographyThingerComponent = TypographyThingerComponent;
//# sourceMappingURL=typography-thinger.component.js.map