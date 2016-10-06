export class Engine {
    forwardMultiplyGate = function (x:number, y:number) {
        return x * y;
    };

    randomLocalSearch = function (x:number, y:number) {
        let tweak_amount = 0.01;
        let best_output = -Infinity;
        let iterations = 100;
        let best_x = x;
        let best_y = y;

        for (let k = 0; k < iterations; k++) {
            let guess_x = x + tweak_amount * (Math.random() * 2 - 1);
            let guess_y = x + tweak_amount * (Math.random() * 2 - 1);

            let result = this.forwardMultiplyGate(guess_x, guess_y);

            if (result > best_output) {
                best_output = result;
                best_x = guess_x;
                best_y = guess_y;
            }
        }

        return {
            best_output,
            best_x,
            best_y
        };
    }
}