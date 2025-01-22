// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!
//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b) {
const squaresSum = a.map((item) => item ** 2).reduce((acc, num) => acc+num, 0)
const cubesSum = b.map((item) => item ** 3).reduce((acc, num) => acc+num, 0)
 return squaresSum > cubesSum ? true : false
}

console.log(arrayMadness([1,2,3], [4,5,6])); //false
console.log(arrayMadness([7,8,9], [1,2,3])); //true