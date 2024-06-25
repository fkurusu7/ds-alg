/**************************************** */
// Basic approach to solve a problem
// * Frequency counters
// * Two pointer problems
// * Divide and Conquer
// * Specific name patterns
/**************************************** */

console.log("What is an ALGORITHM?");
console.log("* A process or set of steps to accomplish a certain task.");
console.log("/n");
console.log("How to Improve?");
console.log("* Devise a plan for solving problems.");
console.log("* Master common problem solving patterns.");
console.log("/n");
console.log("- Understand the problem.");
console.log("** Can i restate the problem in my own words? ");
console.log("** What are the inputs? ");
console.log("** What are the outputs? ");
console.log(
  "** Can the outputs be determined from the inputs? Do I have enough information to solve the problem? "
);
console.log(
  "** How should I label the important pieces of data that are part of the problem? "
);
console.log("/n");
console.log("- Explore concrete examples.");
console.log("** Start with SIMPLE examples ");
console.log("** Progress to more COMPLEX examples ");
console.log("** Explore examples with EMPTY inputs ");
console.log("** Explore examples with INVALID inputs ");
console.log("** Explore examples with INVALID inputs ");
console.log(
  "******* Write a function which takes in a string and returns counts of each character in the string "
);
console.log('charCount("aaaa") ==> {a:4}');
console.log('charCount("hello") ==> {h:1, e:1, l:2, o:1}');
console.log('charCount("my phone number is 31465768") ==> ?????');
console.log('charCount("") ==> ?????');
console.log("charCount(890) ==> ?????");

console.log("/n");
console.log("- Break it down.");
console.log(
  "******* Explicitly write out the steps needed to take. It forces to think about the code you'll write before writing it"
);
console.log(
  "******* It helps to catch any lingering conceptual issues or misunderstandings before diving in and having to worry about details as well."
);

console.log("/n");
console.log("- Solve/Simplify.");

console.log("/n");
console.log("- Look back and refactor.");
console.log("******* Can you undertand it at glance?");
console.log("******* Can you improve the performance of your solution?");
console.log("******* How have other people solved this problem?");
console.log("/n");
console.log("/n");

function charCount(str) {
  // make object to return at end
  const countedLetters = {};
  // loop over string, for each char
  for (let char of str) {
    if (/^[A-Za-z0-9]*$/.test(char)) {
      char = char.toLowerCase();
      countedLetters[char] = ++countedLetters[char] || 1;
    }
  }
  console.log("0".charCodeAt(0));
  console.log("9".charCodeAt(0));
  console.log("a".charCodeAt(0));
  console.log("z".charCodeAt(0));
  console.log("A".charCodeAt(0));
  console.log("Z".charCodeAt(0));

  return countedLetters;
  /*
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (!/^[A-Za-z0-9]*$/.test(char)) continue;
    if (countedLetters[char] > 0) {
      countedLetters[char]++;
      } else {
        countedLetters[char] = 1;
    } =====> REFACTORED BELOW
  }
    */
}

console.log(charCount("rami%ro"));
console.log(charCount("sEbAStian"));
console.log(charCount("pablo olbap song"));
console.log(charCount("pablo $"));

function lovefunc(flower1, flower2) {
  /* const foe1 = flower1 % 2 === 0;
  console.log(foe1);
  const foe2 = flower2 % 2 === 0;
  console.log(foe2);
  return !(foe1 === foe2); */
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(3, 4), " It should return TRUE");
console.log(lovefunc(4, 4), " It should return FALSE");
console.log(lovefunc(3, 9), " It should return FALSE");

/**************************************** */
// Blueprints, archetypes, little strategies
// FREQUENCY COUNTER
// MULTIPLE POINTERS
// SLIDING WINDOW
// DIVIDE AND CONQUER
// DYNAMIC PROGRAMMING
// GREEDY ALGORITHMS
// BACKTRACKING
/**************************************** */

// ∞∞∞∞∞∞∞∞ MULTIPLE POINTERS ∞∞∞∞∞∞∞∞
// ∞∞∞∞∞∞∞∞ SLIDING WINDOW ∞∞∞∞∞∞∞∞
// ∞∞∞∞∞∞∞∞ DIVIDE AND CONQUER ∞∞∞∞∞∞∞∞
// ∞∞∞∞∞∞∞∞ DYNAMIC PROGRAMMING ∞∞∞∞∞∞∞∞
// ∞∞∞∞∞∞∞∞ GREEDY ALGORITHMS ∞∞∞∞∞∞∞∞
// ∞∞∞∞∞∞∞∞ BACKTRACKING ∞∞∞∞∞∞∞∞

function summation(num) {
  const arr = Array.from({ length: num }, (_, i) => i + 1).reduce(
    (curr, acc) => curr + acc
  );
  console.log(arr);
  return arr;
}

console.log(summation(4));
console.log(summation(40));

function sumArray(arr) {
  return arr
    .filter((_, i, arry) => i !== arry.indexOf(Math.min(...arry)))
    .filter((_, i, arry) => i !== arry.indexOf(Math.max(...arry)))
    .reduce((acc, curr) => acc + curr);
}

console.log("Must be 3: ", sumArray([-6, 20, -1, 10, -12]));
console.log("Must be 16: ", sumArray([6, 2, 1, 8, 10]));
