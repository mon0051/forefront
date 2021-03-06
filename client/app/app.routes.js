"use strict";
var router_1 = require('@angular/router');
var game_of_life_1 = require("./game-of-life/game-of-life");
var home_1 = require("./home/home");
var not_found_1 = require("./util/not-found");
var typography_thinger_1 = require("./line-height/typography-thinger");
var DataLineComponent_1 = require("./dataline/DataLineComponent");
var routes = [
    { path: 'home', component: home_1.HomeComponent },
    { path: 'game-of-life', component: game_of_life_1.GameOfLife },
    { path: 'typography', component: typography_thinger_1.TypographyThinger },
    { path: 'data-line', component: DataLineComponent_1.DataLineComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'index.html', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: not_found_1.PageNotFoundComponent },
];
exports.appRouterProviders = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map