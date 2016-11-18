import { platformBrowser } from '@angular/platform-browser';
import { ForefrontModuleNgFactory } from '../compiled/app/app.modules.ngfactory';
import { enableProdMode } from "@angular/core";
enableProdMode();
platformBrowser().bootstrapModuleFactory(ForefrontModuleNgFactory);
//# sourceMappingURL=main.js.map