/** QUESTION 4
 * You are given a sorted array consisting of only integers
 * where every element appears exactly twice, except for one
 * element which appears exactly once.
 *
 * Return the single element that appears only once.
 * Your solution must run in O(log n) time and O(1) space.
 *
 * Example 1:
 * Input: nums = [1,1,2,3,3,4,4,8,8] Output: 2
 *
 * Example 2:
 * Input: nums = [3,3,7,7,10,11,11] Output: 10
 *
 * Constraints:
 * 1 <= nums.length <= 105
 * 0 <= nums[i] <= 105
 */

function singleNonDuplicate(nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);

    console.log(mid, nums[mid], nums[mid + 1]);
    /*
    [ 4, 8, 9 ] 
    [ 2, 4, 8 ] 
    [ 1, 1, 4 ]
    */
    if (mid % 2 == 1) mid--;
    console.log(mid, nums[mid], nums[mid + 1]);
    /*
   [ 4, 8, 9 ] 
   [ 2, 4, 8 ] 
   [ 0, 1, 1 ]
   */
    if (nums[mid] == nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

console.log(singleNonDuplicate([1, 1, 4, 8, 8, 9, 9, 10, 10])); // ==> 4
// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])); // ==> 10
