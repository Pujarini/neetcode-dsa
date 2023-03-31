var backspaceCompare = function (s, t) {
  // 11 min 96% brute force solved whole question in 96.45% O(n) time and O(n) space
  let stack1 = [];
  let stack2 = [];
  let ans1 = traverseString(stack1, s);
  let ans2 = traverseString(stack2, t);

  if (ans1.length === ans2.length && ans1 === ans2) return true;
  return false;
};

let traverseString = (stack, str) => {
  for (let i = 0; i < str.length; i++) {
    if (s[i] !== "#") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join("").replace(",", "");
};

let s = "a#c";
let t = "b";

console.log(backspaceCompare(s, t));
/**
 * 1. traverse through the string
 * 2. create stack where element will be pushed until #
 * 3. once # is found we do stack.pop()
 * 4. then we compare the stack from two strings and check the word ids equal or not
 */
