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
  bfs() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      data.push(node.value);
    }
    return data;
  }
}

let tree = new BST();
tree.insert(50);
tree.insert(20);
tree.insert(40);
tree.insert(30);
tree.insert(25);

/**
 * BFS traversal breadth-first search
 * 1. take a queue and a variable to store the visited node
 * 2. push the root node to queue
 * 3. check if the queue is empty if it is not then pull the node from queue from begining
 * and push to the visited variable
 * 4. check if the pulled node has left or right if it is there then push it to the queue
 * 5. return visited node
 */
