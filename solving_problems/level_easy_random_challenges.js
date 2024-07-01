function doubleChar(str) {
  // return str
  //   .split("")
  return [...str].map((c) => c + c).join("");
}

console.log(doubleChar("String")); // -> "SSttrriinngg"
console.log(doubleChar("Hello World")); // -> "HHeelllloo  WWoorrlldd"
console.log(doubleChar("1234!_ ")); // -> "11223344!!__  "

function removeEveryOther(arr) {
  // return arr.filter((_, i) => i % 2 === 0);
  return arr.filter((_, i) => !(i % 2));
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther([[1, 2]]));
console.log(removeEveryOther([["Goodbye"], { Great: "Job" }]));

console.log("******** EXAMPLE ********");
console.log(`Given a non-empty array of integers, return the result of 
  multiplying the values together in order.
  Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24`);

function grow(arr) {
  return arr.reduce((acc, curr) => acc * curr);
}

console.log(grow([1, 2, 3])); // ==> 6
console.log(grow([4, 1, 1, 1, 4])); // ==> 16
console.log(grow([2, 2, 2, 2, 2, 2])); // ==> 64
