/** Move Zeros 
 
  Given an array of integers, move all the 0s to the back of the array 
  while maintaining the relative order of the non-zero elements. 
  
  Do this in-place using constant auxiliary space.

  Input:
  [1, 0, 2, 0, 0, 7]

  Output:
  [1, 2, 7, 0, 0, 0]
 
*/

function moveZeros(arr) {
  let slow = 0;

  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== 0) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow++;
    }
  }

  return arr;
}

console.log(moveZeros([1, 0, 2, 0, 0, 7]));
