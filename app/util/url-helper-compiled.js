"use strict";

var UrlHelper = function () {
    function UrlHelper() {}
    UrlHelper.appRoot = "/ForeFront/";
    UrlHelper.resolvePath = function (path) {
        return UrlHelper.appRoot + path;
    };
    return UrlHelper;
}();
exports.UrlHelper = UrlHelper;
//# sourceMappingURL=url-helper.js.map

//# sourceMappingURL=url-helper-compiled.js.map