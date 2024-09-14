/**
 * Given an integer array nums, rotate the array
 * to the right by k steps, where k is non-negative.
 *
 * Example 1:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 *    rotate 1 steps to the right: [7,1,2,3,4,5,6]
 *    rotate 2 steps to the right: [6,7,1,2,3,4,5]
 *    rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

var rotate = function (nums, k) {
  if (nums.length === k) return nums;
  k = k % nums.length;

  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  // reverse the entire array
  reverse(0, nums.length - 1);
  // reverse reverse the first K elements
  reverse(0, k - 1);
  // reverse the remaining elements (n - k)
  reverse(k, nums.length - 1);
  return nums;
};

const testCases = new Map();
testCases.set(7, [1, 2, 3, 4, 5, 6, 7]);
testCases.set(5, [-1, -100, 3, 99]);

for (const [k, nums] of testCases) {
  console.log(rotate(nums, k));
}
