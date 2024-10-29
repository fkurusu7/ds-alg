/** Flexible Size Sliding Window
 
  Given a positive integer array nums, we want to find the length of the shortest 
  subarray such that the subarray sum is at least target.
  
  INPUT: nums = [1, 4, 1, 7, 3, 0, 2, 5] and target = 10, 
  OUTPUT: 2
  Explanation: then the smallest window with the sum >= 10 is [7, 3] with length 2. 
*/

function subarraySumShortest(nums, target) {
  // WRITE YOUR BRILLIANT CODE HERE
  let left = 0;
  let windowSum = 0;
  let length = nums.length;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];
    console.log(windowSum);
    while (windowSum >= target) {
      console.log(right, left);
      length = Math.min(length, right - left + 1);
      console.log(length);
      windowSum -= nums[left];
      console.log(windowSum);
      left++;
      console.log(left);
    }
  }

  return length;
}

console.log(subarraySumShortest([1, 4, 1, 7, 3, 0, 2, 5], 10)); // ==> 2

/** TEMPLATE
  function slidingWindowFlexibleShortest(input) {
    initialize window, ans
    var left = 0;
    for (var right = 0; right < input.length; ++right) {
      append input[right] to window
      while (valid(window)) {
        ans = min(ans, window);   // window is guaranteed to be valid here
        remove input[left] from window
        ++left;
      }
    }
    return ans;
  }
*/
