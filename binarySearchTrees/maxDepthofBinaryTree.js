var maxDepth = function (root) {
  // dfs recursive
  //   if (!root) return 0;
  //   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

  //bfs iterative

  if (!root) return 0;
  return bfs([[root, 0]]);
};

function bfs(queue, height = 0) {
  const [root, depth] = queue.shift();

  height = Math.max(height, depth + 1);

  if (root.left) queue.push([root.left, depth + 1]);
  if (root.right) queue.push([root.right, depth + 1]);

  return height;
}

/**
 * recursive dfs
 * 1. if no root then depth 0
 * 2. if there is then return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
 *
 * iterative bfs
 * 1. if no root then depth 0
 * 2. create a queue by pushing [root, 0] 0--> depth and pass it as paramter to bfs function
 * 3. pull the first element with value and depth
 * 4, check if height > depth assign height = depth if it is
 * 5. if root.left is there then push it with root.level and increase depth and same for root.right
 * 6. return height
 */
