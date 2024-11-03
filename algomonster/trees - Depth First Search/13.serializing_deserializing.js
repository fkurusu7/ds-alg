/** Serializing and Deserializing Binary Tree
 
  Given a binary tree, write a serialize function that converts the tree 
  into a string and a deserialize function that converts a string back to 
  a binary tree. 
  You may serialize the tree into any string representation you want, as 
  long as it can be deserialized properly.

 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serializeTree(tree, result) {
  if (tree === null) {
    result.push("x");
    return;
  }

  result.push(tree.val);
  serializeTree(tree.left, result);
  serializeTree(tree.right, result);
}

function serializeTreeUtil(tree) {
  const result = [];
  serializeTree(tree, result);
  return result.join(" ");
}

const aTree = new TreeNode(10);
aTree.left = new TreeNode(5);
aTree.left.left = new TreeNode(3);
aTree.left.right = new TreeNode(7);
aTree.right = new TreeNode(15);
aTree.right.left = new TreeNode(13);
aTree.right.right = new TreeNode(17);

console.log(aTree);
const treeSerialized = serializeTreeUtil(aTree);
console.log(treeSerialized);

function deserializeTree(nodes) {
  const val = nodes.next().value;

  if (val === "x") return null;
  const currentNode = new TreeNode(parseInt(val));
  currentNode.left = deserializeTree(nodes);
  currentNode.right = deserializeTree(nodes);
  return currentNode;
}

function deserializeTreeUtil(strTree) {
  console.log(strTree.split(" "));

  console.log(strTree.split(" ")[Symbol.iterator]());
  return deserializeTree(strTree.split(" ")[Symbol.iterator]());
}
console.log(deserializeTreeUtil(treeSerialized));
/*
TreeNode {
  val: 10,
  left: TreeNode {
    val: 5,
    left: TreeNode { val: 3, left: null, right: null },
    right: TreeNode { val: 7, left: null, right: null }
  },
  right: TreeNode {
    val: 15,
    left: TreeNode { val: 13, left: null, right: null },
    right: TreeNode { val: 17, left: null, right: null }
  }
}
*/
