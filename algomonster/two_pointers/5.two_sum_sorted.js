/** Two Sum Sorted 

Given an array of integers sorted in ascending order, find two numbers that
add up to a given target. Return the indices of the two numbers in ascending 
order. You can assume elements in the array are unique and there is only one 
solution. Do this in O(n) time and with constant auxiliary space.

Input explanation:
    arr: a sorted integer array
    target: the target sum we want to reach

Input: [2, 3, 4, 5, 8, 11, 18], 8
Output:    1     3


  If our sum equals to target, then we're done.
  If our sum is less than target, we need to exchange one of the numbers for 
    a bigger number. Since 18 is already the bigger number available, we 
    have to exchange 2 for a bigger number. We go to 3.
  If our sum is greater than the target, we need to exchange one of the numbers 
    for a smaller number. Since 2 is the smallest number available, we have to 
    exchange 18 for a smaller number. We go to 11.
  Repeat the process until the sum is equal to our target.

Time Complexity ==> The array is already sorted, and the two points never meet, 
  so each element is visited at most once; therefore, the time complexity is O(n).
Space Complexity: O(1)
*/

function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(twoSumSorted([2, 3, 4, 5, 8, 11, 18], 8));
console.log(twoSumSorted([2, 3, 5, 8, 11, 15], 5));
console.log(twoSumSorted([2, 5, 10, 12, 30, 100], 22));
console.log(twoSumSorted([1, 2, 3, 10, 20, 30, 50, 100], 101));
