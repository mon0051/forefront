"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function (app) {
    "use strict";

    function MONAD(modifier) {
        var prototype = Object.create(null);

        function unit(value) {
            var monad = Object.create(null);

            monad.bind = function (func, args) {
                return func.apply(undefined, [value].concat(_toConsumableArray(args)));
            };

            if (typeof modifier === 'function') {
                modifier(monad, value);
            }

            return monad;
        }

        unit.method = function (name, func) {
            prototype[name] = func;
            return unit;
        };

        unit.lift = function (name, func) {
            prototype[name] = function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return func(args);
            };
        };

        return unit;
    }

    return MONAD;
})(window.app || (window.app = { settings: {}, alert: function alert() {} }));

var maybe = MONAD(function (monad, value) {
    if (value === null || value === undefined) {
        monad.is_null = true;
        monad.bind = function () {
            return monad;
        };
    }
});

var unit = MONAD();
var monad = unit("Test");
monad.bind(alert);

//# sourceMappingURL=theGoodParts-compiled.js.map