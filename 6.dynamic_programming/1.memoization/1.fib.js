//

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

let t11 = performance.now();
console.log(fib(6));
let t12 = performance.now();

console.log("Diff Ts: ", t12 - t11);

let t13 = performance.now();
console.log(fib(10));
let t14 = performance.now();

console.log("Diff Ts: ", t14 - t13);

let t15 = performance.now();
// console.log(fib(40)); // 40 ==> 18.54 s
let t16 = performance.now();
console.log(`Diff Ts: ${(t16 - t15) / 1000} ms`);

// ****************
// MEMOIZATION.
// Fast access DS, like obj, hashmap
// KEY. arg to fn()
// VALUE: the return value
// ****************
function dynFib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = dynFib(n - 1, memo) + dynFib(n - 2, memo);
  return memo[n];
}

let td15 = performance.now();
console.log(dynFib(40)); // 40 ==> 17.54 s
let td16 = performance.now();
console.log(`Diff Ts: ${(td16 - td15) / 1000} ms`);
