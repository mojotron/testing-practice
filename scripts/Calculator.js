"use strict";

const Calculator = () => {
  const checkInput = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Inputs must be numbers");
  };

  const add = (a, b) => {
    checkInput(a, b);
    return a + b;
  };

  const subtract = (a, b) => {
    checkInput(a, b);
    return a - b;
  };

  const multiply = (a, b) => {
    checkInput(a, b);
    return a * b;
  };

  const divide = (a, b) => {
    checkInput(a, b);
    return a / b;
  };

  return {
    add,
    subtract,
    multiply,
    divide,
  };
};

export default Calculator();
