/**
 * Given an array of integers called nums and a target integer called target.
 *
 * Our task is to find two distinct numbers
 * within the array that when added together,
 * equal the target.
 *
 * - Cannot use the same element from
 *    the array twice in our sum.
 * - The output will be the indices
 *    (positions in the array) of these two numbers
 *
 */

function sumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);

    for (let j = i + 1; j < nums.length; j++) {
      // console.log(nums[j]);

      const twoSum = nums[i] + nums[j];
      // console.log(nums[i], nums[j], twoSum);

      if (twoSum === target) {
        return [i, j];
      }
    }
  }

  return -1;
}

console.time("SumBruteForce");
console.log(
  sumBruteForce(
    [3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 7, 9, 2],
    9
  )
);
console.timeEnd("SumBruteForce"); // 33ms

function twoSum(nums, target) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const y = target - x;

    if (numsMap.has(y)) {
      return [numsMap.get(y), i];
    }
    numsMap.set(x, i);
  }

  throw new Error(`No two sum solution exists for target: ${target}`);
}

console.time("TwoSum");
try {
  console.log(twoSum([3, 5, 7, 9, 2], 9));
  console.log(twoSum([3, 5, 7, 9, 2], 10));
  console.log(twoSum([3, 5, 7, 9, 2], 100));
} catch (error) {
  console.log(error.message);
}
console.timeEnd("TwoSum");
