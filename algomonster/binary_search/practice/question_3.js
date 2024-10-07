/** QUESTION 3
 *
 * Given an array of integers nums sorted in non-decreasing order,
 * find the starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 */

function findStartEndPositions(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let lastPosition = -1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      lastPosition = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return lastPosition === -1
    ? [lastPosition, lastPosition]
    : [lastPosition - 1, lastPosition];
}

console.log(findStartEndPositions([5, 7, 7, 8, 8, 10], 8)); // => [3, 4]
console.log(findStartEndPositions([5, 7, 7, 8, 8, 9, 9, 10], 7)); // => [1, 2]
console.log(findStartEndPositions([5, 7, 7, 8, 8, 9, 9, 10, 11], 8)); // => [3, 4]
console.log(findStartEndPositions([], 0)); // => [-1, -1]
