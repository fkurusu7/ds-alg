console.log("*****************************************");
console.log("************ SELECTION SORT *************");
console.log("***************** O(n**2) ******************");
console.log("*****************************************");

console.log(`*** It places small values into sorted position`);
console.log(`--- Pseudocode`);
console.log(`--- Store the first element as the smallest value seen so far`);
console.log(`--- Compare this item to the next item in the array until 
  finding a smaller number`);
console.log(`--- If a smaller number is found, designate that smaller 
  number to be the new minimum and continue until the end of array`);
console.log(`--- if the minimum is not the value (index) began with, 
  swap the two values.`);
console.log(`--- Repeat this with the next element until the array is sorted`);
console.log(`--- `);

function mySelectionSort(arr) {
  let smallestValueIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestValueIdx]) {
        // SWAP
        [arr[smallestValueIdx], arr[j]] = [arr[j], arr[smallestValueIdx]];
        smallestValueIdx = j;
      }
    }
  }
  return arr;
}

console.log(mySelectionSort([4, 2, 5, 1, 7]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (lowest !== i) [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
  }
  return arr;
}

console.log(selectionSort([4, 2, 5, 1, 7]));
