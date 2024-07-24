console.log("***************************************");
console.log("*********** SLIDING WINDOWS ***********");
console.log("***************************************");

console.log(`It involves creating a window which can either be an array 
  or single variable or a number from one position to another.
  Depending on a certain condition, the window either increases or closes
  (and a new window is created).
  Very useful for keeping track of a subset of data in an array/string`);

console.log("******** EXAMPLE ********");
console.log(`Write a function called maxSubarraySum which accepts an array
  of integers and a number called n. The function should calculate the
  maximum sum of n consecutive elements in the array.`);

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0,
    tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    const prevNum = arr[i - num];
    const nextNum = arr[i];
    tempSum = tempSum - prevNum + nextNum;
    maxSum = Math.max(tempSum, maxSum);
  }
  // O(n)
  return maxSum;
}

console.log(maxSubarraySum([1, 4, 3, 2, 5, 7, 8, 3], 2)); // => 15
console.log(maxSubarraySum([1, 4, 3, 2, 5, 7, 8, 3], 3)); // => 20
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // => 19
console.log(maxSubarraySum([1, 4, 3], 4)); // => null

console.log("*******************************");
console.log("*********** ANAGRAM ***********");
