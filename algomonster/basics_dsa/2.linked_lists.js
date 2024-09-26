/**
 * Linked Lists
 * A Linked List is made up of many Nodes.
 *
 * What a _NODE_ is?
 * Simple, just a container for some data.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    let curr = this.head;
    // keep looping until hitting the tail
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(val);
  }

  print() {
    let str = "";
    let curr = this.head;
    while (curr !== null) {
      str += ` --> ${curr.val}`;
      curr = curr.next;
    }
    console.log(str);
  }

  contains(target) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.val === target) return true;
      curr = curr.next;
    }

    return false;
  }

  // append, print, contains... PUSH, POP, REMOVe, REMOVeALL
}

const list = new LinkedList();

list.append("a");
list.append("b");
list.append("c");
list.print();
console.log(list.contains("a"));
console.log(list.contains("ad"));

/* 
const a = new Node("A");'+ip0óñil
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

printLinkedList(a);

const getLinkedListValuesIte = (head) => {
  const values = [];
  current = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};

const getLinkedListValuesRec = (head) => {
  const values = [];
  function rec(head, recValues) {
    if (head === null) return;
    recValues.push(head.val);
    rec(head.next, recValues);
  }

  rec(head, values);

  return values;
};

console.log(getLinkedListValuesIte(a));
console.log(getLinkedListValuesRec(a));
 */
987654;
