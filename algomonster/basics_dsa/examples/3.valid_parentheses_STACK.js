/**
 * Given a string s consisting of six possible characters:
 * the opening and closing brackets of three types:
 * — parentheses (),
 * - square brackets [], and
 * - curly braces {}.
 *
 * The challenge is to determine whether this string represents
 * a sequence of brackets that is considered valid based on
 * certain rules. A string of brackets is deemed valid if it
 * satisfies the following conditions:
 *
 * ==> Each opening bracket must be closed by a closing
 *      bracket of the same type.
 * ==> Opening brackets must be closed in the correct order.
 *      That means no closing bracket should interrupt the
 *      corresponding pair of an opening bracket.
 * ==> Each closing bracket must have an associated
 *      opening bracket of the same type before it.
 *
 * For example, a string "(())" is valid because each
 * opening parenthesis ( has a corresponding closing parenthesis )
 * that occurs later in the string, and they are properly nested and ordered.
 */

function isValid(strBrackets) {
  const bracketPairs = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  console.log(bracketPairs);

  const stackBrackets = [];

  for (const char of strBrackets) {
    if (bracketPairs.has(char)) {
      stackBrackets.push(char);
    } else {
      if (bracketPairs.size === 0) return false;

      const bracket = stackBrackets.pop();
      if (bracketPairs.get(bracket) !== char) return false;
    }
  }

  console.log(stackBrackets);

  return stackBrackets.length === 0;
}

console.log(isValid("()()[{}]"));
console.log(isValid("()()[{}"));
console.log(isValid("(()"));
console.log(isValid(")("));
