class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      if (value === current.value) return undefined;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  find(value) {
    let curr = this.root;
    let found = false;
    if (this.root === null) {
      return false;
    } else {
      while (!found && curr) {
        if (value === curr.value) {
          found = true;
        } else if (value > curr.value) {
          curr = curr.right;
        } else if (value < curr.value) {
          curr = curr.left;
        }
      }
      if (!found) return false;
      return curr;
    }
  }
}

let tree = new BST();
tree.insert(50);
tree.insert(20);
tree.insert(40);
tree.insert(30);
tree.insert(25);
