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
  let map = {};

  // 奇数
  let oddMax = 0;
  // 偶数
  let evenMin = s.length;

  for (let i of s) {
    if (i in map) map[i]++;
    else map[i] = 1;
  }

  Object.keys(map).forEach((i) => {
    if (map[i] % 2) {
      oddMax = Math.max(oddMax, map[i]);
    } else {
      evenMin = Math.min(evenMin, map[i]);
    }
  });
  return oddMax - evenMin;
};
// @lc code=end
