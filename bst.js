class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left == left || null;
    this.right == right || null;
  }
}
class Tree {
  constructor(root) {
    this.root = root;
  }
  addNode(node) {
    if (this.root === null) {
      this.root === node;
    }
  }
}

const node = new Node(21);
const tree = new Tree(node);

console.log(tree);
