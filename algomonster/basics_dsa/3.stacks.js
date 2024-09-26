/**
 * Collection of items
 * Add to the top of stack (PUSH)
 * Remove from the top of stack (POP)
 * LIFO --> Last In First Out
 *
 * Useful for:
 * Track a history of steps
 * Browser history
 * Backtracking Algorithms
 **/

class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    if (this.size === 0) {
      this.top = new StackNode(val);
    } else {
      const pushedNode = new StackNode(val);
      pushedNode.next = this.top;
      this.top = pushedNode;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) return null;

    const poppedVal = this.top;
    this.top = this.top.next;
    this.size--;

    return poppedVal.val;
  }
}

const myStack = new Stack();
myStack.push("a");
myStack.push("b");
myStack.push("c");

console.log(myStack.top);
console.log(myStack.size);
console.log(myStack.pop());
console.log(myStack.top);
console.log(myStack.size);

function bracketMatcher(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      if (stack.length === 0) {
        return 0;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

// console.log(bracketMatcher("(hola(s))"));
console.log(bracketMatcher("(hola(s)))")); // 0
