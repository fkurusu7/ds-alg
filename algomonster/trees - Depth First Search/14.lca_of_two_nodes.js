/** Lowest common ancestor (LCA) of two nodes of a Binary Tree

  Lowest common ancestor (LCA) of two nodes  v and w in a tree is t
  he lowest (i.e., deepest) node that has both v and w as descendants. 
  We also define each node to be a descendant of itself (so if v has 
  a direct connection to w, w is the lowest common ancestor).

  You can assume each node value in the tree is unique and that both 
  target nodes are guaranteed to exist in the tree.

  Given two nodes of a binary tree, find their lowest common ancestor. 
  
  Once we finish processing a node-x and return to its parent node, 
  consider a few cases:

    1. The node-x is null
    2. The node-x is either node1 or node2
    3. The node-x is neither node1 nor node2

  The first two cases (1) and (2) are simple and we can simply return 
  themselves immediately. That is, if the current node is null, return null; 
  and if the current node is either node1 or node2, immediately return node1 
  or node2 (whichever it is).

  Case (3) is trickier in that it also involves some case work due to it 
  getting returned values from both its subtrees. These are the cases and 
  their respective behaviors:

    a. If both subtrees return non-null nodes: return the current node itself
    b. If both subtrees return null nodes: return null
    c. If exactly one of the subtrees returns a non-null node and the other 
      returns a null node: return the non-null node

  Time Complexity
    The time complexity is O(n) where n is the number of nodes on the tree because 
    in the worst case we need to traverse through each and every node.
  Space Complexity
    The space complexity is O(h) because the stack memory depends on the height 
    of the tree. But in the worst case, this is O(n). A skewed tree such that all 
    nodes have zero or one child has the height O(n).
*/

function lcaDFS(root, node1, node2) {
  if (root === null) return null;

  // case 2
  if (root === node1 || root === node2) return root;

  // Case 1
  const left = lcaDFS(root.left, node1, node2);
  const right = lcaDFS(root.right, node1, node2);
  if (left && right) return root;

  // at this point, left and right can't be both non-null since we checked above
  // case 4 and 5, report target node or LCA back to parent
  if (left) return left;
  if (right) return right;

  // case 3, not found return null
  return null;
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const aTree = new TreeNode(10);
aTree.left = new TreeNode(5);
aTree.left.left = new TreeNode(3);
aTree.left.right = new TreeNode(7);
aTree.right = new TreeNode(15);
aTree.right.left = new TreeNode(13);
aTree.right.right = new TreeNode(17);

function findNode(root, target) {
  if (!root) return null;
  if (root.val === target) return root;
  return findNode(root.left, target) || findNode(root.right, target);
}

function main() {
  const node1 = findNode(aTree, 7);
  const node2 = findNode(aTree, 3);
  const ans = lcaDFS(aTree, node1, node2);
  console.log(ans ? ans.val : null);
}
main();
