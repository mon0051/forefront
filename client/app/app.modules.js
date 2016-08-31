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
var forefront_root_1 = require("./forefront-root/forefront-root");
var platform_browser_1 = require("@angular/platform-browser");
var home_1 = require("./home/home");
var game_of_life_1 = require("./game-of-life/game-of-life");
var typography_thinger_1 = require("./line-height/typography-thinger");
var DataLineComponent_1 = require("./dataline/DataLineComponent");
var not_found_1 = require("./util/not-found");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
            ],
            declarations: [
                forefront_root_1.ForeFrontRoot,
                home_1.HomeComponent,
                game_of_life_1.GameOfLife,
                typography_thinger_1.TypographyThinger,
                DataLineComponent_1.DataLineComponent,
                not_found_1.PageNotFoundComponent],
            providers: [app_routes_1.appRouterProviders],
            bootstrap: [forefront_root_1.ForeFrontRoot]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.modules.js.map