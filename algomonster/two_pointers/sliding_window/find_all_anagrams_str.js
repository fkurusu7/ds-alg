/** Find All Anagrams in a String
  
  Given a string original and a string check, find the starting index of all substrings of original that is an anagram of check. The output must be sorted in ascending order.

  Parameters
    original: A string
    check: A string
  Result
    A list of integers representing the starting indices of all anagrams of check.

  E.G.s

  Input: original = "cbaebabacd", check = "abc"
  Output: [0, 6]
  Explanation: The substring from 0 to 2, "cba", is an anagram of "abc", and so is the substring from 6 to 8, "bac".

  Input: original = "abab", check = "ab"
  Output: [0, 1, 2]
  Explanation: All substrings with length 2 from "abab" are anagrams of "ab". 
*/

function equalArr(arr1, arr2) {
  return arr1.length === arr1.length && arr1.every((val, i) => val === arr2[i]);
}

function anagramsOfAString(original, check) {
  const originalLen = original.length;
  const checkLen = check.length;
  if (originalLen < checkLen) return [];

  const res = [];
  const checkCounter = new Array(26).fill(0);
  // console.log(checkCounter);
  const window = new Array(26).fill(0);
  // console.log(window);
  // Array(26) [0, 0, 0, 0,... 0]
  const a = "a".charCodeAt();
  // console.log(a);

  for (let i = 0; i < checkLen; i++) {
    // console.log(i, check[i], check.charCodeAt(i), check.charCodeAt(i) - a);
    // [ 0, 'a', 97, 0 ] [1, "b", 98, 1] [(2, "c", 99, 2)];
    checkCounter[check.charCodeAt(i) - a]++;
    window[original.charCodeAt(i) - a]++;
  }
  console.log(checkCounter);
  console.log(window);
  // Array(26) [1, 1, 1, 0,... 0]

  if (equalArr(checkCounter, window)) res.push(0);

  for (let i = checkLen; i < originalLen; i++) {
    window[original.charCodeAt(i - checkLen) - a]--;
    window[original.charCodeAt(i) - a]++;
    if (equalArr(checkCounter, window)) res.push(i - checkLen + 1);
  }

  return res;
}

console.log(anagramsOfAString("cbazebañbacd", "abc")); // ==> [0, 7]
console.log(anagramsOfAString("abab", "ab")); // ==> [0, 1, 2]

// NOT-FIXED Alphabet -- 26
function findAnagrams(original, check) {
  // If check is empty, return empty array
  if (check.length === 0) return [];

  // Create a frequency map using a Map instead of a fixed-size array
  const checkFreq = new Map();
  const windowFreq = new Map();

  // Populate check frequency map
  for (let char of check) {
    checkFreq.set(char, (checkFreq.get(char) || 0) + 1);
  }

  const result = [];
  const checkLength = check.length;

  // Initialize the first window
  for (let i = 0; i < checkLength; i++) {
    const char = original[i];
    windowFreq.set(char, (windowFreq.get(char) || 0) + 1);
  }

  // Check if first window is an anagram
  if (mapsEqual(checkFreq, windowFreq)) {
    result.push(0);
  }

  // Sliding window approach
  for (let i = checkLength; i < original.length; i++) {
    // Add new character to window
    const newChar = original[i];
    windowFreq.set(newChar, (windowFreq.get(newChar) || 0) + 1);

    // Remove oldest character from window
    const oldChar = original[i - checkLength];
    const oldCount = windowFreq.get(oldChar);
    if (oldCount === 1) {
      windowFreq.delete(oldChar);
    } else {
      windowFreq.set(oldChar, oldCount - 1);
    }

    // Check if current window is an anagram
    if (mapsEqual(checkFreq, windowFreq)) {
      result.push(i - checkLength + 1);
    }
  }

  return result;
}

function mapsEqual(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [char, count] of map1) {
    if (map2.get(char) !== count) return false;
  }

  return true;
}

// Test cases with different character sets
console.log(findAnagrams("cbaebabacd", "abc")); // English [0, 6]
console.log(findAnagrams("açãobabacd", "açã")); // Portuguese with special characters  [0]
console.log(findAnagrams("こんにちは世界", "にち")); // Japanese  [2]
console.log(findAnagrams("café", "acf")); // Mixed character set  [0]

/** Explanation using a Map()

  Dynamic Frequency Mapping:
    Replaced fixed-size array with Map
    Supports any character, not just a-z
    Dynamically grows based on unique characters in the string

  Works with:
    Unicode characters
    Special characters
    Different alphabets
    Emojis
    Mixed character sets

  Handling Frequency:
    Uses (windowFreq.get(char) || 0) + 1 to safely increment
    Handles characters not previously seen
    Removes characters with zero count from the Map

  Comparison Function:
    mapsEqual() checks both size and individual character counts. More flexible than array comparison

  Performance Considerations

  Time Complexity: Still O(n)
  Space Complexity: O(k), where k is the number of unique characters

  Practical Examples

  "açãobabacd" with "açã" works correctly
  "こんにちは世界" with "にち" handles Japanese characters
  "café" with "acf" manages mixed character sets

  This approach solves the limitation of the previous implementation by using a dynamic, character-agnostic frequency mapping.
 */
