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

// ∞∞∞∞∞∞∞∞ FREQUENCY COUNTER ∞∞∞∞∞∞∞∞
console.log("∞∞∞∞∞∞∞∞ FREQUENCY COUNTER ∞∞∞∞∞∞∞∞");
console.log(
  "*** It uses objects or sets to collect values/frequencies of values."
);
console.log(
  "*** This can often avoid the need for nested loops or O(N^2) operations with Arrays/Strings."
);
console.log("\n");
console.log("EXAMPLE:\n");
console.log(`Write a function called same, which accepts two arrays. 
  The function should return true if every value in the array has it's corresponding value squared in the second array.
  The frecuency of values must be the same.
  same([1,2,3], [4,1,9]) ==> TRUE
  same([1,2,3], [1,9]) ==> FALSE
  same([1,2,1], [4,4,1]) ==> FALSE (must be the same frecuency)
  `);

function same_naive(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }

  return true;
}

// Big O()   =====>   O(n^2) QUADRATIC ---> like a million ops if each array ihas 1000 elements
console.log(same_naive([1, 2, 3, 2], [9, 1, 4, 4])); // returns true
console.log(same_naive([1, 2, 3, 2], [7, 1, 4, 4])); // returns false
console.log(same_naive([2, 3, 2], [9, 1, 4, 4])); // returns false

// BIG O() ===> O(n) LINEAL    (2 loops betters than nested loops)
function same_refactored(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  // Frequency Objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // Loop each array for number frequency { arrayValue: valuePresentTimes }
  for (let value of arr1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }

  for (let value of arr2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  // Compare values in each object
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same_refactored([1, 2, 3, 2], [9, 1, 4, 4])); // returns true
console.log(same_refactored([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); // returns false
console.log(same_refactored([2, 3, 2], [9, 1, 4, 4])); // returns false

console.log(`Given two strings, write a function to determine if the second string
  is an anagram of the first. An anagram is a word, phrase, or name 
  formed by rearrenging the letters of another,
  such as cinema, formed from iceman.`);

function validAnagram(strNgrm1, strNgrm2) {
  // frequency objects
  const ngrmObj1 = {};
  const ngrmObj2 = {};

  // Loop thorugh each letters in the strings, two loops
  for (let letter of strNgrm1) {
    console.log(letter);
    ngrmObj1[letter] = (ngrmObj1[letter] || 0) + 1;
  }

  for (let letter of strNgrm2) {
    ngrmObj2[letter] = (ngrmObj2[letter] || 0) + 1;
  }
  console.log(ngrmObj1);
  console.log(ngrmObj2);

  // Compare values in each object
  for (let key in ngrmObj1) {
    if (!(key in ngrmObj2)) return false;
    if (ngrmObj1[key] !== ngrmObj2[key]) return false;
  }

  return true;
}

console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("zadz", "zzad"));
console.log(validAnagram("icemannn", "ncinenma"));
console.log(validAnagram("anagram", "nagaram"));
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
