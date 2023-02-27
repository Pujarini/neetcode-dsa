var longestConsecutive = function (nums) {
  // not working for all test cases
  //   if (!nums.length) return 0;
  //   let set = new Set();
  //   let count = 1;
  //   for (i = 0; i < nums.length; i++) {
  //     if (!set.has(nums[i])) {
  //       set.add(nums[i]);
  //     }
  //   }
  //   const array = Array.from(set);
  //   const sorted = array.sort((a, b) => a - b);
  //   for (i = 0; i < sorted.length; i++) {
  //     console.log(sorted[i + 1], sorted[i], count);
  //     if (sorted[i + 1] - sorted[i] === 1) {
  //       count += 1;
  //     } else {
  //       if (i < sorted.length - 1) {
  //         count = 1;
  //         console.log("hello");
  //       }
  //     }
  //   }
  //   return count;
  //brute 0 (n2)
  //   let maxScore = 0;
  //   for (i = 0; i < nums.length; i++) {
  //     let score = 1;
  //     let curr = nums[i];
  //     console.log(curr, curr + 1, isStreak(nums, curr + 1));
  //     while (isStreak(nums, curr + 1)) {
  //       curr++;
  //       score++;
  //     }
  //     maxScore = Math.max(maxScore, score);
  //   }
  //   return maxScore;
  // 0(N) using hashSet didn't work for large set of i/p
  //   let maxScore = 0;
  //   const set = new Set(nums);
  //   for (num of [...set]) {
  //     let [curr, score] = [num, 1];
  //     const isEqual = () => set.has(curr + 1);
  //     while (isEqual()) {
  //       curr++;
  //       score++;
  //     }
  //     maxScore = Math.max(maxScore, score);
  //   }
  //   return maxScore;
  // const isStreak = (nums, curr) => {
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === curr) return true;
  //   }
  //   return false;
  // };
  // optimised for my solution 99% solution
  if (!nums.length) return 0;
  let maxScore = 0;
  const set = new Set(nums);
  for (const num of set) {
    if (set.has(num - 1)) continue;

    let curr = num;
    let score = 1;
    while (set.has(curr + 1)) {
      curr++;
      score++;
    }
    maxScore = Math.max(score, maxScore);
  }
  return maxScore;
};

const nums = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(nums));
