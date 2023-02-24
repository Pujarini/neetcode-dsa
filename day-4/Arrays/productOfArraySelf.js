var productExceptSelf = function (nums) {
  //brute force 19/22 test cases passed
  //   let output = [];
  //   for (i = 0; i < nums.length; i++) {
  //     let result = 1;
  //     for (j = 0; j < nums.length; j++) {
  //       if (i == j) continue;
  //       if (i !== j && j < nums.length) {
  //         result = Math.abs(result * nums[j]);
  //       }
  //     }
  //     output.push(result);
  //   }
  //   return output;

  // 0(N) solution 99.34%
  let prefix = 1;
  let result = [];
  for (i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    postfix = i == nums.length - 1 ? 1 : postfix * nums[i + 1];
    result[i] *= postfix;
  }
  return result;
};

let nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));
