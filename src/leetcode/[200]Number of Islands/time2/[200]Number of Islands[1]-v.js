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
  const n = grid.length,
    m = grid[0].length
  let result = 0

  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] == 0) return 0

    grid[i][j] = 0

    return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + +dfs(i, j + 1)
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        result++
        dfs(i, j)
      }
    }
  }

  return result
}
// @lc code=end
