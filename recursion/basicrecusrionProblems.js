// power of a number

function powerOfNumber(base, power) {
  if (power === 0) return 1;

  return base * powerOfNumber(base, power - 1);
}

// console.log(powerOfNumber(2, 3));

// find factorial of a number

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(5));

// find product Of array

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3]));

function fibonacci(num) {
  if (num <= 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));
