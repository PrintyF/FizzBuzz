export function fizzBuzz(valueToCheck: number): number | string {
    if (valueToCheck%15 === 0) {
        return "fizzbuzz";
    }
    if (valueToCheck%3 === 0) {
        return "fizz";
    }
    if (valueToCheck%5 === 0) {
        return "buzz";
    }
    return valueToCheck;
}