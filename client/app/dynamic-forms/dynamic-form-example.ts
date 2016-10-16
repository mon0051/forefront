import {Component} from "@angular/core";
import {FormDataService} from "./FormData.service";
@Component({
    moduleId: (module || {id: undefined}).id,
    template:"<div><dynamic-form [fieldInputs]='fieldInputs'></dynamic-form></div>"
})
export class DynamicFormsExampleComponent{
    fieldInputs:any;

    constructor(service:FormDataService){
        this.fieldInputs = service.getQuestions();
    }
}