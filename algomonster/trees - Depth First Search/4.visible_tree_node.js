/** VISIBLE TREE NODE ==> Number of visible nodes
 *
 * In a binary tree, a node is labeled as "visible" if, on the path from the
 * root to that node, there isn't any node with a value higher than this
 * node's value.
 *
 * The root is always "visible" since there are no other nodes between the
 * root and itself. Given a binary tree, count the number of "visible" nodes.
 * 
 *  
        5
      /  \
     4    6
    / \
   3  8
 * Node 4 is not visible since 5>4, 
 * Similarly Node 3 is not visible since both 5>3 and 4>3.
 * 
 * Node 8 is visible since all 5<=8, 4<=8, and 8<=8
 * 
 *   
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(8);
root.right = new TreeNode(6);

function numberOfVisibleNodes(root, maxSoFar = -Infinity) {
  if (!root) return 0;
  let total = 0;
  if (root.val >= maxSoFar) total++;

  total += numberOfVisibleNodes(root.left, Math.max(root.val, maxSoFar));
  total += numberOfVisibleNodes(root.right, Math.max(root.val, maxSoFar));

  return total;
}

console.log(numberOfVisibleNodes(root));

/**
Explanation
  We can DFS on the tree and keep track of the max value we have seen as we go.
  1. Decide on the return value
    The problem asks for the total number of visible nodes, so at the end of each function call, 
    we return the total number of visible nodes in the current subtree.

  2. Identify states
    The definition of a "visible" node is that no node on the root-to-itself path (inclusive) 
    has a strictly greater value. This means its value is greater or equal to any other node's 
    value on the root-to-itself path. To determine whether the current node is visible or not, 
    we need to know the max value from the root to it. We can carry this as a state as we 
    traverse down the tree.
    Having decided on the state and return value, we can now write the DFS.
    
    Time Complexity: O(n)
    There are n nodes and n - 1 edges in a tree, so if we traverse each once, then the total 
    traversal is O(2n - 1), which is O(n).
    
    Space Complexity: 
    O(h) stack memory, where h is the height of the tree, which is O(n) in the worst case.
 */
