/** INSERTION SORT
 * The idea of this algorithm is this:
 *
 * - Initially, only the first item is considered sorted.
 * - Then, for each item in the sequence, "insert" that
 *    item into the sorted list by swapping it with the
 *    item before it, until the item is smaller than the
 *    current item.
 *
 *********************
 * it is an IN-PLACE algorithm because no additional data
 * structure is used to store intermediate values.
 */
function insertionSort(unsortedList) {
  for (let i = 0; i < unsortedList.length; i++) {
    let current = i;

    while (current > 0 && unsortedList[current] < unsortedList[current - 1]) {
      const temp = unsortedList[current];
      unsortedList[current] = unsortedList[current - 1];
      unsortedList[current - 1] = temp;
      current--;
    }
  }
  return unsortedList;
}

console.log(insertionSort([5, 1, 6, 3, 4, 2, 7]));
// Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]
