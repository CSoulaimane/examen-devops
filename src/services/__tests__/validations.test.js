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
    test("should return false  with a invalid tag name", () => {
        const result = isValid("mlm");
        expect(result).toBe(false);
    });
    
    test("should return false  with a tag name that has less then 8 carachter", () => {
        const result = isValid("aaaaaa.8");
        expect(result).toBe(false);
    });
    test("should return false  with a tag name that has more then 8 carachter but no number", () => {
        const result = isValid("aaaaaaaaaa");
        expect(result).toBe(false);
    });
    test("should return false  with a tag name that has more then 8 carachter has a number but no special carcteres like theses ^;.,_ ",() => {
        const result = isValid("aaaaaaaaaa8");
        expect(result).toBe(false);
    });

});

// TODO: Create tests suite for validation function
