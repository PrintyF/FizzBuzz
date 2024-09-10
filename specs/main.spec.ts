import { fizzBuzz } from "../src/main";

describe("fizz buzz", () => {

    describe("when it should return number", ()=> {
        it("should return 1 when given 1", () => {
            expect(fizzBuzz(1)).toEqual(1);
        });
    
        it("should return 2 when given 2", () => {
            expect(fizzBuzz(2)).toEqual(2);
        });
    });

    it("should return fizz when given 3", () => {
        expect(fizzBuzz(3)).toEqual("fizz");
    })

});