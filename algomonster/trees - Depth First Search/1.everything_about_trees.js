/** DFS - Depth First Search
 *
 */

/***************** PRE Order Traversal */
/** Pre-order traversal visits:
 * the current node first,
 * then the left subtree, and
 * finally the right subtree.
 */
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function preOrderTraversal(root) {
  if (root !== null) {
    // 'a' ==> "b"
    //         ==> "d"
    //         ==> "e"
    //     ==> "c"
    //         ==> "f"
    console.log(root.val);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}
const fTree = new Node("f");
const eTree = new Node("e");
const dTree = new Node("d");
const cTree = new Node("c", fTree);
const bTree = new Node("b", dTree, eTree);
const aTree = new Node("a", bTree, cTree);

preOrderTraversal(aTree);

/***************** POST Order Traversal */
/** Post-order traversal visits:
 * the left subtree first,
 * then the right subtree, and
 * finally the current node.
 */

function postOrderTraversal(root) {
  if (root !== null) {
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.val);
    /*
        'd' 
        'e' 
      'b' 
        'f' 
      'c' 
    'a'
     */
  }
}

postOrderTraversal(aTree);
