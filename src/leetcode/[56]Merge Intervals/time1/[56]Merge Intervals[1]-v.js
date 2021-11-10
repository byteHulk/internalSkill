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
  if (!intervals?.length) return intervals

  intervals.sort((a, b) => a[0] - b[0])
  let prev = intervals[0]
  let res = [prev]

  for (let [start, end] of intervals) {
    if (start <= res[res.length - 1][1]) {
      const [startPrev, endPrev] = res.pop()
      res.push([startPrev, Math.max(end, endPrev)])
    } else res.push([start, end])
  }
  return res
}
// @lc code=end
