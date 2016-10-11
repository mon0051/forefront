import {Component, Input, OnInit}  from '@angular/core';
import {FormGroup}                 from '@angular/forms';

import {FieldInputBase} from "./FieldInput";
import {FieldInputControlService} from "./field-input-control.service";
@Component({
    selector: 'dynamic-form',
    templateUrl: 'dynamic-form-component.html',
    providers: [FieldInputControlService]
})
export class DynamicFormComponent implements OnInit {
    @Input() fieldInputs: FieldInputBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: FieldInputControlService) {
    }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.fieldInputs);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}