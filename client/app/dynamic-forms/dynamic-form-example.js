import { Component } from "@angular/core";
import { FormDataService } from "./FormData.service";
export var DynamicFormsExampleComponent = (function () {
    function DynamicFormsExampleComponent(service) {
        this.fieldInputs = service.getQuestions();
    }
    DynamicFormsExampleComponent.decorators = [
        { type: Component, args: [{
                    moduleId: (module || { id: undefined }).id,
                    template: "<div><dynamic-form [fieldInputs]='fieldInputs'></dynamic-form></div>"
                },] },
    ];
    /** @nocollapse */
    DynamicFormsExampleComponent.ctorParameters = [
        { type: FormDataService, },
    ];
    return DynamicFormsExampleComponent;
}());
//# sourceMappingURL=dynamic-form-example.js.map