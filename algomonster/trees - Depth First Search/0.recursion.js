/** RECURSION

function call_for_lunch(person) {
  // BASE CASE
  if (person === "Carly") return true;
  const nextPerson = "";
  return call_for_lunch(nextPerson); // <=== RECURSIVE CALL
}

  This example highlights the key components in writing a correct 
  recursive function:

  1. Base case/exit, e.g. person === "Carly" ==> return.
  2. Recursive call, i.e. calling the function itself with a 
  different argument.

 */

function getFactorial(num) {
  if (num <= 1) return 1; // BASE CASE
  return num * getFactorial(num - 1); // <=== RECURSIVE CALL
}

console.log(getFactorial(4)); // 24
console.log(getFactorial(6)); // 720
console.log(getFactorial(8)); // 40320

/** Recursion and Stack
  A computer's internal stack is called "call stack" and the data it pushes 
  onto a call stack are called "stack frames". Strictly speaking, stack frames 
  on a call stack represent the function you are calling and its arguments. 

  So, How does the computer accomplish such a feat as calling a function itself? 
  The answer is quite simple - it uses a stack behind the scene to keep track 
  of where things are. For this particular problem, the factorial recursive 
  function roughly translates to this when executed:
*/

function factorialStack(num) {
  const stack = [];

  while (num >= 1) {
    stack.push(num);
    num -= 1;
  }
  console.log(stack);
  /*
  Array(4) [ 4, 3, 2, 1 ] 
  Array(6) [ 6, 5, 4, 3, 2, 1 ] 
  Array(8) [ 8, 7, 6, 5, 4, 3, 2, 1 ]
  */
  let result = 1;

  while (stack.length > 0) {
    result *= stack.pop();
  }

  console.log(stack);
  return result;
}

console.log(factorialStack(4)); // 24
console.log(factorialStack(6)); // 24
console.log(factorialStack(8)); // 24
