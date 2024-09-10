export function fizzBuzz(valueToCheck: number): number | string {
    if (isDivisibleBy(valueToCheck, 15)) {
        return "fizzbuzz";
    }
    if (isDivisibleBy(valueToCheck, 3)) {
        return "fizz";
    }
    if (isDivisibleBy(valueToCheck, 5)) {
        return "buzz";
    }
    return valueToCheck;
}

function isDivisibleBy(valueToCheck: number, factor: number) {
    return valueToCheck % factor === 0;
}
