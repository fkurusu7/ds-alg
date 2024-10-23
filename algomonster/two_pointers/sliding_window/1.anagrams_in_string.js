/** Find All Anagrams in a String

  Given a string original and a string check, find the starting index of 
  all substrings of original that is an anagram of check. The output must 
  be sorted in ascending order.

  Example 1
    Input: original = "cbaebabacd", check = "abc"
    Output: [0, 6]
    Explanation: The substring from 0 to 2, "cba", is an anagram of "abc", 
                 and so is the substring from 6 to 8, "bac".
  
  Example 2
    Input: original = "abab", check = "ab"
    Output: [0, 1, 2] 
*/

function findAllAnagrams(original, check) {
  // Edge cases
  if (original.length < check.length) return [];
  if (original.length === 0 || check.length === 0) return [];

  // Define return value and maps
  const result = [];
  const checkMap = new Map();
  const windowMap = new Map();

  // Build frequency map for check string
  for (const char of check) {
    checkMap.set(char, (checkMap.get(char) || 0) + 1);
  }

  // Build frequency map for first window
  for (let i = 0; i < check.length; i++) {
    const char = original[i];
    windowMap.set(char, (windowMap.get(char) || 0) + 1);
  }

  // Check first window
  if (mapsAreEqual(checkMap, windowMap)) {
    // If anagrams, add to return
    result.push(0);
  }

  // SLIDE WINDOW and checks for remaining positions
  // Loop check.length and < original.length
  for (let i = check.length; i < original.length; i++) {
    //  ==> get leftmost value from window map
    const leftChar = original[i - check.length];
    //  ==> remove leftmost character from window if char === 0
    windowMap.set(leftChar, windowMap.get(leftChar) - 1);
    if (windowMap.get(leftChar) === 0) windowMap.delete(leftChar);

    //  ==> Add new/next RIGHT character to window
    const rightChar = original[i];
    windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);

    //  ==> Check if current window is an anagram
    // If anagrams, add to result
    console.log(rightChar, i, check.length, i - check.length + 1);
    if (mapsAreEqual(checkMap, windowMap)) result.push(i - check.length + 1);
  }

  return result;
}

function mapsAreEqual(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (map2.get(key) !== value) return false;
  }

  return true;
}

console.log(findAllAnagrams("cbaebabacd", "abc")); // ==> [0, 6]
// console.log(findAllAnagrams("abab", "ab")); // ==> [0, 1, 2]
