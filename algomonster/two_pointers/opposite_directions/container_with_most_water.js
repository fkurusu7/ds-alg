/** Container With Most Water

  Given an array representing heights of vertical lines, 
  find the maximum area of water trapped between two lines.

  Input: [1,8,6,2,5,4,8,3,7].
  Output: 49.

  The function should calculate the maximum area that can be trapped by two lines.
 */

function containerWithMostWater(heightArr) {
  let left = 0;
  let right = heightArr.length - 1;
  let maxArea = 0;

  while (left < right) {
    const currentArea =
      Math.min(heightArr[left], heightArr[right]) * (right - left);
    maxArea = Math.max(maxArea, currentArea);
    if (heightArr[left] < heightArr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])); // ==> 49
