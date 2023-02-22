// 30 mins

var twoSum = function (nums, target) {
  //brute force
  //   if (arr.length > 1) {
  //     for (i = 0; i < nums.length - 1; i++) {
  //       for (j = i + 1; j < nums.length; j++) {
  //         if (target - nums[j] === nums[i]) return [i, j];
  //       }
  //     }
  //     return [-1, -1];
  //   }
  //Hashmap
  let map = new Map();
  for (i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    let sumIndex = map.get(complement);
    if (map.has(complement)) return [sumIndex, i];
    map.set(nums[i], i);
  }

  return [-1, -1];
};

/*
test cases
1. target is not found
2. Array has one element only
*/

const arr = [1, 2, 3, 4];
const target = 0;

console.log(twoSum(arr, target));
