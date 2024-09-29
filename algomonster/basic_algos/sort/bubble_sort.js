/** BUBBLE SORT
 * The idea is this:
 * For each pass, use a pointer to point at the first element
 * of the list.
 * For each cycle, compare it with the next element in the list
 * an swap them if the current item is greater, then move the
 * pointerby one until it reaches the end of the list.
 *
 * Repeat this process until the list becomes sorted.
 *
 * The list is sorted if, during the pass, no swapping occurs.
 *
 * Note: the largest element will always "float" to the top
 * during each pass, like a bubble. therefore, we only need to
 * consider the interval excluding the last element of the
 * previous interval, and the list is guaranteed to be sorted
 * within "n" passes.
 *
 * The time complexity of this algorithm, like before, is O(n^2),
 * because it is essentially two nested loops.
 */

function bubbleSort(unsortedList) {
  const n = unsortedList.length;

  // Iterate through all elements in reverse order
  for (let i = n - 1; i >= 0; i--) {
    // Track whether a swap occured in this pass
    let swapped = false;

    // "j < i" is about being efficient
    //    the last i element is already sorted
    //    so in the next pass there's no need to check thos elements again.
    //    the reverse order reduces the range to check in eahc pass.
    for (let j = 0; j < i; j++) {
      if (unsortedList[j] > unsortedList[j + 1]) {
        // Swap if the elemnt found is greater than the next element
        [unsortedList[j], unsortedList[j + 1]] = [
          unsortedList[j + 1],
          unsortedList[j],
        ];
        swapped = true;
      }
    }

    // If notwo elements were swapped, the list is sorted
    if (!swapped) return unsortedList;
  }

  return unsortedList;
}

console.log(bubbleSort([5, 3, 8, 2, 1]));
