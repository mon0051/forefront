/*
    The module global variable may or may not be available in the browser, depending on the way the javascript was built.
    @Component { moduleId : module.id } has to be in @Component metadata for the dynamic compiler to resolve template paths,
    but the static pre-compiler does not include module in its minified js.
    You also can't do a null check on module, as this will also break the static pre-compiler as all metadata must be
    static.
    Including this file will prevent the compiled js from throwing "Can't get property id from undefined"
 */

var module = {id:undefined};
