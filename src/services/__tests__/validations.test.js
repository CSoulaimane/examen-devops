const { isEmpty,isValid } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - isValid", () => {
    test("should return true  with a valid tag name", () => {
        const result = isValid("aaaaaaaa.8");
        expect(result).toBe(true);
    });
    
    test("should return false  with a tag name that has less then 8 carachter", () => {
        const result = isValid("aaaaaa.8");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function
