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
var import3 = require('../../../app/home/home');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var renderType_HomeComponent_Host = null;
var _View_HomeComponent_Host0 = (function (_super) {
    __extends(_View_HomeComponent_Host0, _super);
    function _View_HomeComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomeComponent_Host0, renderType_HomeComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('home-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HomeComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HomeComponent_0_4 = new import3.HomeComponent();
        this._appEl_0.initComponent(this._HomeComponent_0_4, [], compView_0);
        compView_0.create(this._HomeComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HomeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.HomeComponent) && (0 === requestNodeIndex))) {
            return this._HomeComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_HomeComponent_Host0;
}(import1.AppView));
function viewFactory_HomeComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomeComponent_Host === null)) {
        (renderType_HomeComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_HomeComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.HomeComponentNgFactory = new import9.ComponentFactory('home-component', viewFactory_HomeComponent_Host0, import3.HomeComponent);
var styles_HomeComponent = [];
var renderType_HomeComponent = null;
var _View_HomeComponent0 = (function (_super) {
    __extends(_View_HomeComponent0, _super);
    function _View_HomeComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomeComponent0, renderType_HomeComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'homepage container');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'row');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'col-sm-3');
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'card widget-std');
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'top-line-heavy');
        this._text_9 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_10 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'card-block');
        this._text_11 = this.renderer.createText(this._el_10, '\n                    Random Widget\n                ', null);
        this._text_12 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n', null);
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
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15
        ], [], []);
        return null;
    };
    return _View_HomeComponent0;
}(import1.AppView));
function viewFactory_HomeComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomeComponent === null)) {
        (renderType_HomeComponent = viewUtils.createRenderComponentType('C:/Git/projects/ForeFront/client/app/home/home.html', 0, import8.ViewEncapsulation.None, styles_HomeComponent, {}));
    }
    return new _View_HomeComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_HomeComponent0 = viewFactory_HomeComponent0;
//# sourceMappingURL=home.ngfactory.js.map