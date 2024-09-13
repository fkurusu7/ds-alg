/**
 * You are given an integer array nums. 
 * You are initially positioned at the 
 * array's first index, and each element 
 * in the array represents your maximum 
 * jump length at that position.
 * 
 * Return true if you can reach the last index, or false otherwise.
 * 
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 
 *    to 1, then 3 steps to the last index.
 * 
 * Example 2:
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at 
 * index 3 no matter what. Its maximum jump 
 * length is 0, which makes it impossible 
 * to reach the last index.

 */

function canJump(nums) {
  if (nums.length < 2) return true;
  if (nums.length === 2) return false;
  const lastIndex = nums.length - 1;

  let jumpIndex = 1;
  let outbounds = 0;
  while (outbounds <= lastIndex) {
    let currentIndex = nums[jumpIndex];

    if (currentIndex === 0 || currentIndex > lastIndex) {
      return false;
    }
    if (currentIndex === lastIndex) {
      return true;
    }

    jumpIndex += currentIndex;
    outbounds++;
  }

  return false;
}

console.log(canJump([2, 3, 1, 1, 4])); // ==> true
console.log(canJump([0])); // ==> true
console.log(canJump([3, 2, 1, 0, 4])); // ==> false
