var findKthPositive = function (arr, k) {
  // O(n)
  //   let i = 1;
  //   let set = new Set(arr);
  //   while (k > 0) {
  //     if (!set.has(i) && --k == 0) {
  //       // checks for missing positive numbers
  //       return i;
  //     }
  //     i++;
  //   }
  // o (n)
  //   let i = 1;
  //   let idx = 0;
  //   while (k > 0) {
  //     if (idx < arr.length && arr[idx] == i) {
  //       // elements present in array
  //       idx++;
  //     } else if (--k == 0) {
  //       return i;
  //     }
  //     i++;
  //   }
  // 0(log n)
  //   let n = arr.length;
  //   let left = 0;
  //   let right = n - 1;
  //   let missing = compute(arr[n - 1], n);
  //   while (left <= right) {
  //     mid = left + Math.floor((right - left) / 2);
  //     missing = compute(arr[mid], mid + 1);
  //     if (missing >= k) {
  //       right = mid - 1;
  //     } else {
  //       left = mid + 1;
  //     }
  //   }
  //   if (right === -1) return k;
  //   return arr[right] + k - compute(arr[right], right + 1);
  // };
  // function compute(actual, expected) {
  //   return actual - expected;
  // }
  let n = arr.length;
  let l = 0,
    r = arr.length - 1;
  let missing = arr[n - 1] - n;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    missing = arr[mid] - (mid + 1);
    if (missing >= k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  if (r === -1) return k;

  return arr[r] + k - (arr[r] - (r + 1));
};

let arr = [1, 2, 3, 4];
let k = 2;

console.log(findKthPositive(arr, k));

/**
 * 1. Create a set from arr (unique elements
 * 2. take a pointer from one
 * 3. check if i is present in set or not
 * 4. if present then increase i
 * 5. if not present then decrease k until k is 0 increase i until k =0
 *
 *
 * Binary search
 * 1. to find missing numbers at any index arr[index] - index+1
 * 2. take 2 pointers left and right
 * 3. find the mid between ;eft and right
 * 4. find the missing numbers till mid arr[mid] - mid+1
 * 5. if missing >= k right = mid-1 means it lies outside the list else left = mid + 1
 * 6. return arr[right] + k - missing numbers (arr[right] - right+1)
 *
 */
