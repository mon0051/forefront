/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/dataline/DataLineRepository';
import * as import4 from '../../../app/dataline/DataLineComponent';
import * as import5 from '../../../app/widget/widget';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '../../../app/dataline/http-dataline';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../widget/widget.ngfactory';
var renderType_DataLineComponent_Host:import0.RenderComponentType = (null as any);
class _View_DataLineComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _DataLineRepository_0_4:import3.DataLineRepository;
  _DataLineComponent_0_5:import4.DataLineComponent;
  __CardWidget_0_6:import5.CardWidget;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement) {
    super(_View_DataLineComponent_Host0,renderType_DataLineComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  get _CardWidget_0_6():import5.CardWidget {
    if ((this.__CardWidget_0_6 == (null as any))) { (this.__CardWidget_0_6 = new import5.CardWidget()); }
    return this.__CardWidget_0_6;
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('data-line-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DataLineComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DataLineRepository_0_4 = new import3.DataLineRepository(this.parentInjector.get(import10.HttpDataLine));
    this._DataLineComponent_0_5 = new import4.DataLineComponent(this._DataLineRepository_0_4);
    this._appEl_0.initComponent(this._DataLineComponent_0_5,[],compView_0);
    compView_0.create(this._DataLineComponent_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.DataLineRepository) && (0 === requestNodeIndex))) { return this._DataLineRepository_0_4; }
    if (((token === import4.DataLineComponent) && (0 === requestNodeIndex))) { return this._DataLineComponent_0_5; }
    if (((token === import5.CardWidget) && (0 === requestNodeIndex))) { return this._CardWidget_0_6; }
    return notFoundResult;
  }
}
function viewFactory_DataLineComponent_Host0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_DataLineComponent_Host === (null as any))) { (renderType_DataLineComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_DataLineComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DataLineComponentNgFactory:import12.ComponentFactory<import4.DataLineComponent> = new import12.ComponentFactory<import4.DataLineComponent>('data-line-component',viewFactory_DataLineComponent_Host0,import4.DataLineComponent);
const styles_DataLineComponent:any[] = [];
var renderType_DataLineComponent:import0.RenderComponentType = (null as any);
class _View_DataLineComponent0 extends import1.AppView<import4.DataLineComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _CardWidget_6_4:import5.CardWidget;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement) {
    super(_View_DataLineComponent0,renderType_DataLineComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','dataline container');
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','row');
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','col-sm-5');
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'card-widget',(null as any));
    this._appEl_6 = new import2.AppElement(6,4,this,this._el_6);
    var compView_6:any = import13.viewFactory_CardWidget0(this.viewUtils,this.injector(6),this._appEl_6);
    this._CardWidget_6_4 = new import5.CardWidget();
    this._appEl_6.initComponent(this._CardWidget_6_4,[],compView_6);
    this._text_7 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_8 = this.renderer.createElement((null as any),'pre',(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'',(null as any));
    this._text_10 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'pre',(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n      ',(null as any));
      compView_6.create(this._CardWidget_6_4,[[].concat([
        this._text_7,
        this._el_8,
        this._text_10,
        this._el_11,
        this._text_13
      ]
    )],(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import9.UNINITIALIZED;
    this._expr_1 = import9.UNINITIALIZED;
    this.init([],[
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
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import5.CardWidget) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._CardWidget_6_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import6.interpolate(1,'Promise Data : ',this.context.stringed(),'');
    if (import6.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_9,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import6.interpolate(1,'Observed Data : ',this.context.stringedObservable(),'');
    if (import6.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_12,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_DataLineComponent0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement):import1.AppView<import4.DataLineComponent> {
  if ((renderType_DataLineComponent === (null as any))) { (renderType_DataLineComponent = viewUtils.createRenderComponentType('C:/Git/projects/ForeFront/client/app/dataline/data-line-component.html',0,import11.ViewEncapsulation.None,styles_DataLineComponent,{})); }
  return new _View_DataLineComponent0(viewUtils,parentInjector,declarationEl);
}