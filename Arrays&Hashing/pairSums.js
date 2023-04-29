function pairSum(arr, sum) {
  let hashmap = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (hashmap[arr[i]]) {
      res.push([hashmap[arr[i]], arr[i]]);
    } else {
      hashmap[sum - arr[i]] = arr[i];
    }
  }
  return res;
}

console.log(pairSum([10, 20, 10, 40, 50, 60, 70, 30], 50));
