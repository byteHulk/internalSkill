/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let isandCount = 0,
    isVisited = {}

  const handleRoundIslands = (i, j) => {
    // if (!(`${i}_${j}` in isVisited)) {
    //   if (grid[i][j] === "1" && !isExpand) isandCount++
    //   isVisited[`${i}_${j}`] = grid[i][j]
    // }

    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid?.[0]?.length ||
      grid[i][j] === "0" ||
      `${i}_${j}` in isVisited
    )
      return

    isVisited[`${i}_${j}`] = grid[i][j]

    // go left
    handleRoundIslands(i, j - 1)

    // go top
    handleRoundIslands(i - 1, j)

    // go right
    handleRoundIslands(i, j + 1)

    // go bottom
    handleRoundIslands(i + 1, j)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid?.[0]?.length; j++) {
      if (grid[i][j] === "1" && !(`${i}_${j}` in isVisited)) isandCount++

      handleRoundIslands(i, j)
    }
  }

  return isandCount
}

// @lc code=end
