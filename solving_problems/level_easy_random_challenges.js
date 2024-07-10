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
function narcissistic(number) {
  // Code me to return true or false
  const ARR_VALUE = number.toString().split("");
  const POWER = ARR_VALUE.length;
  const IS_NARCI = Number(
    ARR_VALUE.map((n) => Number(n) ** POWER).reduce(
      (acc, curr) => acc + curr,
      0
    )
  );
  return IS_NARCI === number;
}

console.log(narcissistic(153));
console.log(narcissistic(1652));
console.log(narcissistic(1234567890098765432));

/* 
Complete the solution so that it splits the string 
into pairs of two characters. If the string contains 
an odd number of characters then it should replace 
the missing second character of the final pair 
with an underscore ('_').

Exmaple:
'abc'    =>  ['ab', 'c_']
'abcdef' => ['ab', 'cd', 'ef']
*/

function splitStringinPairs(str) {
  // const result = [];

  // const splitStr = str.split("");

  // if (splitStr.length % 2 !== 0) {
  //   splitStr.push("_");
  // }
  // str = splitStr.join("");
  // for (let i = 0; i < splitStr.length; i += 2) {
  //   result.push(str.substring(i, i + 2));
  // }
  // return result;

  return (str + "_").match(/.{2}/g) || [];
}

console.log(splitStringinPairs(""));
console.log(splitStringinPairs("abc"));
// abc abc_ ["ab", "c_"]
// abcd abcd_ ["ab", "cd"]
console.log(splitStringinPairs("abcd"));

console.log(`Write a function, which takes a non-negative integer (seconds) as input 
  and returns the time in a human-readable format (HH:MM:SS)
    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
  The maximum time never exceeds 359999 (99:59:59)`);

function humanReadable(seconds) {
  const hours = parseInt(seconds / 60 / 60);
  const mins = parseInt((seconds / 60) % 60);
  const secs = parseInt(seconds % 60);

  const finalHours = hours <= 9 ? "0" + hours : hours;
  const finalMins = mins <= 9 ? "0" + mins : mins;
  const finalSecs = secs <= 9 ? "0" + secs : secs;

  return `${finalHours}:${finalMins}:${finalSecs}`;
}

console.log(humanReadable(0)); //     ==>  00:00:00
console.log(humanReadable(59)); //    ==>  00:00:59
console.log(humanReadable(60)); //    ==>  00:01:00
console.log(humanReadable(90)); //    ==>  00:01:30
console.log(humanReadable(3599)); //  ==>  00:59:59
console.log(humanReadable(3600)); //  ==>  01:00:00
console.log(humanReadable(45296)); // ==>  12:34:56
console.log(humanReadable(86399)); // ==>  23:59:59
console.log(humanReadable(86400)); // ==>  24:00:00
