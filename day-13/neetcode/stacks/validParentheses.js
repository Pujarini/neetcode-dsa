var isValid = function (s) {
  let stack = [];
  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      let top = stack.pop();
      console.log(top);
      if (
        (top === "(" && char !== ")") ||
        (top === "[" && char !== "]") ||
        (top === "{" && char !== "}")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("(]"));

/**
 * 1. push all the opening  character in stack
 * 2. pop out the characteer one by one and if its doesn't match the closing character return false
 * 3. else check if stack is empty or not after pop
 */
