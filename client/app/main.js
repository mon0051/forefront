import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../compiled/app/app.modules.ngfactory';
import { enableProdMode } from "@angular/core";
enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map