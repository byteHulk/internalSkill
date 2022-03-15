/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0
  let [long, wide] = [grid.length, grid?.[0].length || 0]
  const checkArea = (i, j) => {
    if (i < 0 || j < 0 || i >= long || j >= wide || !grid[i][j]) return 0
    grid[i][j] = 0
    return (
      1 +
      checkArea(i - 1, j) +
      checkArea(i, j - 1) +
      checkArea(i + 1, j) +
      checkArea(i, j + 1)
    )
  }

  for (let i = 0; i < long; i++) {
    for (let j = 0; j < wide; j++) {
      if (grid[i][j]) {
        const area = checkArea(i, j)
        maxArea = Math.max(maxArea, area)
      }
    }
  }

  return maxArea
}
// @lc code=end
