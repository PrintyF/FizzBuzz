export function fizzBuzz(valueToCheck: number): number | string {
    if (valueToCheck%3 === 0) {
        return "fizz"
    }
    if (valueToCheck === 5) {
        return "fizz"
    }
    return valueToCheck;
}