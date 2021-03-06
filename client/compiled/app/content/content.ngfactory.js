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
var import3 = require('../../../app/content/content');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var import10 = require('@angular/router/src/directives/router_outlet');
var import11 = require('@angular/router/src/router_outlet_map');
var import12 = require('@angular/core/src/linker/component_factory_resolver');
var renderType_ForeFrontContent_Host = null;
var _View_ForeFrontContent_Host0 = (function (_super) {
    __extends(_View_ForeFrontContent_Host0, _super);
    function _View_ForeFrontContent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ForeFrontContent_Host0, renderType_ForeFrontContent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ForeFrontContent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('forefront-content', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ForeFrontContent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ForeFrontContent_0_4 = new import3.ForeFrontContent();
        this._appEl_0.initComponent(this._ForeFrontContent_0_4, [], compView_0);
        compView_0.create(this._ForeFrontContent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ForeFrontContent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ForeFrontContent) && (0 === requestNodeIndex))) {
            return this._ForeFrontContent_0_4;
        }
        return notFoundResult;
    };
    return _View_ForeFrontContent_Host0;
}(import1.AppView));
function viewFactory_ForeFrontContent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ForeFrontContent_Host === null)) {
        (renderType_ForeFrontContent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ForeFrontContent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.ForeFrontContentNgFactory = new import9.ComponentFactory('forefront-content', viewFactory_ForeFrontContent_Host0, import3.ForeFrontContent);
var styles_ForeFrontContent = [];
var renderType_ForeFrontContent = null;
var _View_ForeFrontContent0 = (function (_super) {
    __extends(_View_ForeFrontContent0, _super);
    function _View_ForeFrontContent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ForeFrontContent0, renderType_ForeFrontContent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ForeFrontContent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'forefront-content');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'router-outlet', null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        this._RouterOutlet_2_5 = new import10.RouterOutlet(this.parentInjector.get(import11.RouterOutletMap), this._appEl_2.vcRef, this.parentInjector.get(import12.ComponentFactoryResolver), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_ForeFrontContent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.RouterOutlet) && (2 === requestNodeIndex))) {
            return this._RouterOutlet_2_5;
        }
        return notFoundResult;
    };
    _View_ForeFrontContent0.prototype.destroyInternal = function () {
        this._RouterOutlet_2_5.ngOnDestroy();
    };
    return _View_ForeFrontContent0;
}(import1.AppView));
function viewFactory_ForeFrontContent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ForeFrontContent === null)) {
        (renderType_ForeFrontContent = viewUtils.createRenderComponentType('C:/Git/projects/ForeFront/client/app/content/content.html', 0, import8.ViewEncapsulation.None, styles_ForeFrontContent, {}));
    }
    return new _View_ForeFrontContent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_ForeFrontContent0 = viewFactory_ForeFrontContent0;
//# sourceMappingURL=content.ngfactory.js.map