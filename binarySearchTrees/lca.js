var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left === null) return right;
  else if (right === null) return left;
  return root;
};
/**
 * 1. check if root is null or p or q equal to root then return root
 * 2. now traverse the left subtree and right subtree
 * 3. check if left is null return right and vice versa else return the root
 */
