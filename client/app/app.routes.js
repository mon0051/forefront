"use strict";
var router_1 = require('@angular/router');
var game_of_life_component_1 = require("./game-of-life/game-of-life.component");
var home_component_1 = require("./home/home.component");
var not_found_1 = require("./util/not-found");
var typography_thinger_component_1 = require("./line-height/typography-thinger.component");
var data_line_component_1 = require("./dataline/data-line.component");
var dynamic_form_example_1 = require("./dynamic-forms/dynamic-form-example");
var BattlerMain_1 = require("./battler/BattlerMain");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'game-of-life', component: game_of_life_component_1.GameOfLifeComponent },
    { path: 'battler', component: BattlerMain_1.BattlerMain },
    { path: 'typography', component: typography_thinger_component_1.TypographyThingerComponent },
    { path: 'data-line', component: data_line_component_1.DataLineComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'index.html', redirectTo: 'home', pathMatch: 'full' },
    { path: 'dynamic-forms', component: dynamic_form_example_1.DynamicFormsExampleComponent },
    { path: '**', component: not_found_1.PageNotFoundComponent },
];
exports.appRouterProviders = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map