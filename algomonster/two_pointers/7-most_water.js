/** Container With Most Water
 * 
  Given an array representing heights of vertical lines, 
  find the maximum area of water trapped between two lines.

  Input: [1,8,6,2,5,4,8,3,7].
  Output: 49.

  Your function should calculate the maximum area that can 
  be trapped by two lines.
*/

function containerWithMostWater(arr) {
  let left = 0;
  let right = arr.length - 1;
  let max = 0;

  while (left <= right) {
    const currentArea = Math.min(arr[left], arr[right]) * (right - left);
    max = Math.max(max, currentArea);

    if (arr[left] <= arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])); // ==> 49
