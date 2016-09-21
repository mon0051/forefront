import {Component} from '@angular/core';
import {resolvePath} from '../util/url-helper';

@Component({
    selector: 'home-component',
    templateUrl: resolvePath('app/home/home.html')
})
export class HomeComponent{

}
