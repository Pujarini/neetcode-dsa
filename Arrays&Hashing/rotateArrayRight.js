var rotate = function (nums, k) {
  if (nums.length === 0) return;
  let len = nums.length - 1;
  //   let len = nums.length;
  //   let pos = len - (k % len);
  //   let arr = [...nums];
  //   for (i = 0; i < len; i++) {
  //     if (pos === nums.length) {
  //       pos = 0;
  //     }
  //     nums[i] = arr[pos];
  //     pos++;
  //   }
  k = k % nums.length;
  const reverse = (start, end) => {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };
  reverse(0, len);

  reverse(0, k - 1);
  reverse(k, len);
  console.log(nums);
};

const nums = [1, 2];
const k = 3;

console.log(rotate(nums, k));

/**
 * 1st solution
 * 1. create a point where we can divide the array
 * pos = len - (k%len)
 * check if pos == len then pos=0
 * nums[i] = nums[pos]
 * pos++
 *
 * 2nd solution
 * reverse from 0 to len
 * reverse from k to len
 * reverse from 0 to k-1
 */
