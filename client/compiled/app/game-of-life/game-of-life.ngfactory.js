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
var import3 = require('../../../app/game-of-life/game-of-life');
var import4 = require('../../../app/game-of-life/settings');
var import5 = require('../../../app/game-of-life/grid.component');
var import8 = require('@angular/core/src/linker/view_type');
var import9 = require('@angular/core/src/change_detection/change_detection');
var import10 = require('@angular/core/src/metadata/view');
var import11 = require('@angular/core/src/linker/component_factory');
var import12 = require('@angular/common/src/directives/ng_class');
var import13 = require('./grid.ngfactory');
var import14 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import15 = require('@angular/core/src/change_detection/differs/keyvalue_differs');
var import16 = require('@angular/core/src/linker/element_ref');
var renderType_GameOfLife_Host = null;
var _View_GameOfLife_Host0 = (function (_super) {
    __extends(_View_GameOfLife_Host0, _super);
    function _View_GameOfLife_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GameOfLife_Host0, renderType_GameOfLife_Host, import8.ViewType.HOST, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
    }
    Object.defineProperty(_View_GameOfLife_Host0.prototype, "_Settings_0_5", {
        get: function () {
            if ((this.__Settings_0_5 == null)) {
                (this.__Settings_0_5 = new import4.Settings());
            }
            return this.__Settings_0_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_View_GameOfLife_Host0.prototype, "_Grid_0_6", {
        get: function () {
            if ((this.__Grid_0_6 == null)) {
                (this.__Grid_0_6 = new import5.GridComponent(this._Settings_0_5));
            }
            return this.__Grid_0_6;
        },
        enumerable: true,
        configurable: true
    });
    _View_GameOfLife_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('game-of-life', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_GameOfLife0(this.viewUtils, this.injector(0), this._appEl_0);
        this._GameOfLife_0_4 = new import3.GameOfLife();
        this._appEl_0.initComponent(this._GameOfLife_0_4, [], compView_0);
        compView_0.create(this._GameOfLife_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_GameOfLife_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.GameOfLife) && (0 === requestNodeIndex))) {
            return this._GameOfLife_0_4;
        }
        if (((token === import4.Settings) && (0 === requestNodeIndex))) {
            return this._Settings_0_5;
        }
        if (((token === import5.GridComponent) && (0 === requestNodeIndex))) {
            return this._Grid_0_6;
        }
        return notFoundResult;
    };
    return _View_GameOfLife_Host0;
}(import1.AppView));
function viewFactory_GameOfLife_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GameOfLife_Host === null)) {
        (renderType_GameOfLife_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_GameOfLife_Host0(viewUtils, parentInjector, declarationEl);
}
exports.GameOfLifeNgFactory = new import11.ComponentFactory('game-of-life', viewFactory_GameOfLife_Host0, import3.GameOfLife);
var styles_GameOfLife = [];
var renderType_GameOfLife = null;
var _View_GameOfLife0 = (function (_super) {
    __extends(_View_GameOfLife0, _super);
    function _View_GameOfLife0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GameOfLife0, renderType_GameOfLife, import8.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
    }
    _View_GameOfLife0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'gol-root container');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'top-line-heavy');
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', '');
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_6 = this.renderer.createElement(this._el_0, 'gol-grid', null);
        this._appEl_6 = new import2.AppElement(6, 0, this, this._el_6);
        var compView_6 = import13.viewFactory_Grid0(this.viewUtils, this.injector(6), this._appEl_6);
        this._Grid_6_4 = new import5.GridComponent(this.parentInjector.get(import4.Settings));
        this._NgClass_6_5 = new import12.NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_6), this.renderer);
        this._appEl_6.initComponent(this._Grid_6_4, [], compView_6);
        this._text_7 = this.renderer.createText(null, 'Temp', null);
        compView_6.create(this._Grid_6_4, [], null);
        this._text_8 = this.renderer.createText(this._el_0, '\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8
        ], [], []);
        return null;
    };
    _View_GameOfLife0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.GridComponent) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Grid_6_4;
        }
        if (((token === import12.NgClass) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._NgClass_6_5;
        }
        return notFoundResult;
    };
    return _View_GameOfLife0;
}(import1.AppView));
function viewFactory_GameOfLife0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GameOfLife === null)) {
        (renderType_GameOfLife = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_GameOfLife, {}));
    }
    return new _View_GameOfLife0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_GameOfLife0 = viewFactory_GameOfLife0;
//# sourceMappingURL=game-of-life.ngfactory.js.map