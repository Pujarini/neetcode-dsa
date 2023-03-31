function largestElement(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  return max;
}

const arr = [5, 6, 351, 1000];
console.log(largestElement(arr));
