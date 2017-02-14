"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var platform_browser_1 = require("@angular/platform-browser");
var forms_2 = require("@angular/forms");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
var card_widget_component_1 = require("./widget/card-widget.component");
var data_line_component_1 = require("./dataline/data-line.component");
var content_component_1 = require("./content/content.component");
var nav_component_1 = require("./nav/nav.component");
var forefront_root_component_1 = require("./forefront-root/forefront-root.component");
var game_of_life_component_1 = require("./game-of-life/game-of-life.component");
var grid_component_1 = require("./game-of-life/grid.component");
var home_component_1 = require("./home/home.component");
var http_dataline_1 = require("./dataline/http-dataline");
var not_found_1 = require("./util/not-found");
var typography_thinger_component_1 = require("./line-height/typography-thinger.component");
var dynamic_form_component_1 = require("./dynamic-forms/dynamic-form.component");
var dynamic_form_question_component_1 = require("./dynamic-forms/dynamic-form-question.component");
var dynamic_form_example_1 = require("./dynamic-forms/dynamic-form-example");
var ForefrontModule = (function () {
    function ForefrontModule() {
    }
    return ForefrontModule;
}());
ForefrontModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            app_routes_1.appRouterProviders,
            forms_2.ReactiveFormsModule
        ],
        declarations: [
            forefront_root_component_1.ForeFrontRootComponent,
            nav_component_1.ForeFrontNavComponent,
            content_component_1.ForeFrontContentComponent,
            game_of_life_component_1.GameOfLifeComponent,
            home_component_1.HomeComponent,
            grid_component_1.GridComponent,
            card_widget_component_1.CardWidgetComponent,
            typography_thinger_component_1.TypographyThingerComponent,
            data_line_component_1.DataLineComponent,
            not_found_1.PageNotFoundComponent,
            dynamic_form_component_1.DynamicFormComponent,
            dynamic_form_question_component_1.DynamicFormQuestionComponent,
            dynamic_form_example_1.DynamicFormsExampleComponent
        ],
        providers: [
            http_dataline_1.HttpDataLine
        ],
        bootstrap: [
            forefront_root_component_1.ForeFrontRootComponent
        ]
    })
], ForefrontModule);
exports.ForefrontModule = ForefrontModule;
//# sourceMappingURL=app.modules.js.map