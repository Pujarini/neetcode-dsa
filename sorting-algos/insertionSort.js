function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([13, 46, 24, 5220, 9]));
/*
O(n*n)
1. swap until elements are at correct position
2. run loop from 0 to n-1
3. check if j is greater than 0 and a[j-1] > a[j] swap
*/
