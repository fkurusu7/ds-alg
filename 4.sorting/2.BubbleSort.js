console.log("*****************************************");
console.log("************** BUBBLE SORT **************");
console.log("***************** O(n) *****************");
console.log("*****************************************");

console.log(`*** The largest values BUBBLE UP to the TOP`);
console.log(`--- Many sorting algorithms involved some type of 
  SWAPPING functionality (swapping to numbers to put them in order)`);

function swapES5(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function swapES2015(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(`BubbleSort Pseudocode`);
console.log(
  `--- Create a function called bubbleSort, it takes an array (assume it's all numbers)`
);
console.log(`--- Start looping from with a variable called i 
  the end of the array towards the beginning.`);
console.log(`---  Start an inner loop with a variable called j
  from the beginning until i - 1.`);
console.log(`--- if arr[j] is greater than arr[j+1], swap those two values!.`);
console.log(`--- Return the sorted array.`);

console.log(`Bubble sort Versions:`);

function bubbleSortNotOptimized(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swapES5(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSortNotOptimized([8, 2, 1, 4, 3, 6, 5]));

function bubbleSortNotOptimizedNewSwap(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swapES2015(arr, j, j + 1);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSortNotOptimizedNewSwap([8, 2, 1, 4, 3, 6, 5]));

function bubbleSort(arr) {
  let noSwaps = true;

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swapES5(arr, j, j + 1)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}
console.log(bubbleSort([8, 2, 1, 4, 3, 6, 5]));
console.log(bubbleSort([1008, 2, 1, 4, 3, 6, 5, 1, 302, 23, 10]));
