var evalRPN = function (tokens) {
  let stack = [];
  for (let token of tokens) {
    if (token === "+") {
      let ans = stack.pop() + stack.pop();
      stack.push(ans);
    } else if (token === "-") {
      let [a, b] = [stack.pop(), stack.pop()];
      stack.push(b - a);
    } else if (token === "*") {
      let ans = stack.pop() * stack.pop();
      stack.push(ans);
    } else if (token === "/") {
      const [a, b] = [stack.pop(), stack.pop()];
      stack.push(Math.trunc(b / a));
    } else {
      stack.push(Number(token));
      console.log(stack);
    }
  }
  return stack.pop();
};

console.log(evalRPN(["4", "3", "-"]));

/**
 * 37 mins
 * 1. push the elements to stack until you the operator
 * 2. operator --> pop two characters and apply the operator found push the result to stack
 * 3 return stack.pop()
 */
