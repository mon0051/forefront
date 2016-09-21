import {Component} from "@angular/core";
import {resolvePath} from "../util/url-helper";


@Component({
    selector:'card-widget',
    templateUrl:resolvePath('app/widget/widget.html')
})
export class CardWidget{

}
