// Given an integer x, return true if x is a palindrome , and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reversed = x.toString().split("").reverse().join("");
  return x == reversed ? true : false;
};

console.log(isPalindrome(123)); //false
console.log(isPalindrome(121)); //true
