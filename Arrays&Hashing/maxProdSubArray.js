var maxProduct = function (nums) {
  if (nums.length === 0) return -1;
  let minProd = nums[0];
  let maxProd = nums[0];
  let ans = nums[0];

  let choice1, choice2;
  for (let i = 1; i < nums.length; i++) {
    choice1 = maxProd * nums[i];
    choice2 = minProd * nums[i];
    maxProd = Math.max(nums[i], choice1, choice2);
    minProd = Math.min(nums[i], choice1, choice2);

    ans = Math.max(ans, maxProd);
  }
  return ans;
};

/**
 * maxProd = nums[0], minProd = nums[0], ans = nums[0];
 * 1. every element has 3 choices - element , el * prevMaxProd, el* prevMinProd
 * 2. maxProd = Math.max( el, el* maxProd, el * minProd )
 * 3. minProd = Math.min( el, el* minProd, el * maxProd )
 * 4. ans = Math.max(ans, maxProd )
 */
