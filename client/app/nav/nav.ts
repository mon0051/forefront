import {Component} from '@angular/core';
import {resolvePath} from "../util/url-helper";

@Component({
    selector: 'forefront-nav',
    templateUrl: resolvePath('app/nav/nav.html')
})
export class ForeFrontNav{

}