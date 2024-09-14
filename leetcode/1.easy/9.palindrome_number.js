function isPalindrome(num) {
  const numStr = String(num).split("").reverse().join("");
  return parseInt(numStr) === num;
}

console.log(isPalindrome(121));
console.log(
  isPalindrome(
    1213121312131213121312131213121312131213121312131213121312131213121312131213121312131213121312131213121312131213
  )
);

function isPalindromeTwoPointers(num) {
  let numStr = String(num);
  // Two-pointer technique
  let left = 0;
  let right = numStr.length - 1;

  while (left < right) {
    if (numStr[left] !== numStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindromeTwoPointers(-121));
console.log(isPalindromeTwoPointers(1213));
console.log(isPalindromeTwoPointers(121123321));
console.log(
  isPalindromeTwoPointers(
    1213121312131213121312131213121312131213121312131213121312131213121312131213121312131213121312131213121312131213
  )
);
