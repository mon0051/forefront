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
var import3 = require('../../../app/game-of-life/grid.component');
var import4 = require('@angular/common/src/directives/ng_class');
var import5 = require('@angular/core/src/linker/view_utils');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('@angular/core/src/change_detection/change_detection');
var import9 = require('../../../app/game-of-life/settings');
var import10 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import11 = require('@angular/core/src/change_detection/differs/keyvalue_differs');
var import12 = require('@angular/core/src/linker/element_ref');
var import13 = require('@angular/core/src/metadata/view');
var import14 = require('@angular/core/src/linker/component_factory');
var import15 = require('@angular/common/src/directives/ng_for');
var import16 = require('@angular/core/src/linker/template_ref');
var renderType_GridComponent_Host = null;
var _View_GridComponent_Host0 = (function (_super) {
    __extends(_View_GridComponent_Host0, _super);
    function _View_GridComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GridComponent_Host0, renderType_GridComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_GridComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('gol-grid', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_GridComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._GridComponent_0_4 = new import3.GridComponent(this.parentInjector.get(import9.Settings));
        this._NgClass_0_5 = new import4.NgClass(this.parentInjector.get(import10.IterableDiffers), this.parentInjector.get(import11.KeyValueDiffers), new import12.ElementRef(this._el_0), this.renderer);
        this._appEl_0.initComponent(this._GridComponent_0_4, [], compView_0);
        compView_0.create(this._GridComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_GridComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.GridComponent) && (0 === requestNodeIndex))) {
            return this._GridComponent_0_4;
        }
        if (((token === import4.NgClass) && (0 === requestNodeIndex))) {
            return this._NgClass_0_5;
        }
        return notFoundResult;
    };
    return _View_GridComponent_Host0;
}(import1.AppView));
function viewFactory_GridComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GridComponent_Host === null)) {
        (renderType_GridComponent_Host = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, [], {}));
    }
    return new _View_GridComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.GridComponentNgFactory = new import14.ComponentFactory('gol-grid', viewFactory_GridComponent_Host0, import3.GridComponent);
var styles_GridComponent = [];
var renderType_GridComponent = null;
var _View_GridComponent0 = (function (_super) {
    __extends(_View_GridComponent0, _super);
    function _View_GridComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GridComponent0, renderType_GridComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_GridComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'gol-grid card');
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'card-block');
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import16.TemplateRef_(this._appEl_4, viewFactory_GridComponent1);
        this._NgFor_4_6 = new import15.NgFor(this._appEl_4.vcRef, this._TemplateRef_4_5, this.parentInjector.get(import10.IterableDiffers), this.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_7 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'card-block');
        this._text_8 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'div', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'buttons');
        this._text_10 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_11 = this.renderer.createElement(this._el_9, 'button', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'btn btn-default');
        this._text_12 = this.renderer.createText(this._el_11, 'Start', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_14 = this.renderer.createElement(this._el_9, 'button', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'btn btn-default');
        this._text_15 = this.renderer.createText(this._el_14, 'Stop', null);
        this._text_16 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_17 = this.renderer.createElement(this._el_9, 'button', null);
        this.renderer.setElementAttribute(this._el_17, 'class', 'btn btn-default');
        this._text_18 = this.renderer.createText(this._el_17, 'Clear', null);
        this._text_19 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_20 = this.renderer.createText(this._el_7, '\n  ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n', null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import8.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_14, 'click', this.eventHandler(this._handle_click_14_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_17, 'click', this.eventHandler(this._handle_click_17_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_GridComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import15.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6;
        }
        return notFoundResult;
    };
    _View_GridComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.context.cells;
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_4_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import8.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_4_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_4_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_GridComponent0.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.start() !== false);
        return (true && pd_0);
    };
    _View_GridComponent0.prototype._handle_click_14_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.stop() !== false);
        return (true && pd_0);
    };
    _View_GridComponent0.prototype._handle_click_17_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.clear() !== false);
        return (true && pd_0);
    };
    return _View_GridComponent0;
}(import1.AppView));
function viewFactory_GridComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GridComponent === null)) {
        (renderType_GridComponent = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, styles_GridComponent, {}));
    }
    return new _View_GridComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_GridComponent0 = viewFactory_GridComponent0;
var _View_GridComponent1 = (function (_super) {
    __extends(_View_GridComponent1, _super);
    function _View_GridComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GridComponent1, renderType_GridComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_GridComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'gol-row');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import16.TemplateRef_(this._appEl_2, viewFactory_GridComponent2);
        this._NgFor_2_6 = new import15.NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parent.parentInjector.get(import10.IterableDiffers), this.parent.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._expr_0 = import8.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_GridComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import15.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6;
        }
        return notFoundResult;
    };
    _View_GridComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.context.$implicit;
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_2_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import8.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_2_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_2_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_GridComponent1;
}(import1.AppView));
function viewFactory_GridComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_GridComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_GridComponent2 = (function (_super) {
    __extends(_View_GridComponent2, _super);
    function _View_GridComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GridComponent2, renderType_GridComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_GridComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'span', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'span', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'cell');
        this._NgClass_2_3 = new import4.NgClass(this.parent.parent.parentInjector.get(import10.IterableDiffers), this.parent.parent.parentInjector.get(import11.KeyValueDiffers), new import12.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'span', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'overlay');
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'mouseleave', this.eventHandler(this._handle_mouseleave_2_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_2, 'mouseover', this.eventHandler(this._handle_mouseover_2_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_2.bind(this)));
        this._expr_3 = import8.UNINITIALIZED;
        this._expr_4 = import8.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_GridComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import4.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._NgClass_2_3;
        }
        return notFoundResult;
    };
    _View_GridComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3 = 'cell';
        if (import5.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgClass_2_3.klass = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.$implicit.getClasses();
        if (import5.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgClass_2_3.ngClass = currVal_4;
            this._expr_4 = currVal_4;
        }
        if (!throwOnChange) {
            this._NgClass_2_3.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_GridComponent2.prototype._handle_mouseleave_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.$implicit.mouseMoveOut() !== false);
        return (true && pd_0);
    };
    _View_GridComponent2.prototype._handle_mouseover_2_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.$implicit.mouseMoveIn() !== false);
        return (true && pd_0);
    };
    _View_GridComponent2.prototype._handle_click_2_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.$implicit.vivicate() !== false);
        return (true && pd_0);
    };
    return _View_GridComponent2;
}(import1.AppView));
function viewFactory_GridComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_GridComponent2(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=grid.component.ngfactory.js.map