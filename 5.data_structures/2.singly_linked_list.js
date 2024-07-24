console.log("****************************************");
console.log("********** SINGLY LINKED LIST **********");
console.log("****************************************");

console.log(`*** It is  a DS that contains:
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

  /* PSEUDOCODE for SHIFTING (removing from the beginning)
    - If there are no nodes, return undeifined
    - Store the current head property in a variable
    - Set the head property to be the current head's next property
    - Decrement the length by 1
    - Return the value of the node removed
    * Special Case
    - 
  */
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  /** PSEUDOCODE Adding to the beginning */
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }

  /** PSEUDOCODE for GETTING based on an "index" ("index" 0-based)
    - This function should accept an index
    - if the index is less than zero or greater than 
      or equal to the length of the list, return null
    - Loop through the list until you reach the index and 
      return the node at the specific index
  */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  /** PSEUDOCODE for SETTING a value on an specific index
    - This function should accept an index and a value
    - Use the get(i) to find the specific node 
    - If the node is not found, return false
    - if the node is found, set the value of that node to be 
      the value passed to the function and return true.
  */
  set(index, value) {
    const node = this.get(index);
    if (!node) return false;

    node.val = value;
    return true;
  }

  /** Insert. Adding a node to the linked 
      list at a specidig position
   * PSEUDOCODE:
    - If the index is less than zero 
      or greater than the length, return false
    - if the index is the same as the length, push a new node
      to the end of the list... use PUSH
    - if the index is 0, unshift a new node.

    - Otherwise, get the node at the previous current index
      ==> index - 1 
    - Set the next property on that node (previous) to be the new node
    - Set the next property on the new node to be the previous next
    - Increment the length
    - Return true  
  */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    // UNSHIFT & PUSH increment this.length
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const previousNode = this.get(index - 1);
    const newNode = new Node(value);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return true;
  }

  /** Removing a node from the list at a specific position
   * PSEUDOCODE:
    - If the index is less than zero 
      or greater than the length return null
    - If the index is the same as the length - 1, pop()
    - if the index is 0, shift()
    - Otherwise, get the node with index = index - 1
    - Set the next property on that node to be the next of the next node
    - Decrement the length
    - Return the value of the removed node
   */
  remove(index) {
    if (index < 0 || index >= this.length) return null;

    // POP & SHIFT
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    return this;
  }
}

const linkedList = new SinglyLinkedList();
linkedList.push(3);
console.log(linkedList);
linkedList.push(5);
console.log(linkedList);
linkedList.push(1);
console.log(linkedList);
linkedList.push(10);
console.log(linkedList);

const listPop = new SinglyLinkedList();
console.log(listPop.pop());
console.log(linkedList.pop());
console.log(linkedList);
// console.log(linkedList.pop());
// console.log(linkedList);
// console.log(linkedList.pop());
// console.log(linkedList);
// console.log(linkedList.pop());
// console.log(linkedList);
// console.log(linkedList.pop());

console.log(linkedList);
console.log(linkedList.shift());
console.log(linkedList);

console.log(linkedList.unshift(99));
console.log(linkedList.unshift("ONE"));

console.log(linkedList);
console.log(linkedList.get(3));
console.log(linkedList.set(3, "SEEEETTT"));
console.log(linkedList);
console.log(linkedList.set(1, "setty"));
console.log(linkedList);
console.log(linkedList.set(7, "setty"));
console.log(linkedList.set(-1, "setty"));

console.log("*********************************************************");
console.log("*********************************************************");
console.log("*********************************************************");

console.log(linkedList);
console.log(linkedList.insert(1, "Two"));
console.log(linkedList.insert(-1, "Two"));
console.log(linkedList.insert(9, "Two"));
console.log(linkedList.insert(0, "zero"));
console.log(linkedList.insert(linkedList.length, "last"));
console.log(linkedList);
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList);

console.log(linkedList.remove(5));
console.log(linkedList.remove(3));
console.log(linkedList.remove(-1));
console.log(linkedList);
