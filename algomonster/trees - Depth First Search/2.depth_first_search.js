/** Depth First Search
 * DFS IS A BOLD SEARCH. Go as DEEP as we can to look for a value,
 * and when there is nothing to discover, retrace (BACKTRACK)
 * the steps to find something new.
 *
 * The "PRE-ORDER Traversal" of a tree is DFS.
 *
 * ******************************************************************
 * For example:
 *
 * Search for a node in a binary tree whose value is equal to target.
 */

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const aTree = new Node("a");
aTree.left = new Node("b");
aTree.left.left = new Node("d");
aTree.left.right = new Node("e");
aTree.right = new Node("c");
aTree.right.left = new Node("f");
aTree.right.right = new Node("g");

function searchNodeEqTarget(root, target) {
  if (!root) return null;
  // return non-null return value from the recursive calls
  if (root.val === target) return root;

  // Return left node if not null
  const left = searchNodeEqTarget(root.left, target);
  if (left) return left;

  // at this point, we know left is null, and right could be null or non-null
  // we return right child's recursive call result directly because
  // - if it's non-null we should return it
  // - if it's null, then both left and right are null, we want to return null
  const right = searchNodeEqTarget(root.right, target);
  if (right) return right;
}

console.log(searchNodeEqTarget(aTree, "f"));
/*
Node { val: 'f', left: null, right: null }
*/
console.log(searchNodeEqTarget(aTree, "e"));
// Node { val: 'e', left: null, right: null }
console.log(searchNodeEqTarget(aTree, "c"));
/*  
Node {
  val: 'c',
  left: Node { val: 'f', left: null, right: null },
  right: Node { val: 'g', left: null, right: null }
}
*/

/**
  When to use DFS?
 
  A. DFS is essentially pre-order three traversal.
     1. Traverse and find/create/modify/delete node
     2. Traverse with return value (finding max subtree, detect balanced tree)
 
  B. Combinatorial problems
     1. How many ways are there to arrange something.
     2. Fina all possible combinations of...
     3. Fina all solutions to a puzzle
 
  C. Graph
    Trees are special graphs that have no cycle.
     1. Find a path from point A to B
     2. Find connected components
     3. Detect cycles
  
  References
    Robert Sedgewick and Kevin Wayne. Algorithms, 4th Edition.
    Steve Skiena. The Algorithm Design Manual, 2nd Edition.
    Richard E. Neapolitan. Foundations of Algorithms, 5th Edition.
 */

/** THINK like a NODE
 * Think from the perspective of a node instead of looking at the whole tree.
 * Decide how the current node should be proceeded with, then recurse on
 * children and let recursion take care of the rest.
 *
 * When you are a node, the only things you know are:
 * 1. your value
 * 2. how to get to your children
 *
 * TEMPLATE:
 */

function dfsTemplate(node, state) {
  if (node === null) {
    //...
    return;
  }

  let left = dfsTemplate(node.left, state);
  let right = dfsTemplate(node.right, state);

  // ...
  return; //...
}

/** Defining the RECURSIVE FUNCTION
 
  1. Return vale (passing value up from child to parent)
  What do we want to return after visiting a node?
  i.e. if we are looking for a node in the tree, we'd want
  to return that node if found, otherwise return null.
 
  2. Identify STATE(s) (passing value down from parent to child)
  what state do we need to maintain to compute the return value for
  the current node?
  i.e. to know if the current node's value is larger than its parent,
  we have to maintain the parent's value as a state. State becomes
  DFS's function arguments. Use states to pass information from
  parent to children.
 */

const indentPerLevel = "  ";
function treePrettyPrint(root, indentLevel) {
  if (!root) return null;

  const currentIndentLevel = indentLevel + indentPerLevel;
  console.log(currentIndentLevel + root.val);

  treePrettyPrint(root.left, currentIndentLevel);
  treePrettyPrint(root.right, currentIndentLevel);
}

treePrettyPrint(aTree, indentPerLevel);
/*
    a 
      b 
        d 
        e 
      c 
        f 
        g
*/

/** Using RETURN VALUE vs GLOBAL VARIABLE
 *
 * Consider the problem of finding the maximum value in a binary tree
 */

const aTreeMax = new Node(5);
aTreeMax.left = new Node(40);
aTreeMax.left.left = new Node(12);
aTreeMax.left.right = new Node(13);
aTreeMax.right = new Node(49);
aTreeMax.right.left = new Node(110);
aTreeMax.right.right = new Node(138);

// RETURN VALUE aka DIVIDE & CONQUER

function dfsReturnValue(node) {
  if (node === null) return -Infinity;

  let maxLeftValue = dfsReturnValue(node.left);
  console.log(maxLeftValue);
  // -Infinity; 12 - Infinity; 40 - Infinity; 110 - Infinity;
  let maxRightValue = dfsReturnValue(node.right);
  console.log(maxRightValue);
  // -Infinity; -Infinity; 13; -Infinity; -Infinity; 138; 138;

  return Math.max(node.val, maxLeftValue, maxRightValue);
}

/** GLOBAL VARIABLE
 * Traverse the three while keeping a global variable
 * that keeps track of the maximum value we have encountered.
 * After the DFS, return the global variable.
 * The recursive function dfs does not return any value in
 * this case. We "fire-and-forget" the dfs call.
 */
let maxValue = -Infinity;
function dfsGlobalVariable(node) {
  // if (!node) return;
  if (node === null) return;

  // update the globalVariable if current value is larger
  console.log(maxValue);
  // -Infinity; 5; 40; 40; 40; 49; 110;
  if (node.val > maxValue) maxValue = node.val;
  console.log(maxValue);
  // 5; 40; 40; 40; 49; 110; 138;

  // recursive
  dfsGlobalVariable(node.left); // LEFT
  dfsGlobalVariable(node.right); // RIGHT
}

function getMaxVal(root) {
  dfsGlobalVariable(root);
  return maxValue;
}

console.log(dfsReturnValue(aTreeMax));
console.log(getMaxVal(aTreeMax));
