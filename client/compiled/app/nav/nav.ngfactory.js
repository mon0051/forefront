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
var import3 = require('../../../app/nav/nav');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var import10 = require('@angular/router/src/directives/router_link');
var import11 = require('@angular/router/src/directives/router_link_active');
var import12 = require('@angular/core/src/linker/query_list');
var import13 = require('@angular/router/src/router');
var import14 = require('@angular/router/src/router_state');
var import15 = require('@angular/common/src/location/location_strategy');
var import16 = require('@angular/core/src/linker/element_ref');
var import17 = require('@angular/core/src/security');
var renderType_ForeFrontNav_Host = null;
var _View_ForeFrontNav_Host0 = (function (_super) {
    __extends(_View_ForeFrontNav_Host0, _super);
    function _View_ForeFrontNav_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ForeFrontNav_Host0, renderType_ForeFrontNav_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ForeFrontNav_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('forefront-nav', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ForeFrontNav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ForeFrontNav_0_4 = new import3.ForeFrontNav();
        this._appEl_0.initComponent(this._ForeFrontNav_0_4, [], compView_0);
        compView_0.create(this._ForeFrontNav_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ForeFrontNav_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ForeFrontNav) && (0 === requestNodeIndex))) {
            return this._ForeFrontNav_0_4;
        }
        return notFoundResult;
    };
    return _View_ForeFrontNav_Host0;
}(import1.AppView));
function viewFactory_ForeFrontNav_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ForeFrontNav_Host === null)) {
        (renderType_ForeFrontNav_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ForeFrontNav_Host0(viewUtils, parentInjector, declarationEl);
}
exports.ForeFrontNavNgFactory = new import9.ComponentFactory('forefront-nav', viewFactory_ForeFrontNav_Host0, import3.ForeFrontNav);
var styles_ForeFrontNav = [];
var renderType_ForeFrontNav = null;
var _View_ForeFrontNav0 = (function (_super) {
    __extends(_View_ForeFrontNav0, _super);
    function _View_ForeFrontNav0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ForeFrontNav0, renderType_ForeFrontNav, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ForeFrontNav0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'bg-light');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'container');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'nav', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'navbar navbar-light bg-faded');
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'top-line bg-primary');
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_9 = this.renderer.createElement(this._el_4, 'a', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'navbar-brand');
        this._el_10 = this.renderer.createElement(this._el_9, 'img', null);
        this.renderer.setElementAttribute(this._el_10, 'height', '50px');
        this.renderer.setElementAttribute(this._el_10, 'src', './content/img/science-logo.png');
        this._text_11 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_12 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'nav navbar-nav');
        this._text_13 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'a', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'nav-item active nav-link');
        this.renderer.setElementAttribute(this._el_14, 'routerLink', '/home');
        this.renderer.setElementAttribute(this._el_14, 'routerLinkActive', 'active');
        this._RouterLinkWithHref_14_3 = new import10.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._RouterLinkActive_14_4 = new import11.RouterLinkActive(this.parentInjector.get(import13.Router), new import16.ElementRef(this._el_14), this.renderer);
        this._query_RouterLink_14_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_14_1 = new import12.QueryList();
        this._text_15 = this.renderer.createText(this._el_14, 'Home', null);
        this._text_16 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_17 = this.renderer.createElement(this._el_12, 'a', null);
        this.renderer.setElementAttribute(this._el_17, 'class', 'nav-item active nav-link');
        this.renderer.setElementAttribute(this._el_17, 'routerLink', '/game-of-life');
        this.renderer.setElementAttribute(this._el_17, 'routerLinkActive', 'active');
        this._RouterLinkWithHref_17_3 = new import10.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._RouterLinkActive_17_4 = new import11.RouterLinkActive(this.parentInjector.get(import13.Router), new import16.ElementRef(this._el_17), this.renderer);
        this._query_RouterLink_17_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_17_1 = new import12.QueryList();
        this._text_18 = this.renderer.createText(this._el_17, '\n                    Game of Life\n                ', null);
        this._text_19 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_20 = this.renderer.createElement(this._el_12, 'a', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'nav-item active nav-link');
        this.renderer.setElementAttribute(this._el_20, 'routerLink', '/typography');
        this.renderer.setElementAttribute(this._el_20, 'routerLinkActive', 'active');
        this._RouterLinkWithHref_20_3 = new import10.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._RouterLinkActive_20_4 = new import11.RouterLinkActive(this.parentInjector.get(import13.Router), new import16.ElementRef(this._el_20), this.renderer);
        this._query_RouterLink_20_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_20_1 = new import12.QueryList();
        this._text_21 = this.renderer.createText(this._el_20, '\n                    Typography\n                ', null);
        this._text_22 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_23 = this.renderer.createElement(this._el_12, 'a', null);
        this.renderer.setElementAttribute(this._el_23, 'class', 'nav-item active nav-link');
        this.renderer.setElementAttribute(this._el_23, 'routerLink', '/data-line');
        this.renderer.setElementAttribute(this._el_23, 'routerLinkActive', 'active');
        this._RouterLinkWithHref_23_3 = new import10.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._RouterLinkActive_23_4 = new import11.RouterLinkActive(this.parentInjector.get(import13.Router), new import16.ElementRef(this._el_23), this.renderer);
        this._query_RouterLink_23_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_23_1 = new import12.QueryList();
        this._text_24 = this.renderer.createText(this._el_23, '\n                    DataLine\n                ', null);
        this._text_25 = this.renderer.createText(this._el_12, '\n            ', null);
        this._text_26 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_27 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_28 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_14, 'click', this.eventHandler(this._handle_click_14_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_17, 'click', this.eventHandler(this._handle_click_17_0.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_20, 'click', this.eventHandler(this._handle_click_20_0.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_23, 'click', this.eventHandler(this._handle_click_23_0.bind(this)));
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
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
            this._el_9,
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
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], []);
        return null;
    };
    _View_ForeFrontNav0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.RouterLinkWithHref) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._RouterLinkWithHref_14_3;
        }
        if (((token === import11.RouterLinkActive) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._RouterLinkActive_14_4;
        }
        if (((token === import10.RouterLinkWithHref) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._RouterLinkWithHref_17_3;
        }
        if (((token === import11.RouterLinkActive) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._RouterLinkActive_17_4;
        }
        if (((token === import10.RouterLinkWithHref) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._RouterLinkWithHref_20_3;
        }
        if (((token === import11.RouterLinkActive) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._RouterLinkActive_20_4;
        }
        if (((token === import10.RouterLinkWithHref) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._RouterLinkWithHref_23_3;
        }
        if (((token === import11.RouterLinkActive) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._RouterLinkActive_23_4;
        }
        return notFoundResult;
    };
    _View_ForeFrontNav0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_1 = '/home';
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._RouterLinkWithHref_14_3.routerLink = currVal_1;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_14_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_3 = 'active';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._RouterLinkActive_14_4.routerLinkActive = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLinkActive'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._RouterLinkActive_14_4.ngOnChanges(changes);
        }
        changes = null;
        var currVal_5 = '/game-of-life';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._RouterLinkWithHref_17_3.routerLink = currVal_5;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_5, currVal_5);
            this._expr_5 = currVal_5;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_17_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_7 = 'active';
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._RouterLinkActive_17_4.routerLinkActive = currVal_7;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLinkActive'] = new import7.SimpleChange(this._expr_7, currVal_7);
            this._expr_7 = currVal_7;
        }
        if ((changes !== null)) {
            this._RouterLinkActive_17_4.ngOnChanges(changes);
        }
        changes = null;
        var currVal_9 = '/typography';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._RouterLinkWithHref_20_3.routerLink = currVal_9;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_9, currVal_9);
            this._expr_9 = currVal_9;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_20_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_11 = 'active';
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._RouterLinkActive_20_4.routerLinkActive = currVal_11;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLinkActive'] = new import7.SimpleChange(this._expr_11, currVal_11);
            this._expr_11 = currVal_11;
        }
        if ((changes !== null)) {
            this._RouterLinkActive_20_4.ngOnChanges(changes);
        }
        changes = null;
        var currVal_13 = '/data-line';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._RouterLinkWithHref_23_3.routerLink = currVal_13;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_13, currVal_13);
            this._expr_13 = currVal_13;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_23_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_15 = 'active';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._RouterLinkActive_23_4.routerLinkActive = currVal_15;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLinkActive'] = new import7.SimpleChange(this._expr_15, currVal_15);
            this._expr_15 = currVal_15;
        }
        if ((changes !== null)) {
            this._RouterLinkActive_23_4.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_14_0.dirty) {
                this._query_RouterLink_14_0.reset([]);
                this._RouterLinkActive_14_4.links = this._query_RouterLink_14_0;
                this._query_RouterLink_14_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_14_1.dirty) {
                this._query_RouterLinkWithHref_14_1.reset([this._RouterLinkWithHref_14_3]);
                this._RouterLinkActive_14_4.linksWithHrefs = this._query_RouterLinkWithHref_14_1;
                this._query_RouterLinkWithHref_14_1.notifyOnChanges();
            }
            if (this._query_RouterLink_17_0.dirty) {
                this._query_RouterLink_17_0.reset([]);
                this._RouterLinkActive_17_4.links = this._query_RouterLink_17_0;
                this._query_RouterLink_17_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_17_1.dirty) {
                this._query_RouterLinkWithHref_17_1.reset([this._RouterLinkWithHref_17_3]);
                this._RouterLinkActive_17_4.linksWithHrefs = this._query_RouterLinkWithHref_17_1;
                this._query_RouterLinkWithHref_17_1.notifyOnChanges();
            }
            if (this._query_RouterLink_20_0.dirty) {
                this._query_RouterLink_20_0.reset([]);
                this._RouterLinkActive_20_4.links = this._query_RouterLink_20_0;
                this._query_RouterLink_20_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_20_1.dirty) {
                this._query_RouterLinkWithHref_20_1.reset([this._RouterLinkWithHref_20_3]);
                this._RouterLinkActive_20_4.linksWithHrefs = this._query_RouterLinkWithHref_20_1;
                this._query_RouterLinkWithHref_20_1.notifyOnChanges();
            }
            if (this._query_RouterLink_23_0.dirty) {
                this._query_RouterLink_23_0.reset([]);
                this._RouterLinkActive_23_4.links = this._query_RouterLink_23_0;
                this._query_RouterLink_23_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_23_1.dirty) {
                this._query_RouterLinkWithHref_23_1.reset([this._RouterLinkWithHref_23_3]);
                this._RouterLinkActive_23_4.linksWithHrefs = this._query_RouterLinkWithHref_23_1;
                this._query_RouterLinkWithHref_23_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_14_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_17_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_20_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_23_4.ngAfterContentInit();
            }
        }
        var currVal_2 = this._RouterLinkWithHref_14_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_14, 'href', this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL, currVal_2));
            this._expr_2 = currVal_2;
        }
        var currVal_6 = this._RouterLinkWithHref_17_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementProperty(this._el_17, 'href', this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL, currVal_6));
            this._expr_6 = currVal_6;
        }
        var currVal_10 = this._RouterLinkWithHref_20_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementProperty(this._el_20, 'href', this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL, currVal_10));
            this._expr_10 = currVal_10;
        }
        var currVal_14 = this._RouterLinkWithHref_23_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementProperty(this._el_23, 'href', this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL, currVal_14));
            this._expr_14 = currVal_14;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ForeFrontNav0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_14_3.ngOnDestroy();
        this._RouterLinkActive_14_4.ngOnDestroy();
        this._RouterLinkWithHref_17_3.ngOnDestroy();
        this._RouterLinkActive_17_4.ngOnDestroy();
        this._RouterLinkWithHref_20_3.ngOnDestroy();
        this._RouterLinkActive_20_4.ngOnDestroy();
        this._RouterLinkWithHref_23_3.ngOnDestroy();
        this._RouterLinkActive_23_4.ngOnDestroy();
    };
    _View_ForeFrontNav0.prototype._handle_click_14_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_14_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_ForeFrontNav0.prototype._handle_click_17_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_17_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_ForeFrontNav0.prototype._handle_click_20_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_20_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_ForeFrontNav0.prototype._handle_click_23_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_23_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_ForeFrontNav0;
}(import1.AppView));
function viewFactory_ForeFrontNav0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ForeFrontNav === null)) {
        (renderType_ForeFrontNav = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ForeFrontNav, {}));
    }
    return new _View_ForeFrontNav0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_ForeFrontNav0 = viewFactory_ForeFrontNav0;
//# sourceMappingURL=nav.ngfactory.js.map