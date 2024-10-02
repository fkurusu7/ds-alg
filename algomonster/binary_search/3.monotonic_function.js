/** Binary Search and Monotonic Function
 *
 * A monotonic function is a function that is either non-decreasing or non-increasing.
 * Given x1 and x2 where x1 > x2, we should have f(x1) >= f(x2).
 * A sorted array is monotonic because the value increases or stays the same as the
 * index increases.
 *
 * If f(x) only contains Boolean values True and False and we think of true as 1 and
 * false as 0, then a sorted Boolean array would consist of consecutive 0s and then
 * consecutive 1s. For example, FFFFTTTTT.
 *
 * ****************************
 * FEASIBLE Function
 * ****************************
 *
 * The precondition for binary search is to find a monotonic function f(x) that returns either True or False.
 * Then the problem becomes Find the First True in a Sorted Boolean Array solved using binary search.
 * This function is called feasible to signify whether the element at the current index is
 * feasible (True) or not (False) to meet the problem constraints.
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let first_true_index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // ==========> THE FEASIBLE Function is arr[mid] == True <==========
    if (feasible(mid)) {
      first_true_index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return first_true_index;
}
