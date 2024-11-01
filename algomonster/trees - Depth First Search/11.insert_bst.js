/** Insert Into BST
 
  Given the root node of a valid BST and a value to insert into the tree, 
  return a new root node representing the valid BST with the addition of 
  the new item. If the new item already exists in the binary search tree, 
  do not insert anything.

  You must expand on the original BST by adding a leaf node. Do not change 
  the structure of the original BST. 
*/

class Treenode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const aTree = new Treenode(7);
aTree.left = new Treenode(3);
aTree.left.right = new Treenode(4);
// aTree.left.right.right = new Treenode(5); <== TO INSERT
aTree.right = new Treenode(9);
aTree.right.left = new Treenode(8);
aTree.right.right = new Treenode(10);
// aTree.right.right.right = new Treenode(11); <== TO INSERT

/*
            7
          /    \
        3       9
         \     / \   
          4   8   10
           \
            5  <== TO INSERT
*/
console.log(aTree);

function insertIntoBST(tree, val) {
  if (tree === null) return new Treenode(val);

  if (tree.val > val) {
    tree.left = insertIntoBST(tree.left, val);
  } else if (tree.val < val) {
    tree.right = insertIntoBST(tree.right, val);
  }

  return tree;
}

let newATree = insertIntoBST(aTree, 5);
newATree = insertIntoBST(aTree, 11);
console.log(newATree);

/**
Treenode {
  val: 7,
  left: Treenode {
    val: 3,
    left: null,
    right: Treenode {
      val: 4,
      left: null,
      right: Treenode { val: 5, left: null, right: null }    <== INSERTED
    }
  },
  right: Treenode {
    val: 9,
    left: Treenode { val: 8, left: null, right: null },
    right: Treenode {
      val: 10,
      left: null,
      right: Treenode { val: 11, left: null, right: null }    <== INSERTED
    }
  }
}
 */
