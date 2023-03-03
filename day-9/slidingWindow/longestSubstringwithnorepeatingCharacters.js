var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let l = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[i]);
    console.log(set, s[i], l);
    max = Math.max(max, set.size);
  }
  return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));

/**
 * 1. create a set with the elements
 * 2. if you encounter same element then remove the first element from set
 * 3. add until there are no repeated elements and then find the maxSize of the set
 */
