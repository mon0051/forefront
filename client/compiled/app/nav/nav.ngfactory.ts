/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/nav/nav';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/router/src/directives/router_link';
import * as import11 from '@angular/router/src/directives/router_link_active';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/core/src/security';
var renderType_ForeFrontNav_Host:import0.RenderComponentType = (null as any);
class _View_ForeFrontNav_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ForeFrontNav_0_4:import3.ForeFrontNav;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ForeFrontNav_Host0,renderType_ForeFrontNav_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('forefront-nav',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ForeFrontNav0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ForeFrontNav_0_4 = new import3.ForeFrontNav();
    this._appEl_0.initComponent(this._ForeFrontNav_0_4,[],compView_0);
    compView_0.create(this._ForeFrontNav_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ForeFrontNav) && (0 === requestNodeIndex))) { return this._ForeFrontNav_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ForeFrontNav_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ForeFrontNav_Host === (null as any))) { (renderType_ForeFrontNav_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_ForeFrontNav_Host0(viewUtils,parentInjector,declarationEl);
}
export const ForeFrontNavNgFactory:import9.ComponentFactory<import3.ForeFrontNav> = new import9.ComponentFactory<import3.ForeFrontNav>('forefront-nav',viewFactory_ForeFrontNav_Host0,import3.ForeFrontNav);
const styles_ForeFrontNav:any[] = [];
var renderType_ForeFrontNav:import0.RenderComponentType = (null as any);
class _View_ForeFrontNav0 extends import1.AppView<import3.ForeFrontNav> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _RouterLinkWithHref_14_3:import10.RouterLinkWithHref;
  _RouterLinkActive_14_4:import11.RouterLinkActive;
  _query_RouterLink_14_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_14_1:import12.QueryList<any>;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _RouterLinkWithHref_17_3:import10.RouterLinkWithHref;
  _RouterLinkActive_17_4:import11.RouterLinkActive;
  _query_RouterLink_17_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_17_1:import12.QueryList<any>;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _RouterLinkWithHref_20_3:import10.RouterLinkWithHref;
  _RouterLinkActive_20_4:import11.RouterLinkActive;
  _query_RouterLink_20_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_20_1:import12.QueryList<any>;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _RouterLinkWithHref_23_3:import10.RouterLinkWithHref;
  _RouterLinkActive_23_4:import11.RouterLinkActive;
  _query_RouterLink_23_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_23_1:import12.QueryList<any>;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ForeFrontNav0,renderType_ForeFrontNav,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','bg-light');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','container');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'nav',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','navbar navbar-light bg-faded');
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','top-line bg-primary');
    this._text_7 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_4,'a',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','navbar-brand');
    this._el_10 = this.renderer.createElement(this._el_9,'img',(null as any));
    this.renderer.setElementAttribute(this._el_10,'height','50px');
    this.renderer.setElementAttribute(this._el_10,'src','./content/img/science-logo.png');
    this._text_11 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','nav navbar-nav');
    this._text_13 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'a',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','nav-item active nav-link');
    this.renderer.setElementAttribute(this._el_14,'routerLink','/home');
    this.renderer.setElementAttribute(this._el_14,'routerLinkActive','active');
    this._RouterLinkWithHref_14_3 = new import10.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._RouterLinkActive_14_4 = new import11.RouterLinkActive(this.parentInjector.get(import13.Router),new import16.ElementRef(this._el_14),this.renderer);
    this._query_RouterLink_14_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_14_1 = new import12.QueryList<any>();
    this._text_15 = this.renderer.createText(this._el_14,'Home',(null as any));
    this._text_16 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_12,'a',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','nav-item active nav-link');
    this.renderer.setElementAttribute(this._el_17,'routerLink','/game-of-life');
    this.renderer.setElementAttribute(this._el_17,'routerLinkActive','active');
    this._RouterLinkWithHref_17_3 = new import10.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._RouterLinkActive_17_4 = new import11.RouterLinkActive(this.parentInjector.get(import13.Router),new import16.ElementRef(this._el_17),this.renderer);
    this._query_RouterLink_17_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_17_1 = new import12.QueryList<any>();
    this._text_18 = this.renderer.createText(this._el_17,'\n                    Game of Life\n                ',(null as any));
    this._text_19 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_12,'a',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','nav-item active nav-link');
    this.renderer.setElementAttribute(this._el_20,'routerLink','/typography');
    this.renderer.setElementAttribute(this._el_20,'routerLinkActive','active');
    this._RouterLinkWithHref_20_3 = new import10.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._RouterLinkActive_20_4 = new import11.RouterLinkActive(this.parentInjector.get(import13.Router),new import16.ElementRef(this._el_20),this.renderer);
    this._query_RouterLink_20_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_20_1 = new import12.QueryList<any>();
    this._text_21 = this.renderer.createText(this._el_20,'\n                    Typography\n                ',(null as any));
    this._text_22 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_12,'a',(null as any));
    this.renderer.setElementAttribute(this._el_23,'class','nav-item active nav-link');
    this.renderer.setElementAttribute(this._el_23,'routerLink','/data-line');
    this.renderer.setElementAttribute(this._el_23,'routerLinkActive','active');
    this._RouterLinkWithHref_23_3 = new import10.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._RouterLinkActive_23_4 = new import11.RouterLinkActive(this.parentInjector.get(import13.Router),new import16.ElementRef(this._el_23),this.renderer);
    this._query_RouterLink_23_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_23_1 = new import12.QueryList<any>();
    this._text_24 = this.renderer.createText(this._el_23,'\n                    DataLine\n                ',(null as any));
    this._text_25 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._text_26 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_27 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_28 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_14,'click',this.eventHandler(this._handle_click_14_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_17,'click',this.eventHandler(this._handle_click_17_0.bind(this)));
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_20,'click',this.eventHandler(this._handle_click_20_0.bind(this)));
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_23,'click',this.eventHandler(this._handle_click_23_0.bind(this)));
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this.init([],[
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
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.RouterLinkWithHref) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLinkWithHref_14_3; }
    if (((token === import11.RouterLinkActive) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLinkActive_14_4; }
    if (((token === import10.RouterLinkWithHref) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._RouterLinkWithHref_17_3; }
    if (((token === import11.RouterLinkActive) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._RouterLinkActive_17_4; }
    if (((token === import10.RouterLinkWithHref) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._RouterLinkWithHref_20_3; }
    if (((token === import11.RouterLinkActive) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._RouterLinkActive_20_4; }
    if (((token === import10.RouterLinkWithHref) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._RouterLinkWithHref_23_3; }
    if (((token === import11.RouterLinkActive) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._RouterLinkActive_23_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = '/home';
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_14_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_14_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_3:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._RouterLinkActive_14_4.routerLinkActive = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_14_4.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_5:any = '/game-of-life';
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._RouterLinkWithHref_17_3.routerLink = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_17_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_7:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._RouterLinkActive_17_4.routerLinkActive = currVal_7;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_7,currVal_7);
      this._expr_7 = currVal_7;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_17_4.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_9:any = '/typography';
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._RouterLinkWithHref_20_3.routerLink = currVal_9;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_9,currVal_9);
      this._expr_9 = currVal_9;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_20_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_11:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._RouterLinkActive_20_4.routerLinkActive = currVal_11;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_11,currVal_11);
      this._expr_11 = currVal_11;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_20_4.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_13:any = '/data-line';
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this._RouterLinkWithHref_23_3.routerLink = currVal_13;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_13,currVal_13);
      this._expr_13 = currVal_13;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_23_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_15:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this._RouterLinkActive_23_4.routerLinkActive = currVal_15;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_15,currVal_15);
      this._expr_15 = currVal_15;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_23_4.ngOnChanges(changes); }
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
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_14_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_17_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_20_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_23_4.ngAfterContentInit(); }
    }
    const currVal_2:any = this._RouterLinkWithHref_14_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_14,'href',this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    const currVal_6:any = this._RouterLinkWithHref_17_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementProperty(this._el_17,'href',this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL,currVal_6));
      this._expr_6 = currVal_6;
    }
    const currVal_10:any = this._RouterLinkWithHref_20_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementProperty(this._el_20,'href',this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL,currVal_10));
      this._expr_10 = currVal_10;
    }
    const currVal_14:any = this._RouterLinkWithHref_23_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementProperty(this._el_23,'href',this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL,currVal_14));
      this._expr_14 = currVal_14;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_14_3.ngOnDestroy();
    this._RouterLinkActive_14_4.ngOnDestroy();
    this._RouterLinkWithHref_17_3.ngOnDestroy();
    this._RouterLinkActive_17_4.ngOnDestroy();
    this._RouterLinkWithHref_20_3.ngOnDestroy();
    this._RouterLinkActive_20_4.ngOnDestroy();
    this._RouterLinkWithHref_23_3.ngOnDestroy();
    this._RouterLinkActive_23_4.ngOnDestroy();
  }
  private _handle_click_14_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_14_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_17_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_17_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_20_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_20_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_23_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_23_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ForeFrontNav0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ForeFrontNav> {
  if ((renderType_ForeFrontNav === (null as any))) { (renderType_ForeFrontNav = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_ForeFrontNav,{})); }
  return new _View_ForeFrontNav0(viewUtils,parentInjector,declarationEl);
}