console.log("*****************************************");
console.log("************ INSERTION SORT *************");
console.log("***************** O(n**2) ******************");
console.log("*****************************************");

console.log(
  `*** It builds up the sort by gradually creating a 
  larger left half which is always sorted`
);
console.log(`--- Pseudocode: `);
console.log(`--- Start by picking the second (index 1) element in the array.`);
console.log(`--- Compare the second element with the one before it
  and swap if necessary.`);
console.log(`--- Continue to the next element and if it is in the incorrect
  order, iterate through the sorted portion (left side) to place the
  element in the correct place.`);
console.log(`--- Repear until the array is sorted`);
console.log(`--- `);

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentValue = arr[i];
    console.log("Current Value: ", currentValue, i);

    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      console.log("J: ", j);
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

// console.log(insertionSort([3, 2, 4, 76, 5, 1]));
console.log(insertionSort([3, 2, 4]));
