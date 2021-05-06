/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length
  let i = 0,
    j = 0
  let max = 0

  while (i < len) {
    while (j < len) {
      if (j === i) {
        j++
        continue
      }
      let h = Math.min(height[i], height[j])
      let w = Math.abs(j - i)
      max = Math.max(max, h * w)
      j++
    }
    j = 0
    i++
  }
  return max
}
// @lc code=end
