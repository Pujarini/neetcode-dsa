function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([13, 46, 24, 5220, 9]));
/**
 * O(n*n)
 * 1. push maximum to the end of the array by adjacent swaps
 * 2. run loop from n-1 to 0
 * 3. run inner loop from 0 to i-1
 * 4. compare arr[j] > arr[j+1] swap
 */
