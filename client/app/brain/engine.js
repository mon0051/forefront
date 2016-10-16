"use strict";
var Engine = (function () {
    function Engine() {
        this.forwardMultiplyGate = function (x, y) {
            return x * y;
        };
        this.randomLocalSearch = function (x, y) {
            var tweak_amount = 0.01;
            var best_output = -Infinity;
            var iterations = 100;
            var best_x = x;
            var best_y = y;
            for (var k = 0; k < iterations; k++) {
                var guess_x = x + tweak_amount * (Math.random() * 2 - 1);
                var guess_y = x + tweak_amount * (Math.random() * 2 - 1);
                var result = this.forwardMultiplyGate(guess_x, guess_y);
                if (result > best_output) {
                    best_output = result;
                    best_x = guess_x;
                    best_y = guess_y;
                }
            }
            return {
                best_output: best_output,
                best_x: best_x,
                best_y: best_y
            };
        };
    }
    return Engine;
}());
exports.Engine = Engine;
//# sourceMappingURL=engine.js.map