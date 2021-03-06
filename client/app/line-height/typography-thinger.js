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
var url_helper_1 = require("../util/url-helper");
var TypographyThinger = (function () {
    function TypographyThinger() {
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
    TypographyThinger = __decorate([
        core_1.Component({
            selector: "typography-thinger",
            templateUrl: url_helper_1.pathPrefix + "app/line-height/typography-thinger.html"
        }), 
        __metadata('design:paramtypes', [])
    ], TypographyThinger);
    return TypographyThinger;
}());
exports.TypographyThinger = TypographyThinger;
//# sourceMappingURL=typography-thinger.js.map