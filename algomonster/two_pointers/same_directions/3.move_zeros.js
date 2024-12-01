/** Move Zeros 
  Given an array of integers, move all the 0s to the back of the array while maintaining the relative order of the non-zero elements. Do this in-place using constant auxiliary space.

  Input: [1, 0, 2, 0, 0, 7]
  Output: [1, 2, 7, 0, 0, 0]

*/

function moveZeros(arr) {
  let slowPointer = 0;
  let fastPointer = 0;

  while (fastPointer < arr.length) {
    if (arr[fastPointer] !== 0) {
      [arr[slowPointer], arr[fastPointer]] = [
        arr[fastPointer],
        arr[slowPointer],
      ];
      slowPointer += 1;
    }

    fastPointer += 1;
  }
}

const arr = [1, 0, 2, 0, 0, 7];
moveZeros(arr);
console.log(arr); // Array(6) [ 1, 2, 7, 0, 0, 0 ]
