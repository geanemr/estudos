// Array-1 -- maxEnd3
// Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

// Examples

// maxEnd3([1, 2, 3]) → 3,3,3
// maxEnd3([11, 5, 9]) → 11,11,11
// maxEnd3([2, 11, 3]) → 3,3,3

function maxEnd3(nums) {
  let max = Math.max(...nums)
return max.splice(0,3,max)
}

console.log(maxEnd3([1, 5, 7]));

const array = [1, 2, 3, 4, 5];

const removedItems = array.splice(1, 2, 3, 3, 3);

console.log(array);
// [1, 4, 5]

console.log(removedItems);
// [2, 3]
