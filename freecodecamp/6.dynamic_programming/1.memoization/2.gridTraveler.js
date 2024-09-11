/*
You are a traveler in a 2D grid. you begin in the 
top-left corner and your goal is to travel to the 
bottom-right corner. You only move down or right.

in How many ways can you travel to the goal on a 
grid with dimensions  m * n?
  R. Shrinking the grid ==> m - 1 || n - 1

gridTraveler(2, 3) // ==> 3 ways
  1. R, R, D
  2. R, D, R
  3. D, R, R
gridTraveler(3, 3) // ==> 4 ways
  1. R, R, D, D
  2. R, D, R, D
  3. D, R, R, D
  4. D, R, D, R

  // GRID EMPTY
gridTraveler(0, 1) // ==> 0
gridTraveler(1, 0) // ==> 0
gridTraveler(8, 0) // ==> 0
gridTraveler(0, 3) // ==> 0

*/

function gridTraveler(m, n) {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(0, 3));
console.log(gridTraveler(1, 3));
let t1 = performance.now();
console.log(gridTraveler(14, 14));
let t2 = performance.now();
console.log((t2 - t1) / 1000); // 14,14 ==> 13 s

function gridTravelerDyn(m, n, memo = {}) {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTravelerDyn(m - 1, n, memo) + gridTravelerDyn(m, n - 1, memo);
  return memo[key];
}

console.log(gridTravelerDyn(2, 3));
console.log(gridTravelerDyn(3, 3));
console.log(gridTravelerDyn(0, 3));
console.log(gridTravelerDyn(1, 3));
let td1 = performance.now();
console.log(gridTravelerDyn(18, 18));
let td2 = performance.now();
console.log((td2 - td1) / 1000); // 14,14 ==> 13 s
