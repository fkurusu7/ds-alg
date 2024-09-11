/* canConstruct
Write a function that should return a boolean 
indicating whether or not the "target" can be 
constructed by concatenating elements of the 
"wordBank" array.

You may reuse elements of "wordBank" as 
many times as needed.

canConstrct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) // ==> true
canConstrct("", ["cat", "dog", "mouse"]) // ==> true
canConstrct("skateboard", ["ska", "boar", "kat", "boar", "rd"]) // ==> false
*/

function canConstrct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstrct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
}

console.log(canConstrct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // ==> true
console.log(canConstrct("skateboard", ["ska", "boar", "kat", "boar", "rd"])); // ==> false
let t1 = performance.now();
console.log(
  canConstrct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eeeee",
    "eeeeeeeeeee",
    "eeeeeee",
  ])
); // ==> false

let t2 = performance.now();
// no memo took 7.8 s
console.log(`Diff: ${(t2 - t1) / 1000} s`);
