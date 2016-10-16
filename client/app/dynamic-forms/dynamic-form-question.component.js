import { Component, Input } from '@angular/core';
export var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent() {
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.fieldInput.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormQuestionComponent.decorators = [
        { type: Component, args: [{
                    moduleId: (module || { id: undefined }).id,
                    selector: 'df-question',
                    templateUrl: 'dynamic-form-question-component.html'
                },] },
    ];
    /** @nocollapse */
    DynamicFormQuestionComponent.ctorParameters = [];
    DynamicFormQuestionComponent.propDecorators = {
        'fieldInput': [{ type: Input },],
        'form': [{ type: Input },],
    };
    return DynamicFormQuestionComponent;
}());
//# sourceMappingURL=dynamic-form-question.component.js.map