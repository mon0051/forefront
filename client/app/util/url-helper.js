import { Injectable } from "@angular/core";
//let appRoot:string = "C:/Git/projects/ForeFront/client/";
var appRoot = "";
export var UrlHelper = (function () {
    function UrlHelper() {
    }
    UrlHelper.resolvePath = function (path) {
        return appRoot + path;
    };
    UrlHelper.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UrlHelper.ctorParameters = [];
    return UrlHelper;
}());
export function updatePath(path) {
    appRoot = path;
}
export var pathPrefix = "C:/Git/projects/ForeFront/client/";
export function resolvePath(path) {
    var appRoot = "";
    var isStatic = false;
    if (isStatic === true) {
        path = path.replace(/.*\//, "");
    }
    console.log(path);
    return appRoot + path;
}
//# sourceMappingURL=url-helper.js.map