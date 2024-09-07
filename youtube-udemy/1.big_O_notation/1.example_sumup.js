function GetTimeDifference(t1, t2) {
  return `Time elapsed: ${(t2 - t1) / 1000} seconds.`;
}

function addUpToForLoop(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
const sumForLoop1 = addUpToForLoop(10000000);
let t2 = performance.now();

console.log(GetTimeDifference(t1, t2));

function addUpToSimple(n) {
  return (n * (n + 1)) / 2;
}

t1 = performance.now();
const sumSimple1 = addUpToSimple(10000000);
sumSimple1;
t2 = performance.now();
console.log(GetTimeDifference(t1, t2));
