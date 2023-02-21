var containsDuplicate = function (nums) {
  //brute force O(N)
  /**for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;*/
  // using sets O(N)
  //   for (i = 0; i < nums.length; i++) {
  //     let numsSet = new Set();
  //     for (num of nums) {
  //       console.log(num);
  //       if (numsSet.has(num)) return true;
  //       numsSet.add(num);
  //     }
  //   }
  //   return false;
  //
  //Quick Sort
  for (i = 0; i < nums.length - 1; i++) {
    let next = i + 1;
    if (nums[i] === nums[next]) return true;
  }
  return false;
};

let hasDuplicate = (nums) => {
  nums.sort((a, b) => a - b);
  console.log(nums);
  return containsDuplicate(nums);
};

let arr1 = [1, 2, 3, 1];

console.log(hasDuplicate(arr1));

let arr2 = [1, 2, 3, 4];

console.log(hasDuplicate(arr2));

let arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(hasDuplicate(arr3));
