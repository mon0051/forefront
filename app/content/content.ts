import {Component} from '@angular/core';
import {GameOfLife} from '../game-of-life/gol';
import {UrlHelper} from "../util/url-helper";

@Component({
    selector: 'forefront-content',
    templateUrl: UrlHelper.resolvePath('app/content/content.html'),
    directives: [GameOfLife]
})
export class ForeFrontContent{

}