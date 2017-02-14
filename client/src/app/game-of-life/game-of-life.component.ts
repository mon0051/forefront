import {Component} from '@angular/core';
import {GridComponent} from './grid.component';
import {Settings} from "./settings";

@Component({
    moduleId: (module || {id: undefined}).id,
    selector: 'game-of-life',
    templateUrl: 'game-of-life.component.html',
    providers: [Settings,GridComponent],
})
export class GameOfLifeComponent{
    grid : GridComponent = new GridComponent(new Settings());
}