var decodeString = function (s) {
  const stack = [];

  for (const char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    console.log(stack);
    let str = "";
    let curr = stack.pop();
    console.log(curr, "curr");
    while (curr !== "[") {
      // if alphabets is there before ]
      str = curr + str;
      console.log(str, "str");
      curr = stack.pop();
    }
    let num = "";
    curr = stack.pop();
    while (!Number.isNaN(Number(curr))) {
      // if integer is there before [
      num = curr + num;
      curr = stack.pop();
    }
    stack.push(curr);
    stack.push(str.repeat(Number(num)));
  }
  console.log(stack.join(""));
};

let s = "3[a2[c]]";
decodeString(s);
/**
 * 1. traverse through string & push until ]
 * 2. do a pop until [ is found append the characters to the str
 * 3. check if there is a digit before [ to find k and add it to num and keep doing pop
 * 4. push the current element to stack
 * 5. do a str.repeat(num)
 * 6. do stack.join
 */
