var moveZeroes = function (nums) {
  //1st solution
  //   if (nums.length === 0) return;
  //   let pos = 0;
  //   for (i = 0; i < nums.length; i++) {
  //     if (nums[i] !== 0) {
  //       console.log(i);
  //       nums[pos] = nums[i];
  //       pos++;
  //     }
  //   }
  //   for (i = pos; i < nums.length; i++) {
  //     nums[i] = 0;
  //   }
  //   return nums;

  //2 pointer solution 43.4%
  let low = 0;
  let high = low + 1;
  while (high <= nums.length - 1) {
    if (nums[low] !== 0) {
      low++;
      high++;
    } else {
      if (nums[high] !== 0) {
        [nums[high], nums[low]] = [nums[low], nums[high]];
        low++;
      }
      high++;
    }
  }
  return nums;
};

const arr = [0, 1, 0, 3, 12];
console.log(moveZeroes(arr));

/**
 * 1st solution
 * 1. count the number of non-zeroes and replace the elements until pos
 * 2. from pos to len replace it with zero
 * 82.69%
 */
