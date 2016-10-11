import {Guid} from "../util/Guid";
export class FieldInputBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string
    } = {}) {
        this.value = options.value;
        this.key = options.key || new Guid().getId();
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
}

export class FieldInputTextbox extends FieldInputBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}

export class FieldInputDropdown extends FieldInputBase<string> {
    controlType = 'textbox';
    type: string;
    options: {key: string,value: string}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
        this.options = options['options'] || [];
    }
}