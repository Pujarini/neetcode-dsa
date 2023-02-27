var isPalindrome = function (s) {
  //   const origStr = s.replace(/\W/g, "").replace(/_/g, "").toLowerCase();
  //   const reverseStr = origStr.split("").reverse().join("");
  //   if (reverseStr === origStr) {
  //     return true;
  //   }
  //   return false;

  const origStr = s.replace(new RegExp("[^a-z0-9]", "gi"), "").toLowerCase();
  const reverseStr = origStr.split("").reverse().join("");
  return origStr === reverseStr;
};

console.log(isPalindrome("ab_a"));
