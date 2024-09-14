/**
 * Given two strings needle and haystack,
 * return the index of the first occurrence
 * of needle in haystack, or -1 if needle
 * is not part of haystack.
 *
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 *    The first occurrence is at index 0, so we return 0.
 *
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */

/* get needle length, go through haystack 
left 0 - right needleLength 

if (needle === haystack)
*/

var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (needle.length > haystack.length) return -1;

  const firstChar = needle[0];

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== firstChar) {
      continue;
    }

    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("wsadbutsad", "sad")); // ==> 0
console.log(strStr("butsad", "sad")); // ==> 3
console.log(strStr("leetcode", "leeto")); // ==> -1
