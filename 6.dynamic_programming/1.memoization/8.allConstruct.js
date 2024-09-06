/**
 * Write a function that accepts a target string
 * and an array of strings.
 *
 * The function should return a 2D array containing
 * ALL THE WAYS that the target can be constructed
 * by concatenating elements of the wordBank array.
 * Each element of the 2D array should represent one
 * combination that constructs the target.
 *
 * You may reuse elements of wordBank
 * as many times as needed.
 *
 * allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
 * [
 *  ["ab", "cd", "ef"],
 *  ["ab", "c", "def"],
 *  ["abc", "def"],
 *  ["abcd", "ef"]
 * ]
 *
 * allConstruct("hello", ["ab", "abc", "cd"]) ==> []
 * allConstruct("", ["ab", "abc", "cd"]) ==> [[]]
 *
 * The worst case scenario is not time but space!
 */

function allConstruct(target, wordBank) {
  if (target === "") return [[]];

  const result = [];

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  return result;
}

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(allConstruct("hello", ["ab", "abc", "cd"]));
console.log(allConstruct("", ["ab", "abc", "cd"]));
