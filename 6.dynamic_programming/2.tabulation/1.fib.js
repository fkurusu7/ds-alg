/**
 * Tabulation is all about building a TABLE
 */

function fib(number) {
  // create table array, fill it with 0's
  const table = Array.from({ length: number + 1 }, () => 0);
  // console.log(table);

  // initialize position 1 with 1
  table[1] = 1;
  // console.log(table);

  // loop through up to "number"
  for (let i = 0; i < number; i++) {
    // add current position value to the next 2 positions
    table[i + 1] += table[i];
    if (i <= number - 2) table[i + 2] += table[i];
  }

  // return table array position of "number"
  // console.log(table);
  return table[number];
}

let t1 = performance.now();
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(50));
console.log(fib(1000));
let t2 = performance.now();
console.log(`Time DIFF: ${((t2 - t1) / 1000).toFixed(2)}`);
