/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s || s.length % 2) return false;

  let symbolMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];

  for (let i of s) {
    if (i in symbolMap) stack.push(symbolMap[i]);
    else if (i !== stack.pop()) return false;
  }

  return !stack.length;
};
// @lc code=end
