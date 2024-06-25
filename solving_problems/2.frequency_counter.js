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
console.log(validAnagram("", ""));
console.log(validAnagram("zadz", "zzad"));
console.log(validAnagram("icemannn", "ncinenma"));
console.log(validAnagram("anagram", "nagaram"));
