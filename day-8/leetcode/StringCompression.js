var compress = function (chars) {
  if (chars.length < 2) return 1;
  let curr = chars[0];
  let count = 0;
  let idx = 0;
  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === curr) {
      count++;
    } else {
      chars[idx] = curr;
      console.log(curr, count);
      if (count > 1) {
        let strCount = count.toString();
        for (let j = 0; j < strCount.length; j++) {
          chars[++idx] = strCount[j];
        }
      }
      idx++;
      count = 1;
      curr = chars[i];
    }
  }
  return idx;
};

const chars = ["a", "a", "b", "b", "c", "c", "c"];

console.log(compress(chars));
