import { Component, OnInit } from '@angular/core';
import {Engine} from "./engine";

@Component({
    selector: 'brain',
    templateUrl: 'brain.html'
})
export class Brain implements OnInit {
    engine: Engine = new Engine();
    inputX: number = 0;
    inputY: number = 0;
    ngOnInit() { }
}