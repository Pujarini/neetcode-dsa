var maxProfit = function (prices) {
  //brute force solution O(n*2)
  //   let maxProfit = 0;
  //   let profit = 0;
  //   for (let i = 0; i < prices.length; i++) {
  //     for (let j = 1; j < prices.length; j++) {
  //       if (i < j) {
  //         profit = prices[j] - prices[i];
  //       }
  //       maxProfit = Math.max(maxProfit, profit);
  //     }
  //   }
  //   return maxProfit;

  //sliding window O(n) 84.21%
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (right < prices.length) {
    let profit = prices[right] - prices[left];
    if (profit < 0) {
      left = right;
    } else {
      maxProfit = Math.max(maxProfit, profit);
    }
    right++;
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

/**
 * 1. low buy high sell max profit
 * 2. traverse through the array
 * 3. if (profit < 0) then move right to left and increase right by 1
 * 4. else find maxProfit and then increase right by 1
 */
