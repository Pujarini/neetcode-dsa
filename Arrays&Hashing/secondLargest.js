function secondLargest(arr) {
  let len = arr.length;
  if (len < 2) return -1;
  let max = Number.MIN_VALUE;
  let smax = Number.MIN_VALUE;
  for (i = 0; i < len; i++) {
    if (arr[i] > max) {
      smax = max;
      max = arr[i];
      console.log(max, "max", smax, "smax");
    } else if (arr[i] > smax && arr[i] !== max) {
      smax = arr[i];
    }
  }
  if (smax === Number.MIN_VALUE) {
    return -1;
  } else {
    return smax;
  }
}

console.log("================================");

console.log(secondLargest([1, 2, 4, 6, 9]));

// test case don't pass for large array size 52/270
