export class UrlHelper{
    static appRoot:string = "/ForeFront/";

    static resolvePath = function (path) {
        return UrlHelper.appRoot + path;
    }
}
