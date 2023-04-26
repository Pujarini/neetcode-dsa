var isSameTree = function (p, q) {
  if (!(p || q)) return true; // check for leaf nodes (base case)
  if (!(p && q)) return false; // check if balanced
  if (!(p.val === q.val)) return false; // check if values are equal or not

  // do a recursion until last node on left and right

  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);

  return left && right;
};

// preorder traversal using dfs
