import {Component} from "@angular/core";
import {UrlHelper} from "../util/url-helper";
import {CardWidget} from "../widget/widget";
import {DataLineService} from "./dataline";

@Component({
    selector:'data-line-component',
    templateUrl:UrlHelper.resolvePath('app/dataline/data-line-component.html'),
    directives:[CardWidget],
    providers:[DataLineService]
})
export class DataLineComponent{
    data:any;
    dataLineService:DataLineService;
    stringed(): string {
        return JSON.stringify(this.data,null,2);
    }

    update(): void{
        this.data = this.dataLineService.getData(null, null);
    }

    constructor(ds: DataLineService){
        this.dataLineService = ds;
        this.data = this.dataLineService.getData(null, null);
    }
}
