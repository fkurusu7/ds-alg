/** Middle of a Linked List
  Find the middle node of a linked list.

  Input: 0 => 1 => 2 => 3 => 4
  Output: 2
  
  Input: 0 => 1 => 2 => 3 => 4 => 5
  Output: 3
  If the number of nodes is even, then return the second middle node.
*/

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function middleLinkedList(linkedList) {
  let slow = linkedList;
  let fast = linkedList;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}

const linkedList = new Node(2);
linkedList.next = new Node(4);
linkedList.next.next = new Node(6);
linkedList.next.next.next = new Node(8);
linkedList.next.next.next.next = new Node(10);

console.log(linkedList);
/**
 Node {
  val: 2,
  next: Node {
    val: 4,
    next: Node {
      val: 6,
      next: Node { val: 8, next: Node { val: 10, next: null } }
    }
  }
}
 */

// ODD Linked List
console.log(middleLinkedList(linkedList)); // ==> 6
// EVEN Linked List
linkedList.next.next.next.next.next = new Node(12);
console.log(middleLinkedList(linkedList)); // ==> 8
