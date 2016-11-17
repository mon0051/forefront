/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/game-of-life/game-of-life';
import * as import4 from '../../../app/game-of-life/settings';
import * as import5 from '../../../app/game-of-life/grid.component';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/common/src/directives/ng_class';
import * as import13 from './grid.ngfactory';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
var renderType_GameOfLife_Host:import0.RenderComponentType = (null as any);
class _View_GameOfLife_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _GameOfLife_0_4:import3.GameOfLife;
  __Settings_0_5:import4.Settings;
  __Grid_0_6:import5.GridComponent;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement) {
    super(_View_GameOfLife_Host0,renderType_GameOfLife_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  get _Settings_0_5():import4.Settings {
    if ((this.__Settings_0_5 == (null as any))) { (this.__Settings_0_5 = new import4.Settings()); }
    return this.__Settings_0_5;
  }
  get _Grid_0_6():import5.GridComponent {
    if ((this.__Grid_0_6 == (null as any))) { (this.__Grid_0_6 = new import5.GridComponent(this._Settings_0_5)); }
    return this.__Grid_0_6;
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('game-of-life',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_GameOfLife0(this.viewUtils,this.injector(0),this._appEl_0);
    this._GameOfLife_0_4 = new import3.GameOfLife();
    this._appEl_0.initComponent(this._GameOfLife_0_4,([] as any[]),compView_0);
    compView_0.create(this._GameOfLife_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.GameOfLife) && (0 === requestNodeIndex))) { return this._GameOfLife_0_4; }
    if (((token === import4.Settings) && (0 === requestNodeIndex))) { return this._Settings_0_5; }
    if (((token === import5.GridComponent) && (0 === requestNodeIndex))) { return this._Grid_0_6; }
    return notFoundResult;
  }
}
function viewFactory_GameOfLife_Host0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_GameOfLife_Host === (null as any))) { (renderType_GameOfLife_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_GameOfLife_Host0(viewUtils,parentInjector,declarationEl);
}
export const GameOfLifeNgFactory:import11.ComponentFactory<import3.GameOfLife> = new import11.ComponentFactory<import3.GameOfLife>('game-of-life',viewFactory_GameOfLife_Host0,import3.GameOfLife);
const styles_GameOfLife:any[] = ([] as any[]);
var renderType_GameOfLife:import0.RenderComponentType = (null as any);
class _View_GameOfLife0 extends import1.AppView<import3.GameOfLife> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _Grid_6_4:import5.GridComponent;
  _NgClass_6_5:import12.NgClass;
  _text_7:any;
  _text_8:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement) {
    super(_View_GameOfLife0,renderType_GameOfLife,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','gol-root container');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','top-line-heavy');
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','');
    this._text_5 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_0,'gol-grid',(null as any));
    this._appEl_6 = new import2.AppElement(6,0,this,this._el_6);
    var compView_6:any = import13.viewFactory_Grid0(this.viewUtils,this.injector(6),this._appEl_6);
    this._Grid_6_4 = new import5.GridComponent(this.parentInjector.get(import4.Settings));
    this._NgClass_6_5 = new import12.NgClass(this.parentInjector.get(import14.IterableDiffers),this.parentInjector.get(import15.KeyValueDiffers),new import16.ElementRef(this._el_6),this.renderer);
    this._appEl_6.initComponent(this._Grid_6_4,([] as any[]),compView_6);
    this._text_7 = this.renderer.createText((null as any),'Temp',(null as any));
    compView_6.create(this._Grid_6_4,([] as any[]),(null as any));
    this._text_8 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import5.GridComponent) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Grid_6_4; }
    if (((token === import12.NgClass) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._NgClass_6_5; }
    return notFoundResult;
  }
}
export function viewFactory_GameOfLife0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement):import1.AppView<import3.GameOfLife> {
  if ((renderType_GameOfLife === (null as any))) { (renderType_GameOfLife = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_GameOfLife,{})); }
  return new _View_GameOfLife0(viewUtils,parentInjector,declarationEl);
}