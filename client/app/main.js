"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forefront_root_1 = require('./forefront-root/forefront-root');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(forefront_root_1.ForeFrontRoot, [app_routes_1.appRouterProviders])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map