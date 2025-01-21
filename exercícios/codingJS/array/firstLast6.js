// Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

// Examples

// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false

// https://the-winter.github.io/codingjs/exercise.html?name=firstLast6&title=Array-1

function firstLast6(array) {
    return array[0] === 6 || array[array.length - 1] === 6 ? true : false;
}

console.log(firstLast6([6,2,3,6]));
console.log(firstLast6([5,2,3,3]));
