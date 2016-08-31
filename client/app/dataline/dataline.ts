import {Injectable} from '@angular/core';
import {DataBlob} from "../mock-data/DataBlob";
import {MOCK_DATA} from "../mock-data/mock-data";

@Injectable()
export class DataLineService{
    source:string = 'dummyData';
    sourceMap:any = {
        'dummyData': ()=>{return MOCK_DATA}
    };

    getData(source:string,args): DataBlob[]{
        let getFunc = this.sourceMap[(source || this.source || 'dummyData')];

        if(typeof getFunc === 'function'){
            return getFunc.apply(this,...args);
        }else{
            return getFunc;
        }
    }
}
