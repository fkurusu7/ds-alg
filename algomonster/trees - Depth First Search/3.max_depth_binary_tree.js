/** MAX DEPTH of a BINARY TREE
 *
 * Max depth of a binary tree is the longest root-to-leaf path.
 *
 * Given a binary tree, find its max depth.. Here:
 * length of the path === number of edges on that path,
 * not the number of nodes.
 *
 * Time Complexity: O(n)
 * There are n nodes and n - 1 edges in a tree so if we traverse
 * each once then the total traversal is O(2n - 1) which is O(n).
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

function getMaxDepth(node) {
  if (node === null) return 0;
  return Math.max(getMaxDepth(node.left), getMaxDepth(node.right)) + 1;
}
console.log(getMaxDepth(root));

/** EXPLANATION
    3
   / \
  9   20
     /  \
    15   7

  For leaf nodes 9, 15 and 7, the function will return 1 (0 + 1), as they have no children.
  For node 20, the function will return 2: max(1, 1) + 1. 
    1 is from 15 and 1 is from 7, and we add 1 for 20 itself.
  For the root 3, the function will return 3: max(1, 2) + 1. 1 is from 9, 
   2 is from the 20 subtree, and we add 1 for 3 itself.
  
  This "+1" ensures that at each level of recursion, we're accounting for the current 
  node in our depth calculation, allowing us to accurately compute the total depth of 
  the tree from the root to the deepest leaf.
 */
