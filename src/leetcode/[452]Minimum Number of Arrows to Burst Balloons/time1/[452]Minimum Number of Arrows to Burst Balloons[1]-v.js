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
  let balloons = [...points]
  let arrowCount = 0
  balloons.sort((a, b) => a[1] - b[1])

  while (balloons.length > 0) {
    //arrow
    let i = balloons[0][1]
    balloons = balloons.filter(
      (balloon) => !(balloon[0] <= i && i <= balloon[1])
    )
    arrowCount++
  }

  return arrowCount
}
// @lc code=end
