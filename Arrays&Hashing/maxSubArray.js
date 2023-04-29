var maxSubArray = function (nums) {
  let max_sum = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max_sum = Math.max(max_sum, sum);

    if (sum < 0) {
      sum = 0;
    }
    return sum;
  }
};

/**
 * brute force
 * 1. run a loop from 0 to len -1
 * 2.add the numbers to sum check if it is greater than max_sum
 * 3. if(sum < 0) sum = 0 return sum;
 *
 * divide and conquer 0(n logn)
 */
