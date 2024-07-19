console.log("****************************************");
console.log("********** SINGLY LINKED LIST **********");
console.log("****************************************");

console.log(`*** It is  a DSthat contains:
  - a HEAD
  - a Tail
  - and LENGTH properties`);

console.log(`-- Linked Lists consist of nodes, 
    and each node has a value and a pointer to 
    another node or null`);

console.log("*** Do not have indexes");
console.log("*** Connected via nodes with a next pointer");
console.log("*** Random access is not allowed");

console.log("piece of data");
console.log("reference to next node - next");

/** Class Node ==> props: val */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* PSEUDOCODE for PUSH (inserting) 
  - This function should accept a value
  - Create a new node using the value passed to the function
  - if there is no HEAD property on the list, 
  set the head and tail to be the newly created node
  - Otherwise set the next property on the tail to be the new node 
  and set the tail property on the list to be the newly created one.
  - Increment the length by one
  - Return the list with 'this'
  */
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /* PSEUDOCODE for POP (removing)
    - If there are no nodes in the list, return undefined
    - Loop through the list until you reach the tail
    - Set the next property of the 2nd to last node to be null
    - Set the tail to be the 2nd to last node
    - Decrement the length of the list by 1
    - Return the value of the node removed
    * Special Case
    - If there is one item in the List set Head and Tail to null
  */
  pop() {
    if ((!this.head || !this.tail) && this.length <= 0) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length <= 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

const listPush = new SinglyLinkedList();
listPush.push(3);
console.log(listPush);
listPush.push(5);
console.log(listPush);
listPush.push(1);
console.log(listPush);
listPush.push(10);
console.log(listPush);

const listPop = new SinglyLinkedList();
console.log(listPop.pop());
console.log(listPush.pop());
console.log(listPush);
console.log(listPush.pop());
console.log(listPush);
console.log(listPush.pop());
console.log(listPush);
console.log(listPush.pop());
console.log(listPush);
console.log(listPush.pop());
