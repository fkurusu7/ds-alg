function GetTimeDifference(t1, t2) {
  return `Time elapsed: ${(t2 - t1) / 1000} seconds.`;
}

function countUpAndDown(n) {
  console.log("Going up!");

  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("At the top!\nGoing down...");

  for (let i = n - 1; i >= 0; i--) {
    console.log(i);
  }

  console.log("Back down. Bye!");
}

const t1 = performance.now();
countUpAndDown(10);
const t2 = performance.now();
console.log(GetTimeDifference(t1, t2));
