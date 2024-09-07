console.log("*****************************************");
console.log("**************** SORTING ****************");
console.log("*****************************************");

console.log(`Sorting is the process of rearrenging the items in a 
  collection so that the items are in some kind of order`);
console.log(`--- EXAMPLES:`);
console.log(`** Sorting numbers from smallest to largest.`);
console.log(`** Sorting names alphabetically.`);
console.log(`** Sorting movies based on revenue`);
console.log(`** Sorting movies based on a released year.`);
console.log(`Simpler SORT algorithms`);
console.log(`BUBBLE SORT`);
console.log(`SELECTION SORT`);
console.log(`INSERTION SORT`);

console.log(`**** Javascript SORT method`);
console.log(`**** Telling JS how to sort`);
console.log(
  `**** The built-in sort method accepts an optional COMPARATOR function`
);
console.log(
  `This comparator function can be used to tell JS how to sort things`
);
console.log(`This comparator function looks at pairs of elements (a and b), 
  determines their sort order based on the return value`);
console.log(`-- if returns a negative number, a should come before b`);
console.log(`-- if returns a positive number, a should come before b`);
console.log(`-- if returns 0, a and b are the same`);

function numberCompareAsc(num1, num2) {
  return num1 - num2;
}
function numberCompareDesc(num1, num2) {
  return num2 - num1;
}

console.log([3, 2, 5, 1, 45, 12, 34, 90].sort(numberCompareAsc));
console.log([3, 2, 5, 1, 45, 12, 34, 90].sort(numberCompareDesc));

console.log("ANOTHER EXAMPLE");
function compareByLengthAsc(str1, str2) {
  return str1.length - str2.length;
}
function compareByLengthDesc(str1, str2) {
  return str2.length - str1.length;
}

console.log(
  ["logarithm", "pair", "pare", "obnoxious", "salty"].sort(compareByLengthAsc)
);
console.log(
  ["logarithm", "pair", "pare", "obnoxious", "salty"].sort(compareByLengthDesc)
);
