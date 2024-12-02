/** Fixed Size Subarray Sum
  Given an array (list) nums consisted of only non-negative integers, 
  find the LARGEST SUM among all subarrays of length k in nums.

  Input nums = [1, 2, 3, 7, 4, 1], k = 3,
  Output 14
  Explanation: largest length 3 subarray sum is given by [3, 7, 4] which sums to 14.

*/
function subarraySumFixed(nums, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let largestSum = windowSum;

  for (let right = k; right < nums.length; right++) {
    const left = right - k;

    // remove left-most value from windowSum
    windowSum -= nums[left];
    // add right-most value to windowSum
    windowSum += nums[right];

    // Calculate largestSum
    largestSum = Math.max(largestSum, windowSum);
  }

  return largestSum;
}

console.log(subarraySumFixed([1, 2, 3, 7, 4, 1], 3)); // ==> 14 [3, 7, 4]
console.log(subarraySumFixed([1, 2, 3, 7, 4, 1], 4)); // ==> 14 [2, 3, 7, 4]
