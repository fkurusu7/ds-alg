/** Find Minimum in Rotated Sorted Array
 * A sorted array of unique integers was rotated at an unknown pivot.
 * For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20].
 * Find the index of the minimum element in this array.
 *
 * Input: [30, 40, 50, 10, 20]
 * Output: 3
 * Explanation: The smallest element is 10, and its index is 3.
 *
 * Input: [3, 5, 7, 11, 13, 17, 19, 2]
 * Output: 7
 * Explanation: The smallest element is 2, and its index is 7.
 *
 * Feasible Function is: arr[mid] < theLastElemnt
 */

function findMinRotated(arr) {
  let left = 0;
  let right = arr.length - 1;
  let minFoundValIdx = -1;
  const lastElementIdx = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    console.log(mid);

    if (arr[mid] < arr[lastElementIdx]) {
      minFoundValIdx = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(minFoundValIdx);

  return minFoundValIdx;
}

console.log(findMinRotated([30, 40, 50, 5, 10, 20])); // ==> index 3
// console.log(findMinRotated([3, 5, 7, 11, 13, 17, 19, 2])); // ==> index 7
