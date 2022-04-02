"use strict";
import Calculator from "../scripts/Calculator";

describe("Calculator object", () => {
  test("Inputs must be numbers type", () => {
    expect(() => Calculator.add(5, "x")).toThrowError("Inputs must be numbers");
  });

  test("Add 2 positive numbers", () => {
    expect(Calculator.add(5, 5)).toBe(5 + 5);
  });

  test("Add 2 negative numbers", () => {
    expect(Calculator.add(-5, -5)).toBe(-5 + -5);
  });

  test("Add positive and negative numbers", () => {
    expect(Calculator.add(5, -3)).toBe(5 + -3);
  });

  test("Add 2 floats numbers", () => {
    expect(Calculator.add(1.99, 3.25)).toBe(1.99 + 3.25);
  });

  test("Subtract 2 positive numbers", () => {
    expect(Calculator.subtract(10, 5)).toBe(10 - 5);
  });

  test("Subtract 2 negative numbers", () => {
    expect(Calculator.subtract(-5, -8)).toBe(-5 - -8);
  });

  test("Subtract positive and negative numbers", () => {
    expect(Calculator.subtract(-8, 5)).toBe(-8 - 5);
  });

  test("Subtract 2 floats numbers", () => {
    expect(Calculator.subtract(1.99, 3.25)).toBe(1.99 - 3.25);
  });

  test("Multiply 2 positive numbers", () => {
    expect(Calculator.multiply(5, 5)).toBe(5 * 5);
  });

  test("Multiply 2 negative numbers", () => {
    expect(Calculator.multiply(-5, -5)).toBe(-5 * -5);
  });

  test("Multiply positive and negative numbers", () => {
    expect(Calculator.multiply(-5, 5)).toBe(-5 * 5);
  });

  test("Multiply 2 floats numbers", () => {
    expect(Calculator.multiply(1.99, 3.25)).toBe(1.99 * 3.25);
  });

  test("Multiply with 0", () => {
    expect(Calculator.multiply(5, 0)).toBe(5 * 0);
  });

  test("Divide 2 positive numbers", () => {
    expect(Calculator.divide(8, 2)).toBe(8 / 2);
  });

  test("Divide 2 negative numbers", () => {
    expect(Calculator.divide(-8, -2)).toBe(-8 / -2);
  });

  test("Divide positive and negative numbers", () => {
    expect(Calculator.divide(-16, 4)).toBe(-16 / 4);
  });

  test("Divide 2 floats numbers", () => {
    expect(Calculator.divide(1.99, 3.25)).toBe(1.99 / 3.25);
  });

  test("Divide with 0", () => {
    expect(Calculator.divide(16, 0)).toBe(16 / 0);
  });
});
