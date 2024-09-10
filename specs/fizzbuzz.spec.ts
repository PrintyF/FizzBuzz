import { fizzBuzz } from "../src/fizzbuzz";

describe("fizz buzz", () => {
    
    describe("when it should return number", ()=> {
        it("should return 1 when given 1", () => {
            expect(fizzBuzz(1)).toEqual(1);
        });
        
        it("should return 2 when given 2", () => {
            expect(fizzBuzz(2)).toEqual(2);
        });
    });
    
    describe("when it should return fizz", ()=> {
        it("should return fizz when given 3", () => {
            expect(fizzBuzz(3)).toEqual("fizz");
        });
        
        it("should return fizz when given 6", () => {
            expect(fizzBuzz(6)).toEqual("fizz");
        });
    });
    
    describe("when it should return buzz", ()=> {
        it("should return buzz when given 5", () => {
            expect(fizzBuzz(5)).toEqual("buzz");
        });
        it("should return buzz when given 10", () => {
            expect(fizzBuzz(10)).toEqual("buzz");
        });
    });
    
    describe("when it should return fizzbuzz", () => {
        it("should return fizzbuzz when given 15", () => {
            expect(fizzBuzz(15)).toEqual("fizzbuzz");
        });
        it("should return fizzbuzz when given 30", () => {
            expect(fizzBuzz(30)).toEqual("fizzbuzz");
        });    
    });

});