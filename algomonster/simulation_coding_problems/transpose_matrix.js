/**
 * The problem requires us to transpose a given 2D integer array, matrix.
 * Transposing a matrix involves flipping the matrix over its main diagonal.
 * This process converts rows to columns and vice versa, which leads to
 * the interchange of the matrix's row and column indexes.
 *
 * For example, let's consider a matrix as follows:
 * 1 2 3
 * 4 5 6
 *
 * The main diagonal of this matrix is the set of elements that extend from
 * the top left to the bottom right (elements 1 and 5 in this case).
 *
 * When we transpose the matrix, the rows become columns, and the columns become rows. The transposed matrix will look like this:
 *
 * 1 4
 * 2 5
 * 3 6
 *
 * The element that was originally at the second row, first column (4),
 * is now at the first row, second column. The solution requires us to
 * perform this operation on any given matrix and return the new
 * transposed matrix.
 */

function transposeMatrix(matrix) {
  const columns = matrix.length;
  const rows = matrix[0].length;
  let transposeMatrix = Array(rows)
    .fill(0)
    .map((column) => Array(columns).fill(0));
  console.log(transposeMatrix); // [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]

  // outer loop loops rows
  for (let i = 0; i < rows; i++) {
    // inner loop loops columns
    for (let j = 0; j < columns; j++) {
      transposeMatrix[i][j] = matrix[j][i];
    }
  }
  console.log(transposeMatrix);

  return transposeMatrix;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(transposeMatrix(matrix));
/* 
  [ [ 1, 4 ], 
    [ 2, 5 ], 
     [ 3, 6 ] 
  ]
*/
