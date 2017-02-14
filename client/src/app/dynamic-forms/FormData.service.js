"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FieldInput_1 = require("./FieldInput");
var FormDataService = (function () {
    function FormDataService() {
    }
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    FormDataService.prototype.getQuestions = function () {
        var questions = [
            new FieldInput_1.FieldInputDropdown({
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
            new FieldInput_1.FieldInputTextbox({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),
            new FieldInput_1.FieldInputTextbox({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    return FormDataService;
}());
FormDataService = __decorate([
    core_1.Injectable()
], FormDataService);
exports.FormDataService = FormDataService;
//# sourceMappingURL=FormData.service.js.map