import {Component} from '@angular/core';

@Component({
    moduleId: (module || {id: undefined}).id,
    selector: 'forefront-content',
    templateUrl: 'content.component.html',
    //precompile: [PageNotFoundComponent,GameOfLife,HomeComponent,TypographyThinger, DataLineComponent]
})
export class ForeFrontContentComponent{

}