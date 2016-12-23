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
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('../../app/app.modules');
var import2 = require('@angular/http/src/http_module');
var import3 = require('@angular/forms/src/directives');
var import4 = require('@angular/forms/src/form_providers');
var import5 = require('@angular/common/src/common_module');
var import6 = require('@angular/core/src/application_module');
var import7 = require('@angular/platform-browser/src/browser');
var import8 = require('@angular/router/src/router_module');
var import9 = require('@angular/http/src/backends/browser_xhr');
var import10 = require('@angular/http/src/base_response_options');
var import11 = require('@angular/http/src/backends/xhr_backend');
var import12 = require('@angular/http/src/base_request_options');
var import13 = require('@angular/forms/src/directives/radio_control_value_accessor');
var import14 = require('@angular/common/src/localization');
var import15 = require('@angular/core/src/application_init');
var import16 = require('@angular/core/src/testability/testability');
var import17 = require('@angular/core/src/application_ref');
var import18 = require('@angular/core/src/linker/compiler');
var import19 = require('@angular/platform-browser/src/dom/events/hammer_gestures');
var import20 = require('@angular/platform-browser/src/dom/events/event_manager');
var import21 = require('@angular/platform-browser/src/dom/shared_styles_host');
var import22 = require('@angular/platform-browser/src/dom/dom_renderer');
var import23 = require('@angular/platform-browser/src/security/dom_sanitization_service');
var import24 = require('@angular/core/src/linker/view_utils');
var import25 = require('@angular/platform-browser/src/browser/title');
var import26 = require('@angular/forms/src/form_builder');
var import27 = require('@angular/common/src/location/location');
var import28 = require('@angular/router/src/url_tree');
var import29 = require('@angular/router/src/router_outlet_map');
var import30 = require('@angular/core/src/linker/system_js_ng_module_factory_loader');
var import31 = require('@angular/router/src/router_preloader');
var import32 = require('../../app/dataline/http-dataline');
var import34 = require('./home/home.component.ngfactory');
var import35 = require('./game-of-life/game-of-life.component.ngfactory');
var import36 = require('./battler/BattlerMain.ngfactory');
var import37 = require('./line-height/typography-thinger.component.ngfactory');
var import38 = require('./dataline/data-line.component.ngfactory');
var import39 = require('./dynamic-forms/dynamic-form-example.ngfactory');
var import40 = require('./util/not-found.ngfactory');
var import41 = require('./forefront-root/forefront-root.component.ngfactory');
var import42 = require('@angular/core/src/application_tokens');
var import43 = require('@angular/platform-browser/src/dom/events/dom_events');
var import44 = require('@angular/platform-browser/src/dom/events/key_events');
var import45 = require('@angular/core/src/zone/ng_zone');
var import46 = require('@angular/platform-browser/src/dom/debug/ng_probe');
var import47 = require('@angular/common/src/location/platform_location');
var import48 = require('@angular/common/src/location/location_strategy');
var import49 = require('../../app/home/home.component');
var import50 = require('../../app/game-of-life/game-of-life.component');
var import51 = require('../../app/battler/BattlerMain');
var import52 = require('../../app/line-height/typography-thinger.component');
var import53 = require('../../app/dataline/data-line.component');
var import54 = require('../../app/dynamic-forms/dynamic-form-example');
var import55 = require('../../app/util/not-found');
var import56 = require('@angular/router/src/router');
var import57 = require('@angular/core/src/console');
var import58 = require('@angular/http/src/interfaces');
var import59 = require('@angular/http/src/http');
var import60 = require('@angular/core/src/i18n/tokens');
var import61 = require('@angular/core/src/error_handler');
var import62 = require('@angular/platform-browser/src/dom/dom_tokens');
var import63 = require('@angular/platform-browser/src/dom/animation_driver');
var import64 = require('@angular/core/src/render/api');
var import65 = require('@angular/core/src/security');
var import66 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import67 = require('@angular/core/src/change_detection/differs/keyvalue_differs');
var import68 = require('@angular/core/src/linker/ng_module_factory_loader');
var import69 = require('@angular/router/src/router_config_loader');
var import70 = require('@angular/router/src/router_state');
var ForefrontModuleInjector = (function (_super) {
    __extends(ForefrontModuleInjector, _super);
    function ForefrontModuleInjector(parent) {
        _super.call(this, parent, [
            import34.HomeComponentNgFactory,
            import35.GameOfLifeComponentNgFactory,
            import36.BattlerMainNgFactory,
            import37.TypographyThingerComponentNgFactory,
            import38.DataLineComponentNgFactory,
            import39.DynamicFormsExampleComponentNgFactory,
            import40.PageNotFoundComponentNgFactory,
            import41.ForeFrontRootComponentNgFactory
        ], [import41.ForeFrontRootComponentNgFactory]);
    }
    Object.defineProperty(ForefrontModuleInjector.prototype, "_BrowserXhr_10", {
        get: function () {
            if ((this.__BrowserXhr_10 == null)) {
                (this.__BrowserXhr_10 = new import9.BrowserXhr());
            }
            return this.__BrowserXhr_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_ResponseOptions_11", {
        get: function () {
            if ((this.__ResponseOptions_11 == null)) {
                (this.__ResponseOptions_11 = new import10.BaseResponseOptions());
            }
            return this.__ResponseOptions_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_XSRFStrategy_12", {
        get: function () {
            if ((this.__XSRFStrategy_12 == null)) {
                (this.__XSRFStrategy_12 = import2._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_XHRBackend_13", {
        get: function () {
            if ((this.__XHRBackend_13 == null)) {
                (this.__XHRBackend_13 = new import11.XHRBackend(this._BrowserXhr_10, this._ResponseOptions_11, this._XSRFStrategy_12));
            }
            return this.__XHRBackend_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_RequestOptions_14", {
        get: function () {
            if ((this.__RequestOptions_14 == null)) {
                (this.__RequestOptions_14 = new import12.BaseRequestOptions());
            }
            return this.__RequestOptions_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_Http_15", {
        get: function () {
            if ((this.__Http_15 == null)) {
                (this.__Http_15 = import2.httpFactory(this._XHRBackend_13, this._RequestOptions_14));
            }
            return this.__Http_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_RadioControlRegistry_16", {
        get: function () {
            if ((this.__RadioControlRegistry_16 == null)) {
                (this.__RadioControlRegistry_16 = new import13.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_LOCALE_ID_17", {
        get: function () {
            if ((this.__LOCALE_ID_17 == null)) {
                (this.__LOCALE_ID_17 = 'en-US');
            }
            return this.__LOCALE_ID_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_NgLocalization_18", {
        get: function () {
            if ((this.__NgLocalization_18 == null)) {
                (this.__NgLocalization_18 = new import14.NgLocaleLocalization(this._LOCALE_ID_17));
            }
            return this.__NgLocalization_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_ApplicationRef_23", {
        get: function () {
            if ((this.__ApplicationRef_23 == null)) {
                (this.__ApplicationRef_23 = this._ApplicationRef__22);
            }
            return this.__ApplicationRef_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_Compiler_24", {
        get: function () {
            if ((this.__Compiler_24 == null)) {
                (this.__Compiler_24 = new import18.Compiler());
            }
            return this.__Compiler_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_APP_ID_25", {
        get: function () {
            if ((this.__APP_ID_25 == null)) {
                (this.__APP_ID_25 = import42._appIdRandomProviderFactory());
            }
            return this.__APP_ID_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_DOCUMENT_26", {
        get: function () {
            if ((this.__DOCUMENT_26 == null)) {
                (this.__DOCUMENT_26 = import7._document());
            }
            return this.__DOCUMENT_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_27", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_27 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_27 = new import19.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_28", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_28 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_28 = [
                    new import43.DomEventsPlugin(),
                    new import44.KeyEventsPlugin(),
                    new import19.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_27)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_EventManager_29", {
        get: function () {
            if ((this.__EventManager_29 == null)) {
                (this.__EventManager_29 = new import20.EventManager(this._EVENT_MANAGER_PLUGINS_28, this.parent.get(import45.NgZone)));
            }
            return this.__EventManager_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_DomSharedStylesHost_30", {
        get: function () {
            if ((this.__DomSharedStylesHost_30 == null)) {
                (this.__DomSharedStylesHost_30 = new import21.DomSharedStylesHost(this._DOCUMENT_26));
            }
            return this.__DomSharedStylesHost_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_AnimationDriver_31", {
        get: function () {
            if ((this.__AnimationDriver_31 == null)) {
                (this.__AnimationDriver_31 = import7._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_DomRootRenderer_32", {
        get: function () {
            if ((this.__DomRootRenderer_32 == null)) {
                (this.__DomRootRenderer_32 = new import22.DomRootRenderer_(this._DOCUMENT_26, this._EventManager_29, this._DomSharedStylesHost_30, this._AnimationDriver_31));
            }
            return this.__DomRootRenderer_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_RootRenderer_33", {
        get: function () {
            if ((this.__RootRenderer_33 == null)) {
                (this.__RootRenderer_33 = import46._createConditionalRootRenderer(this._DomRootRenderer_32, this.parent.get(import46.NgProbeToken, null)));
            }
            return this.__RootRenderer_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_DomSanitizer_34", {
        get: function () {
            if ((this.__DomSanitizer_34 == null)) {
                (this.__DomSanitizer_34 = new import23.DomSanitizerImpl());
            }
            return this.__DomSanitizer_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_Sanitizer_35", {
        get: function () {
            if ((this.__Sanitizer_35 == null)) {
                (this.__Sanitizer_35 = this._DomSanitizer_34);
            }
            return this.__Sanitizer_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_ViewUtils_36", {
        get: function () {
            if ((this.__ViewUtils_36 == null)) {
                (this.__ViewUtils_36 = new import24.ViewUtils(this._RootRenderer_33, this._APP_ID_25, this._Sanitizer_35));
            }
            return this.__ViewUtils_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_IterableDiffers_37", {
        get: function () {
            if ((this.__IterableDiffers_37 == null)) {
                (this.__IterableDiffers_37 = import6._iterableDiffersFactory());
            }
            return this.__IterableDiffers_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_KeyValueDiffers_38", {
        get: function () {
            if ((this.__KeyValueDiffers_38 == null)) {
                (this.__KeyValueDiffers_38 = import6._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_SharedStylesHost_39", {
        get: function () {
            if ((this.__SharedStylesHost_39 == null)) {
                (this.__SharedStylesHost_39 = this._DomSharedStylesHost_30);
            }
            return this.__SharedStylesHost_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_Title_40", {
        get: function () {
            if ((this.__Title_40 == null)) {
                (this.__Title_40 = new import25.Title());
            }
            return this.__Title_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_FormBuilder_41", {
        get: function () {
            if ((this.__FormBuilder_41 == null)) {
                (this.__FormBuilder_41 = new import26.FormBuilder());
            }
            return this.__FormBuilder_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_ROUTER_CONFIGURATION_42", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_42 == null)) {
                (this.__ROUTER_CONFIGURATION_42 = {});
            }
            return this.__ROUTER_CONFIGURATION_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_LocationStrategy_43", {
        get: function () {
            if ((this.__LocationStrategy_43 == null)) {
                (this.__LocationStrategy_43 = import8.provideLocationStrategy(this.parent.get(import47.PlatformLocation), this.parent.get(import48.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_42));
            }
            return this.__LocationStrategy_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_Location_44", {
        get: function () {
            if ((this.__Location_44 == null)) {
                (this.__Location_44 = new import27.Location(this._LocationStrategy_43));
            }
            return this.__Location_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_UrlSerializer_45", {
        get: function () {
            if ((this.__UrlSerializer_45 == null)) {
                (this.__UrlSerializer_45 = new import28.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_RouterOutletMap_46", {
        get: function () {
            if ((this.__RouterOutletMap_46 == null)) {
                (this.__RouterOutletMap_46 = new import29.RouterOutletMap());
            }
            return this.__RouterOutletMap_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_NgModuleFactoryLoader_47", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_47 == null)) {
                (this.__NgModuleFactoryLoader_47 = new import30.SystemJsNgModuleLoader(this._Compiler_24, this.parent.get(import30.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_ROUTES_48", {
        get: function () {
            if ((this.__ROUTES_48 == null)) {
                (this.__ROUTES_48 = [[
                        {
                            path: 'home',
                            component: import49.HomeComponent
                        },
                        {
                            path: 'game-of-life',
                            component: import50.GameOfLifeComponent
                        },
                        {
                            path: 'battler',
                            component: import51.BattlerMain
                        },
                        {
                            path: 'typography',
                            component: import52.TypographyThingerComponent
                        },
                        {
                            path: 'data-line',
                            component: import53.DataLineComponent
                        },
                        {
                            path: '',
                            redirectTo: 'home',
                            pathMatch: 'full'
                        },
                        {
                            path: 'index.html',
                            redirectTo: 'home',
                            pathMatch: 'full'
                        },
                        {
                            path: 'dynamic-forms',
                            component: import54.DynamicFormsExampleComponent
                        },
                        {
                            path: '**',
                            component: import55.PageNotFoundComponent
                        }
                    ]
                ]);
            }
            return this.__ROUTES_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_Router_49", {
        get: function () {
            if ((this.__Router_49 == null)) {
                (this.__Router_49 = import8.setupRouter(this._ApplicationRef_23, this._UrlSerializer_45, this._RouterOutletMap_46, this._Location_44, this, this._NgModuleFactoryLoader_47, this._Compiler_24, this._ROUTES_48, this._ROUTER_CONFIGURATION_42));
            }
            return this.__Router_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_ActivatedRoute_50", {
        get: function () {
            if ((this.__ActivatedRoute_50 == null)) {
                (this.__ActivatedRoute_50 = import8.rootRoute(this._Router_49));
            }
            return this.__ActivatedRoute_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_PreloadAllModules_54", {
        get: function () {
            if ((this.__PreloadAllModules_54 == null)) {
                (this.__PreloadAllModules_54 = new import31.PreloadAllModules());
            }
            return this.__PreloadAllModules_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_55", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_55 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_55 = [import8.initialRouterNavigation(this._Router_49, this._ApplicationRef_23, this._RouterPreloader_53, this._ROUTER_CONFIGURATION_42)]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForefrontModuleInjector.prototype, "_HttpDataLine_56", {
        get: function () {
            if ((this.__HttpDataLine_56 == null)) {
                (this.__HttpDataLine_56 = new import32.HttpDataLine(this._Http_15));
            }
            return this.__HttpDataLine_56;
        },
        enumerable: true,
        configurable: true
    });
    ForefrontModuleInjector.prototype.createInternal = function () {
        this._HttpModule_0 = new import2.HttpModule();
        this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
        this._FormsModule_2 = new import4.FormsModule();
        this._CommonModule_3 = new import5.CommonModule();
        this._ApplicationModule_4 = new import6.ApplicationModule();
        this._BrowserModule_5 = new import7.BrowserModule(this.parent.get(import7.BrowserModule, null));
        this._ROUTER_FORROOT_GUARD_6 = import8.provideForRootGuard(this.parent.get(import56.Router, null));
        this._RouterModule_7 = new import8.RouterModule(this._ROUTER_FORROOT_GUARD_6);
        this._ReactiveFormsModule_8 = new import4.ReactiveFormsModule();
        this._ForefrontModule_9 = new import1.ForefrontModule();
        this._ErrorHandler_19 = import7.errorHandler();
        this._ApplicationInitStatus_20 = new import15.ApplicationInitStatus(this.parent.get(import15.APP_INITIALIZER, null));
        this._Testability_21 = new import16.Testability(this.parent.get(import45.NgZone));
        this._ApplicationRef__22 = new import17.ApplicationRef_(this.parent.get(import45.NgZone), this.parent.get(import57.Console), this, this._ErrorHandler_19, this, this._ApplicationInitStatus_20, this.parent.get(import16.TestabilityRegistry, null), this._Testability_21);
        this._NoPreloading_51 = new import31.NoPreloading();
        this._PreloadingStrategy_52 = this._NoPreloading_51;
        this._RouterPreloader_53 = new import31.RouterPreloader(this._Router_49, this._NgModuleFactoryLoader_47, this._Compiler_24, this, this._PreloadingStrategy_52);
        return this._ForefrontModule_9;
    };
    ForefrontModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.HttpModule)) {
            return this._HttpModule_0;
        }
        if ((token === import3.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_1;
        }
        if ((token === import4.FormsModule)) {
            return this._FormsModule_2;
        }
        if ((token === import5.CommonModule)) {
            return this._CommonModule_3;
        }
        if ((token === import6.ApplicationModule)) {
            return this._ApplicationModule_4;
        }
        if ((token === import7.BrowserModule)) {
            return this._BrowserModule_5;
        }
        if ((token === import8.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_6;
        }
        if ((token === import8.RouterModule)) {
            return this._RouterModule_7;
        }
        if ((token === import4.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_8;
        }
        if ((token === import1.ForefrontModule)) {
            return this._ForefrontModule_9;
        }
        if ((token === import9.BrowserXhr)) {
            return this._BrowserXhr_10;
        }
        if ((token === import10.ResponseOptions)) {
            return this._ResponseOptions_11;
        }
        if ((token === import58.XSRFStrategy)) {
            return this._XSRFStrategy_12;
        }
        if ((token === import11.XHRBackend)) {
            return this._XHRBackend_13;
        }
        if ((token === import12.RequestOptions)) {
            return this._RequestOptions_14;
        }
        if ((token === import59.Http)) {
            return this._Http_15;
        }
        if ((token === import13.RadioControlRegistry)) {
            return this._RadioControlRegistry_16;
        }
        if ((token === import60.LOCALE_ID)) {
            return this._LOCALE_ID_17;
        }
        if ((token === import14.NgLocalization)) {
            return this._NgLocalization_18;
        }
        if ((token === import61.ErrorHandler)) {
            return this._ErrorHandler_19;
        }
        if ((token === import15.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_20;
        }
        if ((token === import16.Testability)) {
            return this._Testability_21;
        }
        if ((token === import17.ApplicationRef_)) {
            return this._ApplicationRef__22;
        }
        if ((token === import17.ApplicationRef)) {
            return this._ApplicationRef_23;
        }
        if ((token === import18.Compiler)) {
            return this._Compiler_24;
        }
        if ((token === import42.APP_ID)) {
            return this._APP_ID_25;
        }
        if ((token === import62.DOCUMENT)) {
            return this._DOCUMENT_26;
        }
        if ((token === import19.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_27;
        }
        if ((token === import20.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_28;
        }
        if ((token === import20.EventManager)) {
            return this._EventManager_29;
        }
        if ((token === import21.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_30;
        }
        if ((token === import63.AnimationDriver)) {
            return this._AnimationDriver_31;
        }
        if ((token === import22.DomRootRenderer)) {
            return this._DomRootRenderer_32;
        }
        if ((token === import64.RootRenderer)) {
            return this._RootRenderer_33;
        }
        if ((token === import23.DomSanitizer)) {
            return this._DomSanitizer_34;
        }
        if ((token === import65.Sanitizer)) {
            return this._Sanitizer_35;
        }
        if ((token === import24.ViewUtils)) {
            return this._ViewUtils_36;
        }
        if ((token === import66.IterableDiffers)) {
            return this._IterableDiffers_37;
        }
        if ((token === import67.KeyValueDiffers)) {
            return this._KeyValueDiffers_38;
        }
        if ((token === import21.SharedStylesHost)) {
            return this._SharedStylesHost_39;
        }
        if ((token === import25.Title)) {
            return this._Title_40;
        }
        if ((token === import26.FormBuilder)) {
            return this._FormBuilder_41;
        }
        if ((token === import8.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_42;
        }
        if ((token === import48.LocationStrategy)) {
            return this._LocationStrategy_43;
        }
        if ((token === import27.Location)) {
            return this._Location_44;
        }
        if ((token === import28.UrlSerializer)) {
            return this._UrlSerializer_45;
        }
        if ((token === import29.RouterOutletMap)) {
            return this._RouterOutletMap_46;
        }
        if ((token === import68.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_47;
        }
        if ((token === import69.ROUTES)) {
            return this._ROUTES_48;
        }
        if ((token === import56.Router)) {
            return this._Router_49;
        }
        if ((token === import70.ActivatedRoute)) {
            return this._ActivatedRoute_50;
        }
        if ((token === import31.NoPreloading)) {
            return this._NoPreloading_51;
        }
        if ((token === import31.PreloadingStrategy)) {
            return this._PreloadingStrategy_52;
        }
        if ((token === import31.RouterPreloader)) {
            return this._RouterPreloader_53;
        }
        if ((token === import31.PreloadAllModules)) {
            return this._PreloadAllModules_54;
        }
        if ((token === import42.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_55;
        }
        if ((token === import32.HttpDataLine)) {
            return this._HttpDataLine_56;
        }
        return notFoundResult;
    };
    ForefrontModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__22.ngOnDestroy();
        this._RouterPreloader_53.ngOnDestroy();
    };
    return ForefrontModuleInjector;
}(import0.NgModuleInjector));
exports.ForefrontModuleNgFactory = new import0.NgModuleFactory(ForefrontModuleInjector, import1.ForefrontModule);
//# sourceMappingURL=app.modules.ngfactory.js.map