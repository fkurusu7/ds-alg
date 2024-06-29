function doubleChar(str) {
  // return str
  //   .split("")
  return [...str].map((c) => c + c).join("");
}

console.log(doubleChar("String")); // -> "SSttrriinngg"
console.log(doubleChar("Hello World")); // -> "HHeelllloo  WWoorrlldd"
console.log(doubleChar("1234!_ ")); // -> "11223344!!__  "
