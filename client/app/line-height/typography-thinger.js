import { Component } from '@angular/core';
export var TypographyThinger = (function () {
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
    TypographyThinger.decorators = [
        { type: Component, args: [{
                    selector: "typography-thinger",
                    templateUrl: "typography-thinger.html"
                },] },
    ];
    /** @nocollapse */
    TypographyThinger.ctorParameters = [];
    return TypographyThinger;
}());
//# sourceMappingURL=typography-thinger.js.map