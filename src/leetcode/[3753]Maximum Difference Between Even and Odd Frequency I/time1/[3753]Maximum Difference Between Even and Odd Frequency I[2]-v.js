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
  let map = new Map();

  // 奇数
  let oddMax = 0;
  // 偶数
  let evenMin = s.length;

  for (let i of s) {
    map.set(i, (map.get(i) || 0) + 1);
  }

  for (let [_, value] of map) {
    if (value % 2) {
      oddMax = Math.max(oddMax, value);
    } else {
      evenMin = Math.min(evenMin, value);
    }
  }

  return oddMax - evenMin;
};
// @lc code=end
