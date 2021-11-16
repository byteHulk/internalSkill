/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0
  const stack = []
  heights = [0].concat(heights).concat([0])
  for (let i = 0; i < heights.length; i++) {
    while (heights[stack[stack.length - 1]] > heights[i]) {
      const j = stack.pop()
      maxArea = Math.max(
        (i - stack[stack.length - 1] - 1) * heights[j],
        maxArea
      )
    }

    stack.push(i)
  }
  return maxArea
}
// @lc code=end
