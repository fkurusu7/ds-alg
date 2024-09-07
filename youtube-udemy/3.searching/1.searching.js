console.log("*****************************************");
console.log("*************** SEARCHING ***************");
console.log("*****************************************");

console.log(`---- What is SEARCH ----`);
console.log(
  `---- try to find something by looking or otherwise seeking carefully and thoroughly.`
);
console.log(`---- SEARCH in arrays ----`);
console.log(`---- `);
console.log(`---- JavaScript has search:`);
console.log(`---- There are many different search methods on arrays:`);
console.log(`---- * indexOf`);
console.log(`---- * includes`);
console.log(`---- * find`);
console.log(`---- * findIndex`);
console.log(`---- All thse methods use LINEAR SEARCH`);
console.log(`---- Visit one item at a time, starting at the beginning and moving forward
  or we could start at the end and move backward.`);
console.log(`---- LINEAR SEARCH Pseudocode`);
console.log(`---- This function accepts an array and a value.`);
console.log(
  `---- Loop through the array and check if the current array elment is equal to the value.`
);
console.log(`---- If it is, return the index at which the element is found.`);
console.log(`---- If the value is never found, return -1`);

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(linearSearch([4, 2, 1, 3, 5, 7], 7));
console.log(linearSearch([4, 2, 1, 3, 5, 7], 100));

console.log(
  `**** How much time does it take? the worse... O(n) - the longer the array the longer it takes`
);
