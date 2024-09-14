/**
 * Given an integer, convert it to a Roman numeral.
 */

var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = "";

  for (let i = 0; i < values.length && num > 0; i++) {
    console.log(values[i]);
    while (values[i] <= num) {
      console.log(num);
      console.log(i, values[i]);
      num -= values[i];
      console.log(num);
      result += symbols[i];
      console.log(result);
    }
  }

  console.log(num / 10);
  return result;
};

// console.log(intToRoman(42));
console.log(intToRoman(49));
// console.log(intToRoman(51));
