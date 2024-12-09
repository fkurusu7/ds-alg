/** Flexible Size Sliding Window
  
  Given a positive integer array nums, find the length of the shortest subarray such that the subarray sum is at least target. 
  
  Input: nums = [1, 4, 1, 7, 3, 0, 2, 5] - target = 10,
  Output: 2.
  Explanation: then the smallest window with the sum >= 10 is [7, 3] with length 2. 
  */

function subarraySumShortest(nums, target) {
  let shortestLength = nums.length;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      shortestLength = Math.min(shortestLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return shortestLength;
}

console.log(subarraySumShortest([1, 4, 1, 7, 3, 0, 2, 5], 10));
