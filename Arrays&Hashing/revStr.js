/**
 * reverse a string without reversing the special character
 * ab#$cd! ---> dc#$ba
 */

function isAlphabet(x) {
  if ((x >= "A" && x <= "Z") || (x >= "a" && x <= "z")) {
    return true;
  } else {
    return false;
  }
}
function reverseString(str) {
  let str1 = [];
  str1 = str.split("");
  let len = str1.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    if (!isAlphabet(str1[left])) {
      left++;
    } else if (!isAlphabet(str1[right])) {
      right--;
    } else {
      let temp = str1[left];
      str1[left] = str1[right];
      str1[right] = temp;
      left++;
      right--;
    }
  }
  return str1.join("");
}
console.log(reverseString("ab#$cd!"));
