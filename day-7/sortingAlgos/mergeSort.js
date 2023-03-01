var sortArray = function (nums) {
  if (nums.length < 2) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  function merge(left, right) {
    let lLen = left.length;
    let rLen = right.length;
    let l = 0;
    let r = 0;
    let result = [];
    while (l < lLen && r < rLen) {
      if (left[l] <= right[r]) {
        result.push(left[l]);
        l++;
      } else {
        result.push(right[r]);
        r++;
      }
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
  }

  //   console.log(sortArray(left), sortArray(right));
  return merge(sortArray(left), sortArray(right));
};

console.log(sortArray([5, 1, 1, 2, 0, 0]));

/*
solved using merge sort
1. merge sort usign recusrion and divide conquer algorithm
2. we divide the array into two arrays until we get one element
3. so nums.length < 2 is our base condition
4. we merge the arrays in sorted order until we get the final array (recursion) -- check merge function
*/
