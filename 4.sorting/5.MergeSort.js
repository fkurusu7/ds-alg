console.log("*****************************************");
console.log("************** MERGE SORT ***************");
console.log("************** O(n log n) ***************");
console.log("*****************************************");

console.log(`*** It's a combination of two things: MERGING & SORTING`);
console.log(`*** Exploits the fact that arrays of = and 1 element
   are always sorted`);
console.log(`*** Works by decomposing an array into smaller arrays
  of 0 & 1 elements then building up a newly sorted array.`);
console.log(`*****  1st implement a function responsible for merging 
  two sorted arrays. This helper function should create a new array
  which is also sorted, and consists of all the elements in the two
  input arrays.`);
console.log(`***** This function should run in O(n + m) time and
  O(n + m) space. And, it should not modify the parameters passed to it.`);

console.log(`--- Pseudocode MERGE ARRAYS: `);
console.log(`---  Create an empty array, take a look at the 
  smallest values in each input array, i and j vars should be 0`);
console.log(`--- While there are still values haven't looked at: `);
console.log(`------ `);
console.log(`------ `);
console.log(`------ `);
console.log(`------ `);
console.log(`--- `);
console.log(`--- `);

console.log("Merging ARRAYS... Just MERGING two arrays");

function mergeArrays(arr1, arr2) {
  let result = [];

  let i = (j = 0);

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergeArrays([3, 7, 9], [1, 4, 6])); // [1,3,4,6,7,9]
console.log(mergeArrays([3], [1, 4, 6])); // [3,4,6]
console.log(mergeArrays([], [4, 6])); // [4,6]
console.log(mergeArrays([100], [4, 6])); // [4, 6, 100]

console.log(`--- Pseudocode mergeSort: `);
console.log(`--- Break up the array into halves until 
  you have two arrays that are empty or have one element.
  Using slice`);
console.log(`------- BASE CASE: when arrays length is 
                    less than or equal to ONE (1 or 0) `);
console.log(`--- Merge smaller sorted arrays with other sorted 
  arrays until back at the full lenght of the array`);
console.log(`--- Return merge (and sorted) array`);

console.log([].length);

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midPoint = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, midPoint));
  const arr2 = mergeSort(arr.slice(midPoint));

  return mergeArrays(arr1, arr2);
}

console.log(mergeSort([1, 4, 2, 5, 5, 5, 7, 5, 5, 5, 5, 58, 3]));
console.log(mergeSort([1, 4, 2, 7, 5, 58, 3]));
