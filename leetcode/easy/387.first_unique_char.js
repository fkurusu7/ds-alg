/**
 * Given a string s, find the first non-repeating character in it
 * and return its index. If it does not exist, return -1.
 *
 * Example 1:
 *    Input: s = "leetcode"
 *    Output: 0
 *    Explanation: The character 'l' at index 0 is the first character
 *      that does not occur at any other index.
 *
 * Example 2:
 *    Input: s = "loveleetcode"
 *    Output: 2
 *
 * Example 3:
 *    Input: s = "aabb"
 *    Output: -1
 */

function firstUniqueChar(s) {
  let charFreq = {};
  let firstChar = null;

  for (let char of s) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  for (let key in charFreq) {
    if (charFreq[key] === 1) {
      firstChar = key;
      break;
    }
  }
  return firstChar === null ? -1 : s.indexOf(firstChar);
}

console.log(firstUniqueChar("leetcodel"));
console.log(firstUniqueChar("aabb"));
