/**
 * Given a sorted array of integers and an integer called target,
 * find the element that equals the target and return its index.
 * If the element is not found, return -1.
 *
 * The key observation here is that THE ARRAY IS SORTED.
 */

// ITERATIVELY BinarySearch Version
function binarySearchIte(nums, target) {
  if (nums.length < 1) return -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    // found target, return its index
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      // middle less than target, discard left half
      left = mid + 1;
    } else if (nums[mid] > target) {
      // middle greater than target, discard right half
      right = mid - 1;
    }
  }
  // didn't find target
  return -1;
}

console.log(binarySearchIte([1, 2, 3, 4, 5, 6, 7, 8], 1)); // ==> 0
console.log(binarySearchIte([1, 1, 2, 3, 4, 5, 6, 7, 8], 7)); // ==> 7
console.log(binarySearchIte([1, 1, 2, 3, 4], 17)); // ==> -1

/* ******************************* */
// RECURSIVE BinarySearch Version
/* ******************************* */
/* Default values allows to keep track of current
 * SEARCH RANGE without modifying the original array
 */
function binarySearchRec(nums, target, left = 0, right = nums.length - 1) {
  // Base Case: Target not found
  if (left > right) return -1;

  const mid = left + Math.floor((right - left) / 2);

  if (nums[mid] === target) return mid;
  /* The RECURSIVE calls pass the entire NUMS array
   * along with updated LEFT and RIGHT indices */
  if (nums[mid] < target) {
    return binarySearchRec(nums, target, mid + 1, right);
  } else if (nums[mid] > target) {
    return binarySearchRec(nums, target, left, mid - 1);
  }
}

console.log(binarySearchRec([1, 2, 3, 4, 5, 6, 7, 8], 1)); // ==> 0
console.log(binarySearchRec([1, 1, 2, 3, 4, 5, 6, 7, 8], 7)); // ==> 7
console.log(binarySearchRec([1, 1, 2, 3, 4], 17)); // ==> -1
