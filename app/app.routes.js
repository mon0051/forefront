"use strict";
var router_1 = require('@angular/router');
var game_of_life_1 = require("./game-of-life/game-of-life");
var home_1 = require("./home/home");
var not_found_1 = require("./util/not-found");
var routes = [
    { path: 'home', component: home_1.HomeComponent },
    { path: 'game-of-life', component: game_of_life_1.GameOfLife },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: not_found_1.PageNotFoundComponent },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map