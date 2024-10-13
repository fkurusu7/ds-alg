/** SUBTREE OF ANOTHER TREE
 
 A subtree of a binary tree is a tree that consists of a node in the tree 
 and all of its descendants.
 
 Given two binary trees root and subRoot, determine if subRoot is a subtree of root. 
 */

class NodeTree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const aTree = new NodeTree("a");
aTree.left = new NodeTree("b");
aTree.left.left = new NodeTree("d");
aTree.left.right = new NodeTree("e");
aTree.right = new NodeTree("c");
aTree.right.left = new NodeTree("f");

const subTree = new NodeTree("a");
subTree.left = new NodeTree("b");
subTree.right = new NodeTree("c");

function subtreeOfAnotherTree(tree, subTree) {
  if (!tree && !subTree) return true;
  if (!tree || !subTree) return false;

  let left = subtreeOfAnotherTree(tree.left, subTree.left);
  let right = subtreeOfAnotherTree(tree.right, subTree.right);
  let bothTreeValues = tree.val === subTree.val;
  return left && right && bothTreeValues;
}

console.log(subtreeOfAnotherTree(aTree, subTree));

function isSameTree(tree1, tree2) {
  if (!tree1 && !tree2) return true;

  if (!tree1 || !tree2) return false;

  return (
    tree1.val === tree2.val &&
    isSameTree(tree1.left, tree2.left) &&
    isSameTree(tree1.right, tree2.right)
  );
}
console.log(isSameTree(aTree, subTree));
