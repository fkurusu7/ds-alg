console.log("*****************************************");
console.log("*********** MULTIPLE POINTERS ***********");
console.log("*****************************************");

console.log(`Creating pointers or values that correspond to an 
  index or position and move towards the beginning, end or middle
  based on a certain condition.
  Very efficient for solving problems with minimal space complexity as well.`);

console.log("******** EXAMPLE ********");
console.log(`Write a function called sumZero which accepts a SORTED array of integers.
  The function should find the first pair where the sum is 0.
  Return an array that includes both values that sum to zero or undefined
  if a pair does not exist`);

// Naive solution is by using nested loops which will be O(n^2)

// Using Multiple pointers
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}

console.log(sumZero([-3, -2, 0, 3, 6]));
console.log(sumZero([-3, -2, 0, 5, 6]));

console.log("******** EXAMPLE ********");
console.log(`Implement a function called countUniqueValues,
  which accepts a sorted array, and counts the unique values in the array.
  There can be negative numbers in the array, but it always be sorted.`);

function countUniqueValuesNaive(arr) {
  if (arr.length === 0) return 0;

  let currValue = null;
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currValue === arr[i]) continue;
    counter++;
    currValue = arr[i];
  }
  return counter;
}
console.log(countUniqueValuesNaive([1, 1, 1, 1, 1, 5])); // ==> 2
console.log(countUniqueValuesNaive([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // ==> 7
console.log(countUniqueValuesNaive([])); // ==> 0
console.log(countUniqueValuesNaive([-2, -2, -1, 0, 1])); // ==> 4
console.log(countUniqueValuesNaive([-2, -2, -1, 0, 1, 3, 3, 5])); // ==> 6
