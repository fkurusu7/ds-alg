/** Longest Substring without Repeating Characters

  Find the length of the longest substring of a given string without repeating characters.

  Input: abccabcabcc
  Output: 3
  Explanation: The longest substrings are abc and cab, both of length 3.

  Input: aaaabaaa
  Output: 2
  Explanation: ab is the longest substring, with a length of 2. 
*/

function longestSubstringWithoutRepeatingCharacters(s) {
  let longest = 0;
  const counter = new Map();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const current = s[right];
    counter.set(current, (counter.get(current) || 0) + 1);
    while (counter.get(current) > 1) {
      counter.set(current, counter.get(current) - 1);
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

console.log(longestSubstringWithoutRepeatingCharacters("abccabcabcc")); // ==> 3
console.log(longestSubstringWithoutRepeatingCharacters("aaaabaaa")); // ==> 2
