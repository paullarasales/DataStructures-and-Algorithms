var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  console.log("this is the prefix: ", prefix);
  for (let i = 1; i < strs.length; i++) {
    // triming prefix until it matches the start of strs[i];
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // cut the last character
      console.log("this is the inside of the loop: ", prefix);
      console.log("this is the current index: ", strs[i]);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

const words = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(words));
