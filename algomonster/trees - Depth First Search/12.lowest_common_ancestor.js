/** Lowest Common Ancestor of a Binary Search Tree
  
  Given a binary search tree (BST), find the lowest common ancestor (LCA)
   node of two given nodes in the BST.
  
  According to the definition of LCA on Wikipedia: “The lowest common 
  ancestor is defined between two nodes p and q as the lowest node in T 
  that has both p and q as descendants (where we allow a node to be a 
  descendant of itself).”

  As a quick recap, a Binary Search Tree (BST) is a type of binary tree 
  where for any given node with value a, the values in its left subtree 
  are all less than a and the values in its right subtree are all greather than a.

  *************** "SOLUTION" ***************
  We often break down each recursive call into cases. The reason we do this is because 
  for every node we can decide whether to traverse down the left subtree or right subtree 
  based on the value of the current node.

  To find the Lowest Common Ancestor of two nodes in a BST, 
  we break our search into 3 common cases:

  1. If nodes p and q are on the left of the current node, 
    then continue search the left side
  2. If nodes p and q are on the right of the current node, 
    then continue search the right side
  3. If nodes p and q are split (one is on the left, the other is on the right), 
    then we can return the current node as the LCA.

  Note that there is a special case when either p == cur.val or 
  q == cur.val, since we have defined that a node can be its own 
  descedent, this falls in case 3.
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function lcaOnBst(bst, p, q) {
  if (bst === null) return -1;

  if (bst.val > p && bst.val > q) {
    return lcaOnBst(bst.left, p, q);
  } else if (bst.val < p && bst.val < q) {
    return lcaOnBst(bst.right, p, q);
  } else {
    return bst.val;
  }
}

const aTree = new TreeNode(8);
aTree.left = new TreeNode(4);
aTree.left.left = new TreeNode(2);
aTree.left.right = new TreeNode(6);

aTree.right = new TreeNode(12);
aTree.right.left = new TreeNode(9);
aTree.right.right = new TreeNode(17);

console.log(lcaOnBst(aTree, 7, 10)); // ==> 9
console.log(lcaOnBst(aTree, 1, 3)); // ==> 2
