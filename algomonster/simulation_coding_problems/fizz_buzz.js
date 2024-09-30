/**
 * Given a positive integer n, the task is to construct an array of strings
 * that follow a specific pattern based on whether the index of the array
 * (starting from 1) is divisible by 3, 5, or both:
 *
 * For each index 'i' that is divisible by both 3 and 5 (for example, 15, 30, 45),
 * the array should contain the string "FizzBuzz" at that index.
 *
 * If the index 'i' is only divisible by 3 (like 3, 6, 9),
 * the array should have "Fizz" at that index.
 *
 * If the index 'i' is only divisible by 5 (such as 5, 10, 20),
 * the string "Buzz" should appear at that index.
 *
 * For all other indexes that don't meet the above divisibility conditions,
 * the array should store the index 'i' itself as a string.
 *
 * The function should return the array, which is described as answer, and
 * it should be 1-indexed, meaning the first element corresponds to i=1.
 */

function fizzBuzz(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(i);
    }
  }

  return answer;
}

console.log(fizzBuzz(16));
