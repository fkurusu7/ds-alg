/** Find Element in Sorted Array with Duplicates
 * Given a sorted array of integers and a target integer,
 * find the first occurrence of the target and return its
 * index. Return -1 if the target is not in the array.
 *
 * Input:
 *  arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]
 * target = 3
 * Output: 1
 * Explanation: The first occurrence of 3 is at index 1.
 *
 * Input:
 *  arr = [2, 3, 5, 7, 11, 13, 17, 19]
 *  target = 6
 * Output: -1
 * Explanation: 6 does not exist in the array.
 *
 */

function findFirstOccurrence(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let firstOccurrence = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      firstOccurrence = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return firstOccurrence;
}

console.log(findFirstOccurrence([1, 3, 3, 3, 3, 7, 10, 10, 10, 100], 3)); // ==> 1
console.log(findFirstOccurrence([1, 3, 3, 3, 3, 7, 10, 10, 10, 100], 3)); // ==> 1
console.log(findFirstOccurrence([1, 3, 3, 3, 3, 7, 10, 10, 10, 100], 6)); // ==> -1
console.log(findFirstOccurrence([1, 3, 3, 3, 3, 7, 10, 10, 10, 100], 10)); // ==> -1
console.log(findFirstOccurrence([2, 3, 5, 7, 11], 2)); // ==> 0
