import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export var FieldInputControlService = (function () {
    function FieldInputControlService() {
    }
    FieldInputControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    };
    FieldInputControlService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FieldInputControlService.ctorParameters = [];
    return FieldInputControlService;
}());
//# sourceMappingURL=field-input-control.service.js.map