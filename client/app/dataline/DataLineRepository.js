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
var core_1 = require('@angular/core');
var mock_data_1 = require("../mock-data/mock-data");
var http_dataline_1 = require("./http-dataline");
var PromiseObservable_1 = require("rxjs/observable/PromiseObservable");
var DataLineRepository = (function () {
    function DataLineRepository(httpDataLine) {
        this.contentSource = 'dummyData';
        this.sourceMap = {
            'dummyData': function () { return Promise.resolve(mock_data_1.MOCK_DATA); },
            'http': function () { return httpDataLine.getDataAsPromise(); }
        };
        this.sourceMapForObservable = {
            'dummyData': function () { return PromiseObservable_1.PromiseObservable.create(Promise.resolve(mock_data_1.MOCK_DATA)); },
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
    DataLineRepository = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_dataline_1.HttpDataLine])
    ], DataLineRepository);
    return DataLineRepository;
}());
exports.DataLineRepository = DataLineRepository;
//# sourceMappingURL=DataLineRepository.js.map