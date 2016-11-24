"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Guid_1 = require("../util/Guid");
var FieldInputBase = (function () {
    function FieldInputBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || new Guid_1.Guid().getId();
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
    return FieldInputBase;
}());
exports.FieldInputBase = FieldInputBase;
var FieldInputTextbox = (function (_super) {
    __extends(FieldInputTextbox, _super);
    function FieldInputTextbox(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'textbox';
        this.type = options['type'] || '';
    }
    return FieldInputTextbox;
}(FieldInputBase));
exports.FieldInputTextbox = FieldInputTextbox;
var FieldInputDropdown = (function (_super) {
    __extends(FieldInputDropdown, _super);
    function FieldInputDropdown(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'textbox';
        this.options = [];
        this.type = options['type'] || '';
        this.options = options['options'] || [];
    }
    return FieldInputDropdown;
}(FieldInputBase));
exports.FieldInputDropdown = FieldInputDropdown;
//# sourceMappingURL=FieldInput.js.map