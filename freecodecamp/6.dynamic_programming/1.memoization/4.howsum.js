/*
Write a function that takes in a targetSum 
and an array of numbers as arguments.

The function should return an array containing 
any combination of elements that add up to 
exactly the targetSum. If there is no combination
that adds up to the targetSum, return null.

if there are multiple combinations possible, 
return a single one.
howSum(7, [5, 3, 4, 7]); // ==> [3, 4] || [7]
howSum(8, [2, 5, 3]); // ==> [2, 2, 2, 2] || [5, 3]
howSum(7, [2, 4]); // ==> null
*/

function howSum(targetSum, numbers) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }

  return null;
}

console.log(howSum(7, [5, 3, 4, 7])); // ==> [3, 4] || [7]
console.log(howSum(8, [2, 3, 4, 5])); // ==> [2, 2, 2, 2] || [3, 5] || [4, 4]
// const t1 = performance.now();
// console.log(howSum(250, [7, 14])); // ==> TAKES A LOT OF TIME
// const t2 = performance.now();
// console.log(`DIFF: ${((t2 - t1) / 1000).toFixed(2)} s`);

function howSumDyn(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSumDyn(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
}

const td1 = performance.now();
console.log(howSumDyn(352, [7, 14])); // ==> null
const td2 = performance.now();
console.log(`DIFF: ${((td2 - td1) / 1000).toFixed(2)} s`);
