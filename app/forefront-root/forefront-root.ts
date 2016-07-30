import {ForeFrontNav} from '../nav/nav';
import {ForeFrontContent} from '../content/content';
import {UrlHelper} from '../util/url-helper';


import {Component} from '@angular/core';
import {GameOfLife} from "../game-of-life/game-of-life";
@Component({
    selector: 'forefront-root',
    templateUrl: UrlHelper.resolvePath('app/forefront-root/forefront-root.html'),
    directives: [ForeFrontNav, ForeFrontContent]
})
export class ForeFrontRoot {
    title: string = 'Forefront Root';
}