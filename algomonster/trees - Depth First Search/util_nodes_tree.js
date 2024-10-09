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
export const aTree = new Node("a", bTree, cTree);

export default Node;
