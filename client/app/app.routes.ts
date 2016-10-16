import {Routes, RouterModule} from '@angular/router';
import {GameOfLife} from "./game-of-life/game-of-life";
import {HomeComponent} from "./home/home";
import {PageNotFoundComponent} from "./util/not-found";
import {TypographyThinger} from "./line-height/typography-thinger";
import {DataLineComponent} from "./dataline/DataLineComponent";
import {ModuleWithProviders} from "@angular/core";
import {DynamicFormsExampleComponent} from "./dynamic-forms/dynamic-form-example";

const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'game-of-life', component: GameOfLife},
    {path: 'typography',component:TypographyThinger},
    {path: 'data-line',component: DataLineComponent},
    {path: '', redirectTo:'home',pathMatch:'full'},
    {path: 'index.html', redirectTo:'home',pathMatch:'full'},
    {path: 'dynamic-forms',component:DynamicFormsExampleComponent},
    {path: '**', component: PageNotFoundComponent},
];

export const appRouterProviders: ModuleWithProviders = RouterModule.forRoot(routes);