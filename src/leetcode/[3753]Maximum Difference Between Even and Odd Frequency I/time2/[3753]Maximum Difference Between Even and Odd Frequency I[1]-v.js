/*
 * @lc app=leetcode.cn id=3442 lang=javascript
 *
 * [3442] Maximum Difference Between Even and Odd Frequency I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  const map = {};

  for (let i of s) map[i] = (map[i] || 0) + 1;

  let evenMax = 0,
    oddMin = s.length;

  for (let key in map) {
    if (map[key] % 2) {
      evenMax = Math.max(evenMax, map[key]);
    } else {
      oddMin = Math.min(oddMin, map[key]);
    }
  }

  return evenMax - oddMin;
};
// @lc code=end
