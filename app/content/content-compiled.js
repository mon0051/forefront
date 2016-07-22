"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var gol_1 = require('../game-of-life/gol');
var url_helper_1 = require("../util/url-helper");
var ForeFrontContent = function () {
    function ForeFrontContent() {}
    ForeFrontContent = __decorate([core_1.Component({
        selector: 'forefront-content',
        templateUrl: url_helper_1.UrlHelper.resolvePath('app/content/content.html'),
        directives: [gol_1.GameOfLife]
    }), __metadata('design:paramtypes', [])], ForeFrontContent);
    return ForeFrontContent;
}();
exports.ForeFrontContent = ForeFrontContent;
//# sourceMappingURL=content.js.map

//# sourceMappingURL=content-compiled.js.map