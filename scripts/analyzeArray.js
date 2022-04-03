'use strict';

const analyzeArray = arr => {
  if (!Array.isArray(arr)) throw new Error('Input must be array of numbers');
  if (arr.some(ele => typeof ele !== 'number'))
    throw new Error('Input must be array of numbers');

  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
    length: arr.length,
    average: arr.reduce((acc, ele) => acc + ele) / arr.length,
  };
};

export default analyzeArray;
