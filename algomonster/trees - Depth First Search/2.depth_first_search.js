/** Depth First Search
 * DFS is a bold search. Go as DEEP as can to look for a value,
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

const fTree = new Node("f");
const eTree = new Node("e");
const dTree = new Node("d");
const cTree = new Node("c", fTree);
const bTree = new Node("b", dTree, eTree);
const aTree = new Node("a", bTree, cTree);

function dfs(root, target) {
  if (!root) return null;

  if (root.val === target) return root;

  // return non-null value from the recursive calls
  const left = dfs(root.left, target);
  if (left !== null) return left;

  // at this point, we know left is null, and right could be null or non-null
  // we return right child's recursive call result directly because
  // - if it's non-null we should return it
  // - if it's null, then both left and right are null, we want to return null
  const right = dfs(root.right, target);
  return right;
}

console.log(dfs(aTree, "b"));
/*
Node {
  val: 'b',
  left: Node { val: 'd', left: null, right: null },
  right: Node { val: 'e', left: null, right: null }
}
*/
console.log(dfs(aTree, "e"));
// Node { val: 'e', left: null, right: null }
console.log(dfs(aTree, "c"));
/*  
Node {
  val: 'c',
  left: Node { val: 'f', left: null, right: null },
  right: null
} 
*/

/**
 * When to use DFS?
 *
 * A. DFS is essentially pre-order three traversal.
 *    1. Traverse and find/create/modify/delete node
 *    2. Traverse with return value (finding max subtree, detect balanced tree)
 *
 * B. Combinatorial problems
 *    1. How many ways are there to arrange something.
 *    2. Fina all possible combinations of...
 *    3. Fina all solutions to a puzzle
 *
 * C. Graph
 *  * Trees are special graphs that have no cycle.
 *    1. Find a path from point A to B
 *    2. Find connected components
 *    3. Detect cycles
 * 
 * 
 * References
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
 *
 * 1. Return vale (passing value up from child to parent)
 * What do we want to return after visiting a node?
 * i.e. if we are looking for a node in the tree, we'd want
 * to return that node if found, otherwise return null.
 *
 * 2. Identify STATE(s) (passing value down from parent to child)
 * what state do we need to maintain to compute the return value for
 * the current node?
 * i.e. to know if the current node's value is larger than its parent,
 * we have to maintain the parent's value as a state. State becomes
 * DFS's function arguments. Use states to pass information from
 * parent to children.
 */

const indentPerLevel = "  ";
function treePrettyPrint(node, indentLevel) {
  if (node === null) return;

  let currentIndentLevel = indentLevel + indentPerLevel;
  console.log(currentIndentLevel + node.val);

  treePrettyPrint(node.left, currentIndentLevel);
  treePrettyPrint(node.right, currentIndentLevel);
}

treePrettyPrint(aTree, indentPerLevel);
/*
    a
      b
        d
        e
      c
        f
*/

/** Using RETURN VALUE vs GLOBAL VARIABLE
 *
 * Consider the problem of finding the maximum value in a binary tree
 */

// RETURN VALUE aka DIVIDE & CONQUER

function dfsReturnValue(node) {
  if (node === null) return -Infinity;

  let leftMaxValue = dfsReturnValue(node.left);
  let rightMaxValue = dfsReturnValue(node.right);

  return Math.max(node.val, leftMaxValue, rightMaxValue);
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
  if (node.val > maxValue) maxValue = node.val;

  // recursive
  dfsGlobalVariable(node.left); // LEFT
  dfsGlobalVariable(node.right); // RIGHT
}

function getMaxVal(root) {
  dfsGlobalVariable(root);
  return maxValue;
}

const fTree6 = new Node(123);
const eTree5 = new Node(1000);
const dTree4 = new Node(134);
const cTree3 = new Node(578, fTree6);
const bTree2 = new Node(1, dTree4, eTree5);
const aTree1 = new Node(5, bTree2, cTree3);

console.log(dfsReturnValue(aTree1));
console.log(getMaxVal(aTree1));
