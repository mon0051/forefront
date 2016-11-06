"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var platform_browser_1 = require("@angular/platform-browser");
var forms_2 = require("@angular/forms");
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var widget_1 = require("./widget/widget");
var DataLineComponent_1 = require("./dataline/DataLineComponent");
var content_1 = require("./content/content");
var nav_1 = require("./nav/nav");
var forefront_root_1 = require("./forefront-root/forefront-root");
var game_of_life_1 = require("./game-of-life/game-of-life");
var grid_1 = require("./game-of-life/grid");
var home_1 = require("./home/home");
var http_dataline_1 = require("./dataline/http-dataline");
var not_found_1 = require("./util/not-found");
var typography_thinger_1 = require("./line-height/typography-thinger");
var dynamic_form_component_1 = require("./dynamic-forms/dynamic-form.component");
var dynamic_form_question_component_1 = require("./dynamic-forms/dynamic-form-question.component");
var dynamic_form_example_1 = require("./dynamic-forms/dynamic-form-example");
var BattlerMain_1 = require("./battler/BattlerMain");
var UiBits_1 = require("./battler/UiBits");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                app_routes_1.appRouterProviders,
                forms_2.ReactiveFormsModule
            ],
            declarations: [
                forefront_root_1.ForeFrontRoot,
                nav_1.ForeFrontNav,
                content_1.ForeFrontContent,
                game_of_life_1.GameOfLife,
                home_1.HomeComponent,
                grid_1.Grid,
                BattlerMain_1.BattlerMain,
                widget_1.CardWidget,
                typography_thinger_1.TypographyThinger,
                DataLineComponent_1.DataLineComponent,
                not_found_1.PageNotFoundComponent,
                dynamic_form_component_1.DynamicFormComponent,
                dynamic_form_question_component_1.DynamicFormQuestionComponent,
                UiBits_1.StatusBarComponent,
                UiBits_1.BattlerImage,
                dynamic_form_example_1.DynamicFormsExampleComponent],
            providers: [
                http_dataline_1.HttpDataLine
            ],
            bootstrap: [
                forefront_root_1.ForeFrontRoot
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.modules.js.map