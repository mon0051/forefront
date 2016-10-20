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
var widget_1 = require("../widget/widget");
var DataLineRepository_1 = require("./DataLineRepository");
var DataLineComponent = (function () {
    function DataLineComponent(ds) {
        var _this = this;
        this.sourceTypes = ['dummyData', 'http'];
        this.dataLineService = ds;
        this.source = 'dummyData';
        ds.getDataAsPromise(this.source, null)
            .then(function (r) { return _this.data = r; });
        ds.getDataAsObservable(this.source, null)
            .subscribe(function (x) { return _this.observed = x; });
    }
    DataLineComponent.prototype.stringed = function () {
        try {
            return JSON.stringify(this.data, null, 4);
        }
        catch (e) {
            console.log(e);
            console.log(this.data);
            return this.data.toString();
        }
    };
    DataLineComponent.prototype.stringedObservable = function () {
        try {
            return JSON.stringify(this.observed, null, 4);
        }
        catch (e) {
            console.log(e);
            console.log(this.observed);
            return this.observed.toString();
        }
    };
    DataLineComponent.prototype.update = function () {
        this.data = this.dataLineService.getDataAsPromise(null, null);
    };
    DataLineComponent = __decorate([
        core_1.Component({
            moduleId: (module || { id: undefined }).id,
            selector: 'data-line-component',
            templateUrl: 'data-line-component.html',
            providers: [DataLineRepository_1.DataLineRepository, widget_1.CardWidget]
        }), 
        __metadata('design:paramtypes', [DataLineRepository_1.DataLineRepository])
    ], DataLineComponent);
    return DataLineComponent;
}());
exports.DataLineComponent = DataLineComponent;
//# sourceMappingURL=DataLineComponent.js.map