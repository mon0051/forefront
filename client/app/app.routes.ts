import {Routes, RouterModule} from '@angular/router';
import {GameOfLifeComponent} from "./game-of-life/game-of-life.component";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./util/not-found";
import {TypographyThingerComponent} from "./line-height/typography-thinger.component";
import {DataLineComponent} from "./dataline/data-line.component";
import {ModuleWithProviders} from "@angular/core";
import {DynamicFormsExampleComponent} from "./dynamic-forms/dynamic-form-example";
import {BattlerMain} from "./battler/BattlerMain";

const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'game-of-life', component: GameOfLifeComponent},
    {path: 'battler', component:BattlerMain},
    {path: 'typography',component:TypographyThingerComponent},
    {path: 'data-line',component: DataLineComponent},
    {path: '', redirectTo:'home',pathMatch:'full'},
    {path: 'index.html', redirectTo:'home',pathMatch:'full'},
    {path: 'dynamic-forms',component:DynamicFormsExampleComponent},
    {path: '**', component: PageNotFoundComponent},
];

export const appRouterProviders: ModuleWithProviders = RouterModule.forRoot(routes);