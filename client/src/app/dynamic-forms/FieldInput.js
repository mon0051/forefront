"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return FieldInputTextbox;
}(FieldInputBase));
exports.FieldInputTextbox = FieldInputTextbox;
var FieldInputDropdown = (function (_super) {
    __extends(FieldInputDropdown, _super);
    function FieldInputDropdown(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.options = [];
        _this.type = options['type'] || '';
        _this.options = options['options'] || [];
        return _this;
    }
    return FieldInputDropdown;
}(FieldInputBase));
exports.FieldInputDropdown = FieldInputDropdown;
//# sourceMappingURL=FieldInput.js.map