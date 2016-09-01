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

@NgModule({
    imports:[
        HttpModule,
        FormsModule,
        BrowserModule,
        ],
    declarations:[
        ForeFrontRoot,
        HomeComponent,
        GameOfLife,
        TypographyThinger,
        DataLineComponent,
        PageNotFoundComponent],
    providers: [appRouterProviders],
    bootstrap:[ForeFrontRoot]

})
export class AppModule{

}