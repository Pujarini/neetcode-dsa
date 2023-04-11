var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (root === null) return true;
  if (root.val <= min || root.val >= max) return false;

  return (
    isValidBST(root.right, root.val, max) &&
    isValidBST(root.left, min, root.val)
  );
};

/**
 * 91% 1h 25m
 * 1. If root === null return true
 * 2. if root.val <= min || root.val >= max return false;
 * 3.For left side of tree the node value should be within - infinity to root
 * 4. For right side of tree the node value should be within root and infinity
 * 5. we put this on recursion to go and check for every node
 */
