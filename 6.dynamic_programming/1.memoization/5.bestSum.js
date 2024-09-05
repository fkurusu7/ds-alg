/*
Write a function that takes in a targetSum 
and an array of numbers as arguments.

The function should return an array containing 
the shortest combination of numbers that add 
up to exactly the targetSum.

if there is a tie for the shortest combination,
return any one of the shortest.

bestSum(7, [2, 3, 4]) // ==> [3, 4]
bestSum(7, [2, 3, 4, 7]) // ==> [7]
bestSum(8, [2, 3, 5]) // ==> [3, 5]
bestSum(9, [4, 6]) // ==> null
*/

function bestSum(targetsum, numbers) {
  if (targetsum === 0) return [];
  if (targetsum < 0) return null;

  let shortestCombination = null;

  for (const num of numbers) {
    const remainder = targetsum - num;
    const remainderCombination = bestSum(remainder, numbers);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];

      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
}

console.log(bestSum(7, [2, 3, 4])); // ==> [3, 4]
console.log(bestSum(7, [2, 3, 4, 7])); // ==> [7]
console.log(bestSum(8, [2, 3, 5])); // ==> [3, 5]
console.log(bestSum(9, [4, 6])); // ==> null
let t1 = performance.now();
console.log(bestSum(110, [4, 6, 25])); // ==> [25, 25, 25, 25]
let t2 = performance.now();
console.log(`DIFF for 110: ${(t2 - t1) / 1000} s.`);

function bestSumDyn(targetsum, numbers, memo = {}) {
  if (targetsum in memo) return memo[targetsum];
  if (targetsum === 0) return [];
  if (targetsum < 0) return null;

  let shortestCombination = null;

  for (const num of numbers) {
    const remainder = targetsum - num;
    const remainderCombination = bestSumDyn(remainder, numbers, memo);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];

      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetsum] = shortestCombination;
  return shortestCombination;
}

let td1 = performance.now();
console.log(bestSumDyn(300, [4, 6, 25])); // ==> [25, 25, 25, 25]
let td2 = performance.now();
console.log(`DIFF for 300: ${(td2 - td1) / 1000} s.`);
