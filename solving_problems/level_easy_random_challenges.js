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

function countSheeps(sheep) {
  if (sheep.length === 0) return 0;
  return sheep.reduce((acc, curr) => {
    const counter = Number(curr || 0);
    return counter + acc;
  }, 0);
}

console.log(countSheeps([])); // ==> 0
console.log(countSheeps([undefined])); // ==> 0
console.log(countSheeps([null])); // ==> 0
console.log(countSheeps([false])); // ==> 0
console.log(countSheeps([true])); // ==> 1
console.log(countSheeps([undefined, null, false, true])); // ==> 1
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
); // ==> 2
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
); // ==> 17

console.log(`A Narcissistic Number (or Armstrong Number) is a positive number 
  which is the sum of its own digits, each raised to the power of the number 
  of digits in a given base. In this Kata, we will restrict ourselves 
  to decimal (base 10).
  For example, 
    take 153 (3 digits), which is narcissistic:
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

    and 1652 (4 digits), which isn't:
    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
`);
function narcissistic(value) {
  // Code me to return true or false
  const ARR_VALUE = value.toString().split("");
  const POWER = ARR_VALUE.length;
  const IS_NARCI = Number(
    ARR_VALUE.map((n) => Number(n) ** POWER).reduce(
      (acc, curr) => acc + curr,
      0
    )
  );
  return IS_NARCI === value;
}

console.log(narcissistic(153));
console.log(narcissistic(1652));
console.log(narcissistic(1234567890098765432));
