import {Component, Input} from '@angular/core';
import {FormGroup}        from '@angular/forms';
import {FieldInputBase} from "./FieldInput";

@Component({
    moduleId: module.id,
    selector: 'df-question',
    templateUrl: 'dynamic-form-question-component.html'
})
export class DynamicFormQuestionComponent {
    @Input() fieldInput: FieldInputBase<any>;
    @Input() form: FormGroup;

    get isValid() {
        return this.form.controls[this.fieldInput.key].valid;
    }
}