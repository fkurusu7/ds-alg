/**
 * You a re a traveler in a 2D grid. You begin
 * in the top-left corner and your goal is to
 * travel to the bttom-right corner. You may
 * only move down or right.
 *
 * In how many ways can you travel to the goal
 * on a grid with dimensions m * n?
 *
 * gridTraveler(3, 3) ==> 6
 *
 */

function gridTraveler(rows, columns) {
  // initialize table 2D array
  const table = Array(rows + 1)
    .fill()
    .map(() => Array(columns + 1).fill(0));
  console.log(table);
  // set position [1][1] to 1
  table[1][1] = 1;
  console.log(table);
  // Loop through rows and columns(nested loop)
  for (let row = 0; row <= rows; row++) {
    for (let column = 0; column <= columns; column++) {
      // get current position
      const current = table[row][column];
      // right neighbor
      if (column + 1 <= columns) {
        table[row][column + 1] += current;
      }
      // down neighbor
      if (row + 1 <= rows) {
        table[row + 1][column] += current;
      }
      console.log(table);
    }
  }

  // return table at positions rows-columns
  console.log(table);
  return table[rows][columns];
}

// console.log(gridTraveler(3, 2));
console.log(gridTraveler(2, 2));
// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));
// console.log(gridTraveler(100, 100));
