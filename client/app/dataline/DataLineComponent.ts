import {Component} from "@angular/core";
import {CardWidget} from "../widget/widget";
import {DataLineRepository} from "./DataLineRepository";

@Component({
    moduleId: (module || {id: undefined}).id,
    selector: 'data-line-component',
    templateUrl: 'data-line-component.html',
    providers: [DataLineRepository, CardWidget]
})
export class DataLineComponent {
    data: any;
    observed: any;
    dataLineService: DataLineRepository;
    source: string;
    sourceTypes: Array<string> = ['dummyData', 'http'];

    stringed(): string {
        try {
            return JSON.stringify(this.data, null, 4);
        } catch (e) {
            console.log(e);
            console.log(this.data);
            return this.data.toString();
        }
    }

    stringedObservable(): string {
        try {
            return JSON.stringify(this.observed, null, 4);
        } catch (e) {
            console.log(e);
            console.log(this.observed);
            return this.observed.toString();
        }
    }

    update(): void {
        this.data = this.dataLineService.getDataAsPromise(null, null);
    }

    constructor(ds: DataLineRepository) {
        this.dataLineService = ds;
        this.source = 'dummyData';

        ds.getDataAsPromise(this.source, null)
            .then((r)=> this.data = r);

        ds.getDataAsObservable(this.source, null)
            .subscribe((x)=>this.observed = x);
    }
}
