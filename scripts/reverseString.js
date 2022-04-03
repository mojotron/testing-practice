'use strict';

const reverseString = string => {
  if (!string) throw new Error('Function must be called with the argument');
  if (typeof string !== 'string') throw new Error('Input must be string type');
  return string.split('').reverse().join('');
};

export default reverseString;
