(function () {
    function loop(loopTimes, func, ...args) {
        let timesLooped = 0;

        function innerLoop() {
            if (timesLooped === loopTimes || timesLooped > loopTimes) {
                return;
            }
            if (typeof func === 'function') {
                func.call(this, timesLooped, ...args);
            }
            timesLooped += 1;
            innerLoop();
        }

        innerLoop();
    }

    function spinUp(amount, constructor) {
        let array = [];

        loop(amount, function (args) {
            return (array.push(constructor.call(this, ...args)));
        });

        return array;
    }

    let newthing = spinUp(5, (a) => spinUp(5, (b) => "" + a +"," + b));

    console.log(newthing);
}());