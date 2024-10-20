/** Remove Duplicates
 *
 * Given a sorted list of numbers, remove duplicates and return the new length.
 * You must do this in-place and without using extra memory.
 *
 * Input: [0, 0, 1, 1, 1, 2, 2].
 * Output: 3.
 * Your function should modify the list in place so that the first three elements
 * become 0, 1, 2. Return 3 because the new length is 3.
 *
 */

function removeDuplicatesMine(arr) {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = 1;
  let size = 0;

  while (right <= arr.length) {
    if (arr[left] === arr[right]) {
      right += 1;
    } else if (arr[left] !== arr[right]) {
      left += 1;
      arr[left] = arr[right];
      size++;
      right += 1;
    }
  }

  return size;
}

console.log(removeDuplicatesMine([0, 0, 1, 1, 1, 2, 2])); // => 3
console.log(removeDuplicatesMine([1, 1, 1, 1, 1, 1, 1, 1])); // => 1

function removeDuplicates(arr) {
  // return 0 for an empty array.
  if (arr.length === 0) return 0;

  // This could be left var as well as size var
  let uniqueIndex = 0;

  // i is right
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[uniqueIndex]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[i];
    }
  }
  console.log(arr);
  return uniqueIndex + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2])); // => 3
