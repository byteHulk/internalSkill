/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let n = grid.length,
    m = grid[0].length

  const dsf = (i, j) => {
    // 超出网格边界加一条黄色边
    if (i < 0 || j < 0 || i >= n || j >= m) return 1

    // 海洋格子加一条蓝色边
    if (grid[i][j] == 0) return 1

    // 函数因为「当前格子是已遍历的陆地格子」返回，和周长没关系
    if (grid[i][j] != 1) return 0

    // 重置跑过的陆地格子
    grid[i][j] = 2

    return dsf(i - 1, j) + dsf(i + 1, j) + dsf(i, j - 1) + dsf(i, j + 1)
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j]) return dsf(i, j)
    }
  }

  return 0
}
// @lc code=end
