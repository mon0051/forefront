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
import * as import3 from '../../../app/util/not-found';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_PageNotFoundComponent_Host = null;
var _View_PageNotFoundComponent_Host0 = (function (_super) {
    __extends(_View_PageNotFoundComponent_Host0, _super);
    function _View_PageNotFoundComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PageNotFoundComponent_Host0, renderType_PageNotFoundComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PageNotFoundComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_PageNotFoundComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._PageNotFoundComponent_0_4 = new import3.PageNotFoundComponent();
        this._appEl_0.initComponent(this._PageNotFoundComponent_0_4, [], compView_0);
        compView_0.create(this._PageNotFoundComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_PageNotFoundComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.PageNotFoundComponent) && (0 === requestNodeIndex))) {
            return this._PageNotFoundComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_PageNotFoundComponent_Host0;
}(import1.AppView));
function viewFactory_PageNotFoundComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PageNotFoundComponent_Host === null)) {
        (renderType_PageNotFoundComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_PageNotFoundComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var PageNotFoundComponentNgFactory = new import9.ComponentFactory('ng-component', viewFactory_PageNotFoundComponent_Host0, import3.PageNotFoundComponent);
var styles_PageNotFoundComponent = [];
var renderType_PageNotFoundComponent = null;
var _View_PageNotFoundComponent0 = (function (_super) {
    __extends(_View_PageNotFoundComponent0, _super);
    function _View_PageNotFoundComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PageNotFoundComponent0, renderType_PageNotFoundComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PageNotFoundComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'page-not-found container');
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'card card-outline-primary text-xs-center');
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'card-header');
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'h3', null);
        this._text_7 = this.renderer.createText(this._el_6, '404, page not found.', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_10 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'card-block');
        this._text_11 = this.renderer.createText(this._el_10, '\n\n      ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'p', null);
        this._text_13 = this.renderer.createText(this._el_12, 'Y U do dis? plz don\'t do. plz.', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_15 = this.renderer.createElement(this._el_10, 'p', null);
        this._text_16 = this.renderer.createText(this._el_15, 'Y U no just use good?', null);
        this._text_17 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_18 = this.renderer.createElement(this._el_10, 'p', null);
        this._text_19 = this.renderer.createText(this._el_18, 'Use good plz', null);
        this._text_20 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_22 = this.renderer.createText(this._el_0, '\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22
        ], [], []);
        return null;
    };
    return _View_PageNotFoundComponent0;
}(import1.AppView));
export function viewFactory_PageNotFoundComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PageNotFoundComponent === null)) {
        (renderType_PageNotFoundComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_PageNotFoundComponent, {}));
    }
    return new _View_PageNotFoundComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=not-found.ngfactory.js.map