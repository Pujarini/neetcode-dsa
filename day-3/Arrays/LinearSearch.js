function linearSearch(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6];
const k = 6;
console.log(linearSearch(arr, k));
