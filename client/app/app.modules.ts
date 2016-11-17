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

import {CardWidgetComponent} from "./widget/card-widget.component";
import {DataLineComponent} from "./dataline/data-line.component";
import {ForeFrontContentComponent} from "./content/content.component";
import {ForeFrontNavComponent} from "./nav/nav.component";
import {ForeFrontRootComponent} from "./forefront-root/forefront-root.component";
import {GameOfLifeComponent} from "./game-of-life/game-of-life.component";
import {GridComponent} from "./game-of-life/grid.component";
import {HomeComponent} from "./home/home.component";
import {HttpDataLine} from "./dataline/http-dataline";
import {PageNotFoundComponent} from "./util/not-found";
import {TypographyThingerComponent} from "./line-height/typography-thinger.component";
import {DynamicFormComponent} from "./dynamic-forms/dynamic-form.component";
import {DynamicFormQuestionComponent} from "./dynamic-forms/dynamic-form-question.component";
import {DynamicFormsExampleComponent} from "./dynamic-forms/dynamic-form-example";
import {BattlerMain} from "./battler/BattlerMain";

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule,
        appRouterProviders,
        ReactiveFormsModule
    ],
    declarations: [
        ForeFrontRootComponent,
        ForeFrontNavComponent,
        ForeFrontContentComponent,
        GameOfLifeComponent,
        HomeComponent,
        GridComponent,
        BattlerMain,
        CardWidgetComponent,
        TypographyThingerComponent,
        DataLineComponent,
        PageNotFoundComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        DynamicFormsExampleComponent],
    providers: [
        HttpDataLine
    ],
    bootstrap: [
        ForeFrontRootComponent
    ]
})
export class ForefrontModule {

}
