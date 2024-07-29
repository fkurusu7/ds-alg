//
console.log(`write a function called "same", which accepts two arrays.
  It should return true if every value in the array has it's 
  corresponding value squared in the second array.
  The frequency of values must be the same`);

// Not the best possible solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let val of arr1) freq1[val] = (freq1[val] || 0) + 1;
  for (let val of arr2) freq2[val] = (freq2[val] || 0) + 1;

  console.log(freq1, freq2);

  for (let key in freq1) {
    if (!(key ** 2 in freq2)) return false;
    if (freq2[key ** 2] !== freq1[key]) return false;
  }

  return true;
}

// console.log(same([1, 3], [1, 2, 3])); // ==> false
// console.log(same([1, 3, 5], [25, 25, 9])); // ==> false
// console.log(same([1, 3, 3], [25, 1, 9])); // ==> false
// console.log(same([1, 3, 5], [25, 1, 9])); // ==> true
console.log(same([1, 5, 5], [25, 1, 1])); // ==> true

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let letterCounter = {};

  for (let l of str1) {
    letterCounter[l] ? (letterCounter[l] += 1) : (letterCounter[l] = 1);
  }

  console.log(letterCounter);
  for (const letter of str2) {
    console.log(letter);
    console.log(letterCounter);
    console.log(letterCounter[letter]);
    if (!letterCounter[letter]) {
      console.log(!letterCounter[letter]);
      console.log(letter);
      console.log(letterCounter);
      return false;
    } else {
      letterCounter[letter] -= 1;
      console.log(letterCounter);
    }
  }

  return true;
}

// console.log(isAnagram("add", "dea"));
console.log(isAnagram("adddm", "dddda"));
