function GetTimeDifference(t1, t2) {
  return `Time elapsed: ${(t2 - t1) / 1000} seconds.`;
}

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log("I: ", i, " - J: ", j);
    }
  }
}

let t1 = performance.now();
printAllPairs(10);
let t2 = performance.now();
console.log(GetTimeDifference(t1, t2));

function logAtLeast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

t1 = performance.now();
logAtLeast5(100);
t2 = performance.now();
console.log(GetTimeDifference(t1, t2));
