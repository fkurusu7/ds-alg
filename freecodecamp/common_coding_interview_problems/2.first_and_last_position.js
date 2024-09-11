/**
 * Given a sorted array of integers arr, and
 * an integer target, finde the index of the
 * first and last position of target in arr.
 *
 * If target can't be found in arr, return [-1, -1]
 */

function firstLastPosition(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      let startIndex = i;
      while (i + 1 < arr.length && arr[i + 1] === target) {
        i++;
      }
      return [startIndex, i];
    }
  }
  return [-1, -1];
}

console.log(firstLastPosition([1, 2, 2, 3, 5, 5, 5, 5, 5, 7, 8], 5)); // ==> [4, 8];
console.log(firstLastPosition([1, 2, 3, 3, 3, 3, 3, 5, 5], 3)); // ==> [2, 6];
console.log(firstLastPosition([1, 3, 3, 5, 5], 9)); // ==> [-1, -1];
