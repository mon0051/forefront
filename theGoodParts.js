(function(app){
    "use strict";

    function MONAD(modifier){
        var prototype = Object.create(null);

        function unit(value){
            var monad = Object.create(null);

            monad.bind = function (func,args) {
                return func(value,...args)
            };

            if(typeof modifier === 'function'){
                modifier(monad,value);
            }

            return monad;
        }

        unit.method = function (name, func) {
            prototype[name] = func;
            return unit;
        };

        unit.lift = function (name, func) {
            prototype[name] = function (...args) {
                return func(args);
            }
        };

        return unit;
    }

    return MONAD;

}(window.app || (window.app = {settings: {}, alert: function(){}})));

var maybe = MONAD(function(monad,value) {
    if(value === null || value === undefined){
        monad.is_null = true;
        monad.bind = function () {
            return monad;
        }
    }
});

var unit = MONAD();
var monad = unit("Test");
monad.bind(alert);