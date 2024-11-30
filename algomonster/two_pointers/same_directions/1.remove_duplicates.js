/** Remove Duplicates
 * 
  Given a sorted list of numbers, remove duplicates and return the new length. You must do this in-place and without using extra memory.

  Input: [0, 0, 1, 1, 1, 2, 2].
  Output: 3.
  Explanation: Modify the list in place so that the first three elements become 0, 1, 2.
    Returns 3 because the new length is 3.

  SOLUTION:
  
  The function is comparing the value of the fast pointer to its previous entry and see if they match.

  The moving condition of the two pointer is:
    - That if the previous check match, only the fast pointer moves.
    - Otherwise, the slow pointer moves.
    - Perform the process of setting the value at the slow pointer to the value at the fast pointer 
    - Then, the fast pointer moves.
  
  The program ends when the fast pointer reaches the end, in which case return the index after the slow pointer as the size of the array.
 */

function removeDuplicates(arr) {
  if (arr.length === 0) return -1;

  let slowPointer = 0;
  let fastPointer = 1;
  let size = 0;

  while (fastPointer <= arr.length) {
    if (arr[slowPointer] === arr[fastPointer]) {
      fastPointer += 1;
    } else {
      slowPointer += 1;
      arr[slowPointer] = arr[fastPointer];
      size++;
      fastPointer += 1;
    }
  }
  console.log(arr);
  return size;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2])); // ==> 3
/* Array(7) [ 0, 1, 2, undefined, 1, 2, 2 ] */
console.log(removeDuplicates([12, 20, 20, 50, 51, 51, 13])); // ==> 5
/* Array(7) [ 12, 20, 50, 51, 13, undefined, 13 ] */

/** ALTERNATIVE Solution using another Loop */
function removeDuplicatesForLoop(arr) {
  let slowPointer = 0;

  for (let fastPointer = 0; fastPointer < arr.length; fastPointer++) {
    if (arr[slowPointer] !== arr[fastPointer]) {
      slowPointer++;
      arr[slowPointer] = arr[fastPointer];
    }
  }

  return slowPointer + 1;
}
console.log(removeDuplicatesForLoop([0, 0, 1, 1, 1, 2, 2])); // ==> 3
console.log(removeDuplicatesForLoop([12, 20, 20, 50, 51, 51, 13])); // ==> 5
