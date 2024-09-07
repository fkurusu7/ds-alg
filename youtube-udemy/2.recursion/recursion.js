console.log("*****************************************");
console.log("*************** RECURSION ***************");
console.log("*****************************************");

console.log(`---- What is RECURSION ----`);
console.log(`---- A proces (a function in JS) that calls itself ----`);
console.log(`---- IT'S EVERYWHERE, examples: ----`);
console.log(`---- JSON.parse() / JSON.stringfy() ----`);
console.log(`---- document.getElementById and DOM traversal algorithms ----`);
console.log(`---- Object traversal ----`);
console.log(`---- Trees ----`);
console.log(`---- Cleaner alternative to iteration ----`);

console.log("====> Functions");
console.log(`In JS there's a built in data structure that manages
  what happends when functions are invoked, this is named:
  The Call STACK`);
console.log(`the call STACK:
    - It's a stack DS. 
    - Any time a function is invoked it is placed (pushed) on the top of the call stack.
    - when JS sees the return keyword or the function end, the compiler will remove it (pop).`);

console.log("====> How RECURSIVE functions work <====");
console.log(`- Invoke the same function with a different input until it reaches the BASE CASE!
  - Base Case is the condition when recursion ends <== This is the most important concept`);
console.log("====> Two essential part of a recursive function <====");
console.log(`1. BASE CASE!
  2. Different input (piece of data)`);

console.log("-------- EXAMPLE --------");
function countDown(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

console.log("-------- EXAMPLE --------");
function sumRange(num) {
  console.log(num);
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(3));

console.log("-------- EXAMPLE --------");
function factorialLoop(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

console.log(factorialLoop(3));
console.log(factorialLoop(4));

function factorialRecursive(num) {
  if (num === 1) return 1;
  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(3));
console.log(factorialRecursive(4));

console.log("*****************************************");
console.log("*************** RECURSION ***************");

function collectOddsPureRec(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddsPureRec(arr.slice(1)));
  return newArr;
}

console.log(collectOddsPureRec([1, 2, 3, 4, 5]));

console.log("------ TIPS ------");
console.log(
  `** ARRAYS: use methods like SLICE, THE SPREAD OPERATOR, and CONCAT 
  that make copies of arrays and don't mutate them.`
);
console.log(
  `** Strings: use methods like SLICE, SUBSTR, or SUBSTRING
  to make copies of strings.`
);
console.log(
  `** Objects: use methods like Object.assign, or THE SPREAD OPERATOR.`
);

console.log("******** HELPER METHOD RECURSION ********");
console.log("**************** PATTERN ****************");

/* BLUEPRINT
function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
*/

function collectOddsRec(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddsRec([1, 2, 3, 4, 5, 6]));
console.log(collectOddsRec([12, 3435, 323, 454, 2, 3, 45, 57, 6, 8]));
