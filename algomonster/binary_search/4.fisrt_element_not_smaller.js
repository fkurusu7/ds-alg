/** First Element Not Smaller Than Target
 *
 * Given an array of integers sorted in increasing order and a target,
 * find the index of the first element in the array that is larger than
 * or equal to the target.
 * Assume that it is guaranteed to find a satisfying number.
 *
 * Input:
 *    arr = [1, 3, 3, 5, 8, 8, 10]
 *    target = 2
 *    Output: 1
 *    Explanation: The first element larger than 2 is 3, which has index 1.
 *
 * Input:
 *    arr = [2, 3, 5, 7, 11, 13, 17, 19]
 *    target = 6
 *    Output: 3
 *    Explanation: The first element larger than 6 is 7, which has index 3.
 */

function firstNotSmallerThanTarget(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let firstNotSmaller = 0;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] >= target) {
      firstNotSmaller = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return firstNotSmaller;
}

console.log(firstNotSmallerThanTarget([1, 3, 3, 5, 8, 8, 10], 2)); // ==> index 1
console.log(firstNotSmallerThanTarget([2, 3, 5, 7, 11, 13, 17, 19], 6)); // ==> index 3
console.log(firstNotSmallerThanTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // ==> index 9
console.log(firstNotSmallerThanTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -3)); // ==> index 9
