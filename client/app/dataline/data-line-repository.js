import { Injectable } from '@angular/core';
import { MOCK_DATA } from "../mock-data/mock-data";
import { HttpDataLine } from "./http-dataline";
import { PromiseObservable } from "rxjs/observable/PromiseObservable";
export var DataLineRepository = (function () {
    function DataLineRepository(httpDataLine) {
        this.contentSource = 'dummyData';
        this.sourceMap = {
            'dummyData': function () { return Promise.resolve(MOCK_DATA); },
            'http': function () { return httpDataLine.getDataAsPromise(); }
        };
        this.sourceMapForObservable = {
            'dummyData': function () { return PromiseObservable.create(Promise.resolve(MOCK_DATA)); },
            'http': function () { return httpDataLine.getDataAsObservable(); }
        };
    }
    DataLineRepository.prototype.getDataAsPromise = function (source, args) {
        var getFunc = this.sourceMap[(source || this.contentSource || 'dummyData')];
        if (typeof getFunc === 'function') {
            return getFunc.apply.apply(getFunc, [this].concat(args));
        }
        else {
            return getFunc;
        }
    };
    DataLineRepository.prototype.getDataAsObservable = function (source, args) {
        var getFunc = this.sourceMapForObservable[(source || this.contentSource || 'dummyData')];
        if (typeof getFunc === 'function') {
            return getFunc.apply.apply(getFunc, [this].concat(args));
        }
        else {
            return getFunc;
        }
    };
    DataLineRepository.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataLineRepository.ctorParameters = [
        { type: HttpDataLine, },
    ];
    return DataLineRepository;
}());
//# sourceMappingURL=data-line-repository.js.map