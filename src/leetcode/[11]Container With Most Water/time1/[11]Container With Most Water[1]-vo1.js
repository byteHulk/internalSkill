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

  for(let i = 0;i < height.length;i++){
    for(let j = i + 1;j < height.length;j++){
      let h = Math.min(height[i],height[j])
      let w = j - i
      max = Math.max(max,h*w)
    }
  }
  return max
}
// @lc code=end
