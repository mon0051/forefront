import {Component} from '@angular/core';
import {UrlHelper} from "../util/url-helper";
import {ROUTER_DIRECTIVES} from '@angular/router';
import {PageNotFoundComponent} from "../util/not-found";
import {GameOfLife} from "../game-of-life/game-of-life";
import {HomeComponent} from "../home/home";
import {TypographyThinger} from "../line-height/typography-thinger";

@Component({
    selector: 'forefront-content',
    templateUrl: UrlHelper.resolvePath('app/content/content.html'),
    directives: [ROUTER_DIRECTIVES],
    precompile: [PageNotFoundComponent,GameOfLife,HomeComponent,TypographyThinger]
})
export class ForeFrontContent{

}