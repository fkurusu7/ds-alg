/** Flexible Size Sliding Window - Longest
  Recall finding the largest size k subarray sum of an integer array in Largest Subarray Sum. 
  What if we don't need the largest sum among all subarrays of fixed size k, but instead,
  we want to find the length of the longest subarray with sum smaller than or equal to a 
  target?
  
  Example:
  Inputs:
    nums = [1, 6, 3, 1, 2, 4, 5]
    target = 10, 
    
  Output:
    4 (length of [3, 1, 2, 4]).
  
  Explanation:
    The longest subarray that does not exceed 10 is [3, 1, 2, 4], 
 
 */

function subarraySumLongest(nums, target) {
  // WRITE YOUR BRILLIANT CODE HERE
  let left = 0;
  let windowSum = 0;
  let length = 0;

  for (let right = 0; right < nums.length; ++right) {
    windowSum += nums[right];
    console.log(windowSum);
    while (windowSum > target) {
      console.log(windowSum, left);
      windowSum -= nums[left];
      left++;
    }
    console.log(length, right, left);
    length = Math.max(length, right - left + 1);
  }

  return length;
}

console.log(subarraySumLongest([1, 6, 3, 1, 2, 4, 5], 10)); // ==> 4
console.log(subarraySumLongest([1, 6, 3, 1, 2, 4, 5], 11)); // ==> 4

/* TEMPLATE 
function slidingWindowFlexibleLongest(input) {
  initialize window, ans
  var left = 0;
  for (var right = 0; right < input.length; ++right) {
    append input[right] to window
    while (invalid(window)) {     // update left until window is valid again
      ans = max(ans, window);
      remove input[left] from window
      ++left;
    }
    ans = max(ans, window);       // window is guaranteed to be valid here
  }
  return ans;
}
*/
