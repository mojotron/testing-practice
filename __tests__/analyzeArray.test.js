'use strict';
import analyzeArray from '../scripts/analyzeArray';

describe('Analyze array function', () => {
  const testArray = [1, 8, 3, 4, 2, 6];

  test('Check if input is array', () => {
    expect(() => analyzeArray('Hello World')).toThrowError(
      'Input must be array of numbers'
    );
  });

  test('Check if input is array of numbers', () => {
    expect(() => analyzeArray([0, 1, 'Hello World', 5])).toThrowError(
      'Input must be array of numbers'
    );
  });

  test('Check for max value', () => {
    expect(analyzeArray(testArray).max).toBe(8);
  });

  test('Check for min value', () => {
    expect(analyzeArray(testArray).min).toBe(1);
  });

  test('Check for length', () => {
    expect(analyzeArray(testArray).length).toBe(6);
  });

  test('Check for average', () => {
    expect(analyzeArray(testArray).average).toBe(4);
  });
});
