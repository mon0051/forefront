import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {appRouterProviders} from './app.routes';
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import {CardWidget} from "./widget/widget";
import {DataLineComponent} from "./dataline/DataLineComponent";
import {ForeFrontContent} from "./content/content";
import {ForeFrontNav} from "./nav/nav";
import {ForeFrontRoot} from "./forefront-root/forefront-root";
import {GameOfLife} from "./game-of-life/game-of-life";
import {Grid} from "./game-of-life/grid";
import {HomeComponent} from "./home/home";
import {HttpDataLine} from "./dataline/http-dataline";
import {PageNotFoundComponent} from "./util/not-found";
import {TypographyThinger} from "./line-height/typography-thinger";
import {DynamicFormComponent} from "./dynamic-forms/dynamic-form.component";
import {DynamicFormQuestionComponent} from "./dynamic-forms/dynamic-form-question.component";
import {DynamicFormsExampleComponent} from "./dynamic-forms/dynamic-form-example";

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule,
        appRouterProviders,
        ReactiveFormsModule
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
        PageNotFoundComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        DynamicFormsExampleComponent],
    providers: [
        HttpDataLine
    ],
    bootstrap: [
        ForeFrontRoot
    ]
})
export class AppModule {

}
