/**
 * Write a function that accepts a target
 * string and an array of strings.
 *
 * The function should return the number
 * of ways the target can be constructed
 * by concatenating elements of the
 * wordBank array.
 *
 * you may reuse elements of wordBank array
 * as many times as needed.
 */

function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWays = countConstruct(suffix, wordBank, memo);
      totalCount += numWays;
    }
  }

  memo[target] = totalCount;
  return totalCount;
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // ==> 2
console.log(countConstruct("abcdef", ["ab", "cd", "abc", "def", "abcd"])); // ==> 1
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // ==> 0
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // ==> 4

let t1 = performance.now();
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "eee",
    "eeeee",
    "eeeeeeeee",
    "eeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeee",
  ])
); // ==> 4
let t2 = performance.now();
console.log(
  `DIFF 37 letters (NO MEMOd 10.2s): MEMOd: ${((t2 - t1) / 1000).toFixed(2)} s.`
);
