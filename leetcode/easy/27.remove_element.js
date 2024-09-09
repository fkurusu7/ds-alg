/**
 * Given an integer array nums and an integer val,
 * remove all occurrences of val in nums in-place.
 * The order of the elements may be changed.
 * Then return the number of elements in nums
 * which are not equal to val.
 *
 * Consider the number of elements in nums which are
 * not equal to val be k, to get accepted, you need
 * to do the following things:
 * - Change the array nums such that the first k elements
 *    of nums contain the elements which are not equal
 *    to val. The remaining elements of nums are not
 *    important as well as the size of nums.
 * - Return k.
 */

function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  console.log(nums);

  return k;
}
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([3, 1, 1, 2, 2, 3, 1, 1, 2, 3, 1, 1], 1));
console.log(removeElement([3, 1, 7, 6, 7, 7, 5, 2, 1, 7], 7));

function removeElementEff(nums, val) {
  while (nums.indexOf(val) >= 0) {
    nums.splice(nums.indexOf(val, 0), 1);
  }
  return { length: nums.length, nums };
}
console.log(removeElementEff([3, 2, 2, 3], 3));
console.log(removeElementEff([3, 1, 1, 2, 2, 3, 1, 1, 2, 3, 1, 1], 1));
console.log(removeElementEff([3, 1, 7, 6, 7, 7, 5, 2, 1, 7], 7));
