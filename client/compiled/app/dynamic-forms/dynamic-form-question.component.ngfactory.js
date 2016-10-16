/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/dynamic-forms/dynamic-form-question.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import11 from '@angular/forms/src/directives/ng_control_status';
import * as import12 from '@angular/common/src/directives/ng_switch';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/forms/src/directives/control_container';
import * as import16 from '@angular/forms/src/directives/default_value_accessor';
import * as import17 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/forms/src/directives/control_value_accessor';
import * as import20 from '@angular/forms/src/directives/ng_control';
import * as import21 from '@angular/forms/src/directives/select_control_value_accessor';
import * as import22 from '@angular/common/src/directives/ng_for';
import * as import23 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import24 from '@angular/forms/src/directives/select_multiple_control_value_accessor';
var renderType_DynamicFormQuestionComponent_Host = null;
var _View_DynamicFormQuestionComponent_Host0 = (function (_super) {
    __extends(_View_DynamicFormQuestionComponent_Host0, _super);
    function _View_DynamicFormQuestionComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DynamicFormQuestionComponent_Host0, renderType_DynamicFormQuestionComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DynamicFormQuestionComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('df-question', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_DynamicFormQuestionComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._DynamicFormQuestionComponent_0_4 = new import3.DynamicFormQuestionComponent();
        this._appEl_0.initComponent(this._DynamicFormQuestionComponent_0_4, [], compView_0);
        compView_0.create(this._DynamicFormQuestionComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_DynamicFormQuestionComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.DynamicFormQuestionComponent) && (0 === requestNodeIndex))) {
            return this._DynamicFormQuestionComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_DynamicFormQuestionComponent_Host0;
}(import1.AppView));
function viewFactory_DynamicFormQuestionComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DynamicFormQuestionComponent_Host === null)) {
        (renderType_DynamicFormQuestionComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_DynamicFormQuestionComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var DynamicFormQuestionComponentNgFactory = new import9.ComponentFactory('df-question', viewFactory_DynamicFormQuestionComponent_Host0, import3.DynamicFormQuestionComponent);
var styles_DynamicFormQuestionComponent = [];
var renderType_DynamicFormQuestionComponent = null;
var _View_DynamicFormQuestionComponent0 = (function (_super) {
    __extends(_View_DynamicFormQuestionComponent0, _super);
    function _View_DynamicFormQuestionComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DynamicFormQuestionComponent0, renderType_DynamicFormQuestionComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DynamicFormQuestionComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._FormGroupDirective_0_3 = new import10.FormGroupDirective(null, null);
        this._ControlContainer_0_4 = this._FormGroupDirective_0_3;
        this._NgControlStatusGroup_0_5 = new import11.NgControlStatusGroup(this._ControlContainer_0_4);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'label', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'div', null);
        this._NgSwitch_5_3 = new import12.NgSwitch();
        this._text_6 = this.renderer.createText(this._el_5, '\n    ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_7 = new import2.AppElement(7, 5, this, this._anchor_7);
        this._TemplateRef_7_5 = new import14.TemplateRef_(this._appEl_7, viewFactory_DynamicFormQuestionComponent1);
        this._NgSwitchCase_7_6 = new import12.NgSwitchCase(this._appEl_7.vcRef, this._TemplateRef_7_5, this._NgSwitch_5_3);
        this._text_8 = this.renderer.createText(this._el_5, '\n    ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_9 = new import2.AppElement(9, 5, this, this._anchor_9);
        this._TemplateRef_9_5 = new import14.TemplateRef_(this._appEl_9, viewFactory_DynamicFormQuestionComponent2);
        this._NgSwitchCase_9_6 = new import12.NgSwitchCase(this._appEl_9.vcRef, this._TemplateRef_9_5, this._NgSwitch_5_3);
        this._text_10 = this.renderer.createText(this._el_5, '\n  ', null);
        this._text_11 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_12 = new import2.AppElement(12, 0, this, this._anchor_12);
        this._TemplateRef_12_5 = new import14.TemplateRef_(this._appEl_12, viewFactory_DynamicFormQuestionComponent4);
        this._NgIf_12_6 = new import13.NgIf(this._appEl_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'submit', this.eventHandler(this._handle_submit_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_0, 'reset', this.eventHandler(this._handle_reset_0_1.bind(this)));
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._anchor_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._text_11,
            this._anchor_12,
            this._text_13
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_DynamicFormQuestionComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import12.NgSwitchCase) && (7 === requestNodeIndex))) {
            return this._NgSwitchCase_7_6;
        }
        if (((token === import14.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import12.NgSwitchCase) && (9 === requestNodeIndex))) {
            return this._NgSwitchCase_9_6;
        }
        if (((token === import12.NgSwitch) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._NgSwitch_5_3;
        }
        if (((token === import14.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import13.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6;
        }
        if (((token === import10.FormGroupDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._FormGroupDirective_0_3;
        }
        if (((token === import15.ControlContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._ControlContainer_0_4;
        }
        if (((token === import11.NgControlStatusGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._NgControlStatusGroup_0_5;
        }
        return notFoundResult;
    };
    _View_DynamicFormQuestionComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_2 = this.context.form;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._FormGroupDirective_0_3.form = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['form'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._FormGroupDirective_0_3.ngOnChanges(changes);
        }
        var currVal_11 = this.context.fieldInput.controlType;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._NgSwitch_5_3.ngSwitch = currVal_11;
            this._expr_11 = currVal_11;
        }
        var currVal_12 = 'textbox';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._NgSwitchCase_7_6.ngSwitchCase = currVal_12;
            this._expr_12 = currVal_12;
        }
        var currVal_13 = 'dropdown';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._NgSwitchCase_9_6.ngSwitchCase = currVal_13;
            this._expr_13 = currVal_13;
        }
        var currVal_14 = !this.context.isValid;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._NgIf_12_6.ngIf = currVal_14;
            this._expr_14 = currVal_14;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_3 = this._NgControlStatusGroup_0_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_0, 'ng-untouched', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._NgControlStatusGroup_0_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_0, 'ng-touched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatusGroup_0_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_0, 'ng-pristine', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatusGroup_0_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_0, 'ng-dirty', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatusGroup_0_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_0, 'ng-valid', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatusGroup_0_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_0, 'ng-invalid', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this.context.fieldInput.key;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementAttribute(this._el_2, 'for', ((currVal_9 == null) ? null : currVal_9.toString()));
            this._expr_9 = currVal_9;
        }
        var currVal_10 = import4.interpolate(1, '', this.context.fieldInput.label, '');
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_3, currVal_10);
            this._expr_10 = currVal_10;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_DynamicFormQuestionComponent0.prototype._handle_submit_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_0_3.onSubmit($event) !== false);
        return (true && pd_0);
    };
    _View_DynamicFormQuestionComponent0.prototype._handle_reset_0_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_0_3.onReset() !== false);
        return (true && pd_0);
    };
    return _View_DynamicFormQuestionComponent0;
}(import1.AppView));
export function viewFactory_DynamicFormQuestionComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DynamicFormQuestionComponent === null)) {
        (renderType_DynamicFormQuestionComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_DynamicFormQuestionComponent, {}));
    }
    return new _View_DynamicFormQuestionComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_DynamicFormQuestionComponent1 = (function (_super) {
    __extends(_View_DynamicFormQuestionComponent1, _super);
    function _View_DynamicFormQuestionComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DynamicFormQuestionComponent1, renderType_DynamicFormQuestionComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DynamicFormQuestionComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'input', null);
        this._DefaultValueAccessor_0_3 = new import16.DefaultValueAccessor(this.renderer, new import18.ElementRef(this._el_0));
        this._NG_VALUE_ACCESSOR_0_4 = [this._DefaultValueAccessor_0_3];
        this._FormControlName_0_5 = new import17.FormControlName(this.parent._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_0_4);
        this._NgControl_0_6 = this._FormControlName_0_5;
        this._NgControlStatus_0_7 = new import11.NgControlStatus(this._NgControl_0_6);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_0, 'input', this.eventHandler(this._handle_input_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_0, 'blur', this.eventHandler(this._handle_blur_0_1.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [this._el_0], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_DynamicFormQuestionComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.DefaultValueAccessor) && (0 === requestNodeIndex))) {
            return this._DefaultValueAccessor_0_3;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_0_4;
        }
        if (((token === import17.FormControlName) && (0 === requestNodeIndex))) {
            return this._FormControlName_0_5;
        }
        if (((token === import20.NgControl) && (0 === requestNodeIndex))) {
            return this._NgControl_0_6;
        }
        if (((token === import11.NgControlStatus) && (0 === requestNodeIndex))) {
            return this._NgControlStatus_0_7;
        }
        return notFoundResult;
    };
    _View_DynamicFormQuestionComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_4 = this.parent.context.fieldInput.key;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._FormControlName_0_5.name = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._FormControlName_0_5.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.context.fieldInput.key;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_0, 'id', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.parent.context.fieldInput.type;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_0, 'type', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_5 = this._NgControlStatus_0_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_0, 'ng-untouched', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatus_0_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_0, 'ng-touched', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_0_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_0, 'ng-pristine', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_0_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_0, 'ng-dirty', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_0_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_0, 'ng-valid', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_0_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_0, 'ng-invalid', currVal_10);
            this._expr_10 = currVal_10;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_DynamicFormQuestionComponent1.prototype.destroyInternal = function () {
        this._FormControlName_0_5.ngOnDestroy();
    };
    _View_DynamicFormQuestionComponent1.prototype._handle_input_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_0_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_DynamicFormQuestionComponent1.prototype._handle_blur_0_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_0_3.onTouched() !== false);
        return (true && pd_0);
    };
    return _View_DynamicFormQuestionComponent1;
}(import1.AppView));
function viewFactory_DynamicFormQuestionComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_DynamicFormQuestionComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_DynamicFormQuestionComponent2 = (function (_super) {
    __extends(_View_DynamicFormQuestionComponent2, _super);
    function _View_DynamicFormQuestionComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DynamicFormQuestionComponent2, renderType_DynamicFormQuestionComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DynamicFormQuestionComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'select', null);
        this._SelectControlValueAccessor_0_3 = new import21.SelectControlValueAccessor(this.renderer, new import18.ElementRef(this._el_0));
        this._NG_VALUE_ACCESSOR_0_4 = [this._SelectControlValueAccessor_0_3];
        this._FormControlName_0_5 = new import17.FormControlName(this.parent._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_0_4);
        this._NgControl_0_6 = this._FormControlName_0_5;
        this._NgControlStatus_0_7 = new import11.NgControlStatus(this._NgControl_0_6);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import14.TemplateRef_(this._appEl_2, viewFactory_DynamicFormQuestionComponent3);
        this._NgFor_2_6 = new import22.NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parent.parentInjector.get(import23.IterableDiffers), this.parent.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_0, 'change', this.eventHandler(this._handle_change_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_0, 'blur', this.eventHandler(this._handle_blur_0_1.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_DynamicFormQuestionComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import22.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6;
        }
        if (((token === import21.SelectControlValueAccessor) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._SelectControlValueAccessor_0_3;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NG_VALUE_ACCESSOR_0_4;
        }
        if (((token === import17.FormControlName) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._FormControlName_0_5;
        }
        if (((token === import20.NgControl) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgControl_0_6;
        }
        if (((token === import11.NgControlStatus) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgControlStatus_0_7;
        }
        return notFoundResult;
    };
    _View_DynamicFormQuestionComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_3 = this.parent.context.fieldInput.key;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._FormControlName_0_5.name = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._FormControlName_0_5.ngOnChanges(changes);
        }
        changes = null;
        var currVal_10 = this.parent.context.fieldInput.options;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._NgFor_2_6.ngForOf = currVal_10;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_10, currVal_10);
            this._expr_10 = currVal_10;
        }
        if ((changes !== null)) {
            this._NgFor_2_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_2_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this.parent.context.fieldInput.key;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_0, 'id', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_4 = this._NgControlStatus_0_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_0, 'ng-untouched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatus_0_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_0, 'ng-touched', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatus_0_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_0, 'ng-pristine', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_0_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_0, 'ng-dirty', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_0_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_0, 'ng-valid', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_0_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_0, 'ng-invalid', currVal_9);
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_DynamicFormQuestionComponent2.prototype.destroyInternal = function () {
        this._FormControlName_0_5.ngOnDestroy();
    };
    _View_DynamicFormQuestionComponent2.prototype._handle_change_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._SelectControlValueAccessor_0_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_DynamicFormQuestionComponent2.prototype._handle_blur_0_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._SelectControlValueAccessor_0_3.onTouched() !== false);
        return (true && pd_0);
    };
    return _View_DynamicFormQuestionComponent2;
}(import1.AppView));
function viewFactory_DynamicFormQuestionComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_DynamicFormQuestionComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_DynamicFormQuestionComponent3 = (function (_super) {
    __extends(_View_DynamicFormQuestionComponent3, _super);
    function _View_DynamicFormQuestionComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DynamicFormQuestionComponent3, renderType_DynamicFormQuestionComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DynamicFormQuestionComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'option', null);
        this._NgSelectOption_0_3 = new import21.NgSelectOption(new import18.ElementRef(this._el_0), this.renderer, this.parent._SelectControlValueAccessor_0_3);
        this._NgSelectMultipleOption_0_4 = new import24.NgSelectMultipleOption(new import18.ElementRef(this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_DynamicFormQuestionComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.NgSelectOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3;
        }
        if (((token === import24.NgSelectMultipleOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4;
        }
        return notFoundResult;
    };
    _View_DynamicFormQuestionComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.$implicit.key;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgSelectOption_0_3.value = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.$implicit.key;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgSelectMultipleOption_0_4.value = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.value, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_DynamicFormQuestionComponent3.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    return _View_DynamicFormQuestionComponent3;
}(import1.AppView));
function viewFactory_DynamicFormQuestionComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_DynamicFormQuestionComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_DynamicFormQuestionComponent4 = (function (_super) {
    __extends(_View_DynamicFormQuestionComponent4, _super);
    function _View_DynamicFormQuestionComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DynamicFormQuestionComponent4, renderType_DynamicFormQuestionComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DynamicFormQuestionComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'errorMessage');
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_DynamicFormQuestionComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.parent.context.fieldInput.label, ' is required');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_DynamicFormQuestionComponent4;
}(import1.AppView));
function viewFactory_DynamicFormQuestionComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_DynamicFormQuestionComponent4(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=dynamic-form-question.component.ngfactory.js.map