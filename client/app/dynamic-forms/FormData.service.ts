import {Injectable}       from '@angular/core';
import {FieldInputBase, FieldInputTextbox, FieldInputDropdown} from "./FieldInput";

@Injectable()
export class FormDataService {
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    getQuestions() {
        let questions: FieldInputBase<any>[] = [
            new FieldInputDropdown({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    {key: 'solid', value: 'Solid'},
                    {key: 'great', value: 'Great'},
                    {key: 'good', value: 'Good'},
                    {key: 'unproven', value: 'Unproven'}
                ],
                order: 3
            }),
            new FieldInputTextbox({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),
            new FieldInputTextbox({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];
        return questions.sort((a, b) => a.order - b.order);
    }
}