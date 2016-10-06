import {Injectable} from '@angular/core';
import {MOCK_DATA} from "../mock-data/mock-data";
import {HttpDataLine} from "./http-dataline";
import {Observable} from "rxjs/observable";
import {PromiseObservable} from "rxjs/observable/PromiseObservable";

@Injectable()
export class DataLineRepository {
    data: any;
    contentSource: string = 'dummyData';
    sourceMap: any;
    sourceMapForObservable: any;

    getDataAsPromise(source, args): Promise<any> {
        let getFunc = this.sourceMap[(source || this.contentSource || 'dummyData')];

        if (typeof getFunc === 'function') {
            return getFunc.apply(this, ...args);
        } else {
            return getFunc;
        }
    }

    getDataAsObservable(source, args): Observable<any> {
        let getFunc = this.sourceMapForObservable[(source || this.contentSource || 'dummyData')];

        if (typeof getFunc === 'function') {
            return getFunc.apply(this, ...args);
        } else {
            return getFunc;
        }
    }

    constructor(httpDataLine: HttpDataLine) {
        this.sourceMap = {
            'dummyData': () => Promise.resolve(MOCK_DATA),
            'http': () => httpDataLine.getDataAsPromise()
        };

        this.sourceMapForObservable = {
            'dummyData': ()=> PromiseObservable.create(Promise.resolve(MOCK_DATA)),
            'http': () => httpDataLine.getDataAsObservable()
        };
    }
}
