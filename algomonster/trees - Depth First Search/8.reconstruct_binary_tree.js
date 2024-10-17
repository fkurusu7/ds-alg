/** Reconstruct Binary Tree from Preorder and Inorder Traversal
 
  Given two arrays representing the preorder and inorder traversals 
  of the same binary tree consisting of unique values, construct 
  the original tree.

  In-order Traversal.
    In-order traversal visits the left branch first, 
    then the current node, and finally the right branch. 

  Pre-order Traversal
    Pre-order traversal visits the current node first, 
    then the left subtree, and finally the right subtree.

  Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7].
  Output: The binary tree structure:
        3
       / \
      9  20
        /  \
       15  7

  To solve this problem, we need to use the unique properties of 
  preorder and inorder traversals.
  1. Preorder. the first element is always the root of the tree.
  2. Inorder. elements to the left of the root are in the left subtree,
    and elements to the right are in the right subtree.

  Using these properties:
  1. Identify the root from the preorder array.
  2. Find the root's position in the inorder array to determine
  the sizes of left and right subtrees.
  3. Recursively construct left and right subtrees using the 
  corresponding portions of both arrays.

  STEPS:
  The elements in the tree are unique, so we can construct a mapping from 
  the value to the index in the inorder array.

  In preorder array, the first element represents the root of the binary 
  tree. Using this value, its index is lcoated in the inorder array. The
  elements to the left of this index in the inorder array represent the 
  left subtree, same for the right.

  The same steps above are then repeated for the left and right subtrees
  respectively (recursively)

  Complexity Analysis:
  Time Complexity: O(n) because we visit each node exactly once and building 
    the value-to-index map is also O(n).
  Space Complexity: O(n) for the value-to-index map and recursive call stack.
 */

class NodeTree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTreeRecursive(preorder, indexMap, preStart, inStart, size) {
  if (size === 0) return null;

  const rootValue = preorder[preStart];
  const inorderIndex = indexMap.get(rootValue);
  const leftSize = inorderIndex - inStart;
  console.log(rootValue, inorderIndex, leftSize, preStart, inStart, size);
  /*
  Array(6) [ 3, 1, 1, 0, 0, 5 ] 
  Array(6) [ 9, 0, 0, 1, 0, 1 ] 
  Array(6) [ 20, 3, 1, 2, 2, 3 ] 
  Array(6) [ 15, 2, 0, 3, 2, 1 ] 
  Array(6) [ 7, 4, 0, 4, 4, 1 ]
  */
  const left = buildTreeRecursive(
    preorder,
    indexMap,
    preStart + 1,
    inStart,
    leftSize
  );
  const right = buildTreeRecursive(
    preorder,
    indexMap,
    preStart + 1 + leftSize,
    inorderIndex + 1,
    size - 1 - leftSize
  );
  return new NodeTree(rootValue, left, right);
}

function constructBinaryTree(preorder, inorder) {
  // TODO: STUDY AGAIN the INTUITION and EXPLANATION

  const indexMap = new Map();
  inorder.forEach((value, index) => {
    indexMap.set(value, index);
  });
  console.log(indexMap);

  return buildTreeRecursive(preorder, indexMap, 0, 0, preorder.length);
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
console.log(constructBinaryTree(preorder, inorder));

/* 
NodeTree {
  val: 3,
  left: NodeTree { val: 9, left: null, right: null },
  right: NodeTree {
    val: 20,
    left: NodeTree { val: 15, left: null, right: null },
    right: NodeTree { val: 7, left: null, right: null }
  }
} */
