import { Component } from "@angular/core";
import { pathPrefix } from "../util/url-helper";
export var CardWidget = (function () {
    function CardWidget() {
    }
    CardWidget.decorators = [
        { type: Component, args: [{
                    selector: 'card-widget',
                    templateUrl: pathPrefix + 'app/widget/widget.html'
                },] },
    ];
    /** @nocollapse */
    CardWidget.ctorParameters = [];
    return CardWidget;
}());
//# sourceMappingURL=widget.js.map