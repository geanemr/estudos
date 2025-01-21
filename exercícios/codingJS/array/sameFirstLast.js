// Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

// Examples

// sameFirstLast([1, 2, 3]) → false
// sameFirstLast([1, 2, 3, 1]) → true
// sameFirstLast([1, 2, 1]) → true

// https://the-winter.github.io/codingjs/exercise.html?name=sameFirstLast&title=Array-1

function sameFirstLast(array) {
    return array.length && array[0] === array[array.length -1] ? true : false
}

console.log(sameFirstLast([])); //false
console.log(sameFirstLast([1,1])); //true
console.log(sameFirstLast([2,3,6,2])); //true
console.log(sameFirstLast([2,3,6,3])); //false