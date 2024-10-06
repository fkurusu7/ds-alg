/** Square Root Estimation
 * Given an integer, find its square root without
 * using the built-in square root function. Only
 * return the integer part (truncate the decimals).
 *
 * Input: 16
 * Output: 4
 *
 * Input: 8
 * Output: 2
 * Explanation: square root of 8 is 2.83...,
 *    return the integer part, 2
 */

function squareRoot(n) {
  if (n === 0) return 0;

  let left = 1;
  let right = n;
  let squaredResult = -1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (mid * mid === n) return mid;

    if (mid * mid > n) {
      squaredResult = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return squaredResult - 1;
  /** if there is no element in the array whose square equals n,
   * then we want to return the largest element that is
   * smaller than the square root of n.
   * subtract 1 from the index after we find
   * the first true from binary search.
   */
}

console.log(squareRoot(8)); // ==> 2
console.log(squareRoot(9)); // ==> 3
console.log(squareRoot(25)); // ==> 5
console.log(squareRoot(0)); // ==> 0
