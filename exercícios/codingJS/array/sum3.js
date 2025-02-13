// Array-1 -- sum3
// Given an array of ints length 3, return the sum of all the elements.

// Examples

// sum3([1, 2, 3]) → 6
// sum3([5, 11, 2]) → 18
// sum3([7, 0, 0]) → 7

// https://the-winter.github.io/codingjs/exercise.html?name=sum3&title=Array-1

function sum3(nums){
    return nums.reduce((acc, curr) => acc+curr,0)
}

console.log(sum3([1,2,3,4])); //10
console.log(sum3([9,8,7])); //24
