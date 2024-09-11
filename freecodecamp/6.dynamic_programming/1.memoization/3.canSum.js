/** 
Write a function that takes in 
a targetSum, and an array of numbers 
as arguments.

The function should return a boolean 
indicating whether or not it is possible 
to generate the targetSum using 
numbers from the array.

You may use an element of the array as many times as needed.
You may assume that all input numbers are nonnegative.

canSum(7, [5, 3, 4, 7]) ==> true
1. 3 + 4
2. 7

canSum(7, [2, 4]) ==> false
*/

function canSum(targetSum, numbers) {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const number of numbers) {
    const remainder = targetSum - number;
    if (canSum(remainder, numbers)) return true;
  }
  return false;
}

console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));

const t1 = performance.now();
console.log(canSum(10, [7, 14]));
const t2 = performance.now();
console.log(`canSum 300 took A LOOOOOOT: ${(t2 - t1) / 1000}`);

function canSumDyn(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const number of numbers) {
    const remainder = targetSum - number;

    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

const td1 = performance.now();
console.log(canSumDyn(250, [7, 14]));
const td2 = performance.now();
console.log(`canSum 300 took: ${(td2 - td1) / 1000}`);
