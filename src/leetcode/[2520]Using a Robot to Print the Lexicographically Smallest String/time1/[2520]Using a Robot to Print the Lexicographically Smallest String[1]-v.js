/*
 * @lc app=leetcode.cn id=2434 lang=javascript
 *
 * [2434] Using a Robot to Print the Lexicographically Smallest String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  // 1.set minchar && stack && result
  // 2. if cur <= minchar then stack pop
  // 3. if cur > minchat then loop

  let cnt = new Array(25).fill(0);
  for (let c of s) {
    cnt[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  let stack = [],
    res = [],
    minChar = "a";

  for (let c of s) {
    stack.push(c);
    cnt[c.charCodeAt(0) - "a".charCodeAt(0)]--;
    while (
      minChar !== "z" &&
      cnt[minChar.charCodeAt(0) - "a".charCodeAt(0)] === 0
    ) {
      minChar = String.fromCharCode(minChar.charCodeAt(0) + 1);
    }
    while (stack.length > 0 && stack[stack.length - 1] <= minChar) {
      res.push(stack.pop());
    }
  }

  return res.join("");
};
// @lc code=end
