/**
 * Find the First True in a Sorted Boolean Array.
 *
 * An array of boolean values is divided into two sections:
 * The left section consists of all false, and
 * the right section consists of all true.
 * Find the First True in a Sorted Boolean Array of the right section,
 * return the index of the first true element.
 * If there is no true element, return -1.
 *
 * Input: arr = [false, false, true, true, true]
 * Output: 2
 * Explanation: The first true's index is 2.
 */

function findFirstTrue(booleanArray) {
  if (booleanArray.length === 0) return -1;

  let left = 0;
  let right = booleanArray.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (booleanArray[mid]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return boundaryIndex;
}

console.log(findFirstTrue([false, false, true, true, true])); // ==> 2
console.log(findFirstTrue([false, false, false, false, true])); // ==> 4
console.log(findFirstTrue([false, false, false, false])); // ==> -1
console.log(findFirstTrue([true, true, true, true, true, true])); // ==> 0
