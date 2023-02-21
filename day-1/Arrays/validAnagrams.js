var validAnagarms = (s, t) => {
  // O(N)
  if (s.length !== t.length) return false;
  let map = new Map();
  for (el of s) {
    let count = (map.get(el) || 0) + 1;
    map.set(el, count);
  }

  for (el of t) {
    if (!map.has(el)) return false;
    let freq = map.get(el) - 1;
    map.set(el, freq);
  }

  for (const [el, count] of map) {
    let isEmpty = count === 0;
    if (!isEmpty) return false;
  }

  return true;
};

const s = "cat";

const t = "tar";

console.log(validAnagarms(s, t));
