import {Component} from '@angular/core';

@Component({
    moduleId: (module || {id: undefined}).id,
    selector: "typography-thinger",
    templateUrl: "typography-thinger.html"
})
export class TypographyThinger {
    lineHeight: number = 22;
    fontSize: number = 14;
    lineWidth: number = 513;
    goldenRatio: number = 1.61803;

    resolveSizes = function (changedParam: string) {
        this['resolveFrom' + changedParam]();
    };

    containerSize = function () {
        return this.lineWidth + (20 * 2);
    };

    private resolveFromLineHeight = function () {
        this.fontSize = this.lineHeight / this.goldenRatio;
        this.lineWidth = this.lineHeight * this.lineHeight;
    };

    private resolveFromFontSize = function () {
        //  As both height and width are watched variables, complex calculations can cause the
        //  view to glitch. Best to fully resolve the variables, then assign.
        this.lineHeight = (this.fontSize * this.goldenRatio).toFixed();

        this.lineWidth = (
            this.fontSize * this.goldenRatio * this.fontSize * this.goldenRatio *
            (1 + (2 * this.goldenRatio) * ((this.lineHeight / this.fontSize) - this.goldenRatio))
        );
    };

    private resolveFromLineWidth = function () {
        this.lineHeight = Math.sqrt(this.lineWidth);
        this.fontSize = this.lineHeight / this.goldenRatio;
    };

    pixilate = function (number) {
        return ("" + number + "px");
    }
}