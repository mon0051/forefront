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
import * as import3 from '../../../app/widget/widget';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_CardWidget_Host = null;
var _View_CardWidget_Host0 = (function (_super) {
    __extends(_View_CardWidget_Host0, _super);
    function _View_CardWidget_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_CardWidget_Host0, renderType_CardWidget_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_CardWidget_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('card-widget', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_CardWidget0(this.viewUtils, this.injector(0), this._appEl_0);
        this._CardWidget_0_4 = new import3.CardWidget();
        this._appEl_0.initComponent(this._CardWidget_0_4, [], compView_0);
        compView_0.create(this._CardWidget_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_CardWidget_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.CardWidget) && (0 === requestNodeIndex))) {
            return this._CardWidget_0_4;
        }
        return notFoundResult;
    };
    return _View_CardWidget_Host0;
}(import1.AppView));
function viewFactory_CardWidget_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CardWidget_Host === null)) {
        (renderType_CardWidget_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_CardWidget_Host0(viewUtils, parentInjector, declarationEl);
}
export var CardWidgetNgFactory = new import9.ComponentFactory('card-widget', viewFactory_CardWidget_Host0, import3.CardWidget);
var styles_CardWidget = [];
var renderType_CardWidget = null;
var _View_CardWidget0 = (function (_super) {
    __extends(_View_CardWidget0, _super);
    function _View_CardWidget0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_CardWidget0, renderType_CardWidget, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_CardWidget0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'card-widget card widget-std');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'top-line-heavy');
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'card-block');
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this.renderer.projectNodes(this._el_4, import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
        this._text_6 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    };
    return _View_CardWidget0;
}(import1.AppView));
export function viewFactory_CardWidget0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CardWidget === null)) {
        (renderType_CardWidget = viewUtils.createRenderComponentType('', 1, import8.ViewEncapsulation.None, styles_CardWidget, {}));
    }
    return new _View_CardWidget0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=widget.ngfactory.js.map