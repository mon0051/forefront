import {Component} from "@angular/core";
import {UrlHelper} from "./url-helper";
@Component({
    templateUrl: UrlHelper.resolvePath('app/util/page-not-found.html')
})
export class PageNotFoundComponent{

}