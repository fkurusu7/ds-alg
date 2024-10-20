/** Middle of a Linked List 
  
  e.g. Find the middle node of a linked list:
  
  Input: 0 1 2 3 4
  Output: 2
  
  Input: 0 1 2 3 4 5
  Output: 3
  If the number of nodes is even, then return the second middle node.

  "Solution":
  we have to traverse it to find its length l. We can find l by traversing 
  the list once and then find the middle element by traversing it again 
  and stop on the l/2th element.

  Two Pointer Solution: Use two pointers
  1. A fast pointer that moves 2 nodes at a time,
  2. A slow pointer that moves 1 node at a time.

  Since the speed of the fast pointer is twice that of the slow pointer, by 
  the  time the fast pointer reaches the end, the slow pointer should be at
  the exact middle of the list.

  Time Complexity: O(n)   Technically O(n/2)
  Space Complexity: O(1)
*/

class NodeLinkedList {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const newLiLi = new NodeLinkedList(0);
newLiLi.next = new NodeLinkedList(1);
newLiLi.next.next = new NodeLinkedList(2);
newLiLi.next.next.next = new NodeLinkedList(3);
newLiLi.next.next.next.next = new NodeLinkedList(4);

console.log(newLiLi);
/**
NodeLinkedList {
  val: 0,
  next: NodeLinkedList {
    val: 1,
    next: NodeLinkedList {
      val: 2,
      next: NodeLinkedList {
        val: 3,
        next: NodeLinkedList { val: 4, next: null }
      }
    }
  }
}
 */

function getMiddleElementLiLi(node) {
  let fast = node;
  let slow = node;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow.val;
}

console.log(getMiddleElementLiLi(newLiLi));

newLiLi.next.next.next.next.next = new NodeLinkedList(5);
console.log(getMiddleElementLiLi(newLiLi));

newLiLi.next.next.next.next.next.next = new NodeLinkedList(6);
newLiLi.next.next.next.next.next.next.next = new NodeLinkedList(7);
console.log(getMiddleElementLiLi(newLiLi));
