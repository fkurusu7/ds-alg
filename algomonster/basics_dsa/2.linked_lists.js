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

const a = new Node("A");
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
