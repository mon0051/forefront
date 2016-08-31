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
var url_helper_1 = require("../util/url-helper");
var widget_1 = require("../widget/widget");
var dataline_1 = require("./dataline");
var DataLineComponent = (function () {
    function DataLineComponent(ds) {
        this.dataLineService = ds;
        this.data = this.dataLineService.getData(null, null);
    }
    DataLineComponent.prototype.stringed = function () {
        return JSON.stringify(this.data, null, 2);
    };
    DataLineComponent.prototype.update = function () {
        this.data = this.dataLineService.getData(null, null);
    };
    DataLineComponent = __decorate([
        core_1.Component({
            selector: 'data-line-component',
            templateUrl: url_helper_1.UrlHelper.resolvePath('app/dataline/data-line-component.html'),
            directives: [widget_1.CardWidget],
            providers: [dataline_1.DataLineService]
        }), 
        __metadata('design:paramtypes', [dataline_1.DataLineService])
    ], DataLineComponent);
    return DataLineComponent;
}());
exports.DataLineComponent = DataLineComponent;
//# sourceMappingURL=DataLineComponent.js.map