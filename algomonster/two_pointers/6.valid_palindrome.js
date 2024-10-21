/** Valid Palindrome
  
  Determine whether a string is a palindrome, ignoring non-alphanumeric characters and case. Examples:
  
  Input: Do geese see God? 
  Output: True
  
  Input: Was it a car or a cat I saw? 
  Output: True

  Input: A brown fox jumping over 
  Output: False
 */

function validPalindrome(str) {
  str = str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");

  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(validPalindrome("Do geese see God?")); // true
console.log(validPalindrome("Was it a car or a cat I saw?")); // true
console.log(validPalindrome("A brown fox jumping over")); // false
