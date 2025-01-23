// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let data = {};
    for (let i = 0; i < nums.length; i++) {
        const dif = target - nums[i]; 
        if (dif in data) {
            return [data[dif], i]; //retorna os índices de dif armazenado em data e do número atual
        }
        data[nums[i]] = i; //senão, atribui o valor de índíce i(atual)ao número atual e salva em data
        
    }
    return []; // retorna um array vazio se ao final do loop não encontrar a solução
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

//exemplo atribuição de valor 
let obj = {};
let key = 'name';
obj[key] = 'John'; 
console.log({obj});//{ obj: { name: 'John' } }
