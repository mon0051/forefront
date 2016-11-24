/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/forefront-root/forefront-root.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../app/nav/nav.component';
import * as import11 from '../../../app/content/content.component';
import * as import12 from '../nav/nav.component.ngfactory';
import * as import13 from '../content/content.component.ngfactory';
var renderType_ForeFrontRootComponent_Host:import0.RenderComponentType = (null as any);
class _View_ForeFrontRootComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ForeFrontRootComponent_0_4:import3.ForeFrontRootComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ForeFrontRootComponent_Host0,renderType_ForeFrontRootComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('forefront-root',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ForeFrontRootComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ForeFrontRootComponent_0_4 = new import3.ForeFrontRootComponent();
    this._appEl_0.initComponent(this._ForeFrontRootComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._ForeFrontRootComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ForeFrontRootComponent) && (0 === requestNodeIndex))) { return this._ForeFrontRootComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ForeFrontRootComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ForeFrontRootComponent_Host === (null as any))) { (renderType_ForeFrontRootComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ForeFrontRootComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ForeFrontRootComponentNgFactory:import9.ComponentFactory<import3.ForeFrontRootComponent> = new import9.ComponentFactory<import3.ForeFrontRootComponent>('forefront-root',viewFactory_ForeFrontRootComponent_Host0,import3.ForeFrontRootComponent);
const styles_ForeFrontRootComponent:any[] = ([] as any[]);
var renderType_ForeFrontRootComponent:import0.RenderComponentType = (null as any);
class _View_ForeFrontRootComponent0 extends import1.AppView<import3.ForeFrontRootComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _ForeFrontNavComponent_2_4:import10.ForeFrontNavComponent;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _ForeFrontContentComponent_4_4:import11.ForeFrontContentComponent;
  _text_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ForeFrontRootComponent0,renderType_ForeFrontRootComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','forefront-root');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'forefront-nav',(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import12.viewFactory_ForeFrontNavComponent0(this.viewUtils,this.injector(2),this._appEl_2);
    this._ForeFrontNavComponent_2_4 = new import10.ForeFrontNavComponent();
    this._appEl_2.initComponent(this._ForeFrontNavComponent_2_4,([] as any[]),compView_2);
    compView_2.create(this._ForeFrontNavComponent_2_4,([] as any[]),(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_0,'forefront-content',(null as any));
    this._appEl_4 = new import2.AppElement(4,0,this,this._el_4);
    var compView_4:any = import13.viewFactory_ForeFrontContentComponent0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ForeFrontContentComponent_4_4 = new import11.ForeFrontContentComponent();
    this._appEl_4.initComponent(this._ForeFrontContentComponent_4_4,([] as any[]),compView_4);
    compView_4.create(this._ForeFrontContentComponent_4_4,([] as any[]),(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.ForeFrontNavComponent) && (2 === requestNodeIndex))) { return this._ForeFrontNavComponent_2_4; }
    if (((token === import11.ForeFrontContentComponent) && (4 === requestNodeIndex))) { return this._ForeFrontContentComponent_4_4; }
    return notFoundResult;
  }
}
export function viewFactory_ForeFrontRootComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ForeFrontRootComponent> {
  if ((renderType_ForeFrontRootComponent === (null as any))) { (renderType_ForeFrontRootComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_ForeFrontRootComponent,{})); }
  return new _View_ForeFrontRootComponent0(viewUtils,parentInjector,declarationEl);
}