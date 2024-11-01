/** BINARY SEARCH TREE

  A "BINARY SEARCH TREE", or BTS, is a rooted binary tree with the value of 
  each internal node being greater than all the values in the respective 
  node's left subtree and less than ones in its right subtree.
 
  The values of each node in a BST can be of any type, as long as they are 
  comparable with each other.

  BTS
          8
         / \
        3   10
       / \
      1   6
         /
        4

  NO BTS
          8
         / \
        3   10
       / \
      1   6
         /
        2

  SEARCHING:
    * Search for the existence of an element in a short amount of time,
      like in a binary search.
    * Look at the value of the top node and see if it's greater, smaller,
      or equal to the item looking for.
      If equal, found it!
      If smaller, look for the item in the left node subtree.
      if larger, look for the item in the right node subtree.

    The time complexity of each search is O(h), where h is the tree height. In 
    the best case scenario, the tree is proportional to the log of the size tree.

  INSERTING:
     Inserting an item to the BST does not require each item in the list to move 
     down an index, like inserting to a sorted list do.
     Instead, when inserting an item, first perform the searching for that item 
     in that BST. However, if we find an empty tree, instead we replace that 
     empty tree with a new node containing the inserted value in the BST.
 */

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function find(tree, val) {
  if (tree === null || !val) return false;

  if (tree.val === val) return true;
  if (tree.val > val) {
    return find(tree.left, val);
  } else if (tree.val < val) {
    return find(tree.right, val);
  }
}

function insert(tree, val) {
  if (!val) return null;
  if (tree === null) return new Node(val);

  if (tree.val > val) {
    tree.left = insert(tree.left, val);
  } else if (tree.val < val) {
    tree.right = insert(tree.right, val);
  }
  return tree;
}

const aTree = new Node(5);
aTree.left = new Node(4);
aTree.left.left = new Node(2);
aTree.right = new Node(8);
aTree.right.left = new Node(6);
aTree.right.right = new Node(9);

console.log(find(aTree, 2)); // ==> true
console.log(find(aTree, 11)); // ==> false
console.log(insert(aTree, 11));
console.log(find(aTree, 11)); // ==> true
/*
Node {
  val: 5,
  left: Node {
    val: 4,
    left: Node { val: 2, left: null, right: null },
    right: null
  },
  right: Node {
    val: 8,
    left: Node { val: 6, left: null, right: null },
    right: Node {
      val: 9,
      left: null,
      right: Node { val: 11, left: null, right: null }
    }
  }
}
*/
