/** Valid Binary Search Tree
  A binary search tree is a binary tree with the property that for any node, 
  the value of this node is greater than any node in its left subtree and 
  less than any node's value in its right subtree. In other words, an 
  inorder traversal of a binary search tree yields a list of values that is 
  monotonically increasing (strictly increasing).
  
  Given a binary tree, determine whether it is a binary search tree.

 */

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function validBst(root) {
  function dfs(root, minVal, maxVal) {
    if (!root) return true;

    if (!(minVal < root.val && root.val < maxVal)) {
      return false;
    }
    return (
      dfs(root.left, minVal, root.val) && dfs(root.right, root.val, maxVal)
    );
  }

  return dfs(root, -Infinity, Infinity);
}

const aTree = new Node(5);
aTree.left = new Node(4);
aTree.left.left = new Node(2);
aTree.right = new Node(8);
aTree.right.left = new Node(6);
aTree.right.right = new Node(9);

console.log(validBst(aTree));

const bTree = new Node(5);
bTree.left = new Node(4);
bTree.left.left = new Node(2);
bTree.right = new Node(8);
bTree.right.left = new Node(5); // <==== MIN Value
bTree.right.right = new Node(9);

console.log(validBst(bTree));
