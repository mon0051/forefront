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
import * as import3 from '../../../app/dataline/DataLineRepository';
import * as import4 from '../../../app/dataline/DataLineComponent';
import * as import5 from '../../../app/widget/widget';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '../../../app/dataline/http-dataline';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../widget/widget.ngfactory';
var renderType_DataLineComponent_Host = null;
var _View_DataLineComponent_Host0 = (function (_super) {
    __extends(_View_DataLineComponent_Host0, _super);
    function _View_DataLineComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DataLineComponent_Host0, renderType_DataLineComponent_Host, import8.ViewType.HOST, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
    }
    Object.defineProperty(_View_DataLineComponent_Host0.prototype, "_CardWidget_0_6", {
        get: function () {
            if ((this.__CardWidget_0_6 == null)) {
                (this.__CardWidget_0_6 = new import5.CardWidget());
            }
            return this.__CardWidget_0_6;
        },
        enumerable: true,
        configurable: true
    });
    _View_DataLineComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('data-line-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_DataLineComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._DataLineRepository_0_4 = new import3.DataLineRepository(this.parentInjector.get(import10.HttpDataLine));
        this._DataLineComponent_0_5 = new import4.DataLineComponent(this._DataLineRepository_0_4);
        this._appEl_0.initComponent(this._DataLineComponent_0_5, [], compView_0);
        compView_0.create(this._DataLineComponent_0_5, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_DataLineComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.DataLineRepository) && (0 === requestNodeIndex))) {
            return this._DataLineRepository_0_4;
        }
        if (((token === import4.DataLineComponent) && (0 === requestNodeIndex))) {
            return this._DataLineComponent_0_5;
        }
        if (((token === import5.CardWidget) && (0 === requestNodeIndex))) {
            return this._CardWidget_0_6;
        }
        return notFoundResult;
    };
    return _View_DataLineComponent_Host0;
}(import1.AppView));
function viewFactory_DataLineComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DataLineComponent_Host === null)) {
        (renderType_DataLineComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_DataLineComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var DataLineComponentNgFactory = new import12.ComponentFactory('data-line-component', viewFactory_DataLineComponent_Host0, import4.DataLineComponent);
var styles_DataLineComponent = [];
var renderType_DataLineComponent = null;
var _View_DataLineComponent0 = (function (_super) {
    __extends(_View_DataLineComponent0, _super);
    function _View_DataLineComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DataLineComponent0, renderType_DataLineComponent, import8.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
    }
    _View_DataLineComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'dataline container');
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'row');
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'col-sm-5');
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'card-widget', null);
        this._appEl_6 = new import2.AppElement(6, 4, this, this._el_6);
        var compView_6 = import13.viewFactory_CardWidget0(this.viewUtils, this.injector(6), this._appEl_6);
        this._CardWidget_6_4 = new import5.CardWidget();
        this._appEl_6.initComponent(this._CardWidget_6_4, [], compView_6);
        this._text_7 = this.renderer.createText(null, '\n        ', null);
        this._el_8 = this.renderer.createElement(null, 'pre', null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(null, '\n        ', null);
        this._el_11 = this.renderer.createElement(null, 'pre', null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(null, '\n      ', null);
        compView_6.create(this._CardWidget_6_4, [[].concat([
                this._text_7,
                this._el_8,
                this._text_10,
                this._el_11,
                this._text_13
            ])], null);
        this._text_14 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_15 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n', null);
        this._expr_0 = import9.UNINITIALIZED;
        this._expr_1 = import9.UNINITIALIZED;
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
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._text_16
        ], [], []);
        return null;
    };
    _View_DataLineComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.CardWidget) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._CardWidget_6_4;
        }
        return notFoundResult;
    };
    _View_DataLineComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import6.interpolate(1, 'Promise Data : ', this.context.stringed(), '');
        if (import6.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_9, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import6.interpolate(1, 'Observed Data : ', this.context.stringedObservable(), '');
        if (import6.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_12, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_DataLineComponent0;
}(import1.AppView));
export function viewFactory_DataLineComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DataLineComponent === null)) {
        (renderType_DataLineComponent = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_DataLineComponent, {}));
    }
    return new _View_DataLineComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=DataLineComponent.ngfactory.js.map