import {Component} from '@angular/core';
import {resolvePath} from "../util/url-helper";
import {PageNotFoundComponent} from "../util/not-found";
import {GameOfLife} from "../game-of-life/game-of-life";
import {HomeComponent} from "../home/home";
import {TypographyThinger} from "../line-height/typography-thinger";
import {DataLineComponent} from "../dataline/DataLineComponent";

@Component({
    selector: 'forefront-content',
    templateUrl: resolvePath('app/content/content.html'),
    //precompile: [PageNotFoundComponent,GameOfLife,HomeComponent,TypographyThinger, DataLineComponent]
})
export class ForeFrontContent{

}