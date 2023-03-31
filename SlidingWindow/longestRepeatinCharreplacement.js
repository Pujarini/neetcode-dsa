var characterReplacement = function (s, k) {
  let freqMap = {};
  let left = 0;
  let mostFreq = 0;
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    freqMap[s[i]] = freqMap[s[i]] + 1 || 1;
    console.log(freqMap);
    mostFreq = Math.max(freqMap[s[i]], mostFreq);

    while (i - left + 1 - mostFreq > k) {
      freqMap[s[left]]--;
      left++;
      console.log("reached", freqMap);
    }
    maxLen = Math.max(maxLen, i - left + 1);
    console.log(maxLen);
  }
  return maxLen;
};

console.log(characterReplacement("AABABBA", 2));

/**
 * 1. create a freqMap for each element
 * 2. find the most frequent element
 * 3. find the window length using i-left+1
 * 4. check if window length - mostFreq = k then we are ok with condition
 * 5. else delete the left character from the freqMamp and increase the left pointer by 1
 * 6. find the maximum sequence length
 */
