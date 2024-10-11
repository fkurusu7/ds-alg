/** BALANCED BINARY TREE
  A binary tree is considered balanced if, for every node in the tree, the 
  difference in the right (or depth) of left and righ subtrees is at most 1.

  In other words, the depth of the two subtrees for every node in the tree 
  differs by no more than one.

  The HEIGHT (depth) of a tree is defined as the number of edges on the longest 
  path from the root node to any leaf node.

  NOTE: An empty tree is considered balanced by definition. 
  
  ______________________________________________________________________________
  In that case, given a bynary tree, determine if it's balanced

  Parameter
    tree: A binary tree.

  Result
    A boolean representing whether the tree given is balanced.
 */

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const rootUnbalanced = new Node(1);
rootUnbalanced.left = new Node(2);
rootUnbalanced.left.left = new Node(4);
rootUnbalanced.left.left.left = new Node(8);
rootUnbalanced.right = new Node(3);
rootUnbalanced.right.left = new Node(6);
rootUnbalanced.right.left.left = new Node(7);

const rootBalanced = new Node(1);
rootBalanced.left = new Node(2);
rootBalanced.left.left = new Node(4);

rootBalanced.right = new Node(3);
rootBalanced.right.left = new Node(6);

function isBalancedTree(node) {
  if (node === null) return 0;

  let leftHeight = isBalancedTree(node.left);
  let right = isBalancedTree(node.right);

  if (leftHeight === -1 || right === -1) return -1;
  if (Math.abs(leftHeight - right) > 1) return -1;

  return Math.abs(leftHeight + right) + 1;
}

console.log(isBalancedTree(rootUnbalanced));
console.log(isBalancedTree(rootBalanced));

/**
        1
       / \
      2   3
     /   /
    4   6
   /   /
  8   7

A tree is considered balanced if, for every node, the heights of its left and 
right subtrees differ by at most 1.
The height of a subtree is the number of edges on the longest path from that 
node to a leaf.

Check each node from bottom to top:

Nodes 8 and 7: These are leaf nodes, so they're balanced by definition.
Node 4:
Left subtree height (8) = 1
Right subtree height (empty) = 0
Difference = 1, so it's balanced.
Node 6:
Left subtree height (7) = 1
Right subtree height (empty) = 0
Difference = 1, so it's balanced.
Node 2:
Left subtree height (4 -> 8) = 2
Right subtree height (empty) = 0
Difference = 2, which is more than 1, so this node is unbalanced.
Node 3:
Left subtree height (6 -> 7) = 2
Right subtree height (empty) = 0
Difference = 2, which is more than 1, so this node is unbalanced.
Root (1):
Left subtree height (2 -> 4 -> 8) = 3
Right subtree height (3 -> 6 -> 7) = 3
Difference = 0, so this node is balanced.

------------------------------------------------------------------------------
Even though the root node is balanced, the tree as a whole is considered 
unbalanced because we found unbalanced nodes (2 and 3) within it.
------------------------------------------------------------------------------

The key thing to remember is that we're checking the balance at every single 
node, not just at the root. If any node in the tree has subtrees with a height 
difference greater than 1, the entire tree is considered unbalanced.
In this case, the tree is unbalanced because nodes 2 and 3 have a height 
difference of 2 between their left and right subtrees.

Quick summary:
  1. We check every node, not just the root.
  2. For each node, we compare the height of its left and right subtrees.
  3. If the difference is more than 1 at any node, the whole tree is unbalanced.
 */
