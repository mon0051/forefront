import {Component} from '@angular/core';
import {GameOfLife} from '../game-of-life/gol';

@Component({
    selector: 'forefront-content',
    templateUrl: './app/content/content.html',
    directives: [GameOfLife]
})
export class ForeFrontContent{

}