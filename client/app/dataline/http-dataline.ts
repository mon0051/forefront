import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/operator/toPromise";

@Injectable()
export class HttpDataLine{
    http: Http;

    getData():Promise<any> {
        return this.http.get('api/values')
            .toPromise()
            .then(x=> x.json() || {content:'nothting'})
            .catch(()=>console.log("Http Error"));
    };

    constructor(http:Http){
        this.http = http;
    }
}