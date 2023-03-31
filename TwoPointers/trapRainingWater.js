var trap = function (height) {
  //70.90%
  let maxLeft = [];
  let maxRight = [];

  let currentLeft = 0;
  for (let i = 0; i < height.length; i++) {
    maxLeft.push(currentLeft);
    currentLeft = Math.max(height[i], currentLeft);
  }
  let currentRight = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    maxRight.push(currentRight);
    currentRight = Math.max(height[i], currentRight);
  }
  maxRight.reverse();
  let water = 0;
  for (i = 0; i < height.length; i++) {
    let res = Math.min(maxLeft[i], maxRight[i]) - height[i];
    if (res > 0) {
      water += res;
    }
  }
  return water;
};

console.log(trap([4, 2, 0, 3, 2, 5]));

/*
1. create a left array with max height on left
2. create a right array with max height on right
3. water units blocked = Math.min(left[i],right[i]) - a[i];
*/
