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

  let left = 0;
  let right = n - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor(right + left / 2);

    if (mid * mid === n) return mid;

    if (mid * mid > n) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result - 1;
}

console.log(squareRoot(8)); // ==> 2
console.log(squareRoot(9)); // ==> 3
console.log(squareRoot(25)); // ==> 5
console.log(squareRoot(0)); // ==> 0

/*
martes 17 
miércoles 18
jueves 19
viernes 20 1hr
sábado 21 
domingo 22
lunes 23 X
martes 24
miércoles 25
jueves 26
viernes 27 1hr
sábado 28 1hr
domingo 29 X
lunes 30 X
martes 1 X*/
