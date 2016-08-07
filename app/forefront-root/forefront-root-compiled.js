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
var nav_1 = require('../nav/nav');
var content_1 = require('../content/content');
var url_helper_1 = require('../util/url-helper');
var core_1 = require('@angular/core');
var ForeFrontRoot = function () {
    function ForeFrontRoot() {
        this.title = 'Forefront Root';
    }
    ForeFrontRoot = __decorate([core_1.Component({
        selector: 'forefront-root',
        templateUrl: url_helper_1.UrlHelper.resolvePath('app/forefront-root/forefront-root.html'),
        directives: [nav_1.ForeFrontNav, content_1.ForeFrontContent]
    }), __metadata('design:paramtypes', [])], ForeFrontRoot);
    return ForeFrontRoot;
}();
exports.ForeFrontRoot = ForeFrontRoot;
//# sourceMappingURL=forefront-root.js.map

//# sourceMappingURL=forefront-root-compiled.js.map