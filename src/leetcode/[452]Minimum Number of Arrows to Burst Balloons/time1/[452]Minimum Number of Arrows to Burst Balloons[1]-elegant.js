/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  //在最右边界最靠左的气球的右边界射出一支箭，将气球射爆(移除) => loop
  if (!points.length) {
    return 0
  }

  let i = 0
  let arrowCount = 1
  points.sort((a, b) => a[1] - b[1])

  for (let j = 1; j < points.length; j++) {
    if (points[i][1] < points[j][0]) {
      i = j
      arrowCount++
    }
  }

  return arrowCount
}
// @lc code=end
