import {Component} from '@angular/core';
import {UrlHelper} from '../util/url-helper';

@Component({
    selector: 'home-component',
    templateUrl: UrlHelper.resolvePath('app/home/home.html')
})
export class HomeComponent{

}
