var kElementFrequency = function (nums, k) {
  //0(N)
  //   if (!nums.length) return null;
  //   let map = new Map();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (map.has(nums[i])) {
  //       map.set(nums[i], map.get(nums[i]) + 1);
  //     } else {
  //       map.set(nums[i], 1);
  //     }
  //   }
  //   if (map.has(k)) {
  //     return map.get(k);
  //   } else {
  //     return 0;
  //   }
  //O(logN)iterative
  let first = -1;

  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] == x) {
      first = mid;
      hi = mid - 1;
    } else if (arr[mid] > x) hi = mid - 1;
    else if (arr[mid] < x) lo = mid + 1;
  }

  lo = 0;
  hi = arr.length - 1;

  let last = -1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] == x) {
      last = mid;
      lo = mid + 1;
    } else if (arr[mid] > x) hi = mid - 1;
    else if (arr[mid] < x) lo = mid + 1;
  }

  return first == -1 || last == -1 ? 0 : last - first + 1;
};

console.log(kElementFrequency([1, 1, 2, 2, 2, 2, 3], 2));
