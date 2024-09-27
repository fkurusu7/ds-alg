/** LINKED LIST
 *    A linked list is a data structure where each element (often called a 'node')
 *      contains a value and a pointer/reference to the next node in the sequence.
 *      A singly linked list means that each node points to the next node and
 *      there is no reference to previous nodes.
 *
 * The task is to reverse a singly linked list.
 * The problem provides a pointer to the head of the linked list,
 * where the 'head' represents the first node in the list.
 * Our goal is to take this linked list and return it in the reversed order.
 *
 * For instance, if the linked list is:
 *    1 -> 2 -> 3 -> null
 * the reversed list should be:
 *    3 -> 2 -> 1 -> null
 */

class NodeLinkedList {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const d = new NodeLinkedList("d");
const c = new NodeLinkedList("c", d);
const b = new NodeLinkedList("b", c);
const a = new NodeLinkedList("a", b);

const print = (head) => {
  let current = head;
  let nodes = "";
  while (current !== null) {
    nodes += `${current.val} => `;
    current = current.next;
  }
  nodes += "null";
  return nodes;
};

const reverseLinkedList = (head) => {
  if (head === null) return head;

  let previousNode = null;
  let currentNode = head;

  while (currentNode !== null) {
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
};

console.log(print(a));
reverseLinkedList(a);
console.log(print(d));
