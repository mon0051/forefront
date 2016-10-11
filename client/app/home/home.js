import { Component } from '@angular/core';
import { pathPrefix } from '../util/url-helper';
export var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'home-component',
                    templateUrl: pathPrefix + 'app/home/home.html'
                },] },
    ];
    /** @nocollapse */
    HomeComponent.ctorParameters = [];
    return HomeComponent;
}());
//# sourceMappingURL=home.js.map