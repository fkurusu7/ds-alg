/** Two Sum Sorted
 
  Given an array of integers sorted in ascending order, find two numbers that add up to a given target. 
  Return the indices of the two numbers in ascending order. 
  You can assume elements in the array are unique and there is only one solution. 
  Do this in O(n) time and with constant auxiliary space.

  Input: arr, target
  Sample Input: [2, 3, 4, 5, 8, 11, 18], 8
  Sample Output: 1 3 ==> Indexes of values 3 - i:1 & 5 - i:3
 */

function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}

console.log(twoSumSorted([2, 3, 4, 5, 8, 11, 18], 8)); // ==> [1, 3]
console.log(twoSumSorted([2, 3, 4, 5, 8, 11, 18], 7)); // ==> [0, 3]
console.log(twoSumSorted([2, 3, 4, 5, 8, 11, 18], 9)); // ==> [2, 3]
