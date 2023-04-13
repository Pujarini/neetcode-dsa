var invertTree = function (root) {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

/**
 * 10m
 * solved using dfs approach
 * 1. Solve using recursion because we want to invert all the children
 * 2. base condition is root is null then retirn null\
 * 3. take a temp variable and store root.left
 * 4. root.left = root.right
 * 5. root.right = temp --> basically we are swapping all the left and rigth nodes
 * 6. call the function for root.left and root.right and rteurn  the root
 */
