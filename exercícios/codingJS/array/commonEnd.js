// Array-1 -- commonEnd
// Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

// Examples

// commonEnd([1, 2, 3], [7, 3]) → true
// commonEnd([1, 2, 3], [7, 3, 2]) → false
// commonEnd([1, 2, 3], [1, 3]) → true

//https://the-winter.github.io/codingjs/exercise.html?name=commonEnd&title=Array-1

function commonEnd(a, b) {
  if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
    return true
  } else {
    return false
  }
}

console.log(commonEnd([1, 2, 3], [7, 3])); //true
console.log(commonEnd([1, 2, 3], [7, 3, 2])); //false
console.log(commonEnd([1, 2, 3], [1, 3])); //true
console.log(commonEnd([1, 2, 3], [1])); //true
console.log(commonEnd([1, 2, 3], [2])); //false




