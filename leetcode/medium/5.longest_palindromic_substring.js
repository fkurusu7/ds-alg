/**
 * Given a string s, return the
 * longest palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 */

function longestPalindrome(word) {
  if (word.length < 2) return word;

  let start = 0;
  let maxLength = 1;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < word.length && word[left] === word[right]) {
      const currentLength = right - left + 1;
      // console.log(currentLength, maxLength);
      // console.log(left);
      // console.log(right);

      if (currentLength > maxLength) {
        // console.log(currentLength, maxLength);
        start = left;
        maxLength = currentLength;
        // console.log(currentLength, maxLength, start);
      }
      left--;
      right++;
      // console.log(left);
      // console.log(right);
    }
  }

  for (let i = 0; i < word.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
    // console.log(i, i);
  }

  console.log(start);
  console.log(maxLength);
  return word.substring(start, start + maxLength);
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("tttttttracecartc"));
console.log(longestPalindrome("ryyreconocert"));

console.log(longestPalindrome("bbb"));
let t1 = performance.now();
console.log(longestPalindrome("tttttttracecartc"));
let t2 = performance.now();
console.log(((t2 - t1) / 1000).toFixed(2));
