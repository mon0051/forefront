import { Component, OnInit } from '@angular/core';

@Component({
    moduleId:(module || {id:undefined}).id,
    selector: 'brain',
    templateUrl: 'brain.component.html'
})
export class BrainComponent implements OnInit {
    inputX: number = 0;
    inputY: number = 0;
    ngOnInit() { }
}