import { Component } from "@angular/core";
import { CardWidget } from "../widget/widget";
import { DataLineRepository } from "./DataLineRepository";
export var DataLineComponent = (function () {
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
    DataLineComponent.decorators = [
        { type: Component, args: [{
                    moduleId: (module || { id: undefined }).id,
                    selector: 'data-line-component',
                    templateUrl: 'data-line-component.html',
                    providers: [DataLineRepository, CardWidget]
                },] },
    ];
    /** @nocollapse */
    DataLineComponent.ctorParameters = [
        { type: DataLineRepository, },
    ];
    return DataLineComponent;
}());
//# sourceMappingURL=DataLineComponent.js.map