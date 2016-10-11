import {Component} from "@angular/core";
import {FormDataService} from "./FormData.service";
@Component({
    template:"<dynamic-form [fieldInputs]='fieldInputs'></dynamic-form>"
})
export class DynamicFormsExampleComponent{
    fieldInputs:any;

    constructor(service:FormDataService){
        this.fieldInputs = service.getQuestions();
    }
}