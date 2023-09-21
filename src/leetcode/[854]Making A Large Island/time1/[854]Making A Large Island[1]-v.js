/*
 * @lc app=leetcode.cn id=827 lang=javascript
 *
 * [827] Making A Large Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  if (grid.length === 0) return 0

  let maxAreaNumResult = 0

  const getOneIslandMaxAreaNum = (i, j, area, isFirst) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      area[i + "." + j]
    )
      return 0

    if (grid[i][j] == 1 || isFirst) {
      area[i + "." + j] = true
      return (
        1 +
        getOneIslandMaxAreaNum(i - 1, j, area) +
        getOneIslandMaxAreaNum(i + 1, j, area) +
        getOneIslandMaxAreaNum(i, j - 1, area) +
        getOneIslandMaxAreaNum(i, j + 1, area)
      )
    }

    return 0
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 0) {
        let size = getOneIslandMaxAreaNum(i, j, {}, true)
        if (size > maxAreaNumResult) {
          maxAreaNumResult = size
        }
      }
    }
  }

  return maxAreaNumResult ? maxAreaNumResult : grid.length * grid[0].length
}
// @lc code=end
