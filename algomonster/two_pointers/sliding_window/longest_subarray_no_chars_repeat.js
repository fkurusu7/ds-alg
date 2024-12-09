/** Longest Substring without Repeating Characters
  
  Find the length of the longest substring of a given string without repeating characters.

  Input: abccabcabcc
  Output: 3
  Explanation: The longest substrings are abc and cab, both of length 3.

  Input: aaaabaaa
  Output: 2
  Explanation: ab and ba are the longest substring, with a length of 2. 
  
*/

// BRUTE FORCE

/* function bruteForceApproach(str) {
  let n = str.length;
  let longest = 0;
  let letters = [];

  for (let start = 0; start <= n; start++) {
    console.log(letters, longest);
    if (!letters.includes(str[start])) {
      letters.push(str[start]);
    }
    longest = Math.max(longest, letters.length - 1);
  }

  return longest;
}

console.log(bruteForceApproach("abccabcabcc"));
 */
function longestSubstringNoRepeat(str) {
  let longest = 0;
  let counter = new Map();
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    const current = str[right];
    counter.set(current, (counter.get(current) || 0) + 1);
    console.log(counter, right, left);
    while (counter.get(current) > 1) {
      counter.set(current, counter.get(current) - 1);
      left++;
    }
    console.log(counter);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

console.log(longestSubstringNoRepeat("abccabcabcc")); // ==> 3 (abc - cab)
console.log(longestSubstringNoRepeat("aaaabaaa")); // ==> 2 (ab - ba)
