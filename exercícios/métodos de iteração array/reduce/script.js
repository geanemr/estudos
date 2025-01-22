/**
 * Finds the maximum value in an array of numbers using the reduce method.
 *
 * @param {number[]} numbers - An array of numbers to find the maximum value from.
 * @returns {number} The maximum value found in the array.
 */
let numbers = [8, 9, 0];
const max = numbers.reduce((acc, num) => Math.max(acc, num));

console.log({ max });
