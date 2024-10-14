/** INVERT BINARy TREE
 
  Given a binary tree, invert it and return the new value.
===========> INVERT IN-PLACE. <===========
 
  To INVERT a binary tree, switch the left subtree and the 
  right subtree, and invert them both.
  Inverting an empty tree does nothing.
 */
function invertBinary(tree) {
  if (!tree) return tree;

  let left = invertBinary(tree.left);
  let right = invertBinary(tree.right);

  tree.right = left;
  tree.left = right;

  return tree;
}

class NodeTree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const aTree = new NodeTree(1);
aTree.left = new NodeTree(2);
aTree.right = new NodeTree(3);
aTree.left.left = new NodeTree(4);
aTree.left.right = new NodeTree(5);
aTree.right.left = new NodeTree(6);
aTree.right.right = new NodeTree(7);

console.log(invertBinary(aTree));
/*
NodeTree {
  val: 1,
  left: NodeTree {
    val: 3,
    left: NodeTree { val: 7, left: null, right: null },
    right: NodeTree { val: 6, left: null, right: null }
  },
  right: NodeTree {
    val: 2,
    left: NodeTree { val: 5, left: null, right: null },
    right: NodeTree { val: 4, left: null, right: null }
  }
}
*/
