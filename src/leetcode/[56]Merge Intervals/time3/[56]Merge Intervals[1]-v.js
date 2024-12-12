/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let [start, end] of intervals) {
    if (start <= result[result.length - 1][1]) {
      const [startPrev, endPrev] = result.pop();
      result.push([startPrev, Math.max(end, endPrev)]);
    } else result.push([start, end]);
  }

  return result
};
// @lc code=end
