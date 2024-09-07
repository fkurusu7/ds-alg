/**
 * Tabulation is all about building a TABLE
 */

function fib(number) {
  // let table = Array(number + 1).fill(0);
  let table = Array.from({ length: number + 1 }, () => 0);
  // console.log(table);

  table[1] = 1;
  for (let i = 0; i <= number; i++) {
    // console.log(i);

    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  // console.log(table);

  return table[number];
}

console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(50));
