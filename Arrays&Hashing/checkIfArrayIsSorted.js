function checkArrayIsSortedAndRotated(nums) {
  let count = 0;
  let len = nums.length - 1;
  for (i = 0; i < len; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }
  if (count > 1 || (count === 1 && nums[0] < nums[len])) return false; // condition for rotation
  return true;
}

console.log(checkArrayIsSortedAndRotated([2, 1, 3, 4]));
