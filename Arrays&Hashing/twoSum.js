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
  // let start = 0;
  // let end = numbers.length - 1;
  // while (start < end) {
  //   let sum = numbers[start] + numbers[end];
  //   if (sum === target) return [++start, ++end];
  //   else sum > target ? end-- : start++;
  // }
  // return [-1, -1];
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    let sumIndex = map.get(complement);
    if (map.has(complement)) return [sumIndex, i];
    map.set(numbers[i], i);
  }
  console.log(map);
  return [-1, -1];
};

console.log(twoSum([3, 3], 6));

/**
 * brute force
 * 1. take 2 pointers p1 and p2 assign p1= 0 and p2 = arr.length -1
 * 2. check if arr[p1] + arr[p2] ! == target loop
 * 3. check if arr[p1] + arr[p2] > target p2-- else p1++ return [p1+1, p2+1]
 *
 * hashmap
 * 1. create a hashmap
 * 2. loop through the arr
 * 3. find out the complement = target - nums[i]; get the sumIndex = map.get(complement)
 * 4. check if the complement is in map then return [sumIndex, i]
 * 5. set the map [nums[i],i] else return [-1,-1]
 */
