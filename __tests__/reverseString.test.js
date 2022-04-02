"use strict";

import reversString from "../scripts/reverseString";

describe("ReverseString function", () => {
  test("Call function without argument", () => {
    expect(() => reversString()).toThrowError(
      "Function must be called with the argument"
    );
  });

  test("Check if argument is string type", () => {
    expect(() => reversString(9)).toThrowError("Input must be string type");
  });

  test("Single character string", () => {
    expect(reversString("A")).toBe("A");
  });

  test("Long string", () => {
    expect(reversString(".gnirts-gnol-si-sihT")).toBe("This-is-long-string.");
  });

  test("Multi word string", () => {
    expect(reversString(".gnirts gnol si sihT")).toBe("This is long string.");
  });

  test("Palindrome string", () => {
    expect(reversString("radar")).toBe("radar");
  });
});
