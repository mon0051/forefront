import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {ForefrontModule} from "./app/app.modules";
import {enableProdMode} from "@angular/core";

platformBrowserDynamic().bootstrapModule(ForefrontModule);