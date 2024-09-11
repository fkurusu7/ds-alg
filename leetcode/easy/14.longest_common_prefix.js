/**
 * Write a function to find the longest common
 * prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 */

function commonPrefix(arrStr) {
  if (arrStr.length === 0) return "";
  if (arrStr.length === 1) return arrStr[0];

  let prefix = arrStr[0];
  console.log(prefix);

  for (i = 1; i < arrStr.length; i++) {
    while (arrStr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

console.log(commonPrefix(["flower", "flow", "flight"])); // ==> "fl"
console.log(commonPrefix(["dog", "car", "racecar"])); // ==> ""
