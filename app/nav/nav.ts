import {Component} from '@angular/core';
import {UrlHelper} from "../util/url-helper";
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'forefront-nav',
    templateUrl: UrlHelper.resolvePath('app/nav/nav.html'),
    directives:[ROUTER_DIRECTIVES]
})
export class ForeFrontNav{

}