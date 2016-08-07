import {Component} from '@angular/core';
import {UrlHelper} from "../util/url-helper";

@Component({
    selector: "typography-thinger",
    templateUrl: UrlHelper.resolvePath("app/line-height/typography-thinger.html")
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