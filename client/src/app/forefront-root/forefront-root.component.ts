import {Component} from '@angular/core';
@Component({
    moduleId: (module || {id: undefined}).id,
    selector: 'forefront-root',
    templateUrl: 'forefront-root.component.html'
})
export class ForeFrontRootComponent {
    title: string = 'Forefront Root';
}