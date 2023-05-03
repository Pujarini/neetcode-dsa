function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([13, 46, 24, 5220, 9]));

/**
 * O(n*n)
 * 1. select the minimum and swap it
 * 2. run the loop from 0 to n-2
 * 3. take inner loop from i to n-1
 * 4. assume every first number of the sequence is the minimum
 * 5. swap the number with minimum if found less than the minimum
 */
