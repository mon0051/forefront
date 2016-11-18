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
var core_1 = require('@angular/core');
var field_input_control_service_1 = require("./field-input-control.service");
var DynamicFormComponent = (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this.fieldInputs = [];
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.fieldInputs);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DynamicFormComponent.prototype, "fieldInputs", void 0);
    DynamicFormComponent = __decorate([
        core_1.Component({
            selector: 'dynamic-form',
            templateUrl: 'dynamic-form-component.html',
            providers: [field_input_control_service_1.FieldInputControlService],
            moduleId: (module || { id: undefined }).id
        }), 
        __metadata('design:paramtypes', [field_input_control_service_1.FieldInputControlService])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;
//# sourceMappingURL=dynamic-form.component.js.map