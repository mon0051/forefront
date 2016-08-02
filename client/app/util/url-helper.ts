export class UrlHelper{
    static appRoot:string = "/";

    static resolvePath = function (path) {
        return UrlHelper.appRoot + path;
    }
}
