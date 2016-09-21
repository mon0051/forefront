import {Injectable} from "@angular/core";
//let appRoot:string = "C:/Git/projects/ForeFront/client/";
let appRoot: string = "";

@Injectable()
export class UrlHelper{

    static resolvePath = function (path: string) {
        return appRoot + path;
    }
}
export function updatePath(path:string){
    appRoot = path;
}
export function resolvePath (path:string) {

    return appRoot + path;
}