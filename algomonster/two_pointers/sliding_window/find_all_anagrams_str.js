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

function anagramsOfAString(original, check) {}

console.log(anagramsOfAString("cbaebabacd", "abc")); // ==> [0, 6]
console.log(anagramsOfAString("abab", "ab")); // ==> [0, 1, 2]
