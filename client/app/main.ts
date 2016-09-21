import {platformBrowser} from '@angular/platform-browser';


import {AppModuleNgFactory} from '../aot/app/app.modules.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);