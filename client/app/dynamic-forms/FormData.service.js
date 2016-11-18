import { Injectable } from '@angular/core';
import { FieldInputTextbox, FieldInputDropdown } from "./FieldInput";
export var FormDataService = (function () {
    function FormDataService() {
    }
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    FormDataService.prototype.getQuestions = function () {
        var questions = [
            new FieldInputDropdown({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
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
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    FormDataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FormDataService.ctorParameters = [];
    return FormDataService;
}());
//# sourceMappingURL=FormData.service.js.map