import {bootstrap} from '@angular/platform-browser-dynamic';
import {ForeFrontRoot} from './forefront-root/forefront-root';
import {appRouterProviders} from './app.routes';

bootstrap(ForeFrontRoot,[appRouterProviders])
    .catch(err => console.log(err));