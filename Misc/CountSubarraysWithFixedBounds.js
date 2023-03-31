var countSubarrays = function (nums, minK, maxK) {
  let res = 0;
  let startOfWindow = 0;
  let currMinPos = -1;
  let currMaxPos = -1;
  let foundMin = false;
  let foundMax = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === minK) {
      foundMin = true;
      currMinPos = i;
      console.log(currMinPos, "min");
    }
    if (nums[i] === maxK) {
      foundMax = true;
      currMaxPos = i;
      console.log(currMaxPos, "max");
    }
    if (nums[i] < minK || nums[i] > maxK) {
      foundMax = false;
      foundMin = false;
      startOfWindow = i + 1;
      console.log(startOfWindow, "start");
    }
    console.log(foundMin, foundMax, i);
    if (foundMin && foundMax) {
      // console.log(currMinPos, currMaxPos, startOfWindow, foundMin, foundMax);
      res += Math.min(currMaxPos, currMinPos) - startOfWindow + 1;
      // console.log(res, "res");
    }
  }

  // console.log(res);
};

let nums = [1, 3, 5, 2, 7, 5];
let minK = 1;
let maxK = 5;

console.log(countSubarrays(nums, minK, maxK));
