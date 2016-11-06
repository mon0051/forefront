import {Component,Input} from "@angular/core";
import {Battler} from "./game-logic/base_objects/Battler";

@Component({
    moduleId: (module || {id: undefined}).id,
    selector:"status-bar",
    templateUrl:"status-bar.component.html"
})
export class StatusBarComponent{
    @Input() battler:Battler;
}

@Component({
    moduleId: (module || {id: undefined}).id,
    selector: "battler-image",
    templateUrl: "battler-image.component.html"
})
export class BattlerImage{
    @Input() battler: Battler;
    @Input() orientation:string;

    getImage(){
        console.log(this.orientation);
        if(this.orientation === "back"){
            return this.battler.backImage;
        }else{
            return this.battler.frontImage;
        }
    }
}