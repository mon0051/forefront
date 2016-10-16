/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.modules';
import * as import2 from '@angular/http/src/http_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/common/src/common_module';
import * as import6 from '@angular/core/src/application_module';
import * as import7 from '@angular/platform-browser/src/browser';
import * as import8 from '@angular/router/src/router_module';
import * as import9 from '@angular/http/src/backends/browser_xhr';
import * as import10 from '@angular/http/src/base_response_options';
import * as import11 from '@angular/http/src/backends/xhr_backend';
import * as import12 from '@angular/http/src/base_request_options';
import * as import13 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import14 from '@angular/common/src/localization';
import * as import15 from '@angular/core/src/application_init';
import * as import16 from '@angular/core/src/testability/testability';
import * as import17 from '@angular/core/src/application_ref';
import * as import18 from '@angular/core/src/linker/compiler';
import * as import19 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import20 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import21 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import22 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import23 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import24 from '@angular/core/src/linker/view_utils';
import * as import25 from '@angular/platform-browser/src/browser/title';
import * as import26 from '@angular/forms/src/form_builder';
import * as import27 from '@angular/common/src/location/location';
import * as import28 from '@angular/router/src/url_tree';
import * as import29 from '@angular/router/src/router_outlet_map';
import * as import30 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import31 from '@angular/router/src/router_preloader';
import * as import32 from '../../app/dataline/http-dataline';
import * as import33 from '@angular/core/src/di/injector';
import * as import34 from './home/home.ngfactory';
import * as import35 from './game-of-life/game-of-life.ngfactory';
import * as import36 from './line-height/typography-thinger.ngfactory';
import * as import37 from './dataline/DataLineComponent.ngfactory';
import * as import38 from './dynamic-forms/dynamic-form-example.ngfactory';
import * as import39 from './util/not-found.ngfactory';
import * as import40 from './forefront-root/forefront-root.ngfactory';
import * as import41 from '@angular/core/src/application_tokens';
import * as import42 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import43 from '@angular/platform-browser/src/dom/events/key_events';
import * as import44 from '@angular/core/src/zone/ng_zone';
import * as import45 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import46 from '@angular/common/src/location/platform_location';
import * as import47 from '@angular/common/src/location/location_strategy';
import * as import48 from '../../app/home/home';
import * as import49 from '../../app/game-of-life/game-of-life';
import * as import50 from '../../app/line-height/typography-thinger';
import * as import51 from '../../app/dataline/DataLineComponent';
import * as import52 from '../../app/dynamic-forms/dynamic-form-example';
import * as import53 from '../../app/util/not-found';
import * as import54 from '@angular/router/src/router';
import * as import55 from '@angular/core/src/console';
import * as import56 from '@angular/http/src/interfaces';
import * as import57 from '@angular/http/src/http';
import * as import58 from '@angular/core/src/i18n/tokens';
import * as import59 from '@angular/core/src/error_handler';
import * as import60 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import61 from '@angular/platform-browser/src/dom/animation_driver';
import * as import62 from '@angular/core/src/render/api';
import * as import63 from '@angular/core/src/security';
import * as import64 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import65 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import66 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import67 from '@angular/router/src/router_config_loader';
import * as import68 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _HttpModule_0:import2.HttpModule;
  _InternalFormsSharedModule_1:import3.InternalFormsSharedModule;
  _FormsModule_2:import4.FormsModule;
  _CommonModule_3:import5.CommonModule;
  _ApplicationModule_4:import6.ApplicationModule;
  _BrowserModule_5:import7.BrowserModule;
  _ROUTER_FORROOT_GUARD_6:any;
  _RouterModule_7:import8.RouterModule;
  _ReactiveFormsModule_8:import4.ReactiveFormsModule;
  _AppModule_9:import1.AppModule;
  __BrowserXhr_10:import9.BrowserXhr;
  __ResponseOptions_11:import10.BaseResponseOptions;
  __XSRFStrategy_12:any;
  __XHRBackend_13:import11.XHRBackend;
  __RequestOptions_14:import12.BaseRequestOptions;
  __Http_15:any;
  __RadioControlRegistry_16:import13.RadioControlRegistry;
  __LOCALE_ID_17:any;
  __NgLocalization_18:import14.NgLocaleLocalization;
  _ErrorHandler_19:any;
  _ApplicationInitStatus_20:import15.ApplicationInitStatus;
  _Testability_21:import16.Testability;
  _ApplicationRef__22:import17.ApplicationRef_;
  __ApplicationRef_23:any;
  __Compiler_24:import18.Compiler;
  __APP_ID_25:any;
  __DOCUMENT_26:any;
  __HAMMER_GESTURE_CONFIG_27:import19.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_28:any[];
  __EventManager_29:import20.EventManager;
  __DomSharedStylesHost_30:import21.DomSharedStylesHost;
  __AnimationDriver_31:any;
  __DomRootRenderer_32:import22.DomRootRenderer_;
  __RootRenderer_33:any;
  __DomSanitizer_34:import23.DomSanitizerImpl;
  __Sanitizer_35:any;
  __ViewUtils_36:import24.ViewUtils;
  __IterableDiffers_37:any;
  __KeyValueDiffers_38:any;
  __SharedStylesHost_39:any;
  __Title_40:import25.Title;
  __FormBuilder_41:import26.FormBuilder;
  __ROUTER_CONFIGURATION_42:any;
  __LocationStrategy_43:any;
  __Location_44:import27.Location;
  __UrlSerializer_45:import28.DefaultUrlSerializer;
  __RouterOutletMap_46:import29.RouterOutletMap;
  __NgModuleFactoryLoader_47:import30.SystemJsNgModuleLoader;
  __ROUTES_48:any[];
  __Router_49:any;
  __ActivatedRoute_50:any;
  _NoPreloading_51:import31.NoPreloading;
  _PreloadingStrategy_52:any;
  _RouterPreloader_53:import31.RouterPreloader;
  __PreloadAllModules_54:import31.PreloadAllModules;
  __APP_BOOTSTRAP_LISTENER_55:any[];
  __HttpDataLine_56:import32.HttpDataLine;
  constructor(parent:import33.Injector) {
    super(parent,[
      import34.HomeComponentNgFactory,
      import35.GameOfLifeNgFactory,
      import36.TypographyThingerNgFactory,
      import37.DataLineComponentNgFactory,
      import38.DynamicFormsExampleComponentNgFactory,
      import39.PageNotFoundComponentNgFactory,
      import40.ForeFrontRootNgFactory
    ]
    ,[import40.ForeFrontRootNgFactory]);
  }
  get _BrowserXhr_10():import9.BrowserXhr {
    if ((this.__BrowserXhr_10 == (null as any))) { (this.__BrowserXhr_10 = new import9.BrowserXhr()); }
    return this.__BrowserXhr_10;
  }
  get _ResponseOptions_11():import10.BaseResponseOptions {
    if ((this.__ResponseOptions_11 == (null as any))) { (this.__ResponseOptions_11 = new import10.BaseResponseOptions()); }
    return this.__ResponseOptions_11;
  }
  get _XSRFStrategy_12():any {
    if ((this.__XSRFStrategy_12 == (null as any))) { (this.__XSRFStrategy_12 = import2._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_12;
  }
  get _XHRBackend_13():import11.XHRBackend {
    if ((this.__XHRBackend_13 == (null as any))) { (this.__XHRBackend_13 = new import11.XHRBackend(this._BrowserXhr_10,this._ResponseOptions_11,this._XSRFStrategy_12)); }
    return this.__XHRBackend_13;
  }
  get _RequestOptions_14():import12.BaseRequestOptions {
    if ((this.__RequestOptions_14 == (null as any))) { (this.__RequestOptions_14 = new import12.BaseRequestOptions()); }
    return this.__RequestOptions_14;
  }
  get _Http_15():any {
    if ((this.__Http_15 == (null as any))) { (this.__Http_15 = import2.httpFactory(this._XHRBackend_13,this._RequestOptions_14)); }
    return this.__Http_15;
  }
  get _RadioControlRegistry_16():import13.RadioControlRegistry {
    if ((this.__RadioControlRegistry_16 == (null as any))) { (this.__RadioControlRegistry_16 = new import13.RadioControlRegistry()); }
    return this.__RadioControlRegistry_16;
  }
  get _LOCALE_ID_17():any {
    if ((this.__LOCALE_ID_17 == (null as any))) { (this.__LOCALE_ID_17 = 'en-US'); }
    return this.__LOCALE_ID_17;
  }
  get _NgLocalization_18():import14.NgLocaleLocalization {
    if ((this.__NgLocalization_18 == (null as any))) { (this.__NgLocalization_18 = new import14.NgLocaleLocalization(this._LOCALE_ID_17)); }
    return this.__NgLocalization_18;
  }
  get _ApplicationRef_23():any {
    if ((this.__ApplicationRef_23 == (null as any))) { (this.__ApplicationRef_23 = this._ApplicationRef__22); }
    return this.__ApplicationRef_23;
  }
  get _Compiler_24():import18.Compiler {
    if ((this.__Compiler_24 == (null as any))) { (this.__Compiler_24 = new import18.Compiler()); }
    return this.__Compiler_24;
  }
  get _APP_ID_25():any {
    if ((this.__APP_ID_25 == (null as any))) { (this.__APP_ID_25 = import41._appIdRandomProviderFactory()); }
    return this.__APP_ID_25;
  }
  get _DOCUMENT_26():any {
    if ((this.__DOCUMENT_26 == (null as any))) { (this.__DOCUMENT_26 = import7._document()); }
    return this.__DOCUMENT_26;
  }
  get _HAMMER_GESTURE_CONFIG_27():import19.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_27 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_27 = new import19.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_27;
  }
  get _EVENT_MANAGER_PLUGINS_28():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_28 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_28 = [
      new import42.DomEventsPlugin(),
      new import43.KeyEventsPlugin(),
      new import19.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_27)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_28;
  }
  get _EventManager_29():import20.EventManager {
    if ((this.__EventManager_29 == (null as any))) { (this.__EventManager_29 = new import20.EventManager(this._EVENT_MANAGER_PLUGINS_28,this.parent.get(import44.NgZone))); }
    return this.__EventManager_29;
  }
  get _DomSharedStylesHost_30():import21.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_30 == (null as any))) { (this.__DomSharedStylesHost_30 = new import21.DomSharedStylesHost(this._DOCUMENT_26)); }
    return this.__DomSharedStylesHost_30;
  }
  get _AnimationDriver_31():any {
    if ((this.__AnimationDriver_31 == (null as any))) { (this.__AnimationDriver_31 = import7._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_31;
  }
  get _DomRootRenderer_32():import22.DomRootRenderer_ {
    if ((this.__DomRootRenderer_32 == (null as any))) { (this.__DomRootRenderer_32 = new import22.DomRootRenderer_(this._DOCUMENT_26,this._EventManager_29,this._DomSharedStylesHost_30,this._AnimationDriver_31)); }
    return this.__DomRootRenderer_32;
  }
  get _RootRenderer_33():any {
    if ((this.__RootRenderer_33 == (null as any))) { (this.__RootRenderer_33 = import45._createConditionalRootRenderer(this._DomRootRenderer_32,this.parent.get(import45.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_33;
  }
  get _DomSanitizer_34():import23.DomSanitizerImpl {
    if ((this.__DomSanitizer_34 == (null as any))) { (this.__DomSanitizer_34 = new import23.DomSanitizerImpl()); }
    return this.__DomSanitizer_34;
  }
  get _Sanitizer_35():any {
    if ((this.__Sanitizer_35 == (null as any))) { (this.__Sanitizer_35 = this._DomSanitizer_34); }
    return this.__Sanitizer_35;
  }
  get _ViewUtils_36():import24.ViewUtils {
    if ((this.__ViewUtils_36 == (null as any))) { (this.__ViewUtils_36 = new import24.ViewUtils(this._RootRenderer_33,this._APP_ID_25,this._Sanitizer_35)); }
    return this.__ViewUtils_36;
  }
  get _IterableDiffers_37():any {
    if ((this.__IterableDiffers_37 == (null as any))) { (this.__IterableDiffers_37 = import6._iterableDiffersFactory()); }
    return this.__IterableDiffers_37;
  }
  get _KeyValueDiffers_38():any {
    if ((this.__KeyValueDiffers_38 == (null as any))) { (this.__KeyValueDiffers_38 = import6._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_38;
  }
  get _SharedStylesHost_39():any {
    if ((this.__SharedStylesHost_39 == (null as any))) { (this.__SharedStylesHost_39 = this._DomSharedStylesHost_30); }
    return this.__SharedStylesHost_39;
  }
  get _Title_40():import25.Title {
    if ((this.__Title_40 == (null as any))) { (this.__Title_40 = new import25.Title()); }
    return this.__Title_40;
  }
  get _FormBuilder_41():import26.FormBuilder {
    if ((this.__FormBuilder_41 == (null as any))) { (this.__FormBuilder_41 = new import26.FormBuilder()); }
    return this.__FormBuilder_41;
  }
  get _ROUTER_CONFIGURATION_42():any {
    if ((this.__ROUTER_CONFIGURATION_42 == (null as any))) { (this.__ROUTER_CONFIGURATION_42 = {}); }
    return this.__ROUTER_CONFIGURATION_42;
  }
  get _LocationStrategy_43():any {
    if ((this.__LocationStrategy_43 == (null as any))) { (this.__LocationStrategy_43 = import8.provideLocationStrategy(this.parent.get(import46.PlatformLocation),this.parent.get(import47.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_42)); }
    return this.__LocationStrategy_43;
  }
  get _Location_44():import27.Location {
    if ((this.__Location_44 == (null as any))) { (this.__Location_44 = new import27.Location(this._LocationStrategy_43)); }
    return this.__Location_44;
  }
  get _UrlSerializer_45():import28.DefaultUrlSerializer {
    if ((this.__UrlSerializer_45 == (null as any))) { (this.__UrlSerializer_45 = new import28.DefaultUrlSerializer()); }
    return this.__UrlSerializer_45;
  }
  get _RouterOutletMap_46():import29.RouterOutletMap {
    if ((this.__RouterOutletMap_46 == (null as any))) { (this.__RouterOutletMap_46 = new import29.RouterOutletMap()); }
    return this.__RouterOutletMap_46;
  }
  get _NgModuleFactoryLoader_47():import30.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_47 == (null as any))) { (this.__NgModuleFactoryLoader_47 = new import30.SystemJsNgModuleLoader(this._Compiler_24,this.parent.get(import30.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_47;
  }
  get _ROUTES_48():any[] {
      if ((this.__ROUTES_48 == (null as any))) { (this.__ROUTES_48 = [[
        {
          path: 'home',
          component: import48.HomeComponent
        }
        ,
        {
          path: 'game-of-life',
          component: import49.GameOfLife
        }
        ,
        {
          path: 'typography',
          component: import50.TypographyThinger
        }
        ,
        {
          path: 'data-line',
          component: import51.DataLineComponent
        }
        ,
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }
        ,
        {
          path: 'index.html',
          redirectTo: 'home',
          pathMatch: 'full'
        }
        ,
        {
          path: 'dynamic-forms',
          component: import52.DynamicFormsExampleComponent
        }
        ,
        {
          path: '**',
          component: import53.PageNotFoundComponent
        }

      ]
    ]); }
    return this.__ROUTES_48;
  }
  get _Router_49():any {
    if ((this.__Router_49 == (null as any))) { (this.__Router_49 = import8.setupRouter(this._ApplicationRef_23,this._UrlSerializer_45,this._RouterOutletMap_46,this._Location_44,this,this._NgModuleFactoryLoader_47,this._Compiler_24,this._ROUTES_48,this._ROUTER_CONFIGURATION_42)); }
    return this.__Router_49;
  }
  get _ActivatedRoute_50():any {
    if ((this.__ActivatedRoute_50 == (null as any))) { (this.__ActivatedRoute_50 = import8.rootRoute(this._Router_49)); }
    return this.__ActivatedRoute_50;
  }
  get _PreloadAllModules_54():import31.PreloadAllModules {
    if ((this.__PreloadAllModules_54 == (null as any))) { (this.__PreloadAllModules_54 = new import31.PreloadAllModules()); }
    return this.__PreloadAllModules_54;
  }
  get _APP_BOOTSTRAP_LISTENER_55():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_55 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_55 = [import8.initialRouterNavigation(this._Router_49,this._ApplicationRef_23,this._RouterPreloader_53,this._ROUTER_CONFIGURATION_42)]); }
    return this.__APP_BOOTSTRAP_LISTENER_55;
  }
  get _HttpDataLine_56():import32.HttpDataLine {
    if ((this.__HttpDataLine_56 == (null as any))) { (this.__HttpDataLine_56 = new import32.HttpDataLine(this._Http_15)); }
    return this.__HttpDataLine_56;
  }
  createInternal():import1.AppModule {
    this._HttpModule_0 = new import2.HttpModule();
    this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
    this._FormsModule_2 = new import4.FormsModule();
    this._CommonModule_3 = new import5.CommonModule();
    this._ApplicationModule_4 = new import6.ApplicationModule();
    this._BrowserModule_5 = new import7.BrowserModule(this.parent.get(import7.BrowserModule,(null as any)));
    this._ROUTER_FORROOT_GUARD_6 = import8.provideForRootGuard(this.parent.get(import54.Router,(null as any)));
    this._RouterModule_7 = new import8.RouterModule(this._ROUTER_FORROOT_GUARD_6);
    this._ReactiveFormsModule_8 = new import4.ReactiveFormsModule();
    this._AppModule_9 = new import1.AppModule();
    this._ErrorHandler_19 = import7.errorHandler();
    this._ApplicationInitStatus_20 = new import15.ApplicationInitStatus(this.parent.get(import15.APP_INITIALIZER,(null as any)));
    this._Testability_21 = new import16.Testability(this.parent.get(import44.NgZone));
    this._ApplicationRef__22 = new import17.ApplicationRef_(this.parent.get(import44.NgZone),this.parent.get(import55.Console),this,this._ErrorHandler_19,this,this._ApplicationInitStatus_20,this.parent.get(import16.TestabilityRegistry,(null as any)),this._Testability_21);
    this._NoPreloading_51 = new import31.NoPreloading();
    this._PreloadingStrategy_52 = this._NoPreloading_51;
    this._RouterPreloader_53 = new import31.RouterPreloader(this._Router_49,this._NgModuleFactoryLoader_47,this._Compiler_24,this,this._PreloadingStrategy_52);
    return this._AppModule_9;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.HttpModule)) { return this._HttpModule_0; }
    if ((token === import3.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_1; }
    if ((token === import4.FormsModule)) { return this._FormsModule_2; }
    if ((token === import5.CommonModule)) { return this._CommonModule_3; }
    if ((token === import6.ApplicationModule)) { return this._ApplicationModule_4; }
    if ((token === import7.BrowserModule)) { return this._BrowserModule_5; }
    if ((token === import8.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_6; }
    if ((token === import8.RouterModule)) { return this._RouterModule_7; }
    if ((token === import4.ReactiveFormsModule)) { return this._ReactiveFormsModule_8; }
    if ((token === import1.AppModule)) { return this._AppModule_9; }
    if ((token === import9.BrowserXhr)) { return this._BrowserXhr_10; }
    if ((token === import10.ResponseOptions)) { return this._ResponseOptions_11; }
    if ((token === import56.XSRFStrategy)) { return this._XSRFStrategy_12; }
    if ((token === import11.XHRBackend)) { return this._XHRBackend_13; }
    if ((token === import12.RequestOptions)) { return this._RequestOptions_14; }
    if ((token === import57.Http)) { return this._Http_15; }
    if ((token === import13.RadioControlRegistry)) { return this._RadioControlRegistry_16; }
    if ((token === import58.LOCALE_ID)) { return this._LOCALE_ID_17; }
    if ((token === import14.NgLocalization)) { return this._NgLocalization_18; }
    if ((token === import59.ErrorHandler)) { return this._ErrorHandler_19; }
    if ((token === import15.ApplicationInitStatus)) { return this._ApplicationInitStatus_20; }
    if ((token === import16.Testability)) { return this._Testability_21; }
    if ((token === import17.ApplicationRef_)) { return this._ApplicationRef__22; }
    if ((token === import17.ApplicationRef)) { return this._ApplicationRef_23; }
    if ((token === import18.Compiler)) { return this._Compiler_24; }
    if ((token === import41.APP_ID)) { return this._APP_ID_25; }
    if ((token === import60.DOCUMENT)) { return this._DOCUMENT_26; }
    if ((token === import19.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_27; }
    if ((token === import20.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_28; }
    if ((token === import20.EventManager)) { return this._EventManager_29; }
    if ((token === import21.DomSharedStylesHost)) { return this._DomSharedStylesHost_30; }
    if ((token === import61.AnimationDriver)) { return this._AnimationDriver_31; }
    if ((token === import22.DomRootRenderer)) { return this._DomRootRenderer_32; }
    if ((token === import62.RootRenderer)) { return this._RootRenderer_33; }
    if ((token === import23.DomSanitizer)) { return this._DomSanitizer_34; }
    if ((token === import63.Sanitizer)) { return this._Sanitizer_35; }
    if ((token === import24.ViewUtils)) { return this._ViewUtils_36; }
    if ((token === import64.IterableDiffers)) { return this._IterableDiffers_37; }
    if ((token === import65.KeyValueDiffers)) { return this._KeyValueDiffers_38; }
    if ((token === import21.SharedStylesHost)) { return this._SharedStylesHost_39; }
    if ((token === import25.Title)) { return this._Title_40; }
    if ((token === import26.FormBuilder)) { return this._FormBuilder_41; }
    if ((token === import8.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_42; }
    if ((token === import47.LocationStrategy)) { return this._LocationStrategy_43; }
    if ((token === import27.Location)) { return this._Location_44; }
    if ((token === import28.UrlSerializer)) { return this._UrlSerializer_45; }
    if ((token === import29.RouterOutletMap)) { return this._RouterOutletMap_46; }
    if ((token === import66.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_47; }
    if ((token === import67.ROUTES)) { return this._ROUTES_48; }
    if ((token === import54.Router)) { return this._Router_49; }
    if ((token === import68.ActivatedRoute)) { return this._ActivatedRoute_50; }
    if ((token === import31.NoPreloading)) { return this._NoPreloading_51; }
    if ((token === import31.PreloadingStrategy)) { return this._PreloadingStrategy_52; }
    if ((token === import31.RouterPreloader)) { return this._RouterPreloader_53; }
    if ((token === import31.PreloadAllModules)) { return this._PreloadAllModules_54; }
    if ((token === import41.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_55; }
    if ((token === import32.HttpDataLine)) { return this._HttpDataLine_56; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__22.ngOnDestroy();
    this._RouterPreloader_53.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);