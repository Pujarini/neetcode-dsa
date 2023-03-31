var topKFrequent = function (nums, k) {
  let res = [];
  let map = new Map();
  for (i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  let valArr = [...map.entries()];
  let sortedArray = valArr.sort((a, b) => b[1] - a[1]);

  for (i = 0; i < k; i++) {
    res.push(sortedArray[i][0]);
  }

  return res;
};

let nums = [3, 0, 1, 0],
  k = 1;

console.log(topKFrequent(nums, k)); // 98.4% O(nlog n)

/*
1. create a frequency map for the array
2. create a array with the element and frequency
3. sort the array by frequency
4. then output the k elements
 */
