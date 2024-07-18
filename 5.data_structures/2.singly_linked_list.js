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
  */
  push(val) {
    const newNode = new Node(val);
    console.log(newNode);
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
}

var list = new SinglyLinkedList();
list.push(3);
console.log(list);
list.push(5);
console.log(list);
list.push(1);
console.log(list);
list.push(10);
console.log(list);

/* PSEUDOCODE for POP (removing)
    - If there are no nodes in the list, return undefined
    - Loop through the list until you reach the tail
    - Set the next property of the 2nd to last node to be null
    - Set the tail to be the 2nd to last node
    - Decrement the length of the list by 1
    - Return the value of the node removed
  */
