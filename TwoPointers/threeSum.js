var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (val > 0) break;
    if (i > 0 && val === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = val + nums[left] + nums[right];
      if (sum === 0) {
        res.push([val, nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
