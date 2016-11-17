import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {ForefrontModule} from "./app.modules";
import {enableProdMode} from "@angular/core";

enableProdMode();

platformBrowserDynamic().bootstrapModule(ForefrontModule);