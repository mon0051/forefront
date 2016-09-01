import {Component, OnInit} from "@angular/core";
import {UrlHelper} from "../util/url-helper";
import {CardWidget} from "../widget/widget";
import {DataLineRepository} from "./dataline";

@Component({
    selector:'data-line-component',
    templateUrl:UrlHelper.resolvePath('app/dataline/data-line-component.html'),
    directives:[CardWidget],
    providers:[DataLineRepository]
})
export class DataLineComponent implements OnInit{
    data:any;
    dataLineService:DataLineRepository;

    ngOnInit(){
        //this.data = this.dataLineService.subscribe(data=>this.data=data);
    };

    stringed(): string {
        try {
            return JSON.stringify(this.data, null, 2);
        }catch(e) {
            console.log(e);
            console.log(this.data);
            return this.data.toString();
        }
    }

    update(): void{
        this.data = this.dataLineService.getData(null, null);
    }

    constructor(ds: DataLineRepository){
        this.dataLineService = ds;
        this.dataLineService.getData('http', null)
            .then((r)=>this.data = r);
    }
}
