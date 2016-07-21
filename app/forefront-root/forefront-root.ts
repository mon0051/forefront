import {ForeFrontNav} from '../nav/nav';
import {ForeFrontContent} from '../content/content';

import {Component} from '@angular/core';
@Component({
    selector: 'forefront-root',
    templateUrl: './app/forefront-root/forefront-root.html',
    directives: [ForeFrontNav, ForeFrontContent]
})
export class ForeFrontRoot {
    title: string = 'Forefront Root';
}