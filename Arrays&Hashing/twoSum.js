var twoSum = function (numbers, target) {
  // two pointers
  //   let p1 = 0;
  //   let p2 = numbers.length - 1;
  //   while (numbers[p1] + numbers[p2] !== target) {
  //     if (numbers[p1] + numbers[p2] > target) {
  //       p2--;
  //     } else {
  //       p1++;
  //     }
  //   }
  //   return [p1 + 1, p2 + 1];

  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) return [++start, ++end];
    else sum > target ? end-- : start++;
  }
  return [-1, -1];
};

console.log(twoSum([2, 3, 4], 6));
