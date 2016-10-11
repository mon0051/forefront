import {Injectable}   from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {FieldInputBase} from './FieldInput';

@Injectable()
export class FieldInputControlService {
    constructor() {
    }

    toFormGroup(questions: FieldInputBase<any>[]) {
        let group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }
}