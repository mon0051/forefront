import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/operator/toPromise";
import {Observable} from "rxjs/observable";

@Injectable()
export class HttpDataLine{
    http: Http;

    getDataAsPromise(): Promise<any> {
        return this.http.get('api/values')
            .toPromise()
            .then(x=> x.json() || {content:'nothting'})
            .catch(()=>console.log("Http Error"));
    };

    getDataAsObservable(): Observable<any>{
        return this.http.get('api/values').map(x=>x.json()||{});
    }

    constructor(http:Http){
        this.http = http;
    }
}