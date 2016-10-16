import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/operator/toPromise";
export var HttpDataLine = (function () {
    function HttpDataLine(http) {
        this.http = http;
    }
    HttpDataLine.prototype.getDataAsPromise = function () {
        return this.http.get('api/values')
            .toPromise()
            .then(function (x) { return x.json() || { content: 'nothting' }; })
            .catch(function () { return console.log("Http Error"); });
    };
    ;
    HttpDataLine.prototype.getDataAsObservable = function () {
        return this.http.get('api/values').map(function (x) { return x.json() || {}; });
    };
    HttpDataLine.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HttpDataLine.ctorParameters = [
        { type: Http, },
    ];
    return HttpDataLine;
}());
//# sourceMappingURL=http-dataline.js.map