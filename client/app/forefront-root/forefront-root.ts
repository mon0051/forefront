import {ForeFrontNav} from '../nav/nav';
import {ForeFrontContent} from '../content/content';
import {pathPrefix} from '../util/url-helper';


import {Component} from '@angular/core';
@Component({
    selector: 'forefront-root',
    templateUrl: pathPrefix+'app/forefront-root/forefront-root.html',
    //providers: [ForeFrontNav, ForeFrontContent]
})
export class ForeFrontRoot {
    title: string = 'Forefront Root';
}