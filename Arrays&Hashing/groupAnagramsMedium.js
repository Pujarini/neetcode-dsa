var groupAnagrams = function (strs) {
  // 69.29%
  let map = new Map();
  for (const word of strs) {
    let group = word
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    map.get(group) ? map.get(group).push(word) : map.set(group, [word]);
  }
b
  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/**
 * sort the word and create a group
 * word with similar push into array
 * word with no group create a new array with group and word array
 */
