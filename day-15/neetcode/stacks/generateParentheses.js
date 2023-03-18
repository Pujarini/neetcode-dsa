var generateParenthesis = function (n) {
  //2 hours
  let stack = [];
  let result = [];

  const backtrack = (open, close) => {
    if (stack.length === n * 2) {
      console.log("hello");
      result.push(stack.join(""));
      return;
    }
    console.log(open, "open", close, "close");
    if (open < n) {
      console.log("reached open");
      stack.push("(");
      console.log(open, "open", close, "close", stack, "open parenthesis");
      backtrack(open + 1, close);
      console.log(stack, "before open");
      stack.pop();
      console.log("reached after open", stack);
    }
    if (close < open) {
      console.log("reach closed");
      stack.push(")");
      console.log(open, "open", close, "close", stack, "close parenthesis");
      backtrack(open, close + 1);
      console.log(stack, "before close");
      stack.pop();
      console.log("reached after close", stack);
    }
  };
  backtrack(0, 0);
  return result;
};

console.log(generateParenthesis(3));

/**
 * not sure with the working
 */
