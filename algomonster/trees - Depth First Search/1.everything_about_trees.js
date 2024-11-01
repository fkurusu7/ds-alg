/** TREES
  
  A TREE is a type of GRAPH Data Structure composed of nodes and edges.
  Its main properties are:

  - It's ACYCLIC (doesn't contain any cycles)
  - It exists a path from Root to any node
  - It has N-1 Edges, N is the number of node in the tree
  - Each node has exactly one parent node with the exception 
    of the Root node.

  
        A
       / \    # of Nodes: 4
      B   C   # of Edges: 3
         /
        D
  
  TERMS:
    - Internal node: 
      every node in a tree that has at least one child node.

    - Leaf node: 
      every node in a tree that has no child nodes.

    - Ancestor: 
      all the nodes that are between the path from the root to the 
      current node are the ancestors of the current node. An ancestor 
      node of the current node is either the parent of the current 
      node or the parent of another ancestor of the node.

    - Descendent: 
      all the nodes that are reachable from the current node when 
      moving down the tree are the descendants of the current node. 
      A descendant of the current node is either a child of the node 
      or a child of another descendant of the node.

    - Level: 
      the number of ancestors from the node to the root nodes.

  BINARY TREE
  An n-ary tree is a tree in which each node has no more than n children.
  A binary tree is a type of n-nary tree with n = 2, so every node 
  in a binary tree has 0 to 2 children.


*/

// BINARY Tree implementation:
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/* BYNARY Tree Types:

  * Full binary tree
    Every node has 0 or 2 children.

  * Complete binary tree
    All levels are completely filled except possibly the last level 
    and all nodes in the last level are as far left as possible.
  
  * Perfect binary tree
    All internals nodes have two children and all leaf nodes have the 
    same level. Perfect binary trees are often used to estimate time 
    complexity for combinatorial problems where the search space is 
    a perfect binary tree.
  
  * Balanced Binary Tree
    Every node in a balanced binary tree fulfills the condition:
    the height difference of the left and right subtree of the node is not more than 1. 
    Searching, insertion, and deletion in a balanced binary tree takes O(log n) 
    instead of O(n) in an unbalanced binary tree.

  * Binary Search Tree *************
    A binary search tree (BST) is a special type of binary tree, in 
    which every node follows the ordering property of: 
    all left descendants < node < all right descendants.
*/
/**
  TREE Traversal
    - In-order Traversal
      In-order traversal visits the left branch first, 
      then the current node, and finally the right branch.
*/
function inOrderTraversal(root) {
  if (root !== null) {
    inOrderTraversal(root.left);
    console.log(root.val);
    inOrderTraversal(root.right);
  }
}

/**
    - Pre-order Traversal
      Pre-order traversal visits the current node first, 
      then the left subtree, and finally the right subtree.
*/
function preOrderTraversal(root) {
  if (root !== null) {
    console.log(root.val);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}

/** 
    - Post-order Traversal
      Post-order traversal visits the left subtree first, 
      then the right subtree, and finally the current node.
*/
function postOrderTraversal(root) {
  if (root !== null) {
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.val);
  }
}

/***************** PRE Order Traversal */
/** Pre-order traversal visits:
 * the current node first,
 * then the left subtree, and
 * finally the right subtree.
 */

function preOrderTraversal(node) {
  if (node !== null) {
    // 'a' ==> "b"
    //         ==> "d"
    //         ==> "e"
    //     ==> "c"
    //         ==> "f"
    console.log(node.val);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}
const fTree = new Node("f");
const eTree = new Node("e");
const dTree = new Node("d");
const cTree = new Node("c", fTree);
const bTree = new Node("b", dTree, eTree);
const aTree = new Node("a", bTree, cTree);

preOrderTraversal(aTree);

/***************** POST Order Traversal */
/** Post-order traversal visits:
 * the left subtree first,
 * then the right subtree, and
 * finally the current node.
 */

function postOrderTraversal(node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.val);
    /*
        'd' 
        'e' 
      'b' 
        'f' 
      'c' 
    'a'
     */
  }
}

postOrderTraversal(aTree);
