console.log("###################################");
console.log("######## VALID PARENTHESES ########");
console.log("###################################");

console.log(`Given a String containing just the characters
  '(' ')', '{' '}', '[' ']'
  determine if the input string is valid:
  an input string is valid if:
  1.- Open brackets must be closed by the same type of brackets.
  2.- Open brackets must be closed in the correct order.
  
  Example:
  - () ==> true
  - ({}) ==> true
  - ()} ==> false
  - (){}[] ==> true
  - [(]){}[] ==> false
  `);

function validParenthesesComplex(str) {
  // To make constant time do not create an array of the string
  const stack = [];
  const pairs = "() [] {}";
  let i = 0;

  while (i < str.length) {
    stack.push(str[i]);
    i++;
    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    let pattern = open + closed;

    if (pairs.includes(pattern)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(validParenthesesComplex("()")); // return true
console.log(validParenthesesComplex("({})")); // return true
console.log(validParenthesesComplex("[])")); // return false
console.log(validParenthesesComplex("({[]]})")); // return false

function validParenthesesEasy(str) {
  let stacky = [];
  for (char of str) {
    if (char === "(") {
      stacky.push(")");
    } else if (char === "{") {
      stacky.push("}");
    } else if (char === "[") {
      stacky.push("]");
    } else if (stacky.length === 0 || stacky.pop() != char) {
      return false;
    }
  }

  return stacky.length === 0;
}

function testValidParenthesesEasy() {
  const parentheses = { "()))": false, "[{()}]": true, "{{}([])}": true };
  console.log("****************** Validating correct Parentheses");
  for (const str in parentheses) {
    const isValidResult = validParenthesesEasy(str);
    if (isValidResult === parentheses[str]) {
      console.log(
        `This String "${str}" is: ${isValidResult ? "valid" : "invalid"}`
      );
    }
  }
  console.log("********************** END **********************");
}
testValidParenthesesEasy();

console.log(`Design an algorithm to encode a list of strings
  to a single string. The encoded string is then decoded back
  to the original list of strings
  Implement 'encode' and 'decode'`);

function encode(strings) {}
function decode(strings) {}
