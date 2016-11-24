/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/element');
var import3 = require('../../../app/line-height/typography-thinger.component');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var import10 = require('@angular/forms/src/directives/default_value_accessor');
var import11 = require('@angular/forms/src/directives/number_value_accessor');
var import12 = require('@angular/forms/src/directives/ng_model');
var import13 = require('@angular/forms/src/directives/ng_control_status');
var import14 = require('@angular/core/src/linker/element_ref');
var import15 = require('@angular/forms/src/directives/control_value_accessor');
var import16 = require('@angular/forms/src/directives/ng_control');
var import17 = require('@angular/core/src/security');
var renderType_TypographyThinger_Host = null;
var _View_TypographyThinger_Host0 = (function (_super) {
    __extends(_View_TypographyThinger_Host0, _super);
    function _View_TypographyThinger_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TypographyThinger_Host0, renderType_TypographyThinger_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TypographyThinger_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('typography-thinger', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TypographyThinger0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TypographyThinger_0_4 = new import3.TypographyThingerComponent();
        this._appEl_0.initComponent(this._TypographyThinger_0_4, [], compView_0);
        compView_0.create(this._TypographyThinger_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TypographyThinger_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.TypographyThingerComponent) && (0 === requestNodeIndex))) {
            return this._TypographyThinger_0_4;
        }
        return notFoundResult;
    };
    return _View_TypographyThinger_Host0;
}(import1.AppView));
function viewFactory_TypographyThinger_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TypographyThinger_Host === null)) {
        (renderType_TypographyThinger_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_TypographyThinger_Host0(viewUtils, parentInjector, declarationEl);
}
exports.TypographyThingerNgFactory = new import9.ComponentFactory('typography-thinger', viewFactory_TypographyThinger_Host0, import3.TypographyThingerComponent);
var styles_TypographyThinger = [];
var renderType_TypographyThinger = null;
var _View_TypographyThinger0 = (function (_super) {
    __extends(_View_TypographyThinger0, _super);
    function _View_TypographyThinger0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TypographyThinger0, renderType_TypographyThinger, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TypographyThinger0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'typography-thinger row');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'col-sm-2');
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'card');
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'top-line-heavy');
        this._text_9 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_10 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'card-block');
        this._text_11 = this.renderer.createText(this._el_10, '\n                    ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'div', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'row');
        this._text_13 = this.renderer.createText(this._el_12, '\n                        ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'label', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'input-group col-sm-6');
        this.renderer.setElementAttribute(this._el_14, 'for', 'font-size');
        this._text_15 = this.renderer.createText(this._el_14, 'Font Size', null);
        this._text_16 = this.renderer.createText(this._el_12, '\n                        ', null);
        this._el_17 = this.renderer.createElement(this._el_12, 'input', null);
        this.renderer.setElementAttribute(this._el_17, 'class', 'form-control col-sm-5');
        this.renderer.setElementAttribute(this._el_17, 'id', 'font-size');
        this.renderer.setElementAttribute(this._el_17, 'type', 'number');
        this._DefaultValueAccessor_17_3 = new import10.DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_17));
        this._NumberValueAccessor_17_4 = new import11.NumberValueAccessor(this.renderer, new import14.ElementRef(this._el_17));
        this._NG_VALUE_ACCESSOR_17_5 = [
            this._DefaultValueAccessor_17_3,
            this._NumberValueAccessor_17_4
        ];
        this._NgModel_17_6 = new import12.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_17_5);
        this._NgControl_17_7 = this._NgModel_17_6;
        this._NgControlStatus_17_8 = new import13.NgControlStatus(this._NgControl_17_7);
        this._text_18 = this.renderer.createText(this._el_12, '\n                    ', null);
        this._text_19 = this.renderer.createText(this._el_10, '\n                    ', null);
        this._el_20 = this.renderer.createElement(this._el_10, 'div', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'row');
        this._text_21 = this.renderer.createText(this._el_20, '\n                        ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'label', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'input-group col-sm-6');
        this.renderer.setElementAttribute(this._el_22, 'for', 'line-height');
        this._text_23 = this.renderer.createText(this._el_22, 'Line Height', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n                        ', null);
        this._el_25 = this.renderer.createElement(this._el_20, 'input', null);
        this.renderer.setElementAttribute(this._el_25, 'class', 'form-control col-sm-5');
        this.renderer.setElementAttribute(this._el_25, 'id', 'line-height');
        this.renderer.setElementAttribute(this._el_25, 'type', 'number');
        this._DefaultValueAccessor_25_3 = new import10.DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_25));
        this._NumberValueAccessor_25_4 = new import11.NumberValueAccessor(this.renderer, new import14.ElementRef(this._el_25));
        this._NG_VALUE_ACCESSOR_25_5 = [
            this._DefaultValueAccessor_25_3,
            this._NumberValueAccessor_25_4
        ];
        this._NgModel_25_6 = new import12.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_25_5);
        this._NgControl_25_7 = this._NgModel_25_6;
        this._NgControlStatus_25_8 = new import13.NgControlStatus(this._NgControl_25_7);
        this._text_26 = this.renderer.createText(this._el_20, '\n                    ', null);
        this._text_27 = this.renderer.createText(this._el_10, '\n                    ', null);
        this._el_28 = this.renderer.createElement(this._el_10, 'div', null);
        this.renderer.setElementAttribute(this._el_28, 'class', 'row');
        this._text_29 = this.renderer.createText(this._el_28, '\n                        ', null);
        this._el_30 = this.renderer.createElement(this._el_28, 'label', null);
        this.renderer.setElementAttribute(this._el_30, 'class', 'input-group col-sm-6');
        this.renderer.setElementAttribute(this._el_30, 'for', 'line-width');
        this._text_31 = this.renderer.createText(this._el_30, 'Line Width', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n                        ', null);
        this._el_33 = this.renderer.createElement(this._el_28, 'input', null);
        this.renderer.setElementAttribute(this._el_33, 'class', 'form-control col-sm-5');
        this.renderer.setElementAttribute(this._el_33, 'id', 'line-width');
        this.renderer.setElementAttribute(this._el_33, 'type', 'number');
        this._DefaultValueAccessor_33_3 = new import10.DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_33));
        this._NumberValueAccessor_33_4 = new import11.NumberValueAccessor(this.renderer, new import14.ElementRef(this._el_33));
        this._NG_VALUE_ACCESSOR_33_5 = [
            this._DefaultValueAccessor_33_3,
            this._NumberValueAccessor_33_4
        ];
        this._NgModel_33_6 = new import12.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_33_5);
        this._NgControl_33_7 = this._NgModel_33_6;
        this._NgControlStatus_33_8 = new import13.NgControlStatus(this._NgControl_33_7);
        this._text_34 = this.renderer.createText(this._el_28, '\n                    ', null);
        this._text_35 = this.renderer.createText(this._el_10, '\n                ', null);
        this._text_36 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_37 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_38 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_39 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_39, 'class', 'col-sm-6');
        this._text_40 = this.renderer.createText(this._el_39, '\n            ', null);
        this._el_41 = this.renderer.createElement(this._el_39, 'div', null);
        this.renderer.setElementAttribute(this._el_41, 'class', 'card widget-std');
        this._text_42 = this.renderer.createText(this._el_41, '\n\n                ', null);
        this._el_43 = this.renderer.createElement(this._el_41, 'div', null);
        this.renderer.setElementAttribute(this._el_43, 'class', 'top-line-heavy');
        this._text_44 = this.renderer.createText(this._el_41, '\n\n                ', null);
        this._el_45 = this.renderer.createElement(this._el_41, 'div', null);
        this.renderer.setElementAttribute(this._el_45, 'class', 'card-block');
        this._text_46 = this.renderer.createText(this._el_45, '\n                    ', null);
        this._el_47 = this.renderer.createElement(this._el_45, 'div', null);
        this.renderer.setElementAttribute(this._el_47, 'class', 'test-area');
        this._text_48 = this.renderer.createText(this._el_47, '\n                        ', null);
        this._el_49 = this.renderer.createElement(this._el_47, 'p', null);
        this._text_50 = this.renderer.createText(this._el_49, '\n                            The Quick Brown Fox Jumped over the Lazy Dog. But just because the dog is lazy, doesn\'t mean\n                            it\'s not a dog. The results were messy.', null);
        this._text_51 = this.renderer.createText(this._el_47, '\n                        ', null);
        this._el_52 = this.renderer.createElement(this._el_47, 'p', null);
        this._text_53 = this.renderer.createText(this._el_52, '\n                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci\n                            velit,\n                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat\n                            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit\n                            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit\n                            qui\n                            in ea voluptate velit esse quam\n                        ', null);
        this._text_54 = this.renderer.createText(this._el_47, '\n                        ', null);
        this._el_55 = this.renderer.createElement(this._el_47, 'p', null);
        this._text_56 = this.renderer.createText(this._el_55, '\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et\n                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n                            ut\n                            aliquip\n                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                            cillum\n                            dolore\n                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n                            officia\n                            deserunt mollit anim id est laborum.', null);
        this._text_57 = this.renderer.createText(this._el_47, '\n                    ', null);
        this._text_58 = this.renderer.createText(this._el_45, '\n                ', null);
        this._text_59 = this.renderer.createText(this._el_41, '\n            ', null);
        this._text_60 = this.renderer.createText(this._el_39, '\n        ', null);
        this._text_61 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_62 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_17, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_17_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_17, 'change', this.eventHandler(this._handle_change_17_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_17, 'input', this.eventHandler(this._handle_input_17_2.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_17, 'blur', this.eventHandler(this._handle_blur_17_3.bind(this)));
        this._expr_7 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_17_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_17_0.bind(this)));
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_25, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_25_0.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_25, 'change', this.eventHandler(this._handle_change_25_1.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_25, 'input', this.eventHandler(this._handle_input_25_2.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_25, 'blur', this.eventHandler(this._handle_blur_25_3.bind(this)));
        this._expr_21 = import7.UNINITIALIZED;
        var subscription_1 = this._NgModel_25_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_25_0.bind(this)));
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        var disposable_8 = this.renderer.listen(this._el_33, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_33_0.bind(this)));
        var disposable_9 = this.renderer.listen(this._el_33, 'change', this.eventHandler(this._handle_change_33_1.bind(this)));
        var disposable_10 = this.renderer.listen(this._el_33, 'input', this.eventHandler(this._handle_input_33_2.bind(this)));
        var disposable_11 = this.renderer.listen(this._el_33, 'blur', this.eventHandler(this._handle_blur_33_3.bind(this)));
        this._expr_35 = import7.UNINITIALIZED;
        var subscription_2 = this._NgModel_33_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_33_0.bind(this)));
        this._expr_36 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        this._expr_38 = import7.UNINITIALIZED;
        this._expr_39 = import7.UNINITIALIZED;
        this._expr_40 = import7.UNINITIALIZED;
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        this._expr_46 = import7.UNINITIALIZED;
        this._expr_47 = import7.UNINITIALIZED;
        this._expr_48 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        this._expr_50 = import7.UNINITIALIZED;
        this._expr_51 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._text_59,
            this._text_60,
            this._text_61,
            this._text_62
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9,
            disposable_10,
            disposable_11
        ], [
            subscription_0,
            subscription_1,
            subscription_2
        ]);
        return null;
    };
    _View_TypographyThinger0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.DefaultValueAccessor) && (17 === requestNodeIndex))) {
            return this._DefaultValueAccessor_17_3;
        }
        if (((token === import11.NumberValueAccessor) && (17 === requestNodeIndex))) {
            return this._NumberValueAccessor_17_4;
        }
        if (((token === import15.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_17_5;
        }
        if (((token === import12.NgModel) && (17 === requestNodeIndex))) {
            return this._NgModel_17_6;
        }
        if (((token === import16.NgControl) && (17 === requestNodeIndex))) {
            return this._NgControl_17_7;
        }
        if (((token === import13.NgControlStatus) && (17 === requestNodeIndex))) {
            return this._NgControlStatus_17_8;
        }
        if (((token === import10.DefaultValueAccessor) && (25 === requestNodeIndex))) {
            return this._DefaultValueAccessor_25_3;
        }
        if (((token === import11.NumberValueAccessor) && (25 === requestNodeIndex))) {
            return this._NumberValueAccessor_25_4;
        }
        if (((token === import15.NG_VALUE_ACCESSOR) && (25 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_25_5;
        }
        if (((token === import12.NgModel) && (25 === requestNodeIndex))) {
            return this._NgModel_25_6;
        }
        if (((token === import16.NgControl) && (25 === requestNodeIndex))) {
            return this._NgControl_25_7;
        }
        if (((token === import13.NgControlStatus) && (25 === requestNodeIndex))) {
            return this._NgControlStatus_25_8;
        }
        if (((token === import10.DefaultValueAccessor) && (33 === requestNodeIndex))) {
            return this._DefaultValueAccessor_33_3;
        }
        if (((token === import11.NumberValueAccessor) && (33 === requestNodeIndex))) {
            return this._NumberValueAccessor_33_4;
        }
        if (((token === import15.NG_VALUE_ACCESSOR) && (33 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_33_5;
        }
        if (((token === import12.NgModel) && (33 === requestNodeIndex))) {
            return this._NgModel_33_6;
        }
        if (((token === import16.NgControl) && (33 === requestNodeIndex))) {
            return this._NgControl_33_7;
        }
        if (((token === import13.NgControlStatus) && (33 === requestNodeIndex))) {
            return this._NgControlStatus_33_8;
        }
        return notFoundResult;
    };
    _View_TypographyThinger0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_7 = this.context.fontSize;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._NgModel_17_6.model = currVal_7;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_7, currVal_7);
            this._expr_7 = currVal_7;
        }
        if ((changes !== null)) {
            this._NgModel_17_6.ngOnChanges(changes);
        }
        changes = null;
        var currVal_21 = this.context.lineHeight;
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this._NgModel_25_6.model = currVal_21;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_21, currVal_21);
            this._expr_21 = currVal_21;
        }
        if ((changes !== null)) {
            this._NgModel_25_6.ngOnChanges(changes);
        }
        changes = null;
        var currVal_35 = this.context.lineWidth;
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this._NgModel_33_6.model = currVal_35;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_35, currVal_35);
            this._expr_35 = currVal_35;
        }
        if ((changes !== null)) {
            this._NgModel_33_6.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_8 = this._NgControlStatus_17_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_17, 'ng-untouched', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_17_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_17, 'ng-touched', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_17_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_17, 'ng-pristine', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatus_17_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_17, 'ng-dirty', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._NgControlStatus_17_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_17, 'ng-valid', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._NgControlStatus_17_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_17, 'ng-invalid', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_22 = this._NgControlStatus_25_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_25, 'ng-untouched', currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_23 = this._NgControlStatus_25_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_25, 'ng-touched', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = this._NgControlStatus_25_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_25, 'ng-pristine', currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_25 = this._NgControlStatus_25_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_25, 'ng-dirty', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_26 = this._NgControlStatus_25_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_25, 'ng-valid', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._NgControlStatus_25_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_25, 'ng-invalid', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_36 = this._NgControlStatus_33_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setElementClass(this._el_33, 'ng-untouched', currVal_36);
            this._expr_36 = currVal_36;
        }
        var currVal_37 = this._NgControlStatus_33_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setElementClass(this._el_33, 'ng-touched', currVal_37);
            this._expr_37 = currVal_37;
        }
        var currVal_38 = this._NgControlStatus_33_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setElementClass(this._el_33, 'ng-pristine', currVal_38);
            this._expr_38 = currVal_38;
        }
        var currVal_39 = this._NgControlStatus_33_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementClass(this._el_33, 'ng-dirty', currVal_39);
            this._expr_39 = currVal_39;
        }
        var currVal_40 = this._NgControlStatus_33_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setElementClass(this._el_33, 'ng-valid', currVal_40);
            this._expr_40 = currVal_40;
        }
        var currVal_41 = this._NgControlStatus_33_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this.renderer.setElementClass(this._el_33, 'ng-invalid', currVal_41);
            this._expr_41 = currVal_41;
        }
        var currVal_42 = this.context.containerSize();
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setElementStyle(this._el_41, 'width', ((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_42) == null) ? null : this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_42).toString()));
            this._expr_42 = currVal_42;
        }
        var currVal_43 = (('' + this.context.lineHeight) + 'px');
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setElementStyle(this._el_49, 'line-height', ((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_43) == null) ? null : this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_43).toString()));
            this._expr_43 = currVal_43;
        }
        var currVal_44 = this.context.fontSize;
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementStyle(this._el_49, 'font-size', ((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_44) == null) ? null : this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_44).toString()));
            this._expr_44 = currVal_44;
        }
        var currVal_45 = this.context.lineWidth;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementStyle(this._el_49, 'width', ((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_45) == null) ? null : this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_45).toString()));
            this._expr_45 = currVal_45;
        }
        var currVal_46 = (('' + this.context.lineHeight) + 'px');
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setElementStyle(this._el_52, 'line-height', ((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_46) == null) ? null : this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_46).toString()));
            this._expr_46 = currVal_46;
        }
        var currVal_47 = this.context.fontSize;
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this.renderer.setElementStyle(this._el_52, 'font-size', ((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_47) == null) ? null : this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_47).toString()));
            this._expr_47 = currVal_47;
        }
        var currVal_48 = this.context.lineWidth;
        if (import4.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this.renderer.setElementStyle(this._el_52, 'width', ((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_48) == null) ? null : this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_48).toString()));
            this._expr_48 = currVal_48;
        }
        var currVal_49 = (('' + this.context.lineHeight) + 'px');
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementStyle(this._el_55, 'line-height', ((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_49) == null) ? null : this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_49).toString()));
            this._expr_49 = currVal_49;
        }
        var currVal_50 = this.context.fontSize;
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setElementStyle(this._el_55, 'font-size', ((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_50) == null) ? null : this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_50).toString()));
            this._expr_50 = currVal_50;
        }
        var currVal_51 = this.context.lineWidth;
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setElementStyle(this._el_55, 'width', ((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_51) == null) ? null : this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE, currVal_51).toString()));
            this._expr_51 = currVal_51;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TypographyThinger0.prototype.destroyInternal = function () {
        this._NgModel_17_6.ngOnDestroy();
        this._NgModel_25_6.ngOnDestroy();
        this._NgModel_33_6.ngOnDestroy();
    };
    _View_TypographyThinger0.prototype._handle_ngModelChange_17_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.fontSize = $event) !== false);
        return (true && pd_0);
    };
    _View_TypographyThinger0.prototype._handle_change_17_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.resolveSizes('FontSize') !== false);
        var pd_1 = (this._NumberValueAccessor_17_4.onChange($event.target.value) !== false);
        return ((true && pd_0) && pd_1);
    };
    _View_TypographyThinger0.prototype._handle_input_17_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_17_3.onChange($event.target.value) !== false);
        var pd_1 = (this._NumberValueAccessor_17_4.onChange($event.target.value) !== false);
        return ((true && pd_0) && pd_1);
    };
    _View_TypographyThinger0.prototype._handle_blur_17_3 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_17_3.onTouched() !== false);
        var pd_1 = (this._NumberValueAccessor_17_4.onTouched() !== false);
        return ((true && pd_0) && pd_1);
    };
    _View_TypographyThinger0.prototype._handle_ngModelChange_25_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.lineHeight = $event) !== false);
        return (true && pd_0);
    };
    _View_TypographyThinger0.prototype._handle_change_25_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.resolveSizes('LineHeight') !== false);
        var pd_1 = (this._NumberValueAccessor_25_4.onChange($event.target.value) !== false);
        return ((true && pd_0) && pd_1);
    };
    _View_TypographyThinger0.prototype._handle_input_25_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_25_3.onChange($event.target.value) !== false);
        var pd_1 = (this._NumberValueAccessor_25_4.onChange($event.target.value) !== false);
        return ((true && pd_0) && pd_1);
    };
    _View_TypographyThinger0.prototype._handle_blur_25_3 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_25_3.onTouched() !== false);
        var pd_1 = (this._NumberValueAccessor_25_4.onTouched() !== false);
        return ((true && pd_0) && pd_1);
    };
    _View_TypographyThinger0.prototype._handle_ngModelChange_33_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.lineWidth = $event) !== false);
        return (true && pd_0);
    };
    _View_TypographyThinger0.prototype._handle_change_33_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.resolveSizes('LineWidth') !== false);
        var pd_1 = (this._NumberValueAccessor_33_4.onChange($event.target.value) !== false);
        return ((true && pd_0) && pd_1);
    };
    _View_TypographyThinger0.prototype._handle_input_33_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_33_3.onChange($event.target.value) !== false);
        var pd_1 = (this._NumberValueAccessor_33_4.onChange($event.target.value) !== false);
        return ((true && pd_0) && pd_1);
    };
    _View_TypographyThinger0.prototype._handle_blur_33_3 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_33_3.onTouched() !== false);
        var pd_1 = (this._NumberValueAccessor_33_4.onTouched() !== false);
        return ((true && pd_0) && pd_1);
    };
    return _View_TypographyThinger0;
}(import1.AppView));
function viewFactory_TypographyThinger0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TypographyThinger === null)) {
        (renderType_TypographyThinger = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_TypographyThinger, {}));
    }
    return new _View_TypographyThinger0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_TypographyThinger0 = viewFactory_TypographyThinger0;
//# sourceMappingURL=typography-thinger.ngfactory.js.map