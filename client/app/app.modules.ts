import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {appRouterProviders} from './app.routes';
import {ForeFrontRoot} from "./forefront-root/forefront-root";
import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./home/home";
import {GameOfLife} from "./game-of-life/game-of-life";
import {TypographyThinger} from "./line-height/typography-thinger";
import {DataLineComponent} from "./dataline/DataLineComponent";
import {PageNotFoundComponent} from "./util/not-found";
import {HttpDataLine} from "./dataline/http-dataline";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {ForeFrontNav} from "./nav/nav";
import {ForeFrontContent} from "./content/content";
import {Grid} from "./game-of-life/grid";
import {CardWidget} from "./widget/widget";

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule,
        appRouterProviders
    ],
    declarations: [
        ForeFrontRoot,
        ForeFrontNav,
        ForeFrontContent,
        GameOfLife,
        HomeComponent,
        Grid,
        CardWidget,
        TypographyThinger,
        DataLineComponent,
        PageNotFoundComponent],
    providers: [
        HttpDataLine
    ],
    bootstrap: [
        ForeFrontRoot
    ]
})
export class AppModule {

}
