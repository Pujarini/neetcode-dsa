var strStr = function (haystack, needle) {
  // 69.5%
  if (needle === "" || needle === haystack) return 0;
  let left = 0;
  let right = needle.length;
  while (left < haystack.length) {
    let search = haystack.slice(left, right);
    if (search === needle) {
      return left;
    } else {
      left++;
      right++;
    }
  }
  return -1;
};

console.log(strStr("leetcode", "leeto"));

/*
1. check needle is empty or equal to haystack string -- 0
2. take two pointers left and right = needle.length
3. run until length of haystack
4. find the word from 0 to needle.length check if it is equal to needle
5. if equal return left
6. else increase left by 1 and right by 1
*/
