import {provideRouter, RouterConfig} from '@angular/router';
import {GameOfLife} from "./game-of-life/game-of-life";
import {HomeComponent} from "./home/home";
import {PageNotFoundComponent} from "./util/not-found";

const routes:RouterConfig = [
    {path: 'home', component:HomeComponent},
    {path: 'game-of-life', component: GameOfLife},
    {path: '', redirectTo:'home',pathMatch:'full'},
    {path: 'index.html', redirectTo:'home',pathMatch:'full'},
    {path: '**', component: PageNotFoundComponent},
];

export const appRouterProviders = [
    provideRouter(routes)
];