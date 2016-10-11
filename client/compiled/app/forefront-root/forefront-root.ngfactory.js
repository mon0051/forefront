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
import * as import3 from '../../../app/forefront-root/forefront-root';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../app/nav/nav';
import * as import11 from '../../../app/content/content';
import * as import12 from '../nav/nav.ngfactory';
import * as import13 from '../content/content.ngfactory';
var renderType_ForeFrontRoot_Host = null;
var _View_ForeFrontRoot_Host0 = (function (_super) {
    __extends(_View_ForeFrontRoot_Host0, _super);
    function _View_ForeFrontRoot_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ForeFrontRoot_Host0, renderType_ForeFrontRoot_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ForeFrontRoot_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('forefront-root', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ForeFrontRoot0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ForeFrontRoot_0_4 = new import3.ForeFrontRoot();
        this._appEl_0.initComponent(this._ForeFrontRoot_0_4, [], compView_0);
        compView_0.create(this._ForeFrontRoot_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ForeFrontRoot_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ForeFrontRoot) && (0 === requestNodeIndex))) {
            return this._ForeFrontRoot_0_4;
        }
        return notFoundResult;
    };
    return _View_ForeFrontRoot_Host0;
}(import1.AppView));
function viewFactory_ForeFrontRoot_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ForeFrontRoot_Host === null)) {
        (renderType_ForeFrontRoot_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ForeFrontRoot_Host0(viewUtils, parentInjector, declarationEl);
}
export var ForeFrontRootNgFactory = new import9.ComponentFactory('forefront-root', viewFactory_ForeFrontRoot_Host0, import3.ForeFrontRoot);
var styles_ForeFrontRoot = [];
var renderType_ForeFrontRoot = null;
var _View_ForeFrontRoot0 = (function (_super) {
    __extends(_View_ForeFrontRoot0, _super);
    function _View_ForeFrontRoot0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ForeFrontRoot0, renderType_ForeFrontRoot, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ForeFrontRoot0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'forefront-root');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'forefront-nav', null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import12.viewFactory_ForeFrontNav0(this.viewUtils, this.injector(2), this._appEl_2);
        this._ForeFrontNav_2_4 = new import10.ForeFrontNav();
        this._appEl_2.initComponent(this._ForeFrontNav_2_4, [], compView_2);
        compView_2.create(this._ForeFrontNav_2_4, [], null);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_0, 'forefront-content', null);
        this._appEl_4 = new import2.AppElement(4, 0, this, this._el_4);
        var compView_4 = import13.viewFactory_ForeFrontContent0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ForeFrontContent_4_4 = new import11.ForeFrontContent();
        this._appEl_4.initComponent(this._ForeFrontContent_4_4, [], compView_4);
        compView_4.create(this._ForeFrontContent_4_4, [], null);
        this._text_5 = this.renderer.createText(this._el_0, '\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5
        ], [], []);
        return null;
    };
    _View_ForeFrontRoot0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.ForeFrontNav) && (2 === requestNodeIndex))) {
            return this._ForeFrontNav_2_4;
        }
        if (((token === import11.ForeFrontContent) && (4 === requestNodeIndex))) {
            return this._ForeFrontContent_4_4;
        }
        return notFoundResult;
    };
    return _View_ForeFrontRoot0;
}(import1.AppView));
export function viewFactory_ForeFrontRoot0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ForeFrontRoot === null)) {
        (renderType_ForeFrontRoot = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ForeFrontRoot, {}));
    }
    return new _View_ForeFrontRoot0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=forefront-root.ngfactory.js.map