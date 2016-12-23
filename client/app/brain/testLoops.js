(function () {
    function loop(loopTimes, func) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var timesLooped = 0;
        function innerLoop() {
            if (timesLooped === loopTimes || timesLooped > loopTimes) {
                return;
            }
            if (typeof func === 'function') {
                func.call.apply(func, [this, timesLooped].concat(args));
            }
            timesLooped += 1;
            innerLoop();
        }
        innerLoop();
    }
    function spinUp(amount, constructor) {
        var array = [];
        loop(amount, function (args) {
            return (array.push(constructor.call.apply(constructor, [this].concat(args))));
        });
        return array;
    }
    var newthing = spinUp(5, function (a) { return spinUp(5, function (b) { return "" + a + "," + b; }); });
    console.log(newthing);
}());
//# sourceMappingURL=testLoops.js.map