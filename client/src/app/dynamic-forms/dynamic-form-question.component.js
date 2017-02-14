"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FieldInput_1 = require("./FieldInput");
var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent() {
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.fieldInput.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    return DynamicFormQuestionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", FieldInput_1.FieldInputBase)
], DynamicFormQuestionComponent.prototype, "fieldInput", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup)
], DynamicFormQuestionComponent.prototype, "form", void 0);
DynamicFormQuestionComponent = __decorate([
    core_1.Component({
        moduleId: (module || { id: undefined }).id,
        selector: 'df-question',
        templateUrl: 'dynamic-form-question-component.html'
    })
], DynamicFormQuestionComponent);
exports.DynamicFormQuestionComponent = DynamicFormQuestionComponent;
//# sourceMappingURL=dynamic-form-question.component.js.map