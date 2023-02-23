var removeDuplicates = function (nums) {
  if (nums.length === 0) return;
  let count = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[count] !== nums[j]) {
      count++;
      nums[count] = nums[j];
    }
  }
  return count + 1;
};

const arr = [1, 1, 2];

console.log(removeDuplicates(arr)); //94.5%

/*
1. if array empty then return
2. take a temp variable and assign 0
3. check if element is already there or not
4. then assign the element a temp position
*/
