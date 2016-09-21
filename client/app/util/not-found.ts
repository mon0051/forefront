import {Component} from "@angular/core";
import {resolvePath} from "./url-helper";
@Component({
    templateUrl: resolvePath('app/util/page-not-found.html')
})
export class PageNotFoundComponent{

}