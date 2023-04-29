function threeSumClosest(arr, target) {
  //code here
  let res = arr[0] + arr[1] + arr[arr.length - 1]; // take first 3sum
  arr.sort((a, b) => a - b); // sort the arr

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1; // take two pointer left and right with left = i+1 and right = len-1
    let right = arr.length - 1;
    while (left < right) {
      let curr_sum = arr[left] + arr[right] + arr[i]; // find sum

      if (curr_sum > target) {
        // check if greater than curr_sum then decrease left and right pointer accordingly
        right--;
      } else {
        left++;
      }
      if (Math.abs(curr_sum - target) < Math.abs(res - target)) {
        // check if the difference is closet then update res
        res = curr_sum;
      } else if (Math.abs(curr_sum - target) == Math.abs(res - target)) {
        // if equal then maximum triplet would be result
        res = Math.max(res, curr_sum);
      }
    }
  }
  return res;
}

const arr = [5, 2, 7, 5];
console.log(threeSumClosest(arr, 13));
