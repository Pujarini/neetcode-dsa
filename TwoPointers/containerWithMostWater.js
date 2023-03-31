var maxArea = function (height) {
  //brute force not using 2 pointers
  //   let maxArea = 0;
  //   for (let left = 0; left < height.length - 1; left++) {
  //     for (let right = height.length - 1; right >= 0; right--) {
  //       let ht = Math.min(height[left], height[right]);
  //       let width = right - left;
  //       let area = ht * width;
  //       maxArea = Math.max(maxArea, area);
  //     }
  //   }
  //   return maxArea;
  // 2 pointer solution 54.26%
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const [leftHeight, rightHeight] = [height[left], height[right]];

    const area = getArea(height, left, right);
    maxArea = Math.max(maxArea, area);

    if (leftHeight <= rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

const getArea = (height, left, right) => {
  let ht = Math.min(height[left], height[right]);
  let width = right - left;
  return ht * width;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
