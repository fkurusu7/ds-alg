/** Valid Palindrome 

  Determine whether a string is a palindrome, ignoring non-alphanumeric characters and case. 
  
  Examples:
    Input: Do geese see God? 
    Output: True
    
    Input: Was it a car or a cat I saw? 
    Output: True
    
    Input: A brown fox jumping over 
    Output: False

*/

function validPalindrome(inputString) {
  inputString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  for (let right = inputString.length - 1; left <= right; right--) {
    if (inputString[left] !== inputString[right]) {
      return false;
    }
    left++;
  }

  return true;
}

console.log(validPalindrome("Do geese see God?"));
console.log(validPalindrome("Was it a car or a cat I saw?"));
console.log(validPalindrome("A brown fox jumping over"));
