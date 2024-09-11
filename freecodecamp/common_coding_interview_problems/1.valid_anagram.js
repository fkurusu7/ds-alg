/**
 * Given two strings s1 and s2, chck if they are anagrams.
 *
 * Two strings are anagrams if they're made of the same
 * characters with the same frequencies.
 *
 *  Input: s1: "danger" s2: "garden"
 *  output: true
 */

function validAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  let freq1 = new Map();
  let freq2 = new Map();

  for (let i = 0; i < s1.length; i++) {
    freq1.set(s1[i], (freq1.get(s1[i]) || 0) + 1);
    freq2.set(s2[i], (freq2.get(s2[i]) || 0) + 1);
  }

  for (let [key, value] of freq1) {
    if (value !== freq2.get(key)) return false;
  }

  return true;
}

console.log(validAnagram("danger", "garden")); // ==> true
console.log(validAnagram("dangere", "gardenr")); // ==> false
console.log(validAnagram("care", "race")); // ==> true

function validAnagramSorted(s1, s2) {
  if (s1.length !== s2.length) return false;
  let s1Sorted = s1.split("").sort().join("");
  let s2Sorted = s2.split("").sort().join("");

  return s1Sorted === s2Sorted;
}
console.log(validAnagramSorted("danger", "garden")); // ==> true
console.log(validAnagramSorted("dangere", "gardenr")); // ==> false
console.log(validAnagramSorted("care", "race")); // ==> true
