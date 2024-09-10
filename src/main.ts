export function fizzBuzz(valueToCheck: number): number | string {
    if (valueToCheck%3 === 0) {
        return "fizz"
    }
    return valueToCheck;
}