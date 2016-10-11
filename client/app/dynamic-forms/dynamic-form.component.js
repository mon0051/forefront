import { Component, Input } from '@angular/core';
import { FieldInputControlService } from "./field-input-control.service";
export var DynamicFormComponent = (function () {
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
    DynamicFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-form',
                    templateUrl: 'dynamic-form-component.html',
                    providers: [FieldInputControlService]
                },] },
    ];
    /** @nocollapse */
    DynamicFormComponent.ctorParameters = [
        { type: FieldInputControlService, },
    ];
    DynamicFormComponent.propDecorators = {
        'fieldInputs': [{ type: Input },],
    };
    return DynamicFormComponent;
}());
//# sourceMappingURL=dynamic-form.component.js.map