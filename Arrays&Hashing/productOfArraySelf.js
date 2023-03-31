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

/**
 * 1st solution
 * 1. run a loop from 0 to len
 * 2. run a second loop from 0 to len
 * 3. check if i !== j and j< nums.length then return the multiplied product
 * 4. push it to the output array
 * 5. return the result
 */

/**
 * 2nd solution
 * 1. Find the array with prefix multiplied soltuion
 * 2. find the array with postfix muliplied solution
 * 3. result
 */
