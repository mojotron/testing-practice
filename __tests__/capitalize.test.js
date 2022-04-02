"use strict";
import capitalize from "../scripts/capitalize";

describe("Capitalize function", () => {
  test("Check if argument is string type", () => {
    expect(() => capitalize(9)).toThrowError("Input must be string type");
  });

  test("Input string is all lower case", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("Input string is all upper case", () => {
    expect(capitalize("HELLO")).toBe("Hello");
  });

  test("Input string is in mixed case", () => {
    expect(capitalize("hElLo")).toBe("Hello");
  });

  test("Input string is in swapped case", () => {
    expect(capitalize("hELLO")).toBe("Hello");
  });
});
