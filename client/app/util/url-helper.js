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
var core_1 = require("@angular/core");
//let appRoot:string = "C:/Git/projects/ForeFront/client/";
var appRoot = "";
var UrlHelper = (function () {
    function UrlHelper() {
    }
    UrlHelper.resolvePath = function (path) {
        return appRoot + path;
    };
    UrlHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UrlHelper);
    return UrlHelper;
}());
exports.UrlHelper = UrlHelper;
function updatePath(path) {
    appRoot = path;
}
exports.updatePath = updatePath;
exports.pathPrefix = "C:/Git/projects/ForeFront/client/";
function resolvePath(path) {
    var appRoot = "";
    var isStatic = false;
    if (isStatic === true) {
        path = path.replace(/.*\//, "");
    }
    console.log(path);
    return appRoot + path;
}
exports.resolvePath = resolvePath;
//# sourceMappingURL=url-helper.js.map