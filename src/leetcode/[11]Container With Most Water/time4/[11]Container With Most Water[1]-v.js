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
  let max = 0

  for (let i = 0, j = height.length - 1; i < j; ) {
    let minHeight = height[i] < height[j] ? height[i++] : height[j--]
    max = Math.max((j - i + 1) * minHeight, max)
  }

  return max
}
// @lc code=end
