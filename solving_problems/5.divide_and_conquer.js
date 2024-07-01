console.log("******************************************");
console.log("*********** DIVIDE AND CONQUER ***********");
console.log("************* BINARY__SEARCH *************");
console.log("******************************************");

console.log(`It involves dividing a data set into smaller 
  chunks and then repeating a process with a subset of data.
  This pattern can tremendously decrease time complexity.`);

console.log("******** EXAMPLE ********");
console.log(`Given a SORTED ARRAY of integers, write a fUnction called SEARCH,
  that accepts a VALUE and RETURNS THE INDEX where the value passed to the
  function is located. If value not found, return -1.`);

// NAIVE Solution    O(n)
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6], 4)); // ==> 3
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // ==> 5
console.log(linearSearch([1, 2, 3, 4, 5, 6], 11)); // ==> -1

// NAIVE Solution    Log(n)
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // ==> 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // ==> 5
console.log(search([1, 2, 3, 4, 5, 6], 7)); // ==> -1

const bigArr = Array.from({ length: 342 }, (_, i) => i + 1);
console.log("Big array: ", bigArr);
console.log(search(bigArr, 321)); // ==> 320

console.log(search([1, 2, 3, 4, 5, 6], 11)); // ==> -1
