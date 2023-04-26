var maxPathSum = function (root) {
  let maxValue = [-Infinity];

  function pathSum(node) {
    if (!node) return 0;
    let left = Math.max(0, pathSum(node.left));
    let right = Math.max(0, pathSum(node.right));
    maxValue[0] = Math.max(maxValue[0], left + right + node.val);
    return node.val + Math.max(left, right); // this tells us which path to take left or right for a node
  }
  pathSum(root);
  return maxValue[0];
};
