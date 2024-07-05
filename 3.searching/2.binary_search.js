console.log("*****************************************");
console.log("************* BINARY SEARCH *************");
console.log("*****************************************");

console.log(`---- What is BINARY SEARCH ----`);
console.log(`---- It's a much faster form of search.`);
console.log(`---- Rather than eliminating one element at a time, 
  you can eliminate half of the remaining elements at a time.`);
console.log(`---- But, it only works on sorted arrays.`);

console.log(`---- DIVIDE AND CONQUER ----`);
console.log(`---- solving_problems => 5.divi...-js`);

console.log(`---- PSEUDOCODE ----`);
console.log(`---- This function accepts a sorted array and a value.`);
console.log(`---- Create a left pointer at the start of the array,
  and a right pointer at the end of the array.`);
console.log(`---- While the left pointer comes before the right pointer:`);
console.log(`-------- Create a pointer in the middle.`);
console.log(`-------- If value found, return the index.`);
console.log(`-------- if value too small, move the left pointer up.`);
console.log(`-------- if value too large, move the right pointer down.`);
console.log(`---- If no value found, return -1.`);
console.log(`---- .`);

function myBinarySearch(arr, value) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.round((leftIndex + rightIndex) / 2);
    let currentElement = arr[middleIndex];
    console.log(middleIndex);

    if (currentElement < value) {
      leftIndex = middleIndex + 1;
    } else if (currentElement > value) {
      rightIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}

console.log(myBinarySearch([1, 2, 3, 4, 5, 6, 7], 4));
console.log(myBinarySearch([18, 21, 31, 43, 45, 62, 79], 4));
console.log(myBinarySearch([18, 21, 31, 43, 45, 62, 79], 21));
console.log(myBinarySearch([1, 2, 3, 4, 5, 6, 7], 6));
