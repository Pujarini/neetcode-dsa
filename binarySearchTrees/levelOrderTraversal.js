var levelOrder = function (root) {
  if (!root) return [];

  let output = [];
  let queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let len = queue.length;
    let level = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    output.push(level);
  }
  return output;
};

/**
 * 1. maintain a queue and a level array
 * 2. push root to queue
 * 3. shift the root from queue
 * 4. push the element to level array
 * 5. check if the shifted element from queue has left or right and then repeat the process until queue is empty
 * 6. push the level array to the output queue
 * 7. return the ouput queue
 */
