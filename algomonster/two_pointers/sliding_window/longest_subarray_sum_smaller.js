/** Longest subarray with sum smaller than or equal to a target

  Given:
  Input: nums = [1, 6, 3, 1, 2, 4, 5] - target = 10, 
  Output: 4 (length of [3, 1, 2, 4]).
  Explanation: The longest subarray that does not exceed 10 is 
    [3, 1, 2, 4]

 */

function subarraySumLongest(nums, target) {
  let windowSum = 0;
  let length = 0;
  let left = 0;

  for (let right = 0; right <= nums.length; right++) {
    windowSum += nums[right];

    while (windowSum > target) {
      windowSum -= nums[left];
      left++;
    }

    console.log(length, right, left);
    /*
    [ 0, 0, 0 ] 
    [ 1, 1, 0 ] 
    [ 2, 2, 0 ] 
    [ 3, 3, 1 ] 
    [ 3, 4, 2 ] 
    [ 3, 5, 2 ] 
    [ 4, 6, 5 ] 
    [ 4, 7, 5 ]
    */
    length = Math.max(length, right - left + 1);
  }

  return length;
}

console.log(subarraySumLongest([1, 6, 3, 1, 2, 4, 5], 10)); // ==> 4
