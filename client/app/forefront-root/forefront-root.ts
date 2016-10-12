import {Component} from '@angular/core';
@Component({
    moduleId: (module || {id: undefined}).id,
    selector: 'forefront-root',
    templateUrl: 'forefront-root.html'
})
export class ForeFrontRoot {
    title: string = 'Forefront Root';
}