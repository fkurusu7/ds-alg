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
  to the original list of strings.
  Implement 'encode' and 'decode'`);

/* PSEUDOCODE:
    - Take the length of each string, add it to the string
    - add the pound sign after the number
    - then add the string 
    - Return a list of the concatenated string  */
function encode(listStr) {
  console.log(listStr);
  let encodedList = "";
  for (const str of listStr) {
    const LENGTH = str.length;
    const POUND_SIGN = "#";

    encodedList += `${LENGTH}${POUND_SIGN}${str}`;
  }
  return encodedList;
}

/*  Read the number up until the special character, 
    the numbers will tell how many characters to read 
    after the pound character read each string, 
    then build the list of strings  */
function decode(encodedList) {
  const decodedList = [];
  let i = 0;
  while (i < encodedList.length) {
    let j = i;
    while (encodedList[j] !== "#") {
      j++;
    }
    const strLength = parseInt(encodedList.substring(i, j));
    console.log(strLength, j, i);
    i = j + 1;
    console.log(i);
    j = i + strLength;
    console.log(i, j, encodedList.substring(i, j));
    decodedList.push(encodedList.substring(i, j));
    i = j;
  }
  return decodedList;
}

// const list = ["run", "asas", "pewidosjbkhf", "er", "dsmb", "iwpen"];
const list = ["run", "asas"];
const encodedList = encode(list);
console.log(encodedList);
// '6#runnnn4#asas12#pewidosjbkhf2#er4#dsmb5#iwpen'

const decodedList = decode(encodedList);
console.log(decodedList);
console.log(
  `Is list: ${list} equals to 
  this list: ${decodedList}: 
  ${list === decodedList}`
);
