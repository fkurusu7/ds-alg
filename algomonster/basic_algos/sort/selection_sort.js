/** SELECTION SORT
 * The idea of this is that during each cycle,
 * find the smallest item from the unsorted pile
 * and add it to the sorted pile.
 *
 * To find the smallest element in the unsorted pile,
 * create a temporary var keeping track of the index
 * to the smallest element. then compare each element
 * in the unsorted pie to that element, updating the
 * new index if necessary.
 *
 * After all element have been compared, swap the element
 * with the smallest index with the first element of the
 * unsorted pile. The element is now part of the sorted pile.
 */

function selectionSort(unsortedList) {
  const listLength = unsortedList.length;

  for (let i = 0; i < listLength; i++) {
    let minIndex = i;

    for (let j = i; j < listLength; j++) {
      if (unsortedList[j] < unsortedList[minIndex]) {
        minIndex = j;
      }
    }
    // swap the minimum element with the first index which is i var from the main loop)
    [unsortedList[i], unsortedList[minIndex]] = [
      unsortedList[minIndex],
      unsortedList[i],
    ];
  }

  return unsortedList;
}

console.log(selectionSort([5, 1, 6, 3, 4, 2, 7]));
