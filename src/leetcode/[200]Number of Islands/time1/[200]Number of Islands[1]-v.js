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
  //1.foreach  2.if ele equal 1  3.dfs set round ele 0 4.return dfs
  const dfs = (grid, r, c) => {
    const nr = grid.length
    const nc = grid[0].length

    if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == "0") {
      return
    }
    // 将当前点置为0
    grid[r][c] = "0"
    // 左
    dfs(grid, r - 1, c)
    // 右
    dfs(grid, r + 1, c)
    // 下
    dfs(grid, r, c - 1)
    // 上
    dfs(grid, r, c + 1)
  }
  if (grid == null || grid.length == 0) {
    return 0
  }
  // 行
  const nr = grid.length
  // 列
  const nc = grid[0].length
  let num_islands = 0
  // 对每个点遍历
  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      // 如果是1，左dfs遍历
      if (grid[r][c] == "1") {
        num_islands++
        // r, c为当前坐标
        dfs(grid, r, c)
      }
    }
  }

  return num_islands
}

// @lc code=end
