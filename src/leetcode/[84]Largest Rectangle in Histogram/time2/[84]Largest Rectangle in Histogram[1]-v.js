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
  let maxArea = 0,
    stack = [],
    mockHeights = [0, ...(heights || []), 0]

  for (let i = 0; i < mockHeights.length; i++) {
    while (mockHeights[stack[stack.length - 1]] > mockHeights[i]) {
      let j = stack.pop()

      maxArea = Math.max(
        (i - stack[stack.length - 1] - 1) * mockHeights[j],
        maxArea
      )
    }

    stack.push(i)
  }

  return maxArea
}
// @lc code=end
