/**
 * Given a roman numeral, convert it to an integer.
 */

function romanToInt(roman) {
  // Define a mapping of Roman numerals to integers
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentChar = roman[i];
    const currentValue = romanToIntMap[currentChar];
    console.log(currentChar, currentValue);

    if (currentValue < prevValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }

    prevValue = currentValue;
  }

  return total;
}

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
